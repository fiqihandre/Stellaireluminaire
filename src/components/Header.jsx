'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setHeaderVisible(false);
      } else {
        // Scrolling up
        setHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-headerBg text-headerText py-5 fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-300 ${!headerVisible ? 'transform -translate-y-full' : ''}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo Section */}
        <div className="text-center md:text-left z-50">
          <h1 className="text-4xl font-bold tracking-widest select-none">CULCRATE.Z</h1>
          <p className="text-sm mt-1">Define Your Own Style</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-headerText mt-4 md:mt-0 z-50">
          <Link href="#home" className="hover:text-headerLinkHover font-semibold">Home</Link>
          <Link href="#shop" className="hover:text-headerLinkHover font-semibold">Shop</Link>
          <Link href="#about" className="hover:text-headerLinkHover font-semibold">About</Link>
          <Link href="#contact" className="hover:text-headerLinkHover font-semibold">Contact</Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center mt-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-headerText focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-headerBg px-6 py-4`}>
        <nav className="space-y-4 text-headerText">
          <Link href="#home" className="block hover:text-headerLinkHover font-semibold">Home</Link>
          <Link href="#shop" className="block hover:text-headerLinkHover font-semibold">Shop</Link>
          <Link href="#about" className="block hover:text-headerLinkHover font-semibold">About</Link>
          <Link href="#contact" className="block hover:text-headerLinkHover font-semibold">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
