import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { first_name, last_name, email, service, details } = req.body;

    if (!first_name || !last_name || !email) {
      return res.status(400).json({ message: 'Please fill out all required fields.' });
    }

    const newEntry = await prisma.contact.create({
      data: {
        first_name,
        last_name,
        email,
        service,
        details,
      },
    });

    return res.status(200).json({ message: 'Submission successful', contact: newEntry });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
