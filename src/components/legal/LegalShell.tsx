import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface LegalShellProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalShell({ title, subtitle, lastUpdated, children }: LegalShellProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-12 md:pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-turquoise transition-colors mb-6"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{subtitle}</p>
            )}
            <p className="text-sm text-gray-400 mt-5">Dernière mise à jour&nbsp;: {lastUpdated}</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <article className="container mx-auto px-4 md:px-6 max-w-3xl legal-prose">
            {children}
          </article>
        </section>

        <section className="py-12 bg-slate-50 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Une question sur ce document&nbsp;? On répond sous 1h en journée.
              </div>
              <div className="flex flex-wrap gap-3">
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
                  hi@helpallskills.com
                </a>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/legal" className="text-gray-500 hover:text-turquoise">
                Mentions légales
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-turquoise">
                Confidentialité
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-turquoise">
                Conditions générales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
