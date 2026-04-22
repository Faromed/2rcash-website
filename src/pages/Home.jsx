import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import DownloadSection from '../components/DownloadSection';
import HomeFAQ from '../components/HomeFAQ';
import config from '../config';

export default function Home() {
  return (
    <>
      <Hero />
      {config.brandKey === '1xbet' ? <Features /> : <HowItWorks />}
      {config.brandKey === '1xbet' ? <HowItWorks /> : <Features />}
      <DownloadSection />
      <HomeFAQ />
    </>
  );
}
