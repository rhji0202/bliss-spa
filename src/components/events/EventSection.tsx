"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventCard from "./EventCard";

interface Event {
  id: string;
  title: string;
  description: string;
  discount: string;
  originalPrice?: number;
  discountedPrice?: number;
  serviceType: "eyelash" | "head-spa";
  image: string;
  badge: string;
  cta: string;
  validUntil?: string;
  isActive: boolean;
}

gsap.registerPlugin(ScrollTrigger);

export default function EventSection() {
  const [isClient, setIsClient] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setIsClient(true);

    // Load events from JSON
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.events))
      .catch((error) => console.error("Error loading events:", error));
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // 섹션 타이틀 애니메이션
      gsap.fromTo(
        ".event-section-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".event-section-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 이벤트 카드 애니메이션
      gsap.fromTo(
        ".event-card",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".event-cards-container",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isClient]);

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-gray-50 to-pink-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="event-section-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Limited Time Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Special discounts for first-time customers! Experience our premium
            services at an incredible value.
          </p>
        </div>

        <div className="event-cards-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events
            .filter((event) => event.isActive)
            .map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg inline-block">
            <p className="text-yellow-700 font-semibold">
              ✨ Offer valid for first-time customers only. Cannot be combined
              with other promotions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
