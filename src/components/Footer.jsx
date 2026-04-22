import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import config from '../config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ marginBottom: 4 }}>
              <div className="logo-icon logo-icon-brand">
                <img src={config.logoUrl} alt={`${config.platformName} logo`} className="brand-logo-img" />
              </div>
              <span>{config.platformUppercase}<span className="logo-cash"> by 2RCASH</span></span>
            </Link>
            <p>
              L&apos;application la plus rapide et securisee pour recharger vos comptes
              {' '}{config.platformName} via Mobile Money en Afrique de l&apos;Ouest.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" className="footer-social" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="footer-social" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="footer-social" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <Link to="/">Accueil</Link>
            <a href="/#fonctionnalites">Fonctionnalites</a>
            <a href="/#telecharger">Telecharger</a>
            <Link to="/faq">FAQ</Link>
            <Link to="/support">Support</Link>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <Link to="/politique-de-confidentialite">Politique de confidentialite</Link>
            <Link to="/conditions-generales">Conditions d&apos;utilisation</Link>
            <Link to="/mentions-legales">Mentions legales</Link>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <a href={`mailto:${config.contact.supportEmail}`}>
              <FiMail style={{ verticalAlign: 'middle', marginRight: 8 }} />
              {config.contact.supportEmail}
            </a>
            <a href={`tel:${config.contact.supportPhone.replace(/\s+/g, '')}`}>
              <FiPhone style={{ verticalAlign: 'middle', marginRight: 8 }} />
              {config.contact.supportPhone}
            </a>
            <a href="#">
              <FiMapPin style={{ verticalAlign: 'middle', marginRight: 8 }} />
              {config.contact.city}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} {config.appName}. Tous droits reserves.</p>
          <div className="footer-bottom-links">
            <Link to="/politique-de-confidentialite">Confidentialite</Link>
            <Link to="/conditions-generales">CGU</Link>
            <Link to="/mentions-legales">Mentions legales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
