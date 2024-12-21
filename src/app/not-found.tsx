import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Bliss Nail Spa & Lash",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">The page you are looking for could not be found.</p>
        <Link
          href="/"
          className="bg-brand-gold text-white px-6 py-3 rounded-full hover:bg-brand-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
