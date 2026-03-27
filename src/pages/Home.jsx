import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import DownloadSection from '../components/DownloadSection';
import HomeFAQ from '../components/HomeFAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <DownloadSection />
      <HomeFAQ />
    </>
  );
}