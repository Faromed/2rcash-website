import { FiDownload, FiArrowRight, FiExternalLink } from 'react-icons/fi';
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

            <div className="hero-brand-strip">
              <div className="hero-brand-logo">
                <img src={config.logoUrl} alt={`${config.platformName} logo`} className="hero-brand-logo-img" />
              </div>
              <div>
                <div className="hero-brand-name">{config.platformUppercase}</div>
                <div className="hero-brand-caption">Version dediee {config.platformName}</div>
              </div>
            </div>

            <h1 className="hero-title">
              {config.hero.title}{' '}
              <span className="gradient-text">{config.hero.highlightedTitle}</span>
            </h1>

            <p className="hero-subtitle">{config.hero.subtitle}</p>

            <div className="hero-panel">
              <div className="hero-panel-eyebrow">{config.heroPanel.eyebrow}</div>
              <div className="hero-panel-title">{config.heroPanel.title}</div>
              <div className="hero-panel-list">
                {config.heroPanel.bullets.map((bullet) => (
                  <div className="hero-panel-item" key={bullet}>
                    <span className="hero-panel-dot" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-buttons">
              <span className="btn btn-primary btn-large btn-disabled download-btn-apk" aria-disabled="true">
                <FiDownload /> APK temporairement indisponible
              </span>
              <a
                href={config.temporaryLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-large download-alt-link"
              >
                <FiExternalLink /> {config.temporaryLinkLabel}
              </a>
              <a href="#fonctionnalites" className="btn btn-outline btn-large">
                En savoir plus <FiArrowRight />
              </a>
            </div>

            <div className="hero-stats">
              {config.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-phone">
            <div className="hero-showcase-card">
              <div className="hero-showcase-topline">Identite visuelle {config.platformName}</div>
              <div className="hero-showcase-title">Recharge rapide, style {config.platformUppercase}</div>
              <div className="hero-showcase-logo">
                <img src={config.logoUrl} alt={`${config.platformName} logo`} className="hero-showcase-logo-img" />
              </div>
            </div>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
