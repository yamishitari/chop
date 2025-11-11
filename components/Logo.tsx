
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-16 h-16 bg-brand-espresso rounded-full">
      <div className="relative w-12 h-12">
        <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-brand-gold rounded-full transform -translate-x-1/2 -translate-y-full origin-bottom rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-4 bg-brand-gold rounded-full transform -translate-x-1/2 -translate-y-full origin-bottom rotate-90"></div>
        <div className="absolute top-1/2 left-1/2 w-10 h-10 border-2 border-brand-cream rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-brand-cream rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Logo;
