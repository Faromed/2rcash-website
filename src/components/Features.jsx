import {
  FiZap, FiShield, FiStar,
  FiBell, FiTarget, FiHeadphones
} from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import config from '../config';

const iconMap = {
  instant: <FiZap />,
  security: <FiShield />,
  favorites: <FiStar />,
  notifications: <FiBell />,
  platform: <FiTarget />,
  support: <FiHeadphones />,
};

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section className="features section" id="fonctionnalites" ref={ref}>
      <div className="container">
        <div className="section-kicker reveal">{config.platformUppercase}</div>
        <h2 className="section-title reveal">
          Pourquoi choisir <span className="accent">{config.appName}</span> ?
        </h2>
        <p className="section-subtitle reveal">
          {config.featureIntro}
        </p>

        <div className="features-grid">
          {config.features.map((feature, index) => (
            <div className="feature-card reveal" key={feature.key} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="feature-card-index">0{index + 1}</div>
              <div className="feature-icon">{iconMap[feature.key]}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
