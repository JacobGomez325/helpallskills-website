import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const SITE_URL = 'https://helpallskills.com';
const SITE_NAME = 'HelpAll Skills';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HelpAll Skills — Coaching & Mentorat Tech pour développeurs francophones',
    template: '%s · HelpAll Skills',
  },
  description:
    'Coaching et mentorat tech pour développeurs en Afrique francophone. 3 offres : Coaching Express (5 000 FCFA), Mentorat Light (13 500 FCFA/mois), Mentorat Pro (25 000 FCFA/mois). Paiement Mobile Money via Chariow.',
  applicationName: SITE_NAME,
  authors: [{ name: 'HelpAll Skills', url: SITE_URL }],
  creator: 'HelpAll Skills',
  publisher: 'HelpAll Skills',
  generator: 'Next.js',
  keywords: [
    'coaching tech',
    'mentorat développeur',
    'formation tech Bénin',
    'coaching tech Afrique francophone',
    'mentorat Cotonou',
    'développeur freelance',
    'préparation entretien tech',
    'Mobile Money',
    'Chariow',
    'reconversion tech',
    'HelpAll Skills',
  ],
  category: 'education',
  classification: 'Education / Coaching Tech',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      fr: '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'HelpAll Skills — Coaching & Mentorat Tech',
    description:
      'Coaching et mentorat tech personnalisés pour développeurs en Afrique francophone. Coachs dédiés, paiement Mobile Money sécurisé via Chariow.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HelpAll Skills — Coaching & Mentorat Tech',
    description:
      'Coaching et mentorat tech personnalisés pour développeurs en Afrique francophone.',
    creator: '@helpallskills',
    site: '@helpallskills',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_NAME,
  alternateName: 'HelpAll',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  image: `${SITE_URL}/opengraph-image.png`,
  description:
    'Programme de coaching et mentorat tech pour développeurs en Afrique francophone.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BJ',
    addressLocality: 'Cotonou',
  },
  areaServed: ['BJ', 'CI', 'SN', 'TG', 'CM', 'BF', 'ML', 'NE', 'FR'],
  inLanguage: 'fr',
  foundingDate: '2024-09-21',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+22901624357',
    availableLanguage: ['French'],
    areaServed: 'BJ',
  },
  sameAs: [
    'https://wa.me/22901624357',
    'https://chariow.com/helpallskills',
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'Coaching Express',
      description: 'Session unique de 1h pour débloquer un problème technique précis.',
      price: '5000',
      priceCurrency: 'XOF',
      url: 'https://chariow.com/helpallskills/coaching-express',
      availability: 'https://schema.org/InStock',
      category: 'Coaching',
    },
    {
      '@type': 'Offer',
      name: 'Mentorat Light',
      description: '2 sessions de 1h30 par mois avec un coach dédié.',
      price: '13500',
      priceCurrency: 'XOF',
      url: 'https://chariow.com/helpallskills/mentorat-light',
      availability: 'https://schema.org/InStock',
      category: 'Mentoring',
    },
    {
      '@type': 'Offer',
      name: 'Mentorat Pro',
      description: '4 sessions de 1h30 par mois + roadmap personnalisée + support prioritaire.',
      price: '25000',
      priceCurrency: 'XOF',
      url: 'https://chariow.com/helpallskills/mentorat-pro',
      availability: 'https://schema.org/InStock',
      category: 'Mentoring',
    },
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'fr-FR',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://chariow.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
