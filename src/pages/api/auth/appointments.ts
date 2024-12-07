import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, doctorId, date } = req.body;

    const appointment = await prisma.appointment.create({
      data: {
        userId,
        doctorId,
        date,
      },
    });

    res.status(200).json(appointment);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
