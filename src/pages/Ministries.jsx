import { Users, Baby, Sparkles, BookOpen, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

const Ministries = () => {
  const ministries = [
    {
      name: 'Children\'s Ministries',
      icon: <Baby size={40} />,
      ageGroup: 'Ages 4 through 6th Grade',
      description: 'Master Clubs - We teach and train kids with principles from God\'s Word through games, achievement awards, and special events.',
      meetingTime: 'Sundays during services',
      color: 'bg-blue-500/10 text-blue-600',
      link: '/ministries/childrens',
    },
    {
      name: 'Student Ministries',
      icon: <Sparkles size={40} />,
      ageGroup: 'Youth & Teenagers',
      description: 'We challenge and prepare the next generation of men and women to live for Christ through fellowship, encouragement, and equipping for spiritual growth.',
      meetingTime: 'Contact for details',
      color: 'bg-purple-500/10 text-purple-600',
      link: '/ministries/students',
    },
    {
      name: 'Adult Ministries',
      icon: <Users size={40} />,
      ageGroup: 'Adults',
      description: 'Various classes and groups enabling adults to connect, learn and grow in your relationship with God and with others.',
      meetingTime: 'Sundays & Wednesdays',
      color: 'bg-green-500/10 text-green-600',
      link: '/ministries/adults',
    },
    {
      name: 'Worldwide Missions',
      icon: <Globe size={40} />,
      ageGroup: 'All Ages',
      description: 'Spreading the gospel globally through prayer and financial support. We organize an annual short mission trip and encourage congregation-wide participation.',
      meetingTime: 'Ongoing support',
      color: 'bg-teal-500/10 text-teal-600',
      link: '/ministries/missions',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Ministries & Programs</h1>
            <p className="text-xl text-white/90">
              Find your place to connect, grow, and serve. There's a place for everyone at Jerome Bible Baptist Church.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Get Involved"
            title="Our Ministries"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} hover>
                <div className="p-8">
                  <div className={`rounded-lg p-4 w-fit mb-4 ${ministry.color}`}>
                    {ministry.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{ministry.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">
                    {ministry.ageGroup}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {ministry.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold text-charcoal">Meets:</span> {ministry.meetingTime}
                    </p>
                  </div>
                  {ministry.link ? (
                    <Link to={ministry.link}>
                      <Button variant="outline" className="mt-6 w-full">
                        Learn More
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="mt-6 w-full">
                      Learn More
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
