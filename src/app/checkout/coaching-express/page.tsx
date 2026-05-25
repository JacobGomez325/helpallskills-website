import type { Metadata } from 'next';
import ChariowCheckout from '@/components/chariow/ChariowCheckout';
import { OFFERS } from '@/data/offers';

const offer = OFFERS.find((o) => o.id === 'coaching-express')!;

export const metadata: Metadata = {
  title: `Commander · ${offer.name}`,
  description: `Réserve ta session ${offer.name} à ${offer.priceLabel}${offer.unit}. Paiement Mobile Money ou carte sécurisé via Chariow.`,
  alternates: { canonical: '/checkout/coaching-express' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ChariowCheckout offer={offer} />;
}
