import { Baby, Users, Heart, Shield } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';

const ChildrensMinistry = () => {
  const ageGroups = [
    {
      name: 'Nursery',
      age: 'Birth–2 Years',
      description: 'Trained staff offer a secure, clean environment with paging for parent peace of mind during services or adult classes.',
      icon: <Baby size={32} />,
      color: 'bg-pink-500/10 text-pink-600',
    },
    {
      name: 'Toddlers',
      age: '3–5 Years',
      description: 'Sunday school emphasizes foundational values like obedience, kindness, and sharing, alongside biblical concepts such as Jesus\'s love and God\'s purpose for each child.',
      icon: <Users size={32} />,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      name: 'Primary',
      age: '1st–3rd Grade',
      description: 'Classes feature games, crafts, and songs combined with accelerated Bible memorization and comprehension of significant scriptural truths.',
      icon: <Heart size={32} />,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      name: 'Juniors',
      age: '4th–6th Grade',
      description: 'High-energy classes focus on powerful biblical lessons, Scripture memory, interactive games, and peer friendships to create lasting spiritual impact.',
      icon: <Shield size={32} />,
      color: 'bg-green-500/10 text-green-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Children's Ministries</h1>
            <p className="text-xl text-white/90">
              We encourage and motivate children to honor God, their parents, and authorities with their attitudes and actions.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Photo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="/gallery/IMG_6328.JPEG"
              alt="Children's Christmas program at JBBC"
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
              subtitle="Sunday Programs"
              title="Engaging Programs for All Ages"
              centered
            />
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide engaging programs across all age groups, teaching and training kids with principles from God's Word through games, achievement awards, and special events.
            </p>
          </div>

          {/* Patch the Pirate Club */}
          <Card className="mb-12 max-w-3xl mx-auto">
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Patch the Pirate Club</h3>
              <p className="text-primary font-semibold text-sm mb-4">5 Years Old – 6th Grade</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join us every Wednesday during the summer for Patch the Pirate Club! Kids enjoy exciting adventures, music, and Bible lessons through this fun and engaging program.
              </p>
              <p className="text-secondary font-semibold">Every Wednesday in the Summer</p>
            </div>
          </Card>

          {/* Age Groups */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ageGroups.map((group, index) => (
              <Card key={index} hover>
                <div className="p-8">
                  <div className={`rounded-lg p-4 w-fit mb-4 ${group.color}`}>
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{group.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">
                    {group.age}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Our Commitment"
              title="Safe & Spiritual Growth"
              centered
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Trained Volunteers</h3>
                <p className="text-gray-600">
                  All volunteers are carefully interviewed, screened, and trained to provide the best care.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Fun & Engaging</h3>
                <p className="text-gray-600">
                  We emphasize both fun activities and serious spiritual development for lasting impact.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                  <Baby size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Age-Appropriate</h3>
                <p className="text-gray-600">
                  Learning that progresses in complexity as children grow in their faith journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Questions About Our Children's Programs?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to tell you more about our children's ministries and help you get your kids connected.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Call us:</span> <a href="tel:2083242804" className="text-primary hover:text-primary-dark">(208) 324-2804</a>
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

export default ChildrensMinistry;
