import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import LegalMentions from './pages/LegalMentions';
import FAQPage from './pages/FAQPage';
import SupportPage from './pages/SupportPage';
import config from './config';

function App() {
  useEffect(() => {
    document.title = config.siteTitle;
    document.body.dataset.brand = config.brandKey;
    document.body.dataset.layout = config.layout.heroPanelStyle;

    document.documentElement.style.setProperty('--primary', config.theme.primary);
    document.documentElement.style.setProperty('--primary-dark', config.theme.primaryDark);
    document.documentElement.style.setProperty('--primary-light', config.theme.primaryLight);
    document.documentElement.style.setProperty('--accent', config.theme.accent);
    document.documentElement.style.setProperty('--accent-light', config.theme.accentLight);
    document.documentElement.style.setProperty('--accent-dark', config.theme.accentDark);
    document.documentElement.style.setProperty('--black', config.theme.black);
    document.documentElement.style.setProperty('--surface', config.theme.surface);
    document.documentElement.style.setProperty('--surface-light', config.theme.surfaceLight);
    document.documentElement.style.setProperty('--card', config.theme.card);
    document.documentElement.style.setProperty('--grey', config.theme.textMuted);
    document.documentElement.style.setProperty('--brand-outline', config.theme.outline);

    const descriptionTag = document.querySelector('meta[name="description"]');

    if (descriptionTag) {
      descriptionTag.setAttribute('content', config.siteDescription);
    }

    return () => {
      delete document.body.dataset.brand;
      delete document.body.dataset.layout;
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/conditions-generales" element={<TermsOfUse />} />
          <Route path="/mentions-legales" element={<LegalMentions />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
