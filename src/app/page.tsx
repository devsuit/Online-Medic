import Link from 'next/link';

export default function Home() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Online Medic</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop solution to find and book doctors online.
      </p>
      <Link href="/doctors">
        {/* <className="px-6 py-3 bg-blue-600 text-white rounded-md">  */}
          Find a Doctor
       
      </Link>
    </section>
  );
}
