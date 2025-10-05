"use client";

import Link from "next/link";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (logoRef.current) {
      gsap.set(logoRef.current, {
        color: "#C5A572",
      });
    }
  }, [isClient]);

  useLayoutEffect(() => {
    // 이전 타임라인 정리
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // 새 타임라인 생성
    timelineRef.current = gsap.timeline({ repeat: -1 });

    if (logoRef.current && timelineRef.current) {
      timelineRef.current
        .to(logoRef.current, {
          color: "#E5D5B5", // 밝은 골드
          duration: 2,
          ease: "power2.inOut",
        })
        .to(logoRef.current, {
          color: "#C5A572", // 기본 ��드
          duration: 2,
          ease: "power2.inOut",
        });
    }

    // cleanup 함수
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--header-bg)] shadow-md"
          : "bg-[var(--header-bg)] backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            ref={logoRef}
            className="relative group flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="Bliss Nail Spa & Lash Logo"
              width={50}
              height={50}
              className="object-cover"
              priority
            />
            <span className="text-2xl font-bold text-[#C5A572] font-playfair tracking-wider">
              Nail Spa & Lash
            </span>
            <span className="absolute inset-0 bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors"
            >
              Menu
            </button>
            <a
              href="https://clients.mangomint.com/gift-cards/207987"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors"
            >
              Gift Certificate
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors"
            >
              Contact
            </button>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://www.instagram.com/bliss.spa.lash?igsh=MWlubjFwanZ2MXAxbw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--header-text)] hover:text-brand-gold transition-colors p-2"
                aria-label="Instagram"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Bliss Nail Spa & Lash Instagram"
                  width={30}
                  height={30}
                  className="object-cover"
                  priority
                />
              </a>
              <a
                href="https://www.tiktok.com/@bliss.spa.lash?_t=ZP-90FxhdGGf2U&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--header-text)] hover:text-brand-gold transition-colors p-2"
                aria-label="TikTok"
              >
                <Image
                  src="/images/tik-tok.png"
                  alt="Bliss Nail Spa & Lash TikTok"
                  width={30}
                  height={30}
                  className="object-cover"
                  priority
                />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-gold"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <nav className="flex flex-col space-y-4 pb-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors text-left"
            >
              Menu
            </button>
            <a
              href="https://clients.mangomint.com/gift-cards/207987"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors text-left"
            >
              Gift Certificate
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[var(--header-text)] hover:text-brand-gold transition-colors text-left"
            >
              Contact
            </button>

            {/* Mobile Social Media Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://www.instagram.com/bliss.spa.lash?igsh=MWlubjFwanZ2MXAxbw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--header-text)] hover:text-brand-gold transition-colors p-2"
                aria-label="Instagram"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Bliss Nail Spa & Lash Instagram"
                  width={30}
                  height={30}
                  className="object-cover"
                  priority
                />
              </a>
              <a
                href="https://www.tiktok.com/@bliss.spa.lash?_t=ZP-90FxhdGGf2U&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--header-text)] hover:text-brand-gold transition-colors p-2"
                aria-label="TikTok"
              >
                <Image
                  src="/images/tik-tok.png"
                  alt="Bliss Nail Spa & Lash TikTok"
                  width={30}
                  height={30}
                  className="object-cover"
                  priority
                />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
