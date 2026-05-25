'use client';

import { motion } from 'framer-motion';
import { TOP_COACHS } from '@/data/coachs';

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-turquoise/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/15 mb-6"
          >
            <span className="size-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-semibold">Programme mentorat · 2 formules</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Un mentor à toi.
            <br />
            <span className="bg-gradient-to-r from-turquoise via-blue-bright to-purple-400 bg-clip-text text-transparent">
              Tout un mois.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Quelqu&apos;un t&apos;a parlé de nous&nbsp;? Cool. Maintenant la vraie question : par où tu commences&nbsp;? On a 3 formules, 21 devs en poste — Deel, payDunya, Djamo, Kkiapay, Crédit Agricole — et 30 secondes pour t&apos;orienter vers ce qui te correspond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
          >
            <a
              href="#diagnostic"
              className="bg-gradient-to-r from-turquoise to-blue-bright text-white text-base font-bold px-7 py-4 rounded-2xl shadow-2xl shadow-turquoise/30 hover:scale-[1.02] active:scale-[0.98] transition-transform inline-flex items-center gap-2"
            >
              Trouver mon offre
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#coachs"
              className="bg-white/10 backdrop-blur-xl text-white text-base font-semibold px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
            >
              Voir notre équipe
            </a>
          </motion.div>

          {/* Trust strip — coach avatars + counts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/60 text-sm"
          >
            <div className="flex -space-x-3">
              {TOP_COACHS.slice(0, 5).map((c) => (
                <img
                  key={c.id}
                  src={c.imageUrl}
                  alt={c.nom}
                  className="size-10 rounded-full border-2 border-slate-900 object-cover bg-slate-800"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white/90">21 experts</span>
              <span className="text-white/30">·</span>
              <span>devs en poste à Deel, payDunya, Djamo, Crédit Agricole…</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
