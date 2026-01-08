import { Calendar, Clock, MapPin } from 'lucide-react';
import Card from '../shared/Card';
import SectionTitle from '../shared/SectionTitle';
import useChurchData from '../../hooks/useChurchData';

const UpcomingEvents = () => {
  const { events, isLoading } = useChurchData();

  if (isLoading) {
    return (
      <section className="py-20 bg-green-lighter">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Loading events...</p>
        </div>
      </section>
    );
  }

  if (!events || events.length === 0) {
    return (
      <section className="py-20 bg-green-lighter">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="What's Happening"
            title="Upcoming Events"
            centered
          />
          <p className="text-center text-gray-600 mt-8">No events scheduled at this time. Check back soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-green-lighter">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="What's Happening"
          title="Upcoming Events"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} hover>
              <div className="p-6">
                <div className="bg-green/10 rounded-lg p-4 mb-4">
                  <Calendar className="text-green" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-charcoal">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar size={16} className="text-green" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock size={16} className="text-green" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin size={16} className="text-green" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
