"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const businessHours = [
  { day: "Monday - Saturday", hours: "9:30 AM - 7:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>

        <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Location</h3>
              <p className="text-gray-600">408 Westport Ave</p>
              <p className="text-gray-600">Norwalk, CT 06851</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">Phone: 203-846-2777</p>
              <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
                Book Appointment
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-gray-600"
                  >
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Gift Certificates</h3>
              <p className="text-gray-600 mb-4">
                Give the gift of relaxation and beauty. Gift certificates are
                available for all our services.
              </p>
              <a
                href="https://clients.mangomint.com/gift-cards/207987"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                Purchase Gift Card
              </a>
            </div>
          </div>

          <div className="h-[400px] md:h-full min-h-[400px] bg-gray-200 rounded-lg">
            {/* Google Maps will be integrated here */}
            <div className="w-full h-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755835317927!2d-73.4183894!3d41.0923977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e81e7d4a12e3d3%3A0x9a8a6a411c5c6c9f!2s408%20Westport%20Ave%2C%20Norwalk%2C%20CT%2006851!5e0!3m2!1sen!2sus!4v1647901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
