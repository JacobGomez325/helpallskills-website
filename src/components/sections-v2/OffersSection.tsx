'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { OFFERS, checkoutPath } from '@/data/offers';

const accentClasses = {
  amber: {
    badge: 'from-amber-400 to-orange-500',
    button: 'bg-gray-900 hover:bg-gray-800 text-white',
    border: 'border-amber-200',
    glow: '',
  },
  sky: {
    badge: 'from-sky-400 to-blue-500',
    button: 'bg-gray-900 hover:bg-gray-800 text-white',
    border: 'border-sky-200',
    glow: '',
  },
  violet: {
    badge: 'from-violet-500 to-purple-600',
    button: 'bg-gradient-to-r from-turquoise to-blue-bright text-white',
    border: 'border-purple-300',
    glow: 'shadow-2xl shadow-purple-500/20',
  },
};

const OffersSection = () => {
  return (
    <section id="offres" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block bg-turquoise/10 text-turquoise text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Nos offres
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            3 formules pour 3 besoins.
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Le ponctuel, le rythme tranquille, ou l&apos;accélération. À toi de choisir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {OFFERS.map((offer, idx) => {
            const ac = accentClasses[offer.accent];
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-white rounded-3xl p-7 md:p-8 border-2 flex flex-col ${
                  offer.highlight ? `${ac.border} ${ac.glow} md:scale-[1.03]` : 'border-gray-200'
                }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-turquoise to-blue-bright text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      ⭐ Le plus choisi
                    </div>
                  </div>
                )}

                <div className="mb-5">
                  <div className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${ac.badge} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {offer.name}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{offer.tagline}</h3>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black text-gray-900">{offer.priceLabel}</span>
                    <span className="text-gray-500 font-medium">{offer.unit}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{offer.hourlyRate}</div>
                  <div className="text-sm font-semibold text-gray-700 mt-2">{offer.sessions}</div>
                </div>

                <div className="mb-5 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Pour qui</div>
                  <div className="text-sm text-gray-700">{offer.forWho}</div>
                </div>

                <ul className="space-y-3 mb-7 flex-grow">
                  {offer.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={checkoutPath(offer.id)}
                  className={`block w-full text-center py-3.5 px-5 rounded-xl font-bold text-sm transition-all ${ac.button}`}
                >
                  {offer.id === 'coaching-express' ? 'Réserver ma session' : 'Démarrer le mentorat'}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Tous les prix sont en FCFA. Paiement Mobile Money ou carte Visa/Mastercard via Chariow.
        </p>
      </div>
    </section>
  );
};

export default OffersSection;
