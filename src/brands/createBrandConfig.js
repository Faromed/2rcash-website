const sharedContact = {
  supportEmail: 'contact2rcash@gmail.com',
  supportPhone: '+229 67 47 81 77',
  whatsapp: '+229 67 47 81 77',
  city: 'Cotonou, Benin',
  supportHours: 'Lun - Dim : 7h - 00h',
  responseTime: 'Sous 24h maximum',
};

export default function createBrandConfig({
  brandKey,
  platformName,
  platformUppercase,
  platformTone,
  apkDownloadUrl,
  siteTitle,
  siteDescription,
  logoUrl,
  temporaryLinkLabel,
  temporaryLinkUrl,
  theme,
  layout,
  heroPanel,
  mockup,
  featureIntro,
}) {
  return {
    brandKey,
    appName: '2RCASH',
    platformName,
    platformUppercase,
    platformTone,
    apkDownloadUrl,
    appVersion: '1.0.0',
    siteTitle,
    siteDescription,
    logoUrl,
    temporaryLinkLabel,
    temporaryLinkUrl,
    theme,
    layout,
    heroPanel,
    mockup,
    featureIntro,
    contact: sharedContact,
    hero: {
      title: `Rechargez vos comptes ${platformName}`,
      highlightedTitle: 'en quelques secondes',
      subtitle: `2RCASH est l'application la plus rapide et securisee pour recharger vos comptes ${platformName} via Mobile Money. Paiement USSD direct, sans intermediaire.`,
      stats: [
        { value: '30s', label: 'Rechargement moyen' },
        { value: '24/7', label: 'Disponible en continu' },
        { value: '100%', label: 'Securise' },
      ],
    },
    features: [
      {
        key: 'instant',
        title: 'Rechargement Instantane',
        desc: `Rechargez votre compte ${platformName} en moins de 30 secondes grace au paiement USSD direct.`,
      },
      {
        key: 'security',
        title: 'Securite Maximale',
        desc: 'Vos donnees sont protegees par un chiffrement avance. Votre securite est notre priorite.',
      },
      {
        key: 'favorites',
        title: 'Comptes Favoris',
        desc: `Enregistrez jusqu'a 5 comptes favoris ${platformName} pour des rechargements encore plus rapides.`,
      },
      {
        key: 'notifications',
        title: 'Notifications Temps Reel',
        desc: 'Recevez des notifications push pour chaque etape de votre transaction.',
      },
      {
        key: 'platform',
        title: `${platformName} uniquement`,
        desc: `Cette version du site est entierement dediee aux utilisateurs ${platformName}, sans contenu d'une autre plateforme.`,
      },
      {
        key: 'support',
        title: 'Support Reactif',
        desc: 'Notre equipe de support est disponible pour vous assister et repondre a toutes vos questions.',
      },
    ],
    steps: [
      {
        num: '1',
        title: `Choisissez ${platformName}`,
        desc: `Selectionnez ${platformName} directement depuis l'ecran d'accueil de l'application.`,
      },
      {
        num: '2',
        title: 'Remplissez le formulaire',
        desc: `Entrez votre ID ${platformName}, le montant souhaite et votre numero Mobile Money.`,
      },
      {
        num: '3',
        title: "Validez et c'est fait !",
        desc: `Confirmez le paiement USSD sur votre telephone. Votre compte ${platformName} est recharge automatiquement.`,
      },
    ],
    homeFaqs: [
      {
        q: "Qu'est-ce que 2RCASH ?",
        a: `2RCASH est une application mobile qui permet de recharger automatiquement vos comptes ${platformName} via Mobile Money en Afrique de l'Ouest. Le rechargement est instantane et entierement automatise.`,
      },
      {
        q: 'Comment fonctionne le rechargement ?',
        a: `Vous selectionnez ${platformName}, entrez l'ID de votre compte et le montant souhaite, puis validez le paiement via USSD directement sur votre telephone. Le rechargement est effectue automatiquement en quelques secondes.`,
      },
      {
        q: 'Quels moyens de paiement sont acceptes ?',
        a: 'Nous acceptons les paiements via Mobile Money : MTN Mobile Money, Moov Money, Celtiis Money. Les reseaux disponibles dependent de votre pays.',
      },
      {
        q: 'Combien de temps prend un depot ?',
        a: 'Un depot est generalement traite en moins de 30 secondes apres la validation du paiement USSD. Vous recevez une notification push des que le rechargement est effectue.',
      },
      {
        q: 'Mes donnees sont-elles en securite ?',
        a: "Absolument. Nous utilisons un chiffrement avance pour proteger toutes vos donnees personnelles et financieres. Aucune donnee sensible n'est stockee en clair.",
      },
    ],
    faqCategories: [
      {
        category: 'General',
        items: [
          {
            q: "Qu'est-ce que 2RCASH ?",
            a: `2RCASH est une application mobile innovante qui permet de recharger automatiquement vos comptes ${platformName} via Mobile Money en Afrique de l'Ouest. Notre service est rapide, securise et entierement automatise.`,
          },
          {
            q: 'Dans quels pays 2RCASH est-il disponible ?',
            a: '2RCASH est actuellement disponible dans plusieurs pays d\'Afrique de l\'Ouest, notamment le Benin, le Togo, la Cote d\'Ivoire et le Senegal. Nous travaillons a l\'expansion vers d\'autres pays.',
          },
          {
            q: 'L\'application est-elle gratuite ?',
            a: 'Oui, le telechargement et l\'utilisation de l\'application sont gratuits. Des frais de service peuvent s\'appliquer sur les transactions, ils sont toujours affiches clairement avant la confirmation.',
          },
        ],
      },
      {
        category: 'Depots',
        items: [
          {
            q: `Comment recharger mon compte ${platformName} ?`,
            a: `Ouvrez l'application, selectionnez ${platformName}, entrez votre ID de compte et le montant souhaite, choisissez votre reseau Mobile Money et validez. Le paiement USSD sera envoye sur votre telephone pour confirmation.`,
          },
          {
            q: 'Quel est le montant minimum de depot ?',
            a: 'Le montant minimum de depot est de 100 FCFA. Vous pouvez utiliser les boutons rapides (+500, +1000, +5000) pour selectionner facilement un montant.',
          },
          {
            q: 'Combien de temps prend un depot ?',
            a: 'Un depot est generalement traite en moins de 30 secondes apres la validation du paiement USSD. Vous recevez une notification push des que le rechargement est effectue sur votre compte de paris.',
          },
          {
            q: 'Mon depot a echoue, que faire ?',
            a: 'En cas d\'echec, verifiez d\'abord votre solde Mobile Money et la validite de votre ID de compte. Si le montant a ete debite sans rechargement, contactez immediatement notre support avec votre numero de transaction.',
          },
        ],
      },
      {
        category: 'Retraits',
        items: [
          {
            q: 'Comment effectuer un retrait ?',
            a: `Pour retirer vos gains : 1) Generez un code de retrait sur votre plateforme ${platformName}. 2) Ouvrez 2RCASH et allez dans l'onglet Retrait. 3) Remplissez le formulaire avec votre ID, le code de retrait, le montant et votre numero Mobile Money. 4) Soumettez la demande.`,
          },
          {
            q: 'Combien de temps prend un retrait ?',
            a: 'Les demandes de retrait sont traitees manuellement par notre equipe dans un delai maximum de 24 heures ouvrables. Vous recevez une notification push des que votre retrait est valide et envoye.',
          },
          {
            q: 'Quel est le montant minimum de retrait ?',
            a: 'Le montant minimum de retrait est de 1 000 FCFA.',
          },
        ],
      },
      {
        category: 'Securite',
        items: [
          {
            q: 'Mes donnees sont-elles en securite ?',
            a: 'Absolument. Nous utilisons les meilleures pratiques de securite : chiffrement HTTPS pour toutes les communications, hachage bcrypt pour les mots de passe, authentification JWT avec expiration, stockage securise sur l\'appareil, et journalisation complete des actions.',
          },
          {
            q: 'Que faire si j\'oublie mon mot de passe ?',
            a: 'Sur l\'ecran de connexion, cliquez sur \'Mot de passe oublie ?\'. Entrez votre adresse email et vous recevrez un lien de reinitialisation. Suivez les instructions dans l\'email pour creer un nouveau mot de passe.',
          },
          {
            q: 'Comment proteger mon compte ?',
            a: 'Utilisez un mot de passe fort et unique, ne partagez jamais vos identifiants, deconnectez-vous sur les appareils partages, et signalez immediatement toute activite suspecte a notre support.',
          },
        ],
      },
      {
        category: 'Comptes Favoris',
        items: [
          {
            q: 'Qu\'est-ce qu\'un compte favori ?',
            a: 'Les comptes favoris vous permettent d\'enregistrer vos ID de comptes de paris frequemment utilises avec un libelle personnalise. Ainsi, vous n\'avez plus a les retaper a chaque transaction.',
          },
          {
            q: 'Combien de comptes favoris puis-je enregistrer ?',
            a: `Vous pouvez enregistrer jusqu'a 5 comptes favoris pour ${platformName}.`,
          },
        ],
      },
    ],
  };
}

