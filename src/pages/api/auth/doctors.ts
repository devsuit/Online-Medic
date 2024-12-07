import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { specialty, city } = req.query;
    const doctors = await prisma.doctor.findMany({
      where: {
        AND: [
          { specialty: { contains: specialty || '' } },
          { city: { contains: city || '' } },
        ],
      },
    });
    res.status(200).json(doctors);
  }
}
