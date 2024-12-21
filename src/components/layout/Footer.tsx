"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-40 h-20 mb-4">
            <Image
              src="/images/logo.png"
              alt="Bliss Nail Spa & Lash"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>408 Westport Ave</p>
            <p>Norwalk, CT 06851</p>
            <p>Tel: 203-846-2777</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p>Monday - Saturday: 9:30 AM - 7:00 PM</p>
            <p>Sunday: 10:00 AM - 6:00 PM</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="hover:text-pink-500 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="hover:text-pink-500 transition-colors"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-pink-500 transition-colors"
                >
                  Gift Certificates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>
            &copy; {new Date().getFullYear()} Bliss Nail Spa & Lash. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
