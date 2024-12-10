"use client";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold">Online Medic</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-200">
              Home
            </a>
            <a href="/doctors" className="hover:text-blue-200">
              Doctors
            </a>
            <a href="/appointment" className="hover:text-blue-200">
              Appointment
            </a>
            <a href="/contact" className="hover:text-blue-200">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
            >
              {isOpen ? (
                <Bars3Icon className="h-6 w-6 text-white" />
              ) : (
                <XMarkIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-500">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700">
              Home
            </a>
            <a
              href="/doctors"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              Doctors
            </a>
            <a
              href="/appointment"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              Appointment
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
