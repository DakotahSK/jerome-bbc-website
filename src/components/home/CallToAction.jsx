import { Heart, Cross } from 'lucide-react';
import Button from '../shared/Button';
import Card from '../shared/Card';
import SectionTitle from '../shared/SectionTitle';

const CallToAction = () => {
  const truths = [
    {
      number: '1',
      title: "God's Love",
      scripture: 'John 3:16',
      verse: '"For God so loved the world, that He gave His only begotten Son, that whosoever believeth in Him should not perish, but have everlasting life."',
    },
    {
      number: '2',
      title: 'Universal Sin',
      scripture: 'Romans 3:23',
      verse: '"For all have sinned, and come short of the glory of God."',
      note: 'Good works alone cannot make us acceptable to God.',
    },
    {
      number: '3',
      title: "Sin's Consequence",
      scripture: 'Romans 6:23',
      verse: '"For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord."',
      note: 'Death means separation from God.',
    },
    {
      number: '4',
      title: "Christ's Sacrifice",
      scripture: 'Romans 5:8',
      verse: '"But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us."',
    },
  ];

  return (
    <section id="salvation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="The Gospel"
          title="The Truth About Eternity"
          centered
        />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          True peace and purpose are found in a personal relationship with Jesus Christ.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {truths.map((truth, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {truth.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-charcoal">{truth.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-2">{truth.scripture}</p>
                  <p className="text-gray-700 italic mb-2 leading-relaxed text-sm">
                    {truth.verse}
                  </p>
                  {truth.note && (
                    <p className="text-gray-600 text-sm">{truth.note}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Salvation */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-accent border-2 border-secondary/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Ask Jesus Christ to Be Your Savior</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "For whosoever shall call upon the name of the Lord shall be saved."
              </p>
              <p className="text-sm font-semibold text-primary mb-6">Romans 10:13</p>
              <p className="text-gray-600 mb-6">
                If you would like to know more about beginning a relationship with Jesus Christ,
                we would love to talk with you.
              </p>
              <a href="/contact">
                <button
                  className="text-white font-semibold px-8 py-4 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
                  style={{ backgroundColor: '#028A0F' }}
                >
                  Contact Us
                </button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
