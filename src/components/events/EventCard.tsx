"use client";

import { useState, useEffect } from "react";
interface Event {
  id: string;
  title: string;
  description: string;
  discount: string;
  originalPrice?: number;
  discountedPrice?: number;
  serviceType: "eyelash" | "head-spa";
  promotionUrl?: string;
  image: string;
  badge: string;
  cta: string;
  validUntil?: string;
  isActive: boolean;
  isHot?: boolean;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [isMangomintReady] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBooking = () => {
    if (!isClient) return;

    if (isMangomintReady) {
      window.Mangomint?.showBookingWidget();
    } else {
      window.open(
        event.promotionUrl || "https://booking.mangomint.com/blissnailspalash",
        "_blank"
      );
    }
  };

  return (
    <div className="event-card group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      <div
        className="relative h-48 bg-gradient-to-r from-pink-500 to-purple-600"
        style={
          event.image
            ? {
                backgroundImage: `url(${event.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center p-6">
            <div className="text-5xl font-bold mb-2">{event.discount}</div>
            <div className="text-lg font-semibold">{event.badge}</div>
          </div>
        </div>

        {/* 배지 */}
        {event.isHot && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              HOT DEAL
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

        <div className="flex items-center justify-between mb-4">
          {event.originalPrice && event.discountedPrice && (
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-green-600">
                ${event.discountedPrice}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ${event.originalPrice}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                Save ${event.originalPrice - event.discountedPrice}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">⏰</span>
            <span>Valid until: {event.validUntil}</span>
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {event.cta}
        </button>
      </div>
    </div>
  );
}
