import config from '../config';

export default function LegalMentions() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Mentions <span className="gradient-text">Legales</span></h1>
          <p>Informations legales obligatoires</p>
        </div>

        <div className="legal-content">
          <h2>1. Editeur de l&apos;application</h2>
          <p>
            L&apos;application mobile <strong>{config.appName}</strong> est editee par :
          </p>
          <ul>
            <li><strong>Raison sociale</strong> : {config.appName}</li>
            <li><strong>Forme juridique</strong> : ---</li>
            <li><strong>Siege social</strong> : {config.contact.city}</li>
            <li><strong>Email</strong> : {config.contact.supportEmail}</li>
            <li><strong>Telephone</strong> : {config.contact.supportPhone}</li>
            <li><strong>Developpeur</strong> : MDN Action +229 01 61 22 81 65</li>
          </ul>

          <h2>2. Hebergement</h2>
          <p>Le site web est heberge par :</p>
          <ul>
            <li><strong>Hebergeur</strong> : Vercel Inc.</li>
            <li><strong>Adresse</strong> : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
            <li><strong>Site web</strong> : https://vercel.com</li>
          </ul>
          <p>Les serveurs backend sont heberges par : ---</p>

          <h2>3. Propriete intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de l&apos;application et du site web {config.appName} (textes, images,
            logo, design, code source, architecture) est la propriete exclusive de {config.appName}, sauf mention contraire explicite.
          </p>
          <p>
            Toute reproduction, representation, modification, publication ou adaptation de tout ou partie des elements de l&apos;application,
            quel que soit le moyen ou le procede utilise, est interdite sans l&apos;autorisation ecrite prealable de {config.appName}.
          </p>

          <h2>4. Marque tierce referencee</h2>
          <p>
            Le nom <strong>{config.platformName}</strong> est une marque deposee appartenant a son proprietaire respectif.
            {config.appName} n&apos;est ni affilie, ni sponsorise, ni approuve par cette societe. L&apos;utilisation de ce nom est faite a titre
            purement descriptif des services proposes.
          </p>

          <h2>5. Protection des donnees personnelles</h2>
          <p>
            Conformement a la reglementation en vigueur relative a la protection des donnees personnelles, l&apos;utilisateur dispose de droits sur ses donnees.
            Pour plus de details, consultez notre <strong>Politique de Confidentialite</strong>.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Le site web {config.appName} peut utiliser des cookies techniques necessaires a son bon fonctionnement.
            Aucun cookie publicitaire ou de tracage n&apos;est utilise sans le consentement explicite de l&apos;utilisateur.
          </p>

          <h2>7. Limitation de responsabilite</h2>
          <p>
            Les informations contenues sur ce site et dans l&apos;application sont fournies a titre indicatif.
            {config.appName} ne saurait garantir l&apos;exactitude, la completude ou l&apos;actualite des informations diffusees.
            L&apos;utilisateur est seul responsable de l&apos;utilisation qu&apos;il fait du service.
          </p>

          <h2>8. Droit applicable</h2>
          <p>
            Les presentes mentions legales sont regies par le droit beninois. En cas de litige,
            et apres tentative de resolution amiable, competence est attribuee aux tribunaux de Cotonou, Benin.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question relative aux presentes mentions legales :
            <strong> {config.contact.supportEmail}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
