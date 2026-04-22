import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import config from '../config';

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenIndexes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Foire Aux <span className="gradient-text">Questions</span></h1>
          <p>Trouvez toutes les reponses a vos questions sur {config.appName} {config.platformName}</p>
        </div>

        <div className="faq-list">
          {config.faqCategories.map((category, catIdx) => (
            <div key={category.category} style={{ marginBottom: 40 }}>
              <h2
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}
              >
                {category.category}
              </h2>
              {category.items.map((faq, itemIdx) => {
                const key = `${catIdx}-${itemIdx}`;
                const isOpen = openIndexes[key];

                return (
                  <div className="faq-item" key={faq.q}>
                    <button className="faq-question" onClick={() => toggle(catIdx, itemIdx)}>
                      {faq.q}
                      <FiChevronDown className={`faq-chevron ${isOpen ? 'open' : ''}`} />
                    </button>
                    <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                      <div className="faq-answer-content">{faq.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'var(--grey)', marginBottom: 16 }}>
            Vous n&apos;avez pas trouve la reponse a votre question ?
          </p>
          <Link to="/support" className="btn btn-primary">
            Contacter le support <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
