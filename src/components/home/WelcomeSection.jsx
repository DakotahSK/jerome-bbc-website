import { Link } from 'react-router-dom';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/handshake-welcome.jpg"
              alt="Welcome to Jerome Bible Baptist Church"
              className="rounded-lg h-[400px] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <SectionTitle
              subtitle="About Us"
              title="Our Story"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Jerome Bible Baptist Church was established as an independent Baptist congregation on
                August 30, 1946, with 88 charter members. For nearly 80 years, we've been committed to
                preaching God's Word and serving our community with dedication to biblical truth and authentic faith.
              </p>
              <p>
                All we do here at JBBC is planned to bring honor and glory to Him alone. We are a group of
                everyday people serving an amazing God, committed to preaching God's Word as it is, not how we want it to be.
              </p>
              <p>
                We believe God loves you. The same timeless truths that are in the Bible are the same truths
                that will help us live in the world today.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="green">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
