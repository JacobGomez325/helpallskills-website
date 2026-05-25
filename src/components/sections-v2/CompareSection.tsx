'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { COMPARE_ROWS, OFFERS, checkoutPath } from '@/data/offers';

const CompareSection = () => {
  const light = OFFERS.find((o) => o.id === 'mentorat-light')!;
  const pro = OFFERS.find((o) => o.id === 'mentorat-pro')!;

  return (
    <section id="compare" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Light vs Pro
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Quelle formule mentorat pour toi&nbsp;?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Compare en 30 secondes ce qui change entre les deux.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5"
        >
          {/* Light */}
          <div className="bg-white rounded-3xl p-7 md:p-8 border-2 border-gray-200">
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                {light.name}
              </div>
              <h3 className="text-lg font-bold text-gray-900">Pour un rythme tranquille</h3>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">{light.priceLabel}</span>
                <span className="text-gray-500 font-medium">{light.unit}</span>
              </div>
              <div className="text-xs text-gray-400">{light.hourlyRate}</div>
            </div>
            <div className="space-y-3 mb-7">
              {COMPARE_ROWS.map((row, i) => (
                <div key={i} className="flex items-start justify-between gap-3 pb-3 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-600">{row.label}</span>
                  <span className="text-sm font-semibold text-gray-900 text-right">{row.light}</span>
                </div>
              ))}
            </div>
            <Link
              href={checkoutPath(light.id)}
              className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center font-bold py-3.5 rounded-xl transition-colors"
            >
              Choisir Light
            </Link>
          </div>

          {/* Pro */}
          <div className="relative bg-gradient-to-br from-white via-white to-purple-50 rounded-3xl p-7 md:p-8 border-2 border-purple-300 shadow-2xl shadow-purple-500/15">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-turquoise to-blue-bright text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                ⭐ Le plus choisi
              </div>
            </div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                {pro.name}
              </div>
              <h3 className="text-lg font-bold text-gray-900">Pour accélérer concrètement</h3>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">{pro.priceLabel}</span>
                <span className="text-gray-500 font-medium">{pro.unit}</span>
              </div>
              <div className="text-xs text-gray-400">{pro.hourlyRate}</div>
            </div>
            <div className="space-y-3 mb-7">
              {COMPARE_ROWS.map((row, i) => (
                <div key={i} className="flex items-start justify-between gap-3 pb-3 border-b border-purple-100 last:border-0">
                  <span className="text-sm text-gray-600">{row.label}</span>
                  <span
                    className={`text-sm font-semibold text-right ${
                      row.highlight === 'pro' ? 'text-purple-700' : 'text-gray-900'
                    }`}
                  >
                    {row.pro}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href={checkoutPath(pro.id)}
              className="block w-full bg-gradient-to-r from-turquoise to-blue-bright text-white text-center font-bold py-3.5 rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-transform"
            >
              Choisir Pro
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompareSection;
