import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import config from '../config';

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useScrollReveal();

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="faq section" id="faq" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Questions <span className="accent">frequentes</span>
        </h2>
        <p className="section-subtitle reveal">
          Trouvez rapidement les reponses a vos questions sur {config.appName} {config.platformName}.
        </p>

        <div className="faq-list">
          {config.homeFaqs.map((faq, index) => (
            <div className="faq-item reveal" key={faq.q} style={{ transitionDelay: `${index * 0.08}s` }}>
              <button className="faq-question" onClick={() => toggle(index)}>
                {faq.q}
                <FiChevronDown className={`faq-chevron ${openIndex === index ? 'open' : ''}`} />
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
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
