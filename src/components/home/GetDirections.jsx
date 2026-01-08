import { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';
import useChurchData from '../../hooks/useChurchData';

const GetDirections = () => {
  const [showMapOptions, setShowMapOptions] = useState(false);
  const { contact } = useChurchData();

  const address = contact?.address?.full || '';
  const coordinates = contact?.address?.coordinates || { lat: 42.7249, lng: -114.5189 };

  const openAppleMaps = () => {
    const url = `http://maps.apple.com/?daddr=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Visit Us"
          title="Get Directions"
          centered
        />

        <div className="max-w-5xl mx-auto">
          {/* Map Embed */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.7682842!2d-114.5214739!3d42.7249027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ac1f3e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2s132%202nd%20Ave%20E%2C%20Jerome%2C%20ID%2083338!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jerome Bible Baptist Church Location"
            ></iframe>
          </div>

          {/* Address and Directions Button */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="text-green" size={24} />
              <p className="text-xl text-gray-700 font-medium">{address}</p>
            </div>

            {!showMapOptions ? (
              <Button
                variant="green"
                size="lg"
                onClick={() => setShowMapOptions(true)}
              >
                <Navigation size={20} className="mr-2" />
                Get Directions
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <p className="text-gray-600 font-medium">Choose your map app:</p>
                <div className="flex gap-4">
                  <button
                    onClick={openAppleMaps}
                    className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Apple Maps
                  </button>
                  <button
                    onClick={openGoogleMaps}
                    className="text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                    style={{ backgroundColor: '#028A0F' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Google Maps
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetDirections;
