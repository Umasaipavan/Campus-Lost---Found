import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import RecentItemsSection from '../components/RecentItemsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CtaSection from '../components/CtaSection';

function Home() {
  return (
    <main className="page-shell">
      <HeroSection />
      <StatsSection />
      <RecentItemsSection />
      <HowItWorksSection />
      <CtaSection />
    </main>
  );
}

export default Home;
