import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string = ""): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { first_name, last_name, phone, email, service, details } = req.body;

    if (!first_name || !last_name || !email || !service || !phone) {
      return res.status(400).json({ message: "Please fill out all required fields." });
    }

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

    // Escape user-provided values before putting them into HTML.
    const firstName = escapeHtml(first_name);
    const lastName = escapeHtml(last_name);
    const customerEmail = escapeHtml(email);
    const customerPhone = escapeHtml(phone);
    const customerService = escapeHtml(service);
    const customerDetails = escapeHtml(details || "");

    // Send the notification email.
    // If email fails, we DON'T fail the contact submission because
    // the submission has already been safely saved to the database.
    try {
      await resend.emails.send({
        from: "OverTime Tech <notifications@overtimetech.pro>",
        to: [process.env.CONTACT_NOTIFICATION_EMAIL!],
        replyTo: email,
        subject: `New Contact Form Submission — ${first_name} ${last_name}`,
        html: `
          <div style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #333333;
          ">
            <h2 style="margin-bottom: 24px;">
              New Contact Form Submission
            </h2>

            <table style="
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 24px;
            ">
              <tr>
                <td style="
                  padding: 8px 0;
                  font-weight: bold;
                  width: 120px;
                ">
                  Name:
                </td>
                <td style="padding: 8px 0;">
                  ${firstName} ${lastName}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 8px 0;
                  font-weight: bold;
                ">
                  Email:
                </td>
                <td style="padding: 8px 0;">
                  ${customerEmail}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 8px 0;
                  font-weight: bold;
                ">
                  Phone:
                </td>
                <td style="padding: 8px 0;">
                  ${customerPhone}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 8px 0;
                  font-weight: bold;
                ">
                  Service:
                </td>
                <td style="padding: 8px 0;">
                  ${customerService}
                </td>
              </tr>
            </table>

            <h3 style="margin-bottom: 8px;">
              Customer Message
            </h3>

            <div style="
              background: #f5f5f5;
              border-left: 4px solid #333333;
              padding: 16px;
              margin-bottom: 24px;
              white-space: pre-wrap;
            ">
              ${customerDetails || "No additional details provided."}
            </div>

            <hr style="
              border: none;
              border-top: 1px solid #dddddd;
              margin: 24px 0;
            ">

            <p style="
              font-size: 13px;
              color: #777777;
            ">
              This contact submission has also been saved to the
              OverTime Tech database.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // The contact was successfully saved, so don't tell the customer
      // their submission failed just because the notification email failed.
      console.error(
        "Contact notification email failed:",
        emailError
      );
    }

    
    return res.status(200).json({
      message: "Submission successful",
      contact,
    });
  } catch (error: any) {
    console.error("Contact submission error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
