"use client";

import { useEffect, useState } from "react";
import { MenuCategories, MenuCategory } from "@/types/menu";

export default function MenuSection() {
  const [menuData, setMenuData] = useState<MenuCategories>([]);

  useEffect(() => {
    fetch("/data/menuData.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data.menuCategories));
  }, []);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((category: MenuCategory, index) => (
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
