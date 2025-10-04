import Hero from "@/components/home/Hero";
import EventSection from "@/components/events/EventSection";
import ServiceSection from "@/components/home/ServiceSection";
import MenuSection from "@/components/home/MenuSection";
import ContactSection from "@/components/home/ContactSection";
import GiftCart from "@/components/home/GiftCart";
import FloatingEvent from "@/components/events/FloatingEvent";

export default function Home() {
  return (
    <>
      <section id="home" aria-label="Welcome to Bliss Nail Spa">
        <Hero />
      </section>
      <section id="events" aria-label="Special Offers">
        <EventSection />
      </section>
      <section id="services" aria-label="Our Services">
        <ServiceSection />
      </section>
      <section id="menu" aria-label="Service Menu and Pricing">
        <MenuSection />
      </section>
      <section id="gift-cart" aria-label="Gift Cart">
        <GiftCart />
      </section>
      <section id="contact" aria-label="Contact Information">
        <ContactSection />
      </section>
      <FloatingEvent />
    </>
  );
}
