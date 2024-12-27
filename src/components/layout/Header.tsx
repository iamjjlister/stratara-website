import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-stratara-navy text-stratara-platinum py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-light tracking-stratara text-2xl">
                STRATARA
              </span>
              <div className="h-px w-12 bg-stratara-bronze ml-4 hidden sm:block" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-8">
            <a 
              href="/about" 
              className="text-stratara-platinum hover:text-stratara-bronze transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="/services" 
              className="text-stratara-platinum hover:text-stratara-bronze transition-colors duration-200"
            >
              Services
            </a>
            <a 
              href="/contact" 
              className="text-stratara-platinum hover:text-stratara-bronze transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stratara-platinum hover:text-stratara-bronze transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/about"
                className="text-stratara-platinum hover:text-stratara-bronze transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/services"
                className="text-stratara-platinum hover:text-stratara-bronze transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="/contact"
                className="text-stratara-platinum hover:text-stratara-bronze transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;