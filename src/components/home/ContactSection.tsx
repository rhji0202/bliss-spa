"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const businessHours = [
  { day: "Monday - Saturday", hours: "9:30 AM - 7:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--section-text)]">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--section-text)]">
                Visit Us
              </h3>
              <address className="not-italic text-[var(--section-text)] space-y-2">
                <p>408 Westport Ave</p>
                <p>Norwalk, CT 06851</p>
                <p>
                  Tel:{" "}
                  <a
                    href="tel:203-846-2777"
                    className="text-brand-gold hover:text-brand-gold/80 transition-colors"
                  >
                    203-846-2777
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--section-text)]">
                Business Hours
              </h3>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-[var(--section-text)]"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755401193674!2d-73.4183894!3d41.0923977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e81c04d7e3aa2b%3A0x6b05d72156d10d4f!2s408%20Westport%20Ave%2C%20Norwalk%2C%20CT%2006851!5e0!3m2!1sen!2sus!4v1710811046246!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bliss Nail Spa & Lash Location"
              className="filter contrast-[0.85] dark:invert dark:contrast-[0.85] dark:hue-rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
