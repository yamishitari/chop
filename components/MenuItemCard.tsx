
import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-xl font-serif font-bold text-brand-charcoal">{item.name}</h3>
          <p className="text-lg font-semibold text-brand-espresso">{item.price}</p>
        </div>
        <p className="text-gray-600 flex-grow">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
