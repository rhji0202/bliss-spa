import Image from "next/image";
import Link from "next/link";

const GiftCart = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        Gift Certificate
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
          <Link
            href="https://clients.mangomint.com/gift-cards/207987"
            target="_blank"
            className="block relative w-full aspect-[16/9]"
          >
            <Image
              src="/images/gift-card.jpg"
              alt="Gift Card"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
          <div className="p-8 text-center dark:bg-gray-800">
            <Link
              href="https://clients.mangomint.com/gift-cards/207987"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-pink-500 hover:bg-pink-600 rounded-full transition-colors duration-200"
            >
              Gift Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCart;
