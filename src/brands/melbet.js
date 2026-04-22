import createBrandConfig from './createBrandConfig';

export default createBrandConfig({
  brandKey: 'melbet',
  platformName: 'Melbet',
  platformUppercase: 'MELBET',
  platformTone: 'brand-accent',
  apkDownloadUrl: 'https://github.com/Faromed/2rcash-website/releases/download/v1.0.0/2rcash.apk',
  siteTitle: '2RCASH Melbet - Rechargement rapide via Mobile Money',
  siteDescription: '2RCASH Melbet vous permet de recharger vos comptes Melbet instantanement via Mobile Money en Afrique de l\'Ouest.',
  logoUrl: 'https://revenuelab.biz/blog/wp-content/uploads/2021/09/melbet.png',
  temporaryLinkLabel: 'Voir le logo Melbet',
  temporaryLinkUrl: 'https://revenuelab.biz/blog/wp-content/uploads/2021/09/melbet.png',
  theme: {
    primary: '#ff8a00',
    primaryDark: '#0f0f10',
    primaryLight: '#ffb347',
    accent: '#ffffff',
    accentLight: '#fff3e2',
    accentDark: '#ffd5a3',
    black: '#050505',
    surface: '#161616',
    surfaceLight: '#222222',
    card: '#1c1c1d',
    textMuted: '#c6c6c8',
    outline: 'rgba(255, 138, 0, 0.24)',
  },
  layout: {
    heroAlign: 'center',
    heroPanelStyle: 'stacked',
    sectionAccent: 'spots',
  },
  featureIntro: 'Une direction plus intense et sportive, avec des contrastes forts et une energie plus directe.',
  heroPanel: {
    eyebrow: 'Mode sportif',
    title: 'Une presence Melbet plus nerveuse, plus visible et plus impactante',
    bullets: [
      'Palette orange, noir et blanc plus aggressive',
      'Composition plus dynamique et plus orientee action',
      'Mise en avant plus directe des recharges rapides',
    ],
  },
  mockup: {
    statusLabel: 'Match en direct',
    platformHint: 'Action Melbet',
    cardIcon: 'GO',
    accountLabel: 'ID Melbet',
    amountLabel: 'Depot express',
    chips: ['Boost', 'Live', 'Flash'],
    quickItems: ['Paris', 'Favoris', 'Support', 'Bonus', 'Depot', 'Retrait'],
  },
});

