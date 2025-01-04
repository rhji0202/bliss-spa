export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: "Bliss Nail Spa & Lash",
    image: "https://www.bliss-ct.com/images/hero-bg.jpeg",
    "@id": "https://www.bliss-ct.com",
    url: "https://www.bliss-ct.com",
    telephone: "203-846-2777",
    address: {
      "@type": "PostalAddress",
      streetAddress: "408 Westport Ave",
      addressLocality: "Norwalk",
      addressRegion: "CT",
      postalCode: "06851",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0923977,
      longitude: -73.4183894,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Nail salon services",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
