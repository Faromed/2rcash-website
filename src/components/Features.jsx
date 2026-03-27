import {
  FiZap, FiShield, FiStar,
  FiBell, FiTarget, FiHeadphones
} from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

const features = [
  {
    icon: <FiZap />,
    title: 'Rechargement Instantané',
    desc: 'Rechargez votre compte en moins de 30 secondes grâce au paiement USSD direct. Pas d\'interface intermédiaire.',
  },
  {
    icon: <FiShield />,
    title: 'Sécurité Maximale',
    desc: 'Vos données sont protégées par un chiffrement avancé (HTTPS, JWT, bcrypt). Votre sécurité est notre priorité.',
  },
  {
    icon: <FiStar />,
    title: 'Comptes Favoris',
    desc: 'Enregistrez jusqu\'à 5 comptes favoris par plateforme pour des rechargements encore plus rapides.',
  },
  {
    icon: <FiBell />,
    title: 'Notifications Temps Réel',
    desc: 'Recevez des notifications push pour chaque étape de votre transaction : paiement, rechargement, statut.',
  },
  {
    icon: <FiTarget />,
    title: 'Multi-Plateformes',
    desc: 'Rechargez à la fois vos comptes 1xBet et Melbet depuis une seule et même application.',
  },
  {
    icon: <FiHeadphones />,
    title: 'Support Réactif',
    desc: 'Notre équipe de support est disponible pour vous assister et répondre à toutes vos questions.',
  },
];

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section className="features section" id="fonctionnalites" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Pourquoi choisir <span className="accent">2RCASH</span> ?
        </h2>
        <p className="section-subtitle reveal">
          Une application pensée pour la rapidité, la sécurité et la simplicité d&apos;utilisation.
        </p>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}