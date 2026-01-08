import { Headphones, Youtube, Facebook } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

const Sermons = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Sermons & Messages</h1>
            <p className="text-xl text-white/90">
              Be encouraged, challenged, and inspired by biblical teaching that applies to everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Sermon Audio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Listen Anytime"
            title="Sermon Audio Archive"
            centered
          />
          <div className="max-w-3xl mx-auto text-center mt-12">
            <div className="bg-accent rounded-lg p-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full text-secondary mb-6">
                <Headphones size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-charcoal">Browse Our Complete Sermon Library</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Access our full collection of sermon audio recordings. Listen to messages from Pastor Tim Knutson and guest speakers, organized by date and series.
              </p>
              <a
                href="https://www.sermonaudio.com/broadcasters/jeromebbc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  className="text-white font-semibold px-8 py-4 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
                  style={{ backgroundColor: '#028A0F' }}
                >
                  <Headphones size={24} />
                  Browse Sermon Audio
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Watch Live Online */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              subtitle="Join Us Live"
              title="Watch Live Online"
              centered
            />
            <p className="text-gray-600 mb-12 text-lg">
              Can't make it to church in person? Join us online for live services every Sunday.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* YouTube */}
              <Card hover>
                <a
                  href="https://www.youtube.com/@jeromebiblebaptistchurch4722/streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full text-red-600 mb-4">
                    <Youtube size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">YouTube</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Watch live streams on our YouTube channel
                  </p>
                  <Button variant="outline" className="w-full">
                    Watch on YouTube
                  </Button>
                </a>
              </Card>

              {/* Facebook */}
              <Card hover>
                <a
                  href="https://facebook.com/134377019947130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full text-blue-600 mb-4">
                    <Facebook size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Facebook</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Join us live on Facebook
                  </p>
                  <Button variant="outline" className="w-full">
                    Watch on Facebook
                  </Button>
                </a>
              </Card>

              {/* X (Twitter) */}
              <Card hover>
                <a
                  href="https://x.com/bbcJerome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900/10 rounded-full text-gray-900 mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">X (Twitter)</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Follow us and stay updated on X
                  </p>
                  <Button variant="outline" className="w-full">
                    Follow on X
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
