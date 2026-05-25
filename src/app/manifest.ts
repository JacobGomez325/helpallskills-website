import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HelpAll Skills — Coaching & Mentorat Tech',
    short_name: 'HelpAll Skills',
    description:
      'Coaching et mentorat tech pour développeurs en Afrique francophone.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0AB9A6',
    lang: 'fr-FR',
    orientation: 'portrait',
    categories: ['education', 'business', 'productivity'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
  };
}
