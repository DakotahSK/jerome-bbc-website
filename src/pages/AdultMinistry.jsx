import { BookOpen, Users, Heart, Coffee, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';

const AdultMinistry = () => {
  const programs = [
    {
      name: 'Sunday School Classes',
      description: 'Multiple educational programs including classes for Elementary ages, a Teen Class, and an Auditorium Class for adults.',
      icon: <BookOpen size={32} />,
      color: 'bg-blue-500/10 text-blue-600',
      meetingTime: 'Sundays at 10:00 AM',
    },
    {
      name: 'Personal Discipleship',
      description: 'The ABC\'s of Christian Growth - A structured discipleship program to help you grow in your faith. Also offering a 4 week in-home Bible Study about Jesus and why He is important.',
      icon: <Users size={32} />,
      color: 'bg-purple-500/10 text-purple-600',
      meetingTime: 'Contact for details',
    },
    {
      name: 'Ladies\' Fellowship',
      description: 'Monthly meetings to help women develop their spiritual relationship with God. Includes special events such as Mother/Daughter Banquets, Christmas parties, and a 2-day Ladies\' Conference every 18 months.',
      icon: <Heart size={32} />,
      color: 'bg-pink-500/10 text-pink-600',
      meetingTime: 'Second Tuesday at 7:00 PM',
    },
    {
      name: 'Men\'s Fellowship',
      description: 'Men gather for prayer breakfasts, cookouts, retreats, and fishing trips. A time to build strong Christian friendships and encourage one another.',
      icon: <Coffee size={32} />,
      color: 'bg-green-500/10 text-green-600',
      meetingTime: 'First Saturday at 8:00 AM',
    },
    {
      name: 'Senior Adults',
      description: 'Meaningful friendships and enjoyable activities specifically designed for our older members to connect and grow together.',
      icon: <Users size={32} />,
      color: 'bg-orange-500/10 text-orange-600',
      meetingTime: 'Contact for details',
    },
    {
      name: 'Community Outreach',
      description: 'Each week many of our members participate in volunteer community outreach involving Gospel sharing. Join us in making a difference in our community.',
      icon: <MapPin size={32} />,
      color: 'bg-teal-500/10 text-teal-600',
      meetingTime: 'Saturdays at 10:00 AM',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Adult Ministries</h1>
            <p className="text-xl text-white/90">
              Various classes and groups enabling adults to connect, learn, and grow in your relationship with God and with others.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Get Connected"
            title="Programs & Opportunities"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {programs.map((program, index) => (
              <Card key={index} hover>
                <div className="p-8">
                  <div className={`rounded-lg p-4 w-fit mb-4 ${program.color}`}>
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold text-charcoal">Meets:</span> {program.meetingTime}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Find Your Place</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're looking for Bible study, fellowship, or opportunities to serve, we have a place for you.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Questions?</span> Call us at <a href="tel:2083242804" className="text-primary hover:text-primary-dark">(208) 324-2804</a>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Visit us:</span> 132 2nd Ave East, Jerome, ID 83338
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdultMinistry;
