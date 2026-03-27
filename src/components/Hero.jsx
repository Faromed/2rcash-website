import { FiDownload, FiArrowRight } from 'react-icons/fi';
import PhoneMockup from './PhoneMockup';
import config from '../config';

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              Disponible en Afrique de l&apos;Ouest
            </div>

            <h1 className="hero-title">
              Rechargez vos comptes de paris{' '}
              <span className="gradient-text">en quelques secondes</span>
            </h1>

            <p className="hero-subtitle">
              2RCASH est l&apos;application la plus rapide et sécurisée pour recharger
              vos comptes 1xBet et Melbet via Mobile Money. Paiement USSD direct,
              sans intermédiaire.
            </p>

            <div className="hero-buttons">
              <a
                href={config.apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large download-btn-apk"
              >
                <FiDownload /> Télécharger l&apos;APK
              </a>
              <a href="#fonctionnalites" className="btn btn-outline btn-large">
                En savoir plus <FiArrowRight />
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">30s</div>
                <div className="hero-stat-label">Rechargement moyen</div>
              </div>
              <div>
                <div className="hero-stat-value">24/7</div>
                <div className="hero-stat-label">Disponible en continu</div>
              </div>
              <div>
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">Sécurisé</div>
              </div>
            </div>
          </div>

          <div className="hero-phone">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}