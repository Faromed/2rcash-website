import createBrandConfig from './createBrandConfig';

export default createBrandConfig({
  brandKey: '1xbet',
  platformName: '1xBet',
  platformUppercase: '1XBET',
  platformTone: 'brand-default',
  apkDownloadUrl: 'https://github.com/Faromed/2rcash-website/releases/download/v1.0.0/2rcash.apk',
  siteTitle: '2RCASH 1xBet - Rechargement rapide via Mobile Money',
  siteDescription: '2RCASH 1xBet vous permet de recharger vos comptes 1xBet instantanement via Mobile Money en Afrique de l\'Ouest.',
  logoUrl: 'https://th.bing.com/th/id/R.f7961b83ea452447060cb9610eac95c4?rik=H3QyyQ6l5lTTBg&pid=ImgRaw&r=0',
  temporaryLinkLabel: 'Voir le logo 1xBet',
  temporaryLinkUrl: 'https://th.bing.com/th/id/R.f7961b83ea452447060cb9610eac95c4?rik=H3QyyQ6l5lTTBg&pid=ImgRaw&r=0',
  theme: {
    primary: '#1b3fa6',
    primaryDark: '#07152f',
    primaryLight: '#4d78ff',
    accent: '#ffffff',
    accentLight: '#eff5ff',
    accentDark: '#c9d8ff',
    black: '#07101f',
    surface: '#0b1a34',
    surfaceLight: '#102447',
    card: '#11284f',
    textMuted: '#99acd1',
    outline: 'rgba(109, 154, 255, 0.22)',
  },
  layout: {
    heroAlign: 'left',
    heroPanelStyle: 'split',
    sectionAccent: 'bands',
  },
  featureIntro: 'Un univers plus institutionnel, plus net et plus rassurant pour presenter le service 1xBet.',
  heroPanel: {
    eyebrow: 'Experience premium',
    title: 'Une vitrine 1xBet plus sobre, plus claire et plus credible',
    bullets: [
      'Identite visuelle inspiree du bleu nuit et du blanc',
      'Parcours simplifie pour les managers et partenaires',
      'Presentation propre, rassurante et facile a partager',
    ],
  },
  mockup: {
    statusLabel: 'Compte verifie',
    platformHint: 'Tableau de bord 1xBet',
    cardIcon: '01',
    accountLabel: 'ID 1xBet',
    amountLabel: 'Recharge prioritaire',
    chips: ['Confiance', 'Rapide', 'Trace'],
    quickItems: ['Rapports', 'Favoris', 'Support', 'CGU', 'Securite', 'Historique'],
  },
});

