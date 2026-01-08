import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Button from '../shared/Button';

const SalvationTeaser = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full text-secondary mb-6">
            <Heart size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">The Truth About Eternity</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            True peace and purpose are found in a personal relationship with Jesus Christ. Discover the life-changing hope of the gospel.
          </p>
          <Link to="/about#salvation">
            <Button variant="green" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalvationTeaser;
