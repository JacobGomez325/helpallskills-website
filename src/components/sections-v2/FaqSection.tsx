'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ } from '@/data/faq';

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-turquoise/10 text-turquoise text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              FAQ Mentorat
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Toutes les questions qu&apos;on nous pose.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border-2 transition-colors ${
                    isOpen ? 'border-turquoise/30' : 'border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-bold text-gray-900">{item.q}</span>
                    <span
                      className={`flex-shrink-0 size-8 rounded-full flex items-center justify-center transition-all ${
                        isOpen ? 'bg-turquoise text-white rotate-45' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
