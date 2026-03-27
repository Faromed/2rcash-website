import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';

const allFaqs = [
  {
    category: 'Général',
    items: [
      {
        q: "Qu'est-ce que 2RCASH ?",
        a: "2RCASH est une application mobile innovante qui permet de recharger automatiquement vos comptes de paris sportifs (1xBet et Melbet) via Mobile Money en Afrique de l'Ouest. Notre service est rapide, sécurisé et entièrement automatisé.",
      },
      {
        q: "Dans quels pays 2RCASH est-il disponible ?",
        a: "2RCASH est actuellement disponible dans plusieurs pays d'Afrique de l'Ouest, notamment le Bénin, le Togo, la Côte d'Ivoire et le Sénégal. Nous travaillons à l'expansion vers d'autres pays.",
      },
      {
        q: "L'application est-elle gratuite ?",
        a: "Oui, le téléchargement et l'utilisation de l'application sont gratuits. Des frais de service peuvent s'appliquer sur les transactions, ils sont toujours affichés clairement avant la confirmation.",
      },
    ],
  },
  {
    category: 'Dépôts',
    items: [
      {
        q: "Comment recharger mon compte 1xBet ou Melbet ?",
        a: "Ouvrez l'application, sélectionnez la plateforme (1xBet ou Melbet), entrez votre ID de compte et le montant souhaité, choisissez votre réseau Mobile Money et validez. Le paiement USSD sera envoyé sur votre téléphone pour confirmation.",
      },
      {
        q: 'Quel est le montant minimum de dépôt ?',
        a: "Le montant minimum de dépôt est de 100 FCFA. Vous pouvez utiliser les boutons rapides (+500, +1000, +5000) pour sélectionner facilement un montant.",
      },
      {
        q: "Combien de temps prend un dépôt ?",
        a: "Un dépôt est généralement traité en moins de 30 secondes après la validation du paiement USSD. Vous recevez une notification push dès que le rechargement est effectué sur votre compte de paris.",
      },
      {
        q: "Mon dépôt a échoué, que faire ?",
        a: "En cas d'échec, vérifiez d'abord votre solde Mobile Money et la validité de votre ID de compte. Si le montant a été débité sans rechargement, contactez immédiatement notre support avec votre numéro de transaction.",
      },
    ],
  },
  {
    category: 'Retraits',
    items: [
      {
        q: "Comment effectuer un retrait ?",
        a: "Pour retirer vos gains : 1) Générez un code de retrait sur votre plateforme de paris (1xBet ou Melbet). 2) Ouvrez 2RCASH et allez dans l'onglet Retrait. 3) Remplissez le formulaire avec votre ID, le code de retrait, le montant et votre numéro Mobile Money. 4) Soumettez la demande.",
      },
      {
        q: "Combien de temps prend un retrait ?",
        a: "Les demandes de retrait sont traitées manuellement par notre équipe dans un délai maximum de 24 heures ouvrables. Vous recevez une notification push dès que votre retrait est validé et envoyé.",
      },
      {
        q: "Quel est le montant minimum de retrait ?",
        a: "Le montant minimum de retrait est de 1 000 FCFA.",
      },
    ],
  },
  {
    category: 'Sécurité',
    items: [
      {
        q: "Mes données sont-elles en sécurité ?",
        a: "Absolument. Nous utilisons les meilleures pratiques de sécurité : chiffrement HTTPS pour toutes les communications, hachage bcrypt pour les mots de passe, authentification JWT avec expiration, stockage sécurisé sur l'appareil, et journalisation complète des actions.",
      },
      {
        q: "Que faire si j'oublie mon mot de passe ?",
        a: "Sur l'écran de connexion, cliquez sur 'Mot de passe oublié ?'. Entrez votre adresse email et vous recevrez un lien de réinitialisation. Suivez les instructions dans l'email pour créer un nouveau mot de passe.",
      },
      {
        q: "Comment protéger mon compte ?",
        a: "Utilisez un mot de passe fort et unique, ne partagez jamais vos identifiants, déconnectez-vous sur les appareils partagés, et signalez immédiatement toute activité suspecte à notre support.",
      },
    ],
  },
  {
    category: 'Comptes Favoris',
    items: [
      {
        q: "Qu'est-ce qu'un compte favori ?",
        a: "Les comptes favoris vous permettent d'enregistrer vos ID de comptes de paris fréquemment utilisés avec un libellé personnalisé. Ainsi, vous n'avez plus à les retaper à chaque transaction.",
      },
      {
        q: "Combien de comptes favoris puis-je enregistrer ?",
        a: "Vous pouvez enregistrer jusqu'à 5 comptes favoris par plateforme (5 pour 1xBet et 5 pour Melbet).",
      },
    ],
  },
];

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
          <p>Trouvez toutes les réponses à vos questions sur 2RCASH</p>
        </div>

        <div className="faq-list">
          {allFaqs.map((cat, catIdx) => (
            <div key={catIdx} style={{ marginBottom: 40 }}>
              <h2 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'var(--accent)',
                marginBottom: 16
              }}>
                {cat.category}
              </h2>
              {cat.items.map((faq, itemIdx) => {
                const key = `${catIdx}-${itemIdx}`;
                const isOpen = openIndexes[key];
                return (
                  <div className="faq-item" key={itemIdx}>
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
            Vous n&apos;avez pas trouvé la réponse à votre question ?
          </p>
          <Link to="/support" className="btn btn-primary">
            Contacter le support <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}