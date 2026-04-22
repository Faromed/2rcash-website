import config from '../config';

export default function TermsOfUse() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Conditions Generales <span className="gradient-text">d&apos;Utilisation</span></h1>
          <p>Derniere mise a jour : avril 2026</p>
        </div>

        <div className="legal-content">
          <h2>1. Objet</h2>
          <p>
            Les presentes Conditions Generales d&apos;Utilisation (CGU) regissent l&apos;acces et
            l&apos;utilisation de l&apos;application mobile <strong>{config.appName}</strong> et de l&apos;ensemble
            des services proposes. En utilisant l&apos;application, vous acceptez sans reserve les presentes CGU.
          </p>

          <h2>2. Description du service</h2>
          <p>
            {config.appName} est un service de rechargement automatique de comptes de paris sportifs
            dedie a <strong>{config.platformName}</strong> via Mobile Money. L&apos;application permet :
          </p>
          <ul>
            <li>Le rechargement automatique de comptes {config.platformName}.</li>
            <li>La soumission de demandes de retrait traitees manuellement.</li>
            <li>La gestion de comptes favoris pour faciliter les operations recurrentes.</li>
            <li>La consultation de l&apos;historique des transactions.</li>
          </ul>

          <h2>3. Conditions d&apos;acces</h2>
          <p>
            L&apos;utilisation de {config.appName} est reservee aux personnes majeures (18 ans et plus)
            residant dans les pays couverts par le service. L&apos;utilisateur s&apos;engage a fournir des informations exactes
            lors de l&apos;inscription et a maintenir la confidentialite de ses identifiants de connexion.
          </p>

          <h2>4. Inscription et compte</h2>
          <p>
            Pour utiliser les services, l&apos;utilisateur doit creer un compte en fournissant : nom,
            prenom, adresse email valide, numero de telephone, pays de residence et un mot de passe securise.
            Chaque utilisateur ne peut posseder qu&apos;un seul compte.
          </p>

          <h2>5. Tarification et paiement</h2>
          <ul>
            <li>Le montant minimum de depot est de <strong>100 FCFA</strong>.</li>
            <li>Le montant minimum de retrait est de <strong>1 000 FCFA</strong>.</li>
            <li>Des frais de service peuvent s&apos;appliquer et sont clairement affiches avant confirmation.</li>
            <li>Les paiements sont effectues via Mobile Money (MTN, Moov, Celtiis) selon le pays.</li>
          </ul>

          <h2>6. Processus de depot</h2>
          <p>
            Le depot s&apos;effectue en temps reel via le protocole USSD. Une fois le paiement valide par l&apos;utilisateur sur son telephone,
            le rechargement du compte {config.platformName} est declenche automatiquement.
            {config.appName} ne peut etre tenu responsable des delais lies aux operateurs de paiement ou a la plateforme {config.platformName}.
          </p>

          <h2>7. Processus de retrait</h2>
          <p>
            Les demandes de retrait sont traitees manuellement par notre equipe dans un delai maximum de <strong>24 heures</strong> ouvrables.
            L&apos;utilisateur doit fournir un code de retrait valide genere sur sa plateforme {config.platformName}.
          </p>

          <h2>8. Responsabilites de l&apos;utilisateur</h2>
          <ul>
            <li>L&apos;utilisateur est responsable de l&apos;exactitude des informations fournies (ID de compte, montants, numeros de telephone).</li>
            <li>L&apos;utilisateur s&apos;engage a ne pas utiliser le service a des fins frauduleuses.</li>
            <li>L&apos;utilisateur est responsable de la securite de son compte et de son mot de passe.</li>
            <li>Toute activite suspecte doit etre signalee immediatement au support.</li>
          </ul>

          <h2>9. Limitation de responsabilite</h2>
          <p>{config.appName} ne saurait etre tenu responsable des pertes ou dommages resultant de :</p>
          <ul>
            <li>Erreurs dans les informations fournies par l&apos;utilisateur.</li>
            <li>Defaillances des services tiers (operateurs mobiles, prestataires de paiement, plateforme {config.platformName}).</li>
            <li>Interruptions de service dues a des cas de force majeure.</li>
            <li>Utilisation non autorisee du compte de l&apos;utilisateur.</li>
          </ul>

          <h2>10. Suspension et resiliation</h2>
          <p>
            {config.appName} se reserve le droit de suspendre ou supprimer tout compte en cas de violation des presentes CGU,
            d&apos;activite frauduleuse suspectee ou de non-respect des obligations legales.
          </p>

          <h2>11. Propriete intellectuelle</h2>
          <p>
            L&apos;ensemble des elements de l&apos;application (design, logo, code, contenus) sont la propriete exclusive de {config.appName}
            et sont proteges par les lois sur la propriete intellectuelle. Toute reproduction est interdite sans autorisation prealable.
          </p>

          <h2>12. Modification des CGU</h2>
          <p>
            {config.appName} se reserve le droit de modifier les presentes CGU a tout moment. Les utilisateurs seront informes via l&apos;application.
            L&apos;utilisation continue du service apres notification vaut acceptation des nouvelles conditions.
          </p>

          <h2>13. Droit applicable</h2>
          <p>
            Les presentes CGU sont soumises au droit en vigueur en Republique du Benin.
            Tout litige sera soumis aux tribunaux competents de Cotonou.
          </p>

          <h2>14. Contact</h2>
          <p>
            Pour toute question concernant ces CGU : <strong>{config.contact.supportEmail}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
