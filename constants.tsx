
import React from 'react';
import { MenuItem, MenuItemCategory } from './types';

export const COLORS = {
  espresso: '#4b3832',
  cream: '#f5f5dc',
  gold: '#c89c52',
  charcoal: '#36454f',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Espresso',
    description: 'A rich and aromatic shot of pure coffee essence, the perfect pick-me-up.',
    price: '$3.00',
    category: MenuItemCategory.HOT_COFFEE,
    imageUrl: 'https://picsum.photos/seed/espresso/400/400',
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    description: 'Steamed milk, vanilla syrup, and a shot of espresso, topped with caramel drizzle.',
    price: '$4.75',
    category: MenuItemCategory.HOT_COFFEE,
    imageUrl: 'https://picsum.photos/seed/macchiato/400/400',
  },
  {
    id: 3,
    name: 'Vanilla Latte',
    description: 'Smooth espresso with steamed milk and a sweet hint of vanilla syrup.',
    price: '$4.50',
    category: MenuItemCategory.HOT_COFFEE,
    imageUrl: 'https://picsum.photos/seed/latte/400/400',
  },
  {
    id: 4,
    name: 'Cold Brew',
    description: 'Slow-steeped for 20 hours for a super smooth, less acidic, and highly caffeinated coffee.',
    price: '$4.25',
    category: MenuItemCategory.ICED_COFFEE,
    imageUrl: 'https://picsum.photos/seed/coldbrew/400/400',
  },
  {
    id: 5,
    name: 'Iced Mocha',
    description: 'Rich espresso and bittersweet mocha sauce, combined with milk and served over ice.',
    price: '$5.00',
    category: MenuItemCategory.ICED_COFFEE,
    imageUrl: 'https://picsum.photos/seed/icedmocha/400/400',
  },
   {
    id: 6,
    name: 'Iced Chai Latte',
    description: 'Black tea infused with cinnamon, clove, and other warming spices, served over ice.',
    price: '$4.50',
    category: MenuItemCategory.ICED_COFFEE,
    imageUrl: 'https://picsum.photos/seed/icedchai/400/400',
  },
  {
    id: 7,
    name: 'Almond Croissant',
    description: 'Flaky, buttery croissant with a sweet almond filling, topped with toasted almonds.',
    price: '$3.50',
    category: MenuItemCategory.PASTRIES,
    imageUrl: 'https://picsum.photos/seed/croissant/400/400',
  },
  {
    id: 8,
    name: 'Blueberry Muffin',
    description: 'A soft, moist muffin bursting with fresh blueberries and a crumbly streusel topping.',
    price: '$3.00',
    category: MenuItemCategory.PASTRIES,
    imageUrl: 'https://picsum.photos/seed/muffin/400/400',
  },
   {
    id: 9,
    name: 'Chocolate Chip Cookie',
    description: 'A classic, chewy cookie packed with semi-sweet chocolate chips.',
    price: '$2.50',
    category: MenuItemCategory.PASTRIES,
    imageUrl: 'https://picsum.photos/seed/cookie/400/400',
  },
  {
    id: 10,
    name: 'Matcha Green Tea Latte',
    description: 'Finely ground green tea powder with steamed milk, a smooth and earthy delight.',
    price: '$5.25',
    category: MenuItemCategory.SPECIALTY,
    imageUrl: 'https://picsum.photos/seed/matcha/400/400',
  },
  {
    id: 11,
    name: 'Spiced Pumpkin Latte',
    description: 'Our seasonal favorite with pumpkin spice, cinnamon, nutmeg, and clove.',
    price: '$5.50',
    category: MenuItemCategory.SPECIALTY,
    imageUrl: 'https://picsum.photos/seed/pumpkin/400/400',
  },
  {
    id: 12,
    name: 'Golden Turmeric Latte',
    description: 'A caffeine-free, anti-inflammatory blend of turmeric, ginger, and cinnamon.',
    price: '$5.00',
    category: MenuItemCategory.SPECIALTY,
    imageUrl: 'https://picsum.photos/seed/turmeric/400/400',
  },
];


export const GALLERY_IMAGES = [
  { id: 1, src: 'https://picsum.photos/seed/gallery1/600/800', alt: 'A barista pouring latte art' },
  { id: 2, src: 'https://picsum.photos/seed/gallery2/800/600', alt: 'Interior of the coffee shop' },
  { id: 3, src: 'https://picsum.photos/seed/gallery3/600/600', alt: 'A close-up of a pastry' },
  { id: 4, src: 'https://picsum.photos/seed/gallery4/600/800', alt: 'A person enjoying coffee' },
  { id: 5, src: 'https://picsum.photos/seed/gallery5/800/600', alt: 'Coffee beans being roasted' },
  { id: 6, src: 'https://picsum.photos/seed/gallery6/600/600', alt: 'An iced coffee on a summer day' },
  { id: 7, src: 'https://picsum.photos/seed/gallery7/600/800', alt: 'A collection of different coffee drinks' },
  { id: 8, src: 'https://picsum.photos/seed/gallery8/800/600', alt: 'The cozy seating area of the cafe' },
];


export const SOCIAL_LINKS = [
    {
        name: 'Instagram',
        href: '#',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c-4.04.004-4.885.018-6.598.096C2.883 2.21 1.25 3.842 1.13 6.704c-.078 1.713-.092 2.558-.096 6.598-.004 4.04.018 4.885.096 6.598.12 2.862 1.75 4.495 4.613 4.614 1.713.078 2.558.092 6.598.096 4.04-.004 4.885-.018 6.598-.096 2.862-.12 4.495-1.75 4.614-4.613.078-1.713.092-2.558.096-6.598.004-4.04-.018-4.885-.096-6.598C22.75 3.842 21.12 2.21 18.257 2.09A122.5 122.5 0 0012.315 2zm-1.04 1.89h2.158c3.932 0 4.64.016 6.273.09 2.05.094 3.22 1.263 3.315 3.314.073 1.633.09 2.34.09 6.273s-.016 4.64-.09 6.273c-.094 2.05-1.263 3.22-3.314 3.315-1.633.073-2.34.09-6.273.09s-4.64-.016-6.273-.09c-2.05-.094-3.22-1.263-3.315-3.314-.073-1.633-.09-2.34-.09-6.273s.016-4.64.09-6.273c.094-2.05 1.263-3.22 3.314-3.315 1.633-.073 2.34-.09 6.273-.09zm0 3.75a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM8.5 12a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm8.25-4.125a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: '#',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'Twitter',
        href: '#',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        ),
    },
];
