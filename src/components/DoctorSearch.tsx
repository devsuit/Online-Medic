import { useState } from "react";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  city: string;
}

const doctors: Doctor[] = [
  { id: "1", name: "Dr. Sarah", specialty: "Cardiology", city: "Lahore" },
  { id: "2", name: "Dr. John", specialty: "Dermatology", city: "Karachi" },
  { id: "3", name: "Dr. Alice", specialty: "Pediatrics", city: "Islamabad" },
];

export default function DoctorSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Search for Doctors</h2>
      <input
        type="text"
        placeholder="Search by name or specialty"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
      <ul className="mt-4">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <li
              key={doctor.id}
              className="border-b py-2 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-medium">{doctor.name}</h3>
                <p className="text-sm text-gray-600">
                  {doctor.specialty} - {doctor.city}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No doctors found.</p>
        )}
      </ul>
    </div>
  );
}
