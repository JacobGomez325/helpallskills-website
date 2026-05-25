'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { COACHS, type Coach } from '@/data/coachs';

const TAG_FILTERS = [
  { label: 'Tous', value: 'all' },
  { label: 'Frontend', value: 'Frontend' },
  { label: 'Backend', value: 'Backend' },
  { label: 'Full-Stack', value: 'Full-Stack' },
  { label: 'DevOps', value: 'DevOps' },
  { label: 'Mobile', value: 'Mobile Development' },
  { label: 'Data', value: 'Data Analysis' },
  { label: 'Security', value: 'Security' },
];

const initialsOf = (name: string) =>
  name
    .split(' ')
    .map((s) => s[0])
    .filter(Boolean)
    .join('')
    .slice(0, 2)
    .toUpperCase();

const CoachCard = ({ coach, index }: { coach: Coach; index: number }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
      className="group bg-white rounded-2xl border border-gray-200 hover:border-turquoise/40 hover:shadow-lg transition-all p-5 text-center"
    >
      <div className="relative mx-auto mb-4 w-24 h-24 md:w-28 md:h-28">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-turquoise/20 via-blue-bright/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-white shadow-md">
          {imgFailed ? (
            <div className="w-full h-full flex items-center justify-center text-2xl font-black text-gray-400 bg-gradient-to-br from-slate-100 to-slate-200">
              {initialsOf(coach.nom)}
            </div>
          ) : (
            <img
              src={coach.imageUrl}
              alt={`Portrait de ${coach.nom}`}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={() => setImgFailed(true)}
            />
          )}
        </div>
        {coach.statut === 'Actif' && (
          <span
            className="absolute bottom-1 right-1 size-3.5 rounded-full bg-green-500 border-2 border-white shadow-sm"
            aria-label="Coach actif"
            title="Coach actif"
          />
        )}
      </div>

      <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">{coach.nom}</h3>
      <p className="text-sm text-gray-600 leading-snug mb-1">{coach.titre}</p>
      <p className="text-xs text-turquoise font-semibold mb-3">{coach.entreprise}</p>

      <div className="flex flex-wrap justify-center gap-1.5 pt-3 border-t border-gray-100">
        {coach.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const CoachsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    if (filter === 'all') return COACHS;
    return COACHS.filter((c) => c.tags.some((t) => t === filter));
  }, [filter]);

  const visible = showAll ? filtered : filtered.slice(0, 8);
  const activeCount = COACHS.filter((c) => c.statut === 'Actif').length;

  return (
    <section id="coachs" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block bg-turquoise/10 text-turquoise text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Notre équipe d&apos;experts
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            {COACHS.length} devs en poste prêts à t&apos;accompagner.
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Selon ta formule et ta stack, tu seras mis en relation avec l&apos;un de nos experts.
            Tous sont des devs en activité — chez Deel, payDunya, Djamo, Crédit Agricole, EPITECH Bénin et plus.
          </p>
          <div className="inline-flex items-center gap-4 mt-5 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-green-500" />
              {activeCount} actifs
            </span>
            <span className="text-gray-300">·</span>
            <span>{COACHS.length - activeCount} membres de l&apos;équipe</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TAG_FILTERS.map((tag) => (
            <button
              key={tag.value}
              onClick={() => {
                setFilter(tag.value);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === tag.value
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            Aucun coach pour ce filtre. Essaie une autre catégorie.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
            {visible.map((coach, i) => (
              <CoachCard key={coach.id} coach={coach} index={i} />
            ))}
          </div>
        )}

        {filtered.length > 8 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="bg-white border-2 border-gray-200 hover:border-turquoise text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              {showAll ? 'Voir moins' : `Voir les ${filtered.length} experts`}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* CTA collectif — ramène vers les offres */}
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 rounded-3xl p-8 md:p-10 border border-gray-200 text-center">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
            Prêt à te lancer&nbsp;?
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-xl mx-auto">
            Choisis ta formule, on te met en relation avec le coach qui correspond à ton besoin et ta stack. Tu n&apos;as pas à choisir ton coach toi-même — on s&apos;en occupe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#offres"
              className="bg-gradient-to-r from-turquoise to-blue-bright text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform inline-flex items-center gap-2"
            >
              Voir les formules
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/22901624357"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 hover:border-turquoise text-gray-900 font-semibold px-6 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              💬 Discuter sur WhatsApp
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-5">
            On répond sous 1h en journée. Discute de ton besoin avant de payer si tu hésites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoachsSection;
