import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// Prevent multiple Prisma instances in Vercel's hot reload env
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

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

    return res.status(200).json({
      message: "Submission successful",
      contact,
    });
  } catch (error: any) {
    console.error("Contact submission error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
