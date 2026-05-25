'use client';

import { motion } from 'framer-motion';

const FinalCta = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
          Choisis ton mentor.
          <br />
          <span className="bg-gradient-to-r from-turquoise to-blue-bright bg-clip-text text-transparent">
            Choisis ton rythme.
          </span>
        </h2>
        <p className="text-base md:text-xl text-white/70 mb-8 max-w-xl mx-auto">
          20 mentors disponibles, 2 formules, tu décides chaque mois si tu continues.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#coachs"
            className="bg-gradient-to-r from-turquoise to-blue-bright text-white font-bold px-7 py-4 rounded-2xl shadow-2xl shadow-turquoise/30 hover:scale-[1.02] active:scale-[0.98] transition-transform inline-flex items-center gap-2"
          >
            Voir les mentors
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://wa.me/22901624357"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-xl text-white font-semibold px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors inline-flex items-center gap-2"
          >
            💬 Une question ? WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCta;
