import { NextApiRequest, NextApiResponse } from 'next';

const doctors = [
  { id: 1, name: 'Dr. Smith', specialty: 'Cardiology', city: 'New York' },
  { id: 2, name: 'Dr. Jane', specialty: 'Dermatology', city: 'Los Angeles' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { specialty, city } = req.query;

    const filteredDoctors = doctors.filter((doctor) => {
      return (
        (!specialty || doctor.specialty === specialty) &&
        (!city || doctor.city === city)
      );
    });

    return res.status(200).json(filteredDoctors);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
