"use client";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-[var(--footer-text)]">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>408 Westport Ave</p>
            <p>Norwalk, CT 06851</p>
            <p>Tel: 203-846-2777</p>
          </div>

          <div className="text-[var(--footer-text)]">
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p>Monday - Saturday: 9:30 AM - 7:00 PM</p>
            <p>Sunday: 10:00 AM - 6:00 PM</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--footer-text)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[var(--footer-text)] hover:text-brand-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[var(--footer-text)] hover:text-brand-gold transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-[var(--footer-text)] hover:text-brand-gold transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="https://clients.mangomint.com/gift-cards/207987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--footer-text)] hover:text-brand-gold transition-colors"
                >
                  Gift Certificate
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[var(--footer-text)] hover:text-brand-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>
            &copy; 2025 Bliss Nail Spa & Lash. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
