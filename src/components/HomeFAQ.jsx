import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    q: "Qu'est-ce que 2RCASH ?",
    a: "2RCASH est une application mobile qui permet de recharger automatiquement vos comptes de paris sportifs (1xBet et Melbet) via Mobile Money en Afrique de l'Ouest. Le rechargement est instantané et entièrement automatisé.",
  },
  {
    q: 'Comment fonctionne le rechargement ?',
    a: "Vous sélectionnez votre plateforme (1xBet ou Melbet), entrez l'ID de votre compte et le montant souhaité, puis validez le paiement via USSD directement sur votre téléphone. Le rechargement est effectué automatiquement en quelques secondes.",
  },
  {
    q: 'Quels moyens de paiement sont acceptés ?',
    a: 'Nous acceptons les paiements via Mobile Money : MTN Mobile Money, Moov Money, Celtiis Money. Les réseaux disponibles dépendent de votre pays.',
  },
  {
    q: 'Combien de temps prend un dépôt ?',
    a: "Un dépôt est généralement traité en moins de 30 secondes après la validation du paiement USSD. Vous recevez une notification push dès que le rechargement est effectué.",
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: "Absolument. Nous utilisons un chiffrement avancé (HTTPS, JWT, bcrypt) pour protéger toutes vos données personnelles et financières. Aucune donnée sensible n'est stockée en clair.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useScrollReveal();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq section" id="faq" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Questions <span className="accent">fréquentes</span>
        </h2>
        <p className="section-subtitle reveal">
          Trouvez rapidement les réponses à vos questions sur 2RCASH.
        </p>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <button className="faq-question" onClick={() => toggle(i)}>
                {faq.q}
                <FiChevronDown className={`faq-chevron ${openIndex === i ? 'open' : ''}`} />
              </button>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <div className="faq-answer-content">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-more reveal">
          <Link to="/faq" className="btn btn-outline">
            Voir toutes les questions <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}