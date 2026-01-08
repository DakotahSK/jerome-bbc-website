import Hero from '../components/home/Hero';
import WelcomeSection from '../components/home/WelcomeSection';
import ServiceTimes from '../components/home/ServiceTimes';
import UpcomingEvents from '../components/home/UpcomingEvents';
import SalvationTeaser from '../components/home/SalvationTeaser';
import GetDirections from '../components/home/GetDirections';

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <ServiceTimes />
      <UpcomingEvents />
      <SalvationTeaser />
      <GetDirections />
    </div>
  );
};

export default Home;
