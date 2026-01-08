import { Clock } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import Card from '../shared/Card';
import useChurchData from '../../hooks/useChurchData';

const ServiceTimes = () => {
  const { serviceTimes, isLoading } = useChurchData();

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Loading service times...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Join Us"
          title="Service Times"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {serviceTimes.map((service, index) => (
            <Card key={index} hover className="p-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary mb-3">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-secondary mb-1">{service.time}</p>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
