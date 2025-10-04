"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface EventBannerData {
  mainTitle: string;
  subTitle: string;
  description: string;
  ctaText: string;
}

export default function Hero() {
  const [isMangomintReady, setIsMangomintReady] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [eventBannerData, setEventBannerData] = useState<EventBannerData>({
    mainTitle: 'FIRST TIME CUSTOMER SPECIAL',
    subTitle: 'Eyelash Extensions & Head Spa 50% OFF',
    description: 'Experience luxury beauty services at half price for your first visit!',
    ctaText: 'Claim Your Discount'
  });

  useEffect(() => {
    setIsClient(true);
    
    // Load event banner data from JSON
    fetch('/data/events.json')
      .then(response => response.json())
      .then(data => setEventBannerData(data.eventBannerData))
      .catch(error => console.error('Error loading event banner data:', error));
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Mangomint 스크립트 로드 확인
    const checkMangomint = setInterval(() => {
      if (window.Mangomint?.showBookingWidget) {
        setIsMangomintReady(true);
        clearInterval(checkMangomint);
      }
    }, 100);

    return () => clearInterval(checkMangomint);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    // 초기 상태 설정
    gsap.set([".event-banner", ".hero-title", ".hero-description", ".hero-cta"], {
      opacity: 0,
      y: 50,
    });

    const ctx = gsap.context(() => {
      // 약간의 지연 후 애니메이션 시작
      setTimeout(() => {
        const tl = gsap.timeline();
        tl.to(".event-banner", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        })
          .to(
            ".hero-title",
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.3"
          )
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
  }, [isClient]);

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
        {/* Event Banner */}
        <div className="event-banner mb-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 opacity-90">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <div className="text-sm md:text-base font-semibold uppercase tracking-wider text-yellow-200 mb-1">
                  {eventBannerData.mainTitle}
                </div>
                <div className="text-xl md:text-2xl font-bold">
                  {eventBannerData.subTitle}
                </div>
                <div className="text-sm md:text-base opacity-90 mt-1">
                  {eventBannerData.description}
                </div>
              </div>
              <button
                onClick={handleBooking}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-110 shadow-lg"
              >
                {eventBannerData.ctaText}
              </button>
            </div>
          </div>
        </div>

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
