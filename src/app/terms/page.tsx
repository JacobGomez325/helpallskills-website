import type { Metadata } from 'next';
import LegalShell from '@/components/legal/LegalShell';

export const metadata: Metadata = {
  title: 'Conditions générales',
  description:
    "Conditions générales d'utilisation et de vente de HelpAll Skills. Coaching et mentorat tech, paiement Mobile Money via Chariow.",
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Conditions générales"
      subtitle="Le cadre dans lequel on bosse ensemble : ce qu'on s'engage à faire, ce qu'on attend de toi, et comment ça se passe si ça coince."
      lastUpdated="25 mai 2026"
    >
      <div className="callout">
        On a essayé d&apos;écrire ces conditions en français normal, pas en charabia juridique.
        Si quelque chose te paraît flou&nbsp;: écris-nous, on reformule.
      </div>

      <h2>1. Présentation</h2>
      <p>
        Les présentes conditions générales (les «&nbsp;<strong>Conditions</strong>&nbsp;») régissent les
        relations entre <strong>HelpAll Skills</strong> (le «&nbsp;Prestataire&nbsp;»), opéré par
        GOMEZ Jacob Ambroise David à Cotonou (Bénin), et toute personne souscrivant à l&apos;une des offres
        (le&nbsp;«&nbsp;Client&nbsp;»).
      </p>
      <p>
        L&apos;achat d&apos;une offre vaut acceptation pleine et entière des présentes Conditions.
      </p>

      <h2>2. Offres et tarifs</h2>
      <p>HelpAll Skills propose trois offres&nbsp;:</p>
      <ul>
        <li><strong>Coaching Express</strong> — 5 000 FCFA par session de 1h, à la demande.</li>
        <li><strong>Mentorat Light</strong> — 13 500 FCFA par mois, 2 sessions de 1h30 + support WhatsApp asynchrone.</li>
        <li><strong>Mentorat Pro</strong> — 25 000 FCFA par mois, 4 sessions de 1h30 + support WhatsApp prioritaire + roadmap PDF.</li>
      </ul>
      <p>
        Tous les prix sont exprimés en <strong>francs CFA (FCFA / XOF)</strong>. Aucune TVA n&apos;est
        applicable à ce jour, l&apos;activité étant exercée en franchise (à titre individuel).
      </p>

      <h2>3. Paiement</h2>
      <p>
        Les paiements sont traités via <strong>Chariow</strong>, prestataire indépendant. Moyens
        acceptés&nbsp;: Mobile Money (MTN, Moov, Orange, Wave) et carte Visa/Mastercard.
      </p>
      <ul>
        <li>Le paiement est exigé avant la première session.</li>
        <li>Pour les abonnements (Light, Pro), le renouvellement est mensuel — le Client peut arrêter à la fin de chaque mois sans frais.</li>
        <li>Un reçu est envoyé par email après chaque paiement.</li>
      </ul>

      <h2>4. Déroulement des sessions</h2>
      <ul>
        <li>Les sessions ont lieu en visio (Google Meet ou équivalent).</li>
        <li>Le coach et le Client conviennent ensemble d&apos;un créneau via WhatsApp ou email.</li>
        <li>Un récapitulatif est envoyé par le coach sous 24h après chaque session.</li>
        <li>En cas d&apos;empêchement, le Client peut reporter une session jusqu&apos;à 12h avant le créneau prévu. Une session non honorée sans report préalable est considérée comme due.</li>
      </ul>

      <h2>5. Choix du coach</h2>
      <p>
        Pour chaque formule, HelpAll Skills met le Client en relation avec un coach choisi selon le
        besoin (stack, objectif, disponibilité). Le Client peut demander à changer de coach à la fin
        de chaque mois, sans frais et sans justification.
      </p>

      <h2>6. Garantie satisfait — remboursement</h2>
      <h3>6.1 Coaching Express</h3>
      <p>
        Si la session n&apos;apporte pas la valeur attendue, le Client peut demander un remboursement
        intégral sous <strong>24h</strong> après la session, par email ou WhatsApp. Le remboursement
        est effectué sous 7 jours ouvrés via le moyen de paiement initial.
      </p>

      <h3>6.2 Mentorat (Light et Pro)</h3>
      <p>
        Le Client peut résilier son abonnement à tout moment, à effet à la fin du mois en cours.
        Aucun remboursement partiel n&apos;est effectué pour un mois entamé, mais aucun frais
        supplémentaire ne sera prélevé.
      </p>

      <h3>6.3 Force majeure</h3>
      <p>
        En cas d&apos;impossibilité de tenir une session pour des raisons indépendantes de notre
        volonté (panne technique majeure, indisponibilité prolongée du coach), la session est
        replanifiée ou remboursée au choix du Client.
      </p>

      <h2>7. Engagements du Prestataire</h2>
      <ul>
        <li>Mettre en relation le Client avec un coach pertinent.</li>
        <li>Tenir les sessions prévues à l&apos;horaire convenu.</li>
        <li>Maintenir la confidentialité absolue sur le contenu des sessions et tout document partagé.</li>
        <li>Fournir un récapitulatif écrit après chaque session.</li>
      </ul>

      <h2>8. Engagements du Client</h2>
      <ul>
        <li>Fournir des informations exactes lors de la souscription.</li>
        <li>Se présenter aux sessions avec le matériel et la connexion nécessaires.</li>
        <li>Respecter les coachs et les autres participants (en cas de session collective, le cas échéant).</li>
        <li>Ne pas enregistrer une session sans accord préalable du coach.</li>
      </ul>

      <h2>9. Propriété intellectuelle</h2>
      <p>
        Les supports remis par le coach (notes, roadmap PDF, exemples de code) sont destinés à un
        usage personnel du Client. Toute revente, redistribution ou exploitation commerciale est
        interdite sans accord écrit.
      </p>
      <p>
        Le code produit par le Client pendant les sessions lui appartient intégralement.
      </p>

      <h2>10. Responsabilité</h2>
      <p>
        HelpAll Skills fournit un accompagnement à but pédagogique et professionnel. Les décisions
        techniques, professionnelles ou financières prises par le Client relèvent de sa seule
        responsabilité.
      </p>
      <p>
        La responsabilité du Prestataire est limitée au montant payé par le Client pour les
        prestations concernées au cours des trois derniers mois.
      </p>

      <h2>11. Modifications des Conditions</h2>
      <p>
        Les présentes Conditions peuvent être modifiées. Les Clients en cours d&apos;accompagnement
        restent soumis à la version en vigueur lors de leur souscription, sauf modification
        avantageuse acceptée par les deux parties.
      </p>

      <h2>12. Droit applicable et litiges</h2>
      <p>
        Les présentes Conditions sont soumises au <strong>droit béninois</strong>. En cas de litige,
        une solution amiable sera systématiquement recherchée avant toute action contentieuse.
      </p>
      <p>
        À défaut d&apos;accord amiable, les tribunaux compétents seront ceux de Cotonou (République
        du Bénin).
      </p>

      <h2>13. Contact</h2>
      <p>Pour toute question relative aux présentes Conditions&nbsp;:</p>
      <div className="info-box">
        <p><strong>Email&nbsp;:</strong> <a href="mailto:hi@helpallskills.com">hi@helpallskills.com</a></p>
        <p><strong>WhatsApp&nbsp;:</strong> <a href="https://wa.me/22901624357" target="_blank" rel="noopener noreferrer">+229 01 62 43 57 41</a></p>
      </div>
    </LegalShell>
  );
}
