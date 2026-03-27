export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Politique de <span className="gradient-text">Confidentialité</span></h1>
          <p>Dernière mise à jour : mars 2025</p>
        </div>

        <div className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            La présente politique de confidentialité décrit comment <strong>2RCASH</strong> collecte,
            utilise, stocke et protège vos données personnelles lorsque vous utilisez notre application
            mobile et nos services associés.
          </p>
          <p>
            En utilisant l&apos;application 2RCASH, vous acceptez les pratiques décrites dans cette politique.
            Nous vous encourageons à la lire attentivement.
          </p>

          <h2>2. Données collectées</h2>
          <p>Nous collectons les types de données suivants :</p>
          <ul>
            <li><strong>Données d&apos;identification</strong> : nom, prénom, adresse email, numéro de téléphone, pays de résidence.</li>
            <li><strong>Données de transaction</strong> : identifiants de compte de paris, montants, historique des transactions, moyens de paiement utilisés.</li>
            <li><strong>Données techniques</strong> : adresse IP, type d&apos;appareil, version du système d&apos;exploitation, identifiant unique de l&apos;appareil.</li>
            <li><strong>Données d&apos;utilisation</strong> : fréquence d&apos;utilisation, fonctionnalités utilisées, interactions avec l&apos;application.</li>
          </ul>

          <h2>3. Utilisation des données</h2>
          <p>Vos données personnelles sont utilisées pour :</p>
          <ul>
            <li>Créer et gérer votre compte utilisateur.</li>
            <li>Traiter vos transactions de rechargement et de retrait.</li>
            <li>Vous envoyer des notifications relatives à vos transactions.</li>
            <li>Améliorer nos services et l&apos;expérience utilisateur.</li>
            <li>Prévenir la fraude et assurer la sécurité de la plateforme.</li>
            <li>Respecter nos obligations légales et réglementaires.</li>
          </ul>

          <h2>4. Stockage et sécurité</h2>
          <p>
            Vos données sont stockées sur des serveurs sécurisés. Nous mettons en œuvre des mesures de
            sécurité techniques et organisationnelles appropriées, notamment :
          </p>
          <ul>
            <li>Chiffrement des communications via HTTPS/TLS.</li>
            <li>Hachage des mots de passe avec bcrypt.</li>
            <li>Authentification par tokens JWT avec expiration.</li>
            <li>Stockage sécurisé des données sensibles sur l&apos;appareil (Flutter Secure Storage).</li>
            <li>Journalisation des accès et des actions sensibles.</li>
          </ul>

          <h2>5. Partage des données</h2>
          <p>
            Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
          </p>
          <ul>
            <li><strong>FedaPay</strong> : notre prestataire de paiement, pour le traitement des transactions Mobile Money.</li>
            <li><strong>Cashdeck</strong> : pour le rechargement automatique des comptes de paris.</li>
            <li><strong>Autorités compétentes</strong> : en cas d&apos;obligation légale ou de demande judiciaire.</li>
          </ul>

          <h2>6. Vos droits</h2>
          <p>
            Conformément à la réglementation en vigueur, vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d&apos;accès à vos données personnelles.</li>
            <li>Droit de rectification des données inexactes.</li>
            <li>Droit de suppression de votre compte et de vos données.</li>
            <li>Droit d&apos;opposition au traitement de vos données.</li>
            <li>Droit à la portabilité de vos données.</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous à : <strong>contact2rcash@gmail.com</strong>
          </p>

          <h2>7. Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées pendant toute la durée de votre utilisation
            de l&apos;application, et jusqu&apos;à 3 ans après la dernière activité sur votre compte.
            Les données de transaction sont conservées pendant 5 ans conformément aux obligations légales.
          </p>

          <h2>8. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
            Toute modification sera notifiée via l&apos;application. La poursuite de l&apos;utilisation de
            l&apos;application après notification vaut acceptation des modifications.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question relative à cette politique de confidentialité, contactez-nous :
          </p>
          <ul>
            <li>Email : <strong>contact2rcash@gmail.com</strong></li>
            <li>Adresse : Cotonou, Bénin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}