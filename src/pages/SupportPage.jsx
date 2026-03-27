import { useState } from 'react';
import { FiMail, FiPhone, FiMessageCircle, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:support@2rcash.com?subject=${encodeURIComponent(
      `[Support 2RCASH] ${form.subject}`
    )}&body=${encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="support-page">
      <div className="container">
        <div className="legal-header">
          <h1>Support & <span className="gradient-text">Assistance</span></h1>
          <p>Notre équipe est là pour vous aider. N&apos;hésitez pas à nous contacter.</p>
        </div>

        <div className="support-grid">
          {/* Info contact */}
          <div className="support-info">
            <h3>Nos coordonnées</h3>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FiMail /></div>
              <div>
                <div className="support-contact-label">Email</div>
                <div className="support-contact-value">support@2rcash.com</div>
              </div>
            </div>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FiPhone /></div>
              <div>
                <div className="support-contact-label">Téléphone</div>
                <div className="support-contact-value">+229 60 00 00 00</div>
              </div>
            </div>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FaWhatsapp /></div>
              <div>
                <div className="support-contact-label">WhatsApp</div>
                <div className="support-contact-value">+229 60 00 00 00</div>
              </div>
            </div>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FiClock /></div>
              <div>
                <div className="support-contact-label">Horaires</div>
                <div className="support-contact-value">Lun - Sam : 8h - 22h</div>
              </div>
            </div>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FiMessageCircle /></div>
              <div>
                <div className="support-contact-label">Temps de réponse</div>
                <div className="support-contact-value">Sous 24h maximum</div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="support-form-card">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><FiCheckCircle /></div>
                <h4>Message envoyé !</h4>
                <p>
                  Votre client mail s&apos;est ouvert avec votre message pré-rempli.
                  Envoyez-le pour que notre équipe le reçoive.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  style={{ marginTop: 20 }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3>Envoyez-nous un message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Sujet</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Problème de dépôt">Problème de dépôt</option>
                      <option value="Problème de retrait">Problème de retrait</option>
                      <option value="Problème de compte">Problème de compte</option>
                      <option value="Signaler un bug">Signaler un bug</option>
                      <option value="Suggestion">Suggestion</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Décrivez votre problème ou votre question..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit">
                    <FiSend /> Envoyer le message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}