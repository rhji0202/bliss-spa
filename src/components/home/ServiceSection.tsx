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
    image: "/images/services/waxing.jpeg",
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
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");

      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
