import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Find the Best Doctor Near You</h1>
          <p className="text-lg mb-6">
            Book appointments, consult online, and access health services all in one place.
          </p>
          {/* Search Bar */}
          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-3xl">
              <input
                type="text"
                placeholder="Search by Symptoms, Doctor, or Hospital"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-700"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                <MagnifyingGlassIcon className="h-5 w-5 inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            How Can We Help You Today?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white shadow-md rounded-lg p-4 text-center hover:bg-teal-100 cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <service.icon className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    name: "Video Consultation",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "In-clinic Visit",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Weight Loss Clinic",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Lab Tests",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Medicines",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Blogs",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Hospitals",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Health Tips",
    icon: MagnifyingGlassIcon,
  },
];
