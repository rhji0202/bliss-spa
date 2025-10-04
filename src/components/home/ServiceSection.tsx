"use client";

import { useEffect, useRef, useState } from "react";
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
    hasEvent: false,
  },
  {
    title: "Eyelash Extensions",
    description: "Custom eyelash extensions for a beautiful, natural look",
    image: "/images/services/lash.jpg",
    width: 800,
    height: 600,
    hasEvent: true,
    eventText: "50% OFF First Visit",
  },
  {
    title: "Waxing",
    description: "Professional waxing services for smooth, beautiful skin",
    image: "/images/services/waxing.jpg",
    width: 800,
    height: 600,
    hasEvent: false,
  },
  {
    title: "Head Spa & Massage",
    description: "Relaxing head spa and massage treatments to rejuvenate body and mind",
    image: "/images/services/massage.jpeg",
    width: 800,
    height: 600,
    hasEvent: true,
    eventText: "50% OFF First Visit",
  },
];

export default function ServiceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 서비스 카드 애니메이션
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
  }, [isClient]);

  return (
    <section ref={sectionRef} className="py-20 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--section-text)]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative overflow-hidden rounded-lg shadow-lg bg-[var(--section-bg)] hover:shadow-xl transition-shadow duration-300"
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
                
                {/* 이벤트 배지 */}
                {service.hasEvent && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      {service.eventText}
                    </span>
                  </div>
                )}
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
      </div>
    </section>
  );
}
