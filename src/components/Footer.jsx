import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ marginBottom: 4 }}>
              <div className="logo-icon">2R</div>
              <span>2R<span className="logo-cash">CASH</span></span>
            </Link>
            <p>
              L&apos;application la plus rapide et sécurisée pour recharger vos comptes
              1xBet et Melbet via Mobile Money en Afrique de l&apos;Ouest.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" className="footer-social" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="footer-social" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="footer-social" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <Link to="/">Accueil</Link>
            <a href="/#fonctionnalites">Fonctionnalités</a>
            <a href="/#telecharger">Télécharger</a>
            <Link to="/faq">FAQ</Link>
            <Link to="/support">Support</Link>
          </div>

          {/* Légal */}
          <div className="footer-column">
            <h4>Légal</h4>
            <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link to="/conditions-generales">Conditions d&apos;utilisation</Link>
            <Link to="/mentions-legales">Mentions légales</Link>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:support@2rcash.com">
              <FiMail style={{ verticalAlign: 'middle', marginRight: 8 }} />
              support@2rcash.com
            </a>
            <a href="tel:+22960000000">
              <FiPhone style={{ verticalAlign: 'middle', marginRight: 8 }} />
              +229 60 00 00 00
            </a>
            <a href="#">
              <FiMapPin style={{ verticalAlign: 'middle', marginRight: 8 }} />
              Cotonou, Bénin
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} 2RCASH. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <Link to="/politique-de-confidentialite">Confidentialité</Link>
            <Link to="/conditions-generales">CGU</Link>
            <Link to="/mentions-legales">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}