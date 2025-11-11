
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-brand-cream text-brand-charcoal font-sans">
      <Header />
      <main>
        <Hero />
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>
        <AnimatedSection id="menu">
          <Menu />
        </AnimatedSection>
        <AnimatedSection id="gallery">
          <Gallery />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;
