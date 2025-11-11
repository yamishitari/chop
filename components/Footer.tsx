
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal border-t border-gray-700">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} The Daily Grind. All Rights Reserved.</p>
          <p className="text-brand-gold font-serif text-center md:text-left">Brewed with passion daily.</p>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-brand-gold transition-colors">
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
