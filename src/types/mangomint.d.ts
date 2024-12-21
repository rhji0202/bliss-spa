interface Mangomint {
  showBookingWidget: () => void;
  CompanyId?: number;
}

declare global {
  interface Window {
    Mangomint?: Mangomint;
  }
}

export {};
