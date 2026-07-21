import HeroBanner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import CoreBenefits from '../components/Benefits';
import StatsShowcase from '../components/StatsShowcase';
import FAQSection from '../components/FAQSection';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <HowItWorks />
      <CoreBenefits />
      <StatsShowcase />
      <FAQSection />
      <Newsletter />
    </>
  );
};

export default Home;