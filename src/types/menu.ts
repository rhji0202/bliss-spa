export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export type MenuCategories = MenuCategory[];
