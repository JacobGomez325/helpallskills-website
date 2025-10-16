import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ImmersiveExperience from '@/components/sections/ImmersiveExperience';

export const metadata = {
  title: 'HelpAll Skills - Ton Guide Personnel vers l\'Excellence Tech',
  description: 'Découvre l\'accompagnement parfait pour ta carrière tech. Un parcours guidé et personnalisé pour t\'aider à choisir la formation, le coaching ou le mentorat qui te correspond vraiment. Bootcamps, formations 1-to-1, mentorat au Bénin.',
  keywords: 'coaching tech Bénin, formation développement Afrique, accompagnement tech francophone, bootcamp Cotonou, mentorat développeur Bénin, formation personnalisée tech',
  openGraph: {
    title: 'HelpAll Skills - Ton Guide Personnel vers l\'Excellence Tech',
    description: 'Laisse-toi guider vers l\'accompagnement tech parfait pour toi. Coaching, formations, bootcamps et mentorat sur mesure.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HelpAll Skills - Ton guide vers l\'excellence tech',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ImmersiveExperience />
      </main>
      <Footer />
    </>
  );
}
