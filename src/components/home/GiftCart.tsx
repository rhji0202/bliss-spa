import Image from "next/image";
import Link from "next/link";

const GiftCart = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="https://clients.mangomint.com/gift-cards/207987"
        target="_blank"
        className="block w-full"
      >
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
          <Image
            src="/images/gift-card.jpg"
            alt="Gift Card"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default GiftCart;
