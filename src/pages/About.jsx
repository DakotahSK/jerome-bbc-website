import { Target, Eye, Heart } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';
import CallToAction from '../components/home/CallToAction';

const About = () => {
  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Love',
      description: 'We believe in showing God\'s love through our actions, treating everyone with compassion and grace.',
    },
    {
      icon: <Target size={40} />,
      title: 'Purpose',
      description: 'We help people discover and fulfill their God-given purpose through service and ministry.',
    },
    {
      icon: <Eye size={40} />,
      title: 'Vision',
      description: 'We envision a community transformed by the gospel, where faith is lived out daily.',
    },
  ];

  const staff = [
    {
      name: 'Pastor Tim Knutson',
      role: 'Pastor',
      bio: 'Pastor Tim has been leading Jerome Bible Baptist Church since August 2015. His heart is to see people grow in their relationship with Christ and discover their purpose.',
    },
    {
      name: 'Joey Thoreson',
      role: 'Music Director',
      bio: 'Pastor Joey serves alongside Pastor Tim, supporting the ministry and shepherding the congregation with dedication to biblical truth and faithful service.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Our Church</h1>
            <p className="text-xl text-white/90">
              We're a community of believers committed to knowing God, growing together, and serving others.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Our Story"
              title="Where We've Been, Where We're Going"
              centered
            />

            {/* Bible Study Image */}
            <div className="mb-12">
              <img
                src="/bible-study.jpg"
                alt="Bible study at Jerome Bible Baptist Church"
                className="rounded-lg w-full h-[400px] object-cover shadow-xl"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Jerome Bible Baptist Church was established as an independent Baptist congregation on
                August 30, 1946, with 88 charter members. N.S. Anderson served as the first pastor,
                and the church officially adopted its name "Bible Baptist Church" on September 8, 1946.
              </p>
              <p>
                Our congregation initially met in the Civic Club rooms within the local library building
                for approximately eighteen months. In July 1947, construction began on a Quonset metal
                building located on Second Avenue East, and we held our first service there on December 14, 1947.
              </p>
              <p>
                As membership grew to 175, we expanded our facilities with additions including a furnace room,
                restrooms, baptistery, ten classrooms, nursery, and pastor's office. In 1967, Brother Everett
                Winfrey initiated our "KART radio ministry." We continued to grow, purchasing adjacent property
                in 1970 and completing basement construction in 1971 and 1972.
              </p>
              <p>
                In 1978, we acquired the Grange Hall for youth programs. A significant milestone came in 1981
                with the completion of our 450-seat auditorium, followed by a joyful mortgage-burning ceremony
                in 1984 that drew 316 people in celebration.
              </p>
              <p>
                Today, Jerome Bible Baptist Church continues to serve our community with the same dedication
                to biblical truth and authentic faith that our founders established nearly 80 years ago. We
                remain committed to preaching God's Word and serving as everyday people devoted to an amazing God.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-lighter">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="What Drives Us"
            title="Our Mission & Vision"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-green">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                All we do here at JBBC is planned to bring honor and glory to Him alone. We are a group of everyday people serving an amazing God, committed to preaching God's Word as it is, not how we want it to be.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-green">Our Belief</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe God loves you. The same timeless truths that are in the Bible are the same truths that will help us live in the world today. We stand firm on biblical literalism and God's unchanging Word.
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full text-secondary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Meet Our Team"
            title="Church Leadership"
            centered
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {staff.map((member, index) => (
              <Card key={index} hover>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-green font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Salvation / Gospel Message */}
      <CallToAction />
    </div>
  );
};

export default About;
