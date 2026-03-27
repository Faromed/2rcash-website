import useScrollReveal from '../hooks/useScrollReveal';

const steps = [
  {
    num: '1',
    title: 'Choisissez votre plateforme',
    desc: 'Sélectionnez 1xBet ou Melbet directement depuis l\'écran d\'accueil de l\'application.',
  },
  {
    num: '2',
    title: 'Remplissez le formulaire',
    desc: 'Entrez votre ID de compte, le montant souhaité et votre numéro Mobile Money.',
  },
  {
    num: '3',
    title: 'Validez et c\'est fait !',
    desc: 'Confirmez le paiement USSD sur votre téléphone. Votre compte est rechargé automatiquement.',
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section className="how-it-works section" id="comment-ca-marche" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Comment <span className="accent">ça marche</span> ?
        </h2>
        <p className="section-subtitle reveal">
          Trois étapes simples pour recharger votre compte de paris sportifs.
        </p>

        <div className="steps">
          {steps.map((s, i) => (
            <div className="step reveal" key={i} style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="step-number">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}