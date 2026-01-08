import Button from '../shared/Button';

const Hero = () => {
  return (
    <div className="relative bg-primary h-[600px] flex items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/90"></div>

      {/* Logo watermark in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden md:block">
        <img
          src="/logo-white.png"
          alt=""
          className="h-96 w-auto"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <img
            src="/logo-white.png"
            alt="Jerome Bible Baptist Church"
            className="h-24 md:h-32 w-auto mb-6"
          />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome Home
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Discover timeless truth that transforms lives. God's Word preached as it is, not as we want it to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.sermonaudio.com/broadcasters/jeromebbc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="green" size="lg">
                Watch Online
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
