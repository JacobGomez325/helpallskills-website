export interface Offer {
  id: 'coaching-express' | 'mentorat-light' | 'mentorat-pro';
  name: string;
  tagline: string;
  forWho: string;
  price: number;
  priceLabel: string;
  unit: string;
  hourlyRate: string;
  sessions: string;
  features: string[];
  buyLink: string;
  chariowProductId: string;
  highlight?: boolean;
  accent: 'amber' | 'sky' | 'violet';
}

export const CHARIOW_STORE_DOMAIN = 'getskillsnow.mychariow.shop';

export const checkoutPath = (id: Offer['id']) => `/checkout/${id}`;

export const OFFERS: Offer[] = [
  {
    id: 'coaching-express',
    name: 'Coaching Express',
    tagline: 'Débloque un point précis en 1h',
    forWho: 'Le ponctuel — débloquer un point.',
    price: 5000,
    priceLabel: '5 000 F',
    unit: '/session',
    hourlyRate: 'Soit 5 000 F/h',
    sessions: '1 session × 1h',
    features: [
      '1h en visio Google Meet',
      'Récap WhatsApp post-session',
      'Possibilité de re-réserver le même coach',
      'Garantie satisfait sous 24h',
    ],
    buyLink: 'https://getskillsnow.mychariow.shop',
    chariowProductId: 'prd_ib6r8qw4',
    accent: 'amber',
  },
  {
    id: 'mentorat-light',
    name: 'Mentorat Light',
    tagline: 'Le rythme tranquille',
    forWho: 'Budget serré, progression régulière.',
    price: 13500,
    priceLabel: '13 500 F',
    unit: '/mois',
    hourlyRate: 'Soit 4 500 F/h',
    sessions: '2 sessions × 1h30 / mois',
    features: [
      "2 sessions d'1h30 par mois",
      'Support WhatsApp asynchrone (48h ouvrées)',
      'Coach dédié, le même chaque mois',
      'Engagement 1 mois, renouvellement libre',
    ],
    buyLink: 'https://getskillsnow.mychariow.shop',
    chariowProductId: 'prd_eaij0zlq',
    accent: 'sky',
  },
  {
    id: 'mentorat-pro',
    name: 'Mentorat Pro',
    tagline: "L'accélération, objectif clair",
    forWho: 'Décrocher un poste, pivoter, finir un projet.',
    price: 25000,
    priceLabel: '25 000 F',
    unit: '/mois',
    hourlyRate: 'Soit 4 167 F/h',
    sessions: '4 sessions × 1h30 / mois',
    features: [
      "4 sessions d'1h30 par mois (1 par semaine)",
      'Support WhatsApp prioritaire (24h ouvrées)',
      'Roadmap PDF personnalisée après la 1ère session',
      'Coach dédié, suivi hebdomadaire',
    ],
    buyLink: 'https://getskillsnow.mychariow.shop',
    chariowProductId: 'prd_7ocbuq7u',
    highlight: true,
    accent: 'violet',
  },
];

export const COMPARE_ROWS: Array<{
  label: string;
  light: string;
  pro: string;
  highlight?: 'pro' | 'light';
}> = [
  { label: 'Sessions par mois', light: '2', pro: '4', highlight: 'pro' },
  { label: "Durée d'une session", light: '1h30', pro: '1h30' },
  { label: "Total d'heures", light: '3h / mois', pro: '6h / mois', highlight: 'pro' },
  { label: 'Support WhatsApp', light: 'Réponse sous 48h', pro: 'Prioritaire — sous 24h', highlight: 'pro' },
  { label: 'Roadmap PDF personnalisée', light: '—', pro: '✓', highlight: 'pro' },
  { label: 'Coach dédié, le même chaque mois', light: '✓', pro: '✓' },
  { label: 'Engagement minimum', light: '1 mois', pro: '1 mois' },
];
