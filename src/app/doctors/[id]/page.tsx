export default function DoctorDetails({ params }: { params: { id: string } }) {
    const doctor = {
      id: params.id,
      name: 'Dr. Ahmed Khan',
      specialty: 'Cardiologist',
      city: 'Lahore',
      bio: 'An experienced cardiologist with 15 years of practice.',
    };
  
    return (
      <section className="p-8">
        <h1 className="text-4xl font-bold">{doctor.name}</h1>
        <p className="text-lg text-gray-600">{doctor.specialty}</p>
        <p className="text-gray-500">{doctor.city}</p>
        <p className="mt-4">{doctor.bio}</p>
      </section>
    );
  }
  