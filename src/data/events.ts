export interface Event {
  id: string;
  title: string;
  description: string;
  discount: string;
  originalPrice?: number;
  discountedPrice?: number;
  serviceType: 'eyelash' | 'head-spa';
  image: string;
  badge: string;
  cta: string;
  validUntil?: string;
  isActive: boolean;
}

export const events: Event[] = [
  {
    id: 'eyelash-50-off',
    title: 'Eyelash Extensions',
    description: 'Get stunning eyelash extensions with our expert technicians. Perfect for enhancing your natural beauty.',
    discount: '50% OFF',
    originalPrice: 80,
    discountedPrice: 40,
    serviceType: 'eyelash',
    image: '/images/events/eyelash-event.jpg',
    badge: 'First Time Customer Special',
    cta: 'Book Eyelash Extensions',
    validUntil: '2025-12-31',
    isActive: true,
  },
  {
    id: 'head-spa-50-off',
    title: 'Head Spa Treatment',
    description: 'Relaxing head spa treatment that revitalizes your scalp and promotes hair health.',
    discount: '50% OFF',
    originalPrice: 120,
    discountedPrice: 60,
    serviceType: 'head-spa',
    image: '/images/events/head-spa-event.jpg',
    badge: 'First Time Customer Special',
    cta: 'Book Head Spa',
    validUntil: '2025-12-31',
    isActive: true,
  },
];

export const eventBannerData = {
  mainTitle: 'FIRST TIME CUSTOMER SPECIAL',
  subTitle: 'Eyelash Extensions & Head Spa 50% OFF',
  description: 'Experience luxury beauty services at half price for your first visit!',
  ctaText: 'Claim Your Discount',
};

export const floatingEventData = {
  title: '50% OFF',
  subtitle: 'First Visit',
  cta: 'Book Now',
};