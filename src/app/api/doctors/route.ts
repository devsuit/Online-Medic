import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const doctors = await prisma.doctor.findMany();
  return new Response(JSON.stringify(doctors), {
    headers: { 'Content-Type': 'application/json' },
  });
}
