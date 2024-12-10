import { NextApiRequest, NextApiResponse } from 'next';

const appointments = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, doctorId, date } = req.body;

    const newAppointment = {
      id: appointments.length + 1,
      userId,
      doctorId,
      date,
    };

    appointments.push(newAppointment);

    return res.status(201).json(newAppointment);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
