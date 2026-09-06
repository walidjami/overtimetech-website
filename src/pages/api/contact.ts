import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import { contactNotificationEmail } from "../../emails/contactNotification";
import { contactConfirmationEmail } from "../../emails/contactConfirmation";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  try {
    const {
      first_name,
      last_name,
      phone,
      email,
      service,
      details,
    } = req.body;

    // Validate required fields
    if (!first_name || !last_name || !email || !service || !phone) {
      return res.status(400).json({
        message: "Please fill out all required fields.",
      });
    }

    // ---------------------------------------------------------
    // 1. SAVE CONTACT TO DATABASE
    // ---------------------------------------------------------

    const contact = await prisma.contact.create({
      data: {
        first_name,
        last_name,
        phone,
        email,
        service,
        details,
      },
    });

    // ---------------------------------------------------------
    // 2. SEND INTERNAL NOTIFICATION
    // ---------------------------------------------------------

    try {
      await resend.emails.send({
        from: "OverTime Tech <notifications@overtimetech.pro>",
        to: [process.env.CONTACT_NOTIFICATION_EMAIL!],
        replyTo: email,
        subject: `New Contact Form Submission — ${first_name} ${last_name}`,
        html: contactNotificationEmail({
          first_name,
          last_name,
          email,
          phone,
          service,
          details,
        }),
      });
    } catch (emailError) {
      console.error(
        "Internal contact notification failed:",
        emailError
      );
    }

    // ---------------------------------------------------------
    // 3. SEND CUSTOMER CONFIRMATION
    // ---------------------------------------------------------

    try {
      await resend.emails.send({
        from: "OverTime Tech <notifications@overtimetech.pro>",
        to: [email],
        replyTo: "contact@overtimetech.pro",
        subject: "We've received your message — OverTime Tech",
        html: contactConfirmationEmail({
          first_name,
          service,
        }),
      });
    } catch (emailError) {
      console.error(
        "Customer confirmation email failed:",
        emailError
      );
    }

    // ---------------------------------------------------------
    // 4. RETURN SUCCESS
    // ---------------------------------------------------------

    return res.status(200).json({
      message: "Submission successful",
      contact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}