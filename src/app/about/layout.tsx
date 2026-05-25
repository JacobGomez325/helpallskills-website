import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "Programme d'accompagnement pour développeurs francophones en tech, lancé le 21 septembre 2024 au Bénin. Méthode, mentors, motivation, guidance.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'À propos de HelpAll Skills',
    description:
      "Programme d'accompagnement pour développeurs francophones en tech, lancé en septembre 2024 au Bénin.",
    url: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
