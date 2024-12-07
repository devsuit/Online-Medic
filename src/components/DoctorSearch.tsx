import { useState } from 'react';
import axios from 'axios';

export default function DoctorSearch() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const specialty = e.target.specialty.value;
    const city = e.target.city.value;

    const response = await axios.get('/api/doctors', {
      params: { specialty, city },
    });
    setSearchResults(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-4">
        <input name="specialty" placeholder="Specialty" className="border p-2" />
        <input name="city" placeholder="City" className="border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4">
          Search
        </button>
      </form>
      <div className="mt-4">
        {searchResults.map((doctor) => (
          <div key={doctor.id} className="p-2 border-b">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty} - {doctor.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
