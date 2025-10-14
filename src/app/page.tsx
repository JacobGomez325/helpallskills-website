import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CoachingSection from '@/components/sections/CoachingSection';
import FormationsSection from '@/components/sections/FormationsSection';
import CoachsSection from '@/components/sections/CoachsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export const metadata = {
  title: 'HelpAll Skills - Accompagnement Tech pour Jeunes Talents Francophones',
  description: 'Programme d\'accompagnement personnalisé pour jeunes talents francophones en tech. Coaching, formations et guidance pour réussir votre carrière tech au Bénin et en Afrique.',
  keywords: 'coaching tech Bénin, formation développement Afrique, accompagnement tech francophone, coaching carrière tech Cotonou, formation développeur Bénin',
  openGraph: {
    title: 'HelpAll Skills - Accompagnement Tech pour Jeunes Talents Francophones',
    description: 'Programme d\'accompagnement personnalisé pour jeunes talents francophones en tech.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HelpAll Skills - Accompagnement Tech pour Jeunes Talents Francophones',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CoachingSection />
        <FormationsSection />
        <CoachsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
