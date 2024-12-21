"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const menuCategories = [
  {
    title: "Manicure",
    items: [
      {
        name: "Classic Manicure",
        description: "Nail shaping, cuticle care, hand massage, and polish",
        price: "25",
      },
      {
        name: "Gel Manicure",
        description: "Long-lasting gel polish with classic manicure service",
        price: "35",
      },
      {
        name: "Luxury Spa Manicure",
        description:
          "Classic manicure with extended massage and paraffin treatment",
        price: "45",
      },
    ],
  },
  {
    title: "Pedicure",
    items: [
      {
        name: "Classic Pedicure",
        description: "Foot soak, nail care, callus removal, and polish",
        price: "35",
      },
      {
        name: "Gel Pedicure",
        description: "Classic pedicure with long-lasting gel polish",
        price: "45",
      },
      {
        name: "Luxury Spa Pedicure",
        description: "Deluxe treatment with hot stone massage and paraffin",
        price: "65",
      },
    ],
  },
  {
    title: "Eyelash Extensions",
    items: [
      {
        name: "Classic Set",
        description: "Natural-looking lash extensions, one extension per lash",
        price: "120",
      },
      {
        name: "Volume Set",
        description: "Fuller look with multiple extensions per natural lash",
        price: "180",
      },
      {
        name: "Refill",
        description: "Maintenance service for existing extensions",
        price: "65",
      },
    ],
  },
];

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const categories = gsap.utils.toArray<HTMLElement>(".menu-category");

      categories.forEach((category, i) => {
        gsap.from(category, {
          scrollTrigger: {
            trigger: category,
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
    <section id="menu" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="menu-category bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-b border-gray-200 pb-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium">{item.name}</h4>
                      <span className="text-pink-500 font-semibold">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
