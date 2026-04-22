import { useState } from 'react';
import { FiMail, FiPhone, FiMessageCircle, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import config from '../config';

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${config.contact.supportEmail}?subject=${encodeURIComponent(
      `[Support ${config.appName} ${config.platformName}] ${form.subject}`
    )}&body=${encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nPlateforme: ${config.platformName}\n\n${form.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="support-page">
      <div className="container">
        <div className="legal-header">
          <h1>Support & <span className="gradient-text">Assistance</span></h1>
          <p>Notre equipe est la pour vous aider pour toutes vos operations {config.platformName}.</p>
        </div>

        <div className="support-grid">
          <div className="support-info">
            <h3>Nos coordonnees</h3>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FiMail /></div>
              <div>
                <div className="support-contact-label">Email</div>
                <div className="support-contact-value">{config.contact.supportEmail}</div>
              </div>
            </div>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FiPhone /></div>
              <div>
                <div className="support-contact-label">Telephone</div>
                <div className="support-contact-value">{config.contact.supportPhone}</div>
              </div>
            </div>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FaWhatsapp /></div>
              <div>
                <div className="support-contact-label">WhatsApp</div>
                <div className="support-contact-value">{config.contact.whatsapp}</div>
              </div>
            </div>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FiClock /></div>
              <div>
                <div className="support-contact-label">Horaires</div>
                <div className="support-contact-value">{config.contact.supportHours}</div>
              </div>
            </div>

            <div className="support-contact-item">
              <div className="support-contact-icon"><FiMessageCircle /></div>
              <div>
                <div className="support-contact-label">Temps de reponse</div>
                <div className="support-contact-value">{config.contact.responseTime}</div>
              </div>
            </div>
          </div>

          <div className="support-form-card">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><FiCheckCircle /></div>
                <h4>Message prepare !</h4>
                <p>
                  Votre client mail s&apos;est ouvert avec votre message pre-rempli.
                  Envoyez-le pour que notre equipe le recoive.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
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
                      <option value="">Selectionnez un sujet</option>
                      <option value="Probleme de depot">Probleme de depot</option>
                      <option value="Probleme de retrait">Probleme de retrait</option>
                      <option value="Probleme de compte">Probleme de compte</option>
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
                      placeholder={`Decrivez votre probleme ou votre question ${config.platformName}...`}
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
