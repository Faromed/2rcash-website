import useScrollReveal from '../hooks/useScrollReveal';
import config from '../config';

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section className="how-it-works section" id="comment-ca-marche" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Comment <span className="accent">ca marche</span> ?
        </h2>
        <p className="section-subtitle reveal">
          Trois etapes simples pour recharger votre compte {config.platformName}.
        </p>

        <div className="steps">
          {config.steps.map((step, index) => (
            <div className="step reveal" key={step.num} style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
