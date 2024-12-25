"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const services = [
  {
    title: "Nail Care",
    description:
      "Manicures, pedicures, and nail enhancements with premium products",
    image: "/images/services/nails.jpg",
    width: 800,
    height: 600,
  },
  {
    title: "Eyelash Extensions",
    description: "Custom eyelash extensions for a beautiful, natural look",
    image: "/images/services/lash.jpg",
    width: 800,
    height: 600,
  },
  {
    title: "Waxing",
    description: "Professional waxing services for smooth, beautiful skin",
    image: "/images/services/waxing.jpg",
    width: 800,
    height: 600,
  },
  {
    title: "Massage",
    description: "Relaxing massage treatments to rejuvenate body and mind",
    image: "/images/services/massage.jpeg",
    width: 800,
    height: 600,
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--section-text)]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-[var(--section-bg)] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              if (window.Mangomint?.showBookingWidget) {
                window.Mangomint.showBookingWidget();
              }
            }}
            className="bg-brand-gold text-white px-8 py-3 rounded-full hover:bg-brand-gold/90 transition-colors text-lg font-medium"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
