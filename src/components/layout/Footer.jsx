import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Youtube } from 'lucide-react';
import useChurchData from '../../hooks/useChurchData';

const Footer = () => {
  const { contact, social } = useChurchData();

  return (
    <footer className="text-white" style={{ backgroundColor: '#026b0c' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <img
                src="/logo-white.png"
                alt="Jerome Bible Baptist Church"
                className="h-20 w-auto mb-3"
              />
            </div>
            <p className="text-gray-300 text-sm">
              A group of everyday people serving an amazing God. God loves you, and we'd love to have you join us!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin size={18} className="text-green mt-1 flex-shrink-0" />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact?.address?.full || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {contact?.address?.line2}<br />{contact?.address?.city}, {contact?.address?.state} {contact?.address?.zip}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={18} className="text-green flex-shrink-0" />
                <a href={`tel:${contact?.phone?.replace(/[^0-9]/g, '')}`} className="hover:text-secondary transition-colors">
                  {contact?.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={18} className="text-green flex-shrink-0" />
                <a href={`mailto:${contact?.email}`} className="hover:text-secondary transition-colors">
                  {contact?.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Service Times</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">View all service times</Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {social?.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green transition-colors" aria-label="Facebook">
                  <Facebook size={22} />
                </a>
              )}
              {social?.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green transition-colors" aria-label="X">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {social?.youtube && (
                <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green transition-colors" aria-label="YouTube">
                  <Youtube size={22} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center text-sm" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>
          <p>&copy; {new Date().getFullYear()} Jerome Bible Baptist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
