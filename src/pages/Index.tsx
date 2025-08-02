import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/ui/hero-section';
import MissionSection from '@/components/ui/mission-section';
import ImpactSection from '@/components/ui/impact-section';
import AboutSection from '@/components/ui/about-section';
import VolunteerForm from '@/components/ui/volunteer-form';
import Footer from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <AboutSection />
      <VolunteerForm />
      <Footer />
    </div>
  );
};

export default Index;
