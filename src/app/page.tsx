import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections-v2/Hero';
import DiagnosticSection from '@/components/sections-v2/DiagnosticSection';
import OffersSection from '@/components/sections-v2/OffersSection';
import CompareSection from '@/components/sections-v2/CompareSection';
import CoachsSection from '@/components/sections-v2/CoachsSection';
import FaqSection from '@/components/sections-v2/FaqSection';
import FinalCta from '@/components/sections-v2/FinalCta';

export const metadata = {
  title: 'Coaching & Mentorat Tech pour développeurs francophones',
  description:
    "Trouve un mentor dédié ou réserve une session de coaching tech d'1h. 20 mentors en poste à Deel, payDunya, Djamo, Crédit Agricole. Coaching Express 5 000 FCFA, Mentorat Light 13 500 FCFA/mois, Mentorat Pro 25 000 FCFA/mois. Paiement Mobile Money via Chariow.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'HelpAll Skills — Un mentor à toi. Tout un mois.',
    description:
      '20 mentors en poste, 3 formules, paiement Mobile Money sécurisé via Chariow. Choisis ton mentor, choisis ton rythme.',
    url: '/',
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Coaching tech ponctuel',
      provider: { '@type': 'Organization', name: 'HelpAll Skills', url: 'https://helpallskills.com' },
      areaServed: { '@type': 'Country', name: 'Bénin' },
      audience: { '@type': 'Audience', audienceType: 'Développeurs, étudiants tech, reconvertis, founders' },
      name: 'Coaching Express',
      description: "Session visio individuelle d'1h pour débloquer un bug, réviser du code, préparer un entretien, lancer un projet ou comprendre un concept.",
      offers: {
        '@type': 'Offer',
        price: '5000',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: 'https://chariow.com/helpallskills/coaching-express',
      },
    },
    {
      '@type': 'Service',
      serviceType: 'Mentorat tech récurrent',
      provider: { '@type': 'Organization', name: 'HelpAll Skills', url: 'https://helpallskills.com' },
      areaServed: { '@type': 'Country', name: 'Bénin' },
      audience: { '@type': 'Audience', audienceType: 'Développeurs juniors et intermédiaires' },
      name: 'Mentorat Light',
      description: '2 sessions de 1h30 par mois avec un coach dédié + support WhatsApp asynchrone.',
      offers: {
        '@type': 'Offer',
        price: '13500',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: 'https://chariow.com/helpallskills/mentorat-light',
      },
    },
    {
      '@type': 'Service',
      serviceType: 'Mentorat tech intensif',
      provider: { '@type': 'Organization', name: 'HelpAll Skills', url: 'https://helpallskills.com' },
      areaServed: { '@type': 'Country', name: 'Bénin' },
      audience: { '@type': 'Audience', audienceType: 'Développeurs en évolution carrière, reconvertis avancés' },
      name: 'Mentorat Pro',
      description: '4 sessions de 1h30 par mois + roadmap PDF personnalisée + support WhatsApp prioritaire.',
      offers: {
        '@type': 'Offer',
        price: '25000',
        priceCurrency: 'XOF',
        availability: 'https://schema.org/InStock',
        url: 'https://chariow.com/helpallskills/mentorat-pro',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment je choisis entre Light et Pro ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Light pour progresser tranquillement (2 sessions/mois). Pro pour un objectif concret à court terme : décrocher un poste, finir un projet, pivoter de stack (4 sessions/mois + roadmap + support prioritaire).',
          },
        },
        {
          '@type': 'Question',
          name: 'Je peux choisir mon mentor ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Tu vois tous les profils, leurs spécialités, leurs avis et leur entreprise actuelle. Tu gardes le même mentor chaque mois.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment je paie ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mobile Money (MTN, Moov, Orange, Wave) ou carte Visa/Mastercard, via Chariow. Tout est sécurisé.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <DiagnosticSection />
        <OffersSection />
        <CompareSection />
        <CoachsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
