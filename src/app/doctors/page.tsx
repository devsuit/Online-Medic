import DoctorCard from '@/components/DoctorCard';

export default function DoctorsPage() {
  const doctors = [
    { id: 1, name: 'Dr. Ahmed Khan', specialty: 'Cardiologist', city: 'Lahore' },
    { id: 2, name: 'Dr. Maria Malik', specialty: 'Dermatologist', city: 'Karachi' },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
