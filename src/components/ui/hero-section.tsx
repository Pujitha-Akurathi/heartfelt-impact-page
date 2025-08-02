import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-volunteers.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Volunteers making a difference in the community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-section"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Hope,
            <span className="block bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              Changing Lives
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Together, we're creating lasting impact in communities around the world. 
            Join us in our mission to bring hope, opportunity, and positive change to those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero text-lg">
              Join Our Mission
            </Button>
            <Button className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default HeroSection;
