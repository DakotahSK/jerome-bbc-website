import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../shared/Button';
import GivingModal from '../shared/GivingModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGivingModalOpen, setIsGivingModalOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/ministries', label: 'Ministries' },
    { to: '/sermons', label: 'Sermons' },
    { to: '/contact', label: 'Contact' },
  ];

  const openGivingModal = (e) => {
    e.preventDefault();
    setIsGivingModalOpen(true);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="Jerome Bible Baptist Church"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-charcoal hover:text-green transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button onClick={openGivingModal}>
              <Button variant="green" size="sm">Give Online</Button>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-charcoal hover:text-green transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-charcoal hover:text-green transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={(e) => {
                  openGivingModal(e);
                  setIsMenuOpen(false);
                }}
                className="text-charcoal hover:text-green transition-colors font-medium py-2 text-left"
              >
                Give Online
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Giving Modal */}
      <GivingModal
        isOpen={isGivingModalOpen}
        onClose={() => setIsGivingModalOpen(false)}
        // Add your formId here once you get it from Tithe.ly
        // formId="YOUR-FORM-ID-HERE"
      />
    </header>
  );
};

export default Header;
