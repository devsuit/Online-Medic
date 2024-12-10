import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <section className="bg-blue-50 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Find the Best Doctor Near You</h1>
          <div className="flex justify-center gap-4">
            <select
              className="border border-gray-300 p-2 rounded"
              defaultValue="Lahore"
            >
              <option>Lahore</option>
              <option>Karachi</option>
              <option>Islamabad</option>
            </select>
            <input
              type="text"
              placeholder="Search by Symptoms"
              className="border border-gray-300 p-2 rounded w-1/2"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10">
        <div className="container mx-auto grid grid-cols-3 gap-4">
          <div className="p-4 bg-white border rounded shadow text-center">
            <img src="/icons/video-call.png" alt="Video Consultation" className="mx-auto mb-2" />
            <h3 className="font-bold">Video Consultation</h3>
          </div>
          <div className="p-4 bg-white border rounded shadow text-center">
            <img src="/icons/clinic.png" alt="In-clinic Visit" className="mx-auto mb-2" />
            <h3 className="font-bold">In-clinic Visit</h3>
          </div>
          <div className="p-4 bg-white border rounded shadow text-center">
            <img src="/icons/weight-loss.png" alt="Weight Loss Clinic" className="mx-auto mb-2" />
            <h3 className="font-bold">Weight Loss Clinic</h3>
          </div>
        </div>
      </section>

      {/* Ask a Doctor Section */}
      <section className="bg-green-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">
            Get free medical advice by asking a doctor
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
            View All Questions
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Ask a Question
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <img src="/icons/fever.png" alt="Fever" className="mx-auto mb-2" />
              <p>Fever</p>
            </div>
            <div className="text-center">
              <img src="/icons/heart.png" alt="Heart Attack" className="mx-auto mb-2" />
              <p>Heart Attack</p>
            </div>
            <div className="text-center">
              <img src="/icons/pregnancy.png" alt="Pregnancy" className="mx-auto mb-2" />
              <p>Pregnancy</p>
            </div>
            <div className="text-center">
              <img src="/icons/blood-pressure.png" alt="High Blood Pressure" className="mx-auto mb-2" />
              <p>High Blood Pressure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto">
          <h3 className="text-lg font-bold mb-4">What Our Users Say</h3>
          <div className="flex overflow-x-scroll gap-4">
            <div className="p-4 bg-white border rounded shadow w-64">
              <p>"It was a great experience finding a doctor using this platform."</p>
              <h4 className="font-bold mt-2">- Irfan Muddassir</h4>
            </div>
            <div className="p-4 bg-white border rounded shadow w-64">
              <p>"Highly recommended! I booked an appointment easily."</p>
              <h4 className="font-bold mt-2">- Umair Ali</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
