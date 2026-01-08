import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Navigation } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';
import ContactForm from '../components/forms/ContactForm';
import Button from '../components/shared/Button';
import useChurchData from '../hooks/useChurchData';

const Contact = () => {
  const [showMapOptions, setShowMapOptions] = useState(false);
  const { contact } = useChurchData();

  const address = contact?.address?.full || '';

  const openAppleMaps = () => {
    const url = `http://maps.apple.com/?daddr=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Address',
      details: [contact?.address?.line1 || '', contact?.address?.line2 || '', `${contact?.address?.city || ''}, ${contact?.address?.state || ''} ${contact?.address?.zip || ''}`],
      color: 'bg-blue-500/10 text-blue-600',
      link: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
      isExternal: true,
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      details: [`Office: ${contact?.phone || ''}`],
      color: 'bg-green-500/10 text-green-600',
      link: `tel:${contact?.phone?.replace(/[^0-9]/g, '') || ''}`,
      isExternal: false,
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      details: [`General: ${contact?.email || ''}`],
      color: 'bg-purple-500/10 text-purple-600',
      link: `mailto:${contact?.email || ''}`,
      isExternal: false,
    },
    {
      icon: <Clock size={28} />,
      title: 'Office Hours',
      details: [contact?.officeHours?.days || '', contact?.officeHours?.hours || '', contact?.officeHours?.closed || ''],
      color: 'bg-orange-500/10 text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90">
              We'd love to hear from you! Whether you have questions, need prayer, or just want to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} hover className="p-6">
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.isExternal ? "_blank" : undefined}
                    rel={info.isExternal ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <div className={`rounded-lg p-3 w-fit mb-4 ${info.color}`}>
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm hover:text-primary transition-colors">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </a>
                ) : (
                  <>
                    <div className={`rounded-lg p-3 w-fit mb-4 ${info.color}`}>
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <SectionTitle
                subtitle="Send a Message"
                title="Contact Form"
              />
              <ContactForm />
            </div>

            <div>
              <SectionTitle
                subtitle="Visit Us"
                title="Find Our Location"
              />
              <Card className="mb-6 overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps?q=132+2nd+Ave+E,+Jerome,+ID+83338&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jerome Bible Baptist Church Location"
                ></iframe>
              </Card>

              {/* Get Directions Button */}
              <div className="mb-8">
                {!showMapOptions ? (
                  <Button
                    variant="green"
                    onClick={() => setShowMapOptions(true)}
                    className="w-full"
                  >
                    <Navigation size={20} className="mr-2" />
                    Get Directions
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <p className="text-gray-600 font-medium text-center mb-3">Choose your map app:</p>
                    <button
                      onClick={openAppleMaps}
                      className="w-full bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      Apple Maps
                    </button>
                    <button
                      onClick={openGoogleMaps}
                      className="w-full text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#028A0F' }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      Google Maps
                    </button>
                  </div>
                )}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
                <p className="text-gray-600 mb-6">
                  Follow us on social media to stay updated on events, announcements, and inspirational content.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/134377019947130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-500/10 hover:bg-blue-500 text-blue-600 hover:text-white rounded-lg transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.youtube.com/@jeromebiblebaptistchurch4722/streams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded-lg transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href="https://x.com/bbcJerome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-900/10 hover:bg-gray-900 text-gray-900 hover:text-white rounded-lg transition-all"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
