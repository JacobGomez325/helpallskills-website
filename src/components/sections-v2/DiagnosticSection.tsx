'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Link from 'next/link';
import { OFFERS, checkoutPath, type Offer } from '@/data/offers';
import { COACHS, type Coach } from '@/data/coachs';

interface Scenario {
  id: 'express' | 'light' | 'pro';
  icon: string;
  problem: string;
  examples: string[];
  offerId: Offer['id'];
  coachIds: string[];
  accent: 'amber' | 'sky' | 'violet';
}

const SCENARIOS: Scenario[] = [
  {
    id: 'express',
    icon: '⚡',
    problem: "J'ai un blocage précis. Maintenant.",
    examples: [
      "Mon code rame en prod, j'ai un bug que je galère à régler",
      "J'ai un entretien tech dans 3 jours, je veux préparer",
      "Je dois choisir entre 2 stacks pour mon projet",
      "Je veux qu'un senior relise mon code et me donne un avis franc",
    ],
    offerId: 'coaching-express',
    coachIds: ['aime-sagbo', 'claude-fassinou', 'carlos-agboton', 'onesime-lewhe'],
    accent: 'amber',
  },
  {
    id: 'light',
    icon: '📈',
    problem: 'Je veux progresser sans me perdre.',
    examples: [
      'Je débute, je veux apprendre proprement sans tutos en boucle',
      'Je code mais sans structure, je sens que je stagne',
      'Je veux monter sur React, Node, ou Angular avec un cadre',
      "Budget serré, mais je veux quand même avoir quelqu'un",
    ],
    offerId: 'mentorat-light',
    coachIds: ['espera-awo', 'arsene-awounou', 'loris-mario', 'ezechiel-amen'],
    accent: 'sky',
  },
  {
    id: 'pro',
    icon: '🚀',
    problem: "J'ai un objectif clair à 1-3 mois.",
    examples: [
      "Décrocher mon premier CDI ou un poste à l'étranger",
      'Pivoter vers une stack (DevOps, mobile, data…)',
      'Finir mon projet ou SaaS et le lancer pour de vrai',
      'Passer senior, préparer une promo, ou me lancer en freelance',
    ],
    offerId: 'mentorat-pro',
    coachIds: ['aime-sagbo', 'claude-fassinou', 'edouard-hinvi', 'seth-gnavo'],
    accent: 'violet',
  },
];

const accentMap = {
  amber: {
    cardBorder: 'hover:border-amber-300',
    cardActiveBorder: 'border-amber-400 shadow-2xl shadow-amber-500/20',
    icon: 'from-amber-400 to-orange-500',
    chip: 'bg-amber-50 text-amber-700',
    button: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
  },
  sky: {
    cardBorder: 'hover:border-sky-300',
    cardActiveBorder: 'border-sky-400 shadow-2xl shadow-sky-500/20',
    icon: 'from-sky-400 to-blue-500',
    chip: 'bg-sky-50 text-sky-700',
    button: 'bg-gradient-to-r from-sky-500 to-blue-500 text-white',
  },
  violet: {
    cardBorder: 'hover:border-purple-300',
    cardActiveBorder: 'border-purple-400 shadow-2xl shadow-purple-500/20',
    icon: 'from-violet-500 to-purple-600',
    chip: 'bg-purple-50 text-purple-700',
    button: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white',
  },
};

const initialsOf = (name: string) =>
  name.split(' ').map((s) => s[0]).filter(Boolean).join('').slice(0, 2).toUpperCase();

const MiniCoachCard = ({ coach }: { coach: Coach }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3">
      <div className="size-12 rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-white shadow-sm flex-shrink-0">
        {failed ? (
          <div className="w-full h-full flex items-center justify-center text-xs font-black text-gray-400">
            {initialsOf(coach.nom)}
          </div>
        ) : (
          <img
            src={coach.imageUrl}
            alt={coach.nom}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-bold text-gray-900 truncate">{coach.nom}</div>
        <div className="text-xs text-gray-500 truncate">
          {coach.titre} · <span className="text-turquoise font-semibold">{coach.entreprise}</span>
        </div>
      </div>
    </div>
  );
};

const DiagnosticSection = () => {
  const [selectedId, setSelectedId] = useState<Scenario['id'] | null>(null);
  const selected = SCENARIOS.find((s) => s.id === selectedId);
  const offer = selected ? OFFERS.find((o) => o.id === selected.offerId)! : null;
  const matchedCoaches = selected
    ? selected.coachIds.map((id) => COACHS.find((c) => c.id === id)!).filter(Boolean)
    : [];

  return (
    <section id="diagnostic" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <div className="inline-block bg-turquoise/10 text-turquoise text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            On t&apos;aide à choisir
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Pourquoi tu es là aujourd&apos;hui&nbsp;?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Choisis la phrase qui te ressemble le plus. On t&apos;oriente direct vers la bonne formule
            — et on te montre les devs qui peuvent t&apos;aider.
          </p>
        </div>

        <LayoutGroup>
          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {SCENARIOS.map((s) => {
              const ac = accentMap[s.accent];
              const isActive = selectedId === s.id;
              return (
                <motion.button
                  layout
                  key={s.id}
                  onClick={() => setSelectedId(isActive ? null : s.id)}
                  className={`relative text-left bg-white rounded-3xl p-6 md:p-7 border-2 transition-all ${
                    isActive ? ac.cardActiveBorder : `border-gray-200 ${ac.cardBorder}`
                  }`}
                  whileHover={!isActive ? { y: -4 } : undefined}
                  aria-expanded={isActive}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`size-12 rounded-2xl bg-gradient-to-br ${ac.icon} flex items-center justify-center text-2xl shadow-md`}
                    >
                      {s.icon}
                    </div>
                    <div
                      className={`size-8 rounded-full flex items-center justify-center transition-all ${
                        isActive ? 'bg-gray-900 text-white rotate-45' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-4">
                    « {s.problem} »
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-600">
                    {s.examples.slice(0, isActive ? s.examples.length : 2).map((ex, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-300 mt-0.5">—</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>

                  {!isActive && s.examples.length > 2 && (
                    <p className="text-xs text-gray-400 mt-3 font-medium">
                      +{s.examples.length - 2} autres situations
                    </p>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Result panel */}
          <AnimatePresence mode="wait">
            {selected && offer && (
              <motion.div
                key={selected.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-8 md:mt-10 max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 rounded-3xl p-7 md:p-10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative grid md:grid-cols-5 gap-6 md:gap-8">
                  {/* Recommendation */}
                  <div className="md:col-span-3">
                    <div
                      className={`inline-flex items-center gap-2 ${accentMap[selected.accent].chip} text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-4`}
                    >
                      ✨ Ce qu&apos;il te faut
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                      {offer.name}
                    </h3>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-5">
                      {offer.tagline}. {offer.forWho}
                    </p>

                    <div className="flex items-baseline gap-2 mb-5">
                      <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-turquoise to-blue-bright bg-clip-text text-transparent">
                        {offer.priceLabel}
                      </span>
                      <span className="text-white/60 font-medium">{offer.unit}</span>
                    </div>

                    <ul className="space-y-2 mb-7">
                      {offer.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                          <svg className="w-4 h-4 text-turquoise flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={checkoutPath(offer.id)}
                        className="bg-gradient-to-r from-turquoise to-blue-bright text-white font-bold px-6 py-3.5 rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform inline-flex items-center justify-center gap-2"
                      >
                        {selected.id === 'express' ? 'Réserver ma session' : 'Démarrer le mentorat'}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <a
                        href="https://wa.me/22901624357"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-xl text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/15 transition-colors inline-flex items-center justify-center gap-2"
                      >
                        💬 J&apos;ai des questions
                      </a>
                    </div>
                  </div>

                  {/* Matched coaches */}
                  <div className="md:col-span-2 md:border-l md:border-white/10 md:pl-8">
                    <div className="text-xs text-white/50 font-bold uppercase tracking-wider mb-4">
                      Devs qui correspondent
                    </div>
                    <div className="space-y-2.5">
                      {matchedCoaches.slice(0, 4).map((c) => (
                        <MiniCoachCard key={c.id} coach={c} />
                      ))}
                    </div>
                    <a
                      href="#coachs"
                      className="mt-5 text-white/60 hover:text-white text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
                    >
                      Voir toute l&apos;équipe
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>

        {!selected && (
          <p className="text-center text-sm text-gray-400 mt-10">
            Pas sûr&nbsp;? Aucun problème —{' '}
            <a
              href="https://wa.me/22901624357"
              target="_blank"
              rel="noopener noreferrer"
              className="text-turquoise font-semibold hover:underline"
            >
              écris-nous sur WhatsApp
            </a>
            , on répond en moins d&apos;1h.
          </p>
        )}
      </div>
    </section>
  );
};

export default DiagnosticSection;
