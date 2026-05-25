import type { Metadata } from 'next';
import LegalShell from '@/components/legal/LegalShell';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales de HelpAll Skills — éditeur, hébergeur, contact, propriété intellectuelle.",
  alternates: { canonical: '/legal' },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  return (
    <LegalShell
      title="Mentions légales"
      subtitle="Coordonnées, identité de l'éditeur du site et informations d'hébergement."
      lastUpdated="25 mai 2026"
    >
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>helpallskills.com</strong> est édité par <strong>HelpAll Skills</strong>,
        programme d&apos;accompagnement et de mentorat tech opéré par GOMEZ Jacob Ambroise David,
        entrepreneur individuel basé à Cotonou (République du Bénin).
      </p>
      <div className="info-box">
        <p><strong>Dénomination&nbsp;:</strong> HelpAll Skills</p>
        <p><strong>Responsable de la publication&nbsp;:</strong> GOMEZ Jacob Ambroise David</p>
        <p><strong>Adresse&nbsp;:</strong> Cotonou, République du Bénin</p>
        <p><strong>Email&nbsp;:</strong> <a href="mailto:hi@helpallskills.com">hi@helpallskills.com</a></p>
        <p><strong>WhatsApp&nbsp;:</strong> <a href="https://wa.me/22901624357" target="_blank" rel="noopener noreferrer">+229 01 62 43 57 41</a></p>
      </div>

      <div className="callout">
        HelpAll Skills est une activité en phase de lancement, exercée à titre individuel.
        Les informations relatives à une éventuelle immatriculation au RCCM seront mises à jour
        sur cette page dès que la structure sera officiellement constituée.
      </div>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé sous forme de fichiers statiques (sans serveur applicatif), via la
        plateforme <strong>Vercel Inc.</strong>
      </p>
      <div className="info-box">
        <p><strong>Hébergeur&nbsp;:</strong> Vercel Inc.</p>
        <p><strong>Adresse&nbsp;:</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
        <p><strong>Site&nbsp;:</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
      </div>

      <h2>Paiement</h2>
      <p>
        Les paiements en ligne sont traités par <strong>Chariow</strong>, prestataire de paiement
        indépendant. Aucune donnée bancaire ne transite par nos serveurs.
      </p>
      <ul>
        <li>
          Site Chariow&nbsp;: <a href="https://chariow.com" target="_blank" rel="noopener noreferrer">chariow.com</a>
        </li>
        <li>Moyens acceptés&nbsp;: MTN Mobile Money, Moov Money, Orange Money, Wave, carte Visa/Mastercard.</li>
      </ul>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur le site (textes, visuels, logo, code source) est la
        propriété de HelpAll Skills, à l&apos;exception des photographies et marques des coachs et
        entreprises mentionnées, qui restent la propriété de leurs détenteurs respectifs.
      </p>
      <p>
        Toute reproduction, représentation, ou exploitation, totale ou partielle, sans autorisation
        écrite préalable, est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        HelpAll Skills met tout en œuvre pour fournir des informations exactes et à jour, sans pour
        autant garantir l&apos;absence d&apos;erreur. Les conseils prodigués lors des sessions de coaching
        ou de mentorat constituent un accompagnement à titre indicatif&nbsp;: les décisions techniques,
        professionnelles ou financières prises par l&apos;utilisateur relèvent de sa seule
        responsabilité.
      </p>

      <h2>Crédits</h2>
      <p>
        Site conçu et développé en interne. Police&nbsp;: <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer">Poppins</a> (Google Fonts).
      </p>
    </LegalShell>
  );
}
