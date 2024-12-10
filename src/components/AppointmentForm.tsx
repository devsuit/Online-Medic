import { FormEvent } from 'react';

interface AppointmentFormProps {
  doctorId: number;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ doctorId }) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Cast e.target to include specific inputs
    const target = e.target as typeof e.target & {
      date: { value: string };
    };

    const date = target.date.value;

    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ doctorId, date }),
    });

    if (response.ok) {
      alert('Appointment booked successfully!');
    } else {
      alert('Failed to book the appointment.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <label className="block mb-2">
        Date:
        <input
          type="datetime-local"
          name="date"
          required
          className="border p-2 mt-1 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
