interface DoctorCardProps {
  doctor: {
    id: number;
    name: string;
    specialty: string;
    city: string;
  };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h3 className="text-xl font-semibold">{doctor.name}</h3>
      <p>Specialty: {doctor.specialty}</p>
      <p>City: {doctor.city}</p>
    </div>
  );
};

export default DoctorCard;
