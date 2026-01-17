import { Users, Calendar, Tent, BookOpen, Heart } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';

const StudentMinistry = () => {
  const offerings = [
    {
      name: 'Sunday School Classes',
      description: 'Dive deep into God\'s Word with other teens in an engaging and relevant Bible study environment.',
      icon: <BookOpen size={32} />,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      name: 'Monthly Activities',
      description: 'Fun events and activities designed to build friendships and create lasting memories while growing in faith.',
      icon: <Calendar size={32} />,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      name: 'Summer Camps',
      description: 'Life-changing camp experiences where students encounter God, make new friends, and grow spiritually.',
      icon: <Tent size={32} />,
      color: 'bg-green-500/10 text-green-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Student Ministries</h1>
            <p className="text-xl text-white/90">
              Challenging and preparing the next generation of men and women to live for Christ.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Photo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="/gallery/IMG_9916.JPEG"
              alt="JBBC youth group trip"
              className="rounded-lg w-full object-contain shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="7th - 12th Grade"
              title="A Place to Belong"
              centered
            />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The teen years can be confusing, difficult and challenging. But they can also be amazing. Our student ministry provides a safe community where teens can develop spiritually while creating meaningful friendships and memories.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We challenge students to live according to Christian principles while teaching that biblical principles provide practical answers for life's questions and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Program Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="What We Offer"
            title="Programs & Activities"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            {offerings.map((offering, index) => (
              <Card key={index} hover>
                <div className="p-8 text-center">
                  <div className={`rounded-lg p-4 w-fit mb-4 mx-auto ${offering.color}`}>
                    {offering.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{offering.name}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Our Approach"
              title="Building Faith & Friendships"
              centered
            />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Fellowship & Support</h3>
                <p className="text-gray-600">
                  Build supportive peer relationships in a safe community where you can be yourself and grow together.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Biblical Foundation</h3>
                <p className="text-gray-600">
                  Learn how God's Word provides practical guidance for the real challenges you face every day.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Caring Leaders</h3>
                <p className="text-gray-600">
                  Our leaders are committed to walking alongside you during these formative years of your life.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                  <Tent size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Life-Changing Experiences</h3>
                <p className="text-gray-600">
                  From summer camps to monthly activities, create memories and moments that will impact your faith forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Us!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're new or have been coming for a while, we'd love to have you be part of our student ministry.
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

export default StudentMinistry;
