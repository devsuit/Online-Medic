import axios from 'axios';

export default function AppointmentForm({ doctorId }) {
  const handleSubmit = async (e: { preventDefault: () => void; target: { date: { value: any; }; }; }) => {
    e.preventDefault();
    const date = e.target.date.value;

    const response = await axios.post('/api/appointments', {
      userId: 1, // Replace with actual logged-in user ID
      doctorId,
      date,
    });
    alert(`Appointment booked for ${response.data.date}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
      <input name="date" type="datetime-local" required className="mb-2" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">
        Book Appointment
      </button>
    </form>
  );
}
