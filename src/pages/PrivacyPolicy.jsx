import config from '../config';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Politique de <span className="gradient-text">Confidentialite</span></h1>
          <p>Derniere mise a jour : avril 2026</p>
        </div>

        <div className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            La presente politique de confidentialite decrit comment <strong>{config.appName}</strong> collecte,
            utilise, stocke et protege vos donnees personnelles lorsque vous utilisez notre application mobile et nos services associes.
          </p>
          <p>
            En utilisant l&apos;application {config.appName}, vous acceptez les pratiques decrites dans cette politique.
            Nous vous encourageons a la lire attentivement.
          </p>

          <h2>2. Donnees collectees</h2>
          <p>Nous collectons les types de donnees suivants :</p>
          <ul>
            <li><strong>Donnees d&apos;identification</strong> : nom, prenom, adresse email, numero de telephone, pays de residence.</li>
            <li><strong>Donnees de transaction</strong> : identifiants de compte {config.platformName}, montants, historique des transactions, moyens de paiement utilises.</li>
            <li><strong>Donnees techniques</strong> : adresse IP, type d&apos;appareil, version du systeme d&apos;exploitation, identifiant unique de l&apos;appareil.</li>
            <li><strong>Donnees d&apos;utilisation</strong> : frequence d&apos;utilisation, fonctionnalites utilisees, interactions avec l&apos;application.</li>
          </ul>

          <h2>3. Utilisation des donnees</h2>
          <p>Vos donnees personnelles sont utilisees pour :</p>
          <ul>
            <li>Creer et gerer votre compte utilisateur.</li>
            <li>Traiter vos transactions de rechargement et de retrait.</li>
            <li>Vous envoyer des notifications relatives a vos transactions.</li>
            <li>Ameliorer nos services et l&apos;experience utilisateur.</li>
            <li>Prevenir la fraude et assurer la securite de la plateforme.</li>
            <li>Respecter nos obligations legales et reglementaires.</li>
          </ul>

          <h2>4. Stockage et securite</h2>
          <p>
            Vos donnees sont stockees sur des serveurs securises. Nous mettons en oeuvre des mesures de securite techniques et organisationnelles appropriees,
            notamment le chiffrement des communications, l&apos;authentification securisee et la journalisation des actions sensibles.
          </p>

          <h2>5. Partage des donnees</h2>
          <p>Nous ne vendons jamais vos donnees personnelles. Nous pouvons les partager avec :</p>
          <ul>
            <li><strong>Prestataires de paiement</strong> : pour le traitement des transactions Mobile Money.</li>
            <li><strong>Prestataires techniques</strong> : pour permettre le rechargement automatique et l&apos;hebergement du service.</li>
            <li><strong>Autorites competentes</strong> : en cas d&apos;obligation legale ou de demande judiciaire.</li>
          </ul>

          <h2>6. Vos droits</h2>
          <p>Conformement a la reglementation en vigueur, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d&apos;acces a vos donnees personnelles.</li>
            <li>Droit de rectification des donnees inexactes.</li>
            <li>Droit de suppression de votre compte et de vos donnees.</li>
            <li>Droit d&apos;opposition au traitement de vos donnees.</li>
            <li>Droit a la portabilite de vos donnees.</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous a : <strong>{config.contact.supportEmail}</strong>
          </p>

          <h2>7. Duree de conservation</h2>
          <p>
            Vos donnees personnelles sont conservees pendant toute la duree de votre utilisation de l&apos;application,
            et jusqu&apos;a 3 ans apres la derniere activite sur votre compte. Les donnees de transaction sont conservees pendant 5 ans
            conformement aux obligations legales.
          </p>

          <h2>8. Modifications</h2>
          <p>
            Nous nous reservons le droit de modifier cette politique de confidentialite a tout moment.
            Toute modification sera notifiee via l&apos;application. La poursuite de l&apos;utilisation de l&apos;application apres notification vaut acceptation des modifications.
          </p>

          <h2>9. Contact</h2>
          <p>Pour toute question relative a cette politique de confidentialite, contactez-nous :</p>
          <ul>
            <li>Email : <strong>{config.contact.supportEmail}</strong></li>
            <li>Adresse : {config.contact.city}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
