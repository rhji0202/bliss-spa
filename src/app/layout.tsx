import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata, Viewport } from "next";
import JsonLd from "@/components/SEO/JsonLd";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bliss Nail Spa & Lash | Nail Care & Beauty Services in Norwalk, CT",
  description:
    "Premium nail care, eyelash extensions, and spa services in Norwalk, CT. Professional manicures, pedicures, waxing, and massage services. Book your appointment today!",
  keywords: [
    "nail salon",
    "nail spa",
    "eyelash extensions",
    "manicure",
    "pedicure",
    "Norwalk",
    "Connecticut",
    "spa services",
    "waxing",
    "massage",
  ].join(", "),
  authors: [{ name: "Bliss Nail Spa & Lash" }],
  openGraph: {
    title: "Bliss Nail Spa & Lash | Luxury Nail Care & Beauty Services",
    description:
      "Experience luxury nail care, eyelash extensions, and spa services in Norwalk, CT. Book your appointment today!",
    url: "https://blissnailspalash.com",
    siteName: "Bliss Nail Spa & Lash",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "verification_token", // Google Search Console 인증 토큰
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.Mangomint = window.Mangomint || {};
              window.Mangomint.CompanyId = 207987;
            `,
          }}
        />
        <script src="https://booking.mangomint.com/app.js" async defer />
      </head>
      <body
        className={`${inter.className} ${cormorant.variable} ${playfair.variable}`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
