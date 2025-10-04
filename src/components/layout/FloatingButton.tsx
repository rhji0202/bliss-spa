"use client";

import { useEffect, useState } from "react";

const FloatingButton = () => {
  const [isMangomintReady, setIsMangomintReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const heroSection = document.querySelector("section") as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 100); // 약간의 여유를 둠
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
    // 초기 스크롤 위치 체크
    handleScroll();

    return () => {
      clearInterval(checkMangomint);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  const handleBooking = () => {
    if (!isClient) return;
    
    if (isMangomintReady) {
      window.Mangomint?.showBookingWidget();
    } else {
      window.open("https://booking.mangomint.com/blissnailspalash", "_blank");
    }
  };

  if (!isClient) {
    return <div className="fixed bottom-6 right-6 z-50" style={{ visibility: 'hidden' }} />;
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleBooking}
        className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-pink-500 hover:bg-pink-600 rounded-full shadow-lg transition-colors duration-200"
      >
        Book Now
      </button>
    </div>
  );
};

export default FloatingButton;
