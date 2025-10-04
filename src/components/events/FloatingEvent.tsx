"use client";

import { useState, useEffect } from "react";
import { floatingEventData } from "@/data/events";

export default function FloatingEvent() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMangomintReady, setIsMangomintReady] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    setIsMounted(true);
    
    // 페이지 로드 후 3초 후에 나타나도록 설정
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Mangomint 스크립트 로드 확인
    const checkMangomint = setInterval(() => {
      if (window.Mangomint?.showBookingWidget) {
        setIsMangomintReady(true);
        clearInterval(checkMangomint);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(checkMangomint);
    };
  }, [isClient]);

  const handleBooking = () => {
    if (isMangomintReady) {
      window.Mangomint?.showBookingWidget();
    } else {
      window.open("https://booking.mangomint.com/blissnailspalash", "_blank");
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isClient) {
    return <div className="fixed bottom-24 right-6 z-50" style={{ visibility: 'hidden' }} />;
  }

  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-2xl border-2 border-white transform hover:scale-105 transition-all duration-300">
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:text-red-500 shadow-lg transition-colors"
        >
          ×
        </button>
        
        {/* 이벤트 내용 */}
        <div className="p-4 text-white text-center">
          <div className="font-bold text-lg mb-1">
            {floatingEventData.title}
          </div>
          <div className="text-sm opacity-90 mb-2">
            {floatingEventData.subtitle}
          </div>
          <button
            onClick={handleBooking}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold transition-all duration-200 transform hover:scale-110 shadow-lg"
          >
            {floatingEventData.cta}
          </button>
        </div>
        
        {/* 꼬리표 */}
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 transform rotate-45 border-r-2 border-b-2 border-white"></div>
      </div>
    </div>
  );
}