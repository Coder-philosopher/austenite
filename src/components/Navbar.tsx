import React, { useState, useEffect } from 'react';
import { Recycle, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  handleScroll: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, handleScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'How It Works', section: 'how-it-works' },
    { name: 'Features', section: 'features' },
    { name: 'Impact', section: 'impact' },
    { name: 'Research', section: 'research' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0  right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950/90 shadow-xl backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Recycle className="h-9 w-9 text-green-400 animate-spin-slow" />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              MetalAI Recycle
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleScroll(link.section)}
                className={`relative text-sm font-medium transition-all duration-200 hover:text-green-400 ${
                  activeSection === link.section ? 'text-green-400' : 'text-gray-300'
                }`}
              >
                {link.name}
                {activeSection === link.section && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-400 rounded-full animate-fadeIn" />
                )}
              </button>
            ))}
            <button className="ml-6 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-t border-gray-700">
          <div className="px-6 py-5 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => {
                  handleScroll(link.section);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-base font-medium text-left transition-all hover:text-green-400 ${
                  activeSection === link.section ? 'text-green-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
