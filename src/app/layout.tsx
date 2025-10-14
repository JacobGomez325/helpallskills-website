import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'HelpAll Skills - Coaching et Formations Tech',
  description: 'Coaching et formations tech personnalisés pour booster votre carrière dans la tech.',
  icons: {
    icon: '/favicon.ico',
  },
  
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
