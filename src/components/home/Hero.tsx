"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const [isMangomintReady, setIsMangomintReady] = useState(false);

  useEffect(() => {
    // Mangomint 스크립트 로드 확인
    const checkMangomint = setInterval(() => {
      if (window.Mangomint?.showBookingWidget) {
        setIsMangomintReady(true);
        clearInterval(checkMangomint);
      }
    }, 100);

    return () => clearInterval(checkMangomint);
  }, []);

  useLayoutEffect(() => {
    // 초기 상태 설정
    gsap.set([".hero-title", ".hero-description", ".hero-cta"], {
      opacity: 0,
      y: 50,
    });

    const ctx = gsap.context(() => {
      // 약간의 지연 후 애니메이션 시작
      setTimeout(() => {
        const tl = gsap.timeline();
        tl.to(".hero-title", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        })
          .to(
            ".hero-description",
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
            },
            "-=0.5"
          )
          .to(
            ".hero-cta",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "-=0.3"
          );
      }, 100);
    });

    return () => ctx.revert();
  }, []);

  const handleBooking = () => {
    if (isMangomintReady) {
      window.Mangomint?.showBookingWidget();
    } else {
      window.open("https://booking.mangomint.com/blissnailspalash", "_blank");
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Bliss Nail Spa & Lash"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
          Experience Luxury at
          <br />
          Bliss Nail Spa & Lash
        </h1>
        <p className="hero-description text-xl md:text-2xl mb-8 max-w-2xl">
          Premium nail care, eyelash extensions, and spa services in Norwalk,
          CT. Treat yourself to a moment of pure bliss.
        </p>
        <button
          onClick={handleBooking}
          className="hero-cta bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </section>
  );
}
