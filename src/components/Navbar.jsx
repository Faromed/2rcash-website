import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (e, sectionId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">2R</div>
          <span>2R<span className="logo-cash">CASH</span></span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
          <a href="/#fonctionnalites" onClick={(e) => handleNavClick(e, 'fonctionnalites')}>Fonctionnalités</a>
          <a href="/#telecharger" onClick={(e) => handleNavClick(e, 'telecharger')}>Télécharger</a>
          <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
          <Link to="/support" className={location.pathname === '/support' ? 'active' : ''}>Support</Link>
          <a href="/apk/2rcash.apk" download className="btn btn-primary navbar-cta">
            <FiDownload /> APK
          </a>
        </div>

        <button
          className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar-mobile ${mobileOpen ? 'show' : ''}`}>
        <Link to="/">Accueil</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/support">Support</Link>
        <Link to="/politique-de-confidentialite">Confidentialité</Link>
        <Link to="/conditions-generales">CGU</Link>
        <a href="/apk/2rcash.apk" download className="btn btn-primary">
          <FiDownload /> Télécharger la version Android
        </a>
      </div>
    </nav>
  );
}