import { Globe, Heart, MapPin, Users, Church } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';

const WorldwideMissions = () => {
  const regions = [
    {
      name: 'Europe & Middle East',
      missionaries: [
        { location: 'Albania', names: 'Kirk & Bonnie King', website: 'balkanbaptistmissions.com' },
        { location: 'Germany', names: 'Fernando & Amy Padilla' },
        { location: 'Ireland', names: 'Tom & Carol Wallace' },
        { location: 'Romania', names: 'Garry & Nancy Matheny' },
        { location: 'Russia', names: 'Multiple missionaries' },
        { location: 'Spain', names: 'Arnold & Leslie Belasco', website: 'spainstakes.org' },
      ],
      icon: <Globe size={32} />,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      name: 'Asia & Pacific',
      missionaries: [
        { location: 'Australia', names: 'Larry & Dawn Nelson; Butch & Angie Schrope' },
        { location: 'Hawaii (Polynesian Islands)', names: 'Robert & Sondra Winters' },
        { location: 'Japan', names: 'Jonathan & Tabitha Burgett', website: 'burgettjapan.com' },
        { location: 'Korea', names: 'Benjamin & Jae Park', website: 'nowbythechurch.org' },
        { location: 'Papua New Guinea', names: 'Gary & Verda Keck; Kenny & Kalie Keck', website: 'kecktopng.com' },
        { location: 'Philippines', names: 'Bob & Sue Phillips; Mike & Sandie Reap' },
      ],
      icon: <Globe size={32} />,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      name: 'Africa & Americas',
      missionaries: [
        { location: 'Brazil', names: 'Gary & Janet Tomberlin', website: 'bbfi-southamerica.org/Tomberlin/' },
        { location: 'Honduras', names: 'Jason & Cassy Tate' },
        { location: 'Kenya', names: 'Billy & Crystal Coley', website: 'coleystokenya.com' },
        { location: 'South Africa', names: 'Jonathan & Katie Switzer' },
        { location: 'Vanuatu', names: 'Jim & Ari Hirtzel' },
      ],
      icon: <Globe size={32} />,
      color: 'bg-green-500/10 text-green-600',
    },
  ];

  const statesideMissions = [
    { name: 'Bible Baptist Church', location: 'Cuba, Missouri' },
    { name: 'Hillcrest Baptist Church', location: 'California' },
    { name: 'Berean Baptist Church', location: 'Walla Walla, Washington' },
    { name: 'Forest Hills Baptist Church', location: 'Maryland' },
    { name: 'Grandview Baptist Church', location: 'Driggs, Idaho' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Worldwide Missions</h1>
            <p className="text-xl text-white/90">
              Spreading the gospel globally through prayer and financial support for missionaries across multiple continents.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Our Mission"
              title="Taking the Gospel to the World"
              centered
            />
            <p className="text-gray-600 text-lg leading-relaxed">
              We support missionaries around the globe through prayer and financial partnership. From church plants in America to gospel work across continents, we're committed to making Christ known everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* International Missionaries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="International"
            title="Missionaries by Region"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {regions.map((region, index) => (
              <Card key={index}>
                <div className="p-8">
                  <div className={`rounded-lg p-4 w-fit mb-4 ${region.color}`}>
                    {region.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{region.name}</h3>
                  <div className="space-y-4">
                    {region.missionaries.map((missionary, idx) => (
                      <div key={idx} className="border-l-2 border-secondary pl-4">
                        <p className="font-semibold text-charcoal">{missionary.location}</p>
                        <p className="text-gray-600 text-sm">{missionary.names}</p>
                        {missionary.website && (
                          <a
                            href={`https://${missionary.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark text-xs"
                          >
                            {missionary.website}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stateside Missions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Church Plants"
            title="Stateside Missions"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {statesideMissions.map((church, index) => (
              <Card key={index} hover>
                <div className="p-6">
                  <div className="bg-secondary/10 rounded-lg p-3 w-fit mb-3">
                    <Church className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{church.name}</h3>
                  <p className="text-gray-600 text-sm flex items-center gap-1">
                    <MapPin size={14} className="text-secondary" />
                    {church.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Training"
              title="Educational Support"
              centered
            />
            <Card className="p-8 mt-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Heartland Baptist Bible College</h3>
              <p className="text-gray-600">Oklahoma City</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Missionary Application */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Apply"
              title="Missionary Application"
              centered
            />
            <Card className="p-8 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full text-secondary mb-4">
                  <Heart size={32} />
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Jerome Bible Baptist Church actively supports gospel preaching and church planting missions worldwide. If you are a missionary seeking support, we invite you to apply.
                </p>
                <Link
                  to="/ministries/missionary-application"
                  className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Complete Application Form
                </Link>
                <p className="text-sm text-gray-500 mt-4">
                  Note: If at any time you change your doctrines, field, or home church, we will re-evaluate our support.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Support Our Missionaries</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us in supporting these faithful missionaries through prayer and giving. Together, we can make a global impact for Christ.
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

export default WorldwideMissions;
