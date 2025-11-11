
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            const sections = document.querySelectorAll('section[id]');
            let currentSection = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 60) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveLink(`#${currentSection}`);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#menu', label: 'Menu' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="flex items-center space-x-2 text-2xl font-bold font-serif text-brand-charcoal hover:text-brand-gold transition-colors">
                        <Logo />
                        <span>The Daily Grind</span>
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className={`text-lg font-medium text-brand-charcoal transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-brand-gold after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${activeLink === link.href ? 'after:scale-x-100' : ''}`}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-charcoal focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-brand-cream pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-charcoal hover:text-brand-gold transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
