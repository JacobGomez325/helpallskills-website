'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CHARIOW_STORE_DOMAIN, type Offer } from '@/data/offers';

const CSS_HREF = 'https://js.chariowcdn.com/v1/widget.min.css';
const SCRIPT_SRC = 'https://js.chariowcdn.com/v1/widget.min.js';

interface Props {
  offer: Offer;
}

export default function ChariowCheckout({ offer }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }

    mountRef.current.innerHTML = '';
    const widget = document.createElement('div');
    widget.id = 'chariow-widget';
    widget.setAttribute('data-product-id', offer.chariowProductId);
    widget.setAttribute('data-store-domain', CHARIOW_STORE_DOMAIN);
    widget.setAttribute('data-style', 'frame');
    widget.setAttribute('data-border-style', 'rounded');
    widget.setAttribute('data-cta-width', 'xs');
    widget.setAttribute('data-cta-animation', 'none');
    widget.setAttribute('data-locale', 'fr');
    widget.setAttribute('data-primary-color', '#0AB9A6');
    widget.setAttribute('data-background-color', '#FFFFFF');
    mountRef.current.appendChild(widget);

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, [offer.chariowProductId]);

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Retour"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-bold text-lg">HelpAll Skills</span>
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <span className="size-2 rounded-full bg-green-500 animate-pulse" />
            Paiement sécurisé · Chariow
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Offer summary */}
          <aside className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-7 lg:sticky lg:top-8">
              <div className="text-xs font-bold uppercase tracking-wider text-turquoise mb-2">
                Tu commandes
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-1">
                {offer.name}
              </h1>
              <p className="text-sm text-gray-600 mb-5">{offer.tagline}</p>

              <div className="border-y border-gray-100 py-5 mb-5">
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-4xl font-black text-gray-900">{offer.priceLabel}</span>
                  <span className="text-gray-500 font-medium">{offer.unit}</span>
                </div>
                <div className="text-xs text-gray-400">{offer.hourlyRate}</div>
                <div className="text-sm font-semibold text-gray-700 mt-2">{offer.sessions}</div>
              </div>

              <div className="mb-5">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Ce qui est inclus
                </div>
                <ul className="space-y-2">
                  {offer.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-turquoise mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                <strong>🔥 Places limitées par coach.</strong> Une fois ton paiement reçu, on te
                contacte sur WhatsApp sous 1h ouvrée pour ton premier créneau.
              </div>
            </div>
          </aside>

          {/* Widget */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                Paiement
              </div>
              <div ref={mountRef} className="min-h-[480px]" />
            </div>

            <div className="mt-5 bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Un problème, une question&nbsp;?</h3>
                  <p className="text-xs text-gray-500">
                    On répond sur WhatsApp en moins d&apos;1h en journée.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/22901624357"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="mailto:hi@helpallskills.com"
                    className="bg-white border-2 border-gray-200 hover:border-turquoise text-gray-900 text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              {['MTN MoMo', 'Wave', 'Orange Money', 'Visa/MC'].map((m) => (
                <div
                  key={m}
                  className="bg-white border border-gray-200 rounded-lg py-2.5 text-xs font-semibold text-gray-600"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-turquoise font-semibold inline-flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Revenir aux offres
          </Link>
        </div>
      </section>
    </main>
  );
}
