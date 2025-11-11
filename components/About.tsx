
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              The Daily Grind was born from a simple idea: to create a space where the community can gather, connect, and enjoy truly exceptional coffee. We believe that coffee is more than just a drink; it's a ritual, an art form, and a catalyst for conversation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We partner with sustainable farms from around the world to source the finest beans, which are then roasted in-house to bring out their unique flavors. From our baristas to our bakers, every member of our team is dedicated to their craft, ensuring that every item we serve is made with love and attention to detail.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/aboutcoffee/800/600" 
              alt="Inside of The Daily Grind coffee shop" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
