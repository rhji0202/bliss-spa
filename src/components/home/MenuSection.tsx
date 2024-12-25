"use client";

import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { MenuCategories, MenuCategory } from "@/types/menu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function MenuSection() {
  const [menuData, setMenuData] = useState<MenuCategories>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/data/menuData.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data.menuCategories));
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 메뉴 타이틀 애니메이션
      gsap.from(".menu-title", {
        scrollTrigger: {
          trigger: ".menu-title",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      // 메뉴 카테고리 애니메이션
      const categories = gsap.utils.toArray<HTMLElement>(".menu-category");
      categories.forEach((category, i) => {
        gsap.from(category, {
          scrollTrigger: {
            trigger: category,
            start: "top bottom-=50",
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
  }, [menuData]); // menuData가 로드된 후 애니메이션 적용

  return (
    <section ref={sectionRef} className="py-20 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4">
        <h2 className="menu-title text-4xl font-bold text-center mb-16 text-[var(--section-text)]">
          Our Menu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((category: MenuCategory, index) => (
            <div
              key={index}
              className="menu-category bg-[var(--section-bg)] rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--section-text)]">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-b border-gray-200 pb-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium text-[var(--section-text)]">
                        {item.name}
                      </h4>
                      <span className="text-pink-500 font-semibold">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-[var(--section-text)] opacity-80 text-sm">
                      {item.description}
                    </p>
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
