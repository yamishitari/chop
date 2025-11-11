
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 lg:py-32 bg-brand-charcoal text-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8">
            Visit Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-16 space-y-8 md:space-y-0 text-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p>123 Coffee Lane</p>
              <p>Brewsville, CA 90210</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Hours</h3>
              <p>Monday - Friday: 6:00 AM - 7:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 6:00 PM</p>
            </div>
             <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Contact</h3>
              <p>Email: contact@dailygrind.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
