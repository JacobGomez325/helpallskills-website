import type { Metadata } from 'next';
import LegalShell from '@/components/legal/LegalShell';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    "Comment HelpAll Skills collecte, utilise et protège tes données personnelles. Conforme aux principes du RGPD et de la loi béninoise n°2017-20.",
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      subtitle="Quelles données on collecte, pourquoi, combien de temps on les garde, et comment tu peux les contrôler."
      lastUpdated="25 mai 2026"
    >
      <div className="callout">
        On collecte le minimum pour bosser ensemble. Pas de revente. Pas de tracking publicitaire.
        Si tu veux qu&apos;on supprime tout&nbsp;: un email à <a href="mailto:hi@helpallskills.com">hi@helpallskills.com</a> suffit.
      </div>

      <h2>1. Qui est responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles est <strong>HelpAll Skills</strong>,
        opéré par GOMEZ Jacob Ambroise David (Cotonou, République du Bénin).
      </p>
      <p>
        Contact pour toute question liée à tes données&nbsp;:
        <a href="mailto:hi@helpallskills.com">hi@helpallskills.com</a>.
      </p>

      <h2>2. Quelles données on collecte</h2>
      <h3>2.1 Données que tu nous donnes</h3>
      <ul>
        <li><strong>Identité&nbsp;:</strong> nom, prénom.</li>
        <li><strong>Contact&nbsp;:</strong> email, numéro WhatsApp.</li>
        <li><strong>Échanges&nbsp;:</strong> messages WhatsApp, emails, contenu des sessions visio (notes prises par ton coach).</li>
        <li><strong>Paiement&nbsp;:</strong> détails de transaction (montant, formule, date) — les données bancaires ne sont jamais stockées chez nous, elles transitent uniquement par Chariow.</li>
      </ul>

      <h3>2.2 Données collectées automatiquement</h3>
      <ul>
        <li>Données techniques minimales lors de la visite du site (adresse IP, navigateur, pages vues) via les logs d&apos;hébergement.</li>
        <li>Aucun cookie de tracking publicitaire. Aucun pixel Meta ou Google Ads.</li>
      </ul>

      <h2>3. Pourquoi on les utilise</h2>
      <ul>
        <li><strong>Fournir le service&nbsp;:</strong> organiser les sessions, te contacter, suivre ta progression.</li>
        <li><strong>Facturer&nbsp;:</strong> émettre les reçus et tenir la comptabilité.</li>
        <li><strong>Communiquer&nbsp;:</strong> répondre à tes questions sur WhatsApp ou par email.</li>
        <li><strong>Améliorer le service&nbsp;:</strong> à partir de retours anonymisés.</li>
      </ul>
      <p>
        On ne fait <strong>aucun profilage publicitaire</strong> et on ne revend tes données à
        personne.
      </p>

      <h2>4. Avec qui on les partage</h2>
      <p>Uniquement des sous-traitants strictement nécessaires au fonctionnement&nbsp;:</p>
      <ul>
        <li><strong>Chariow</strong> — paiement en ligne (<a href="https://chariow.com" target="_blank" rel="noopener noreferrer">chariow.com</a>).</li>
        <li><strong>Meta · WhatsApp</strong> — communication via WhatsApp Business.</li>
        <li><strong>Vercel</strong> — hébergement du site (logs techniques).</li>
        <li><strong>Google Workspace</strong> — emails (<a href="mailto:hi@helpallskills.com">hi@helpallskills.com</a>) et visios Google Meet pour les sessions.</li>
      </ul>
      <p>
        Aucun transfert à des fins commerciales. Chacun de ces prestataires est lié par sa propre
        politique de confidentialité.
      </p>

      <h2>5. Combien de temps on les garde</h2>
      <ul>
        <li><strong>Données de prospect</strong> (échanges avant achat)&nbsp;: 12 mois après le dernier contact.</li>
        <li><strong>Données client</strong> (durant l&apos;accompagnement)&nbsp;: pendant toute la durée de la relation.</li>
        <li><strong>Données comptables</strong> (factures, paiements)&nbsp;: 10 ans, durée légale de conservation.</li>
        <li><strong>Logs techniques</strong>&nbsp;: 12 mois maximum.</li>
      </ul>

      <h2>6. Tes droits</h2>
      <p>Conformément à la loi béninoise n°2017-20 et aux principes du RGPD, tu disposes des droits suivants&nbsp;:</p>
      <ul>
        <li><strong>Accès</strong>&nbsp;: savoir quelles données on a sur toi.</li>
        <li><strong>Rectification</strong>&nbsp;: corriger une donnée inexacte.</li>
        <li><strong>Effacement</strong>&nbsp;: demander la suppression de tes données.</li>
        <li><strong>Opposition</strong>&nbsp;: t&apos;opposer à un traitement.</li>
        <li><strong>Portabilité</strong>&nbsp;: récupérer tes données dans un format lisible.</li>
        <li><strong>Limitation</strong>&nbsp;: figer un traitement le temps d&apos;une vérification.</li>
      </ul>
      <p>
        Pour exercer ces droits, écris-nous à <a href="mailto:hi@helpallskills.com">hi@helpallskills.com</a>.
        On répond sous 7 jours.
      </p>
      <p>
        En cas de désaccord, tu peux saisir l&apos;<strong>Autorité de Protection des Données
        Personnelles (APDP)</strong> du Bénin.
      </p>

      <h2>7. Sécurité</h2>
      <p>
        Tes données sont protégées par les mesures techniques standards&nbsp;: connexions chiffrées
        (HTTPS), accès restreint aux outils utilisés (email, WhatsApp Business, Chariow). Aucun
        système n&apos;est infaillible&nbsp;: si une fuite survenait, on te préviendrait sous 72h.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Le site n&apos;utilise <strong>aucun cookie de tracking</strong>. Seuls des cookies techniques
        strictement nécessaires (préférences d&apos;affichage, sécurité) peuvent être déposés. Aucun
        consentement n&apos;est requis pour ces cookies essentiels.
      </p>
      <p>
        Si on ajoute un outil de mesure d&apos;audience (Plausible, Umami…), il sera respectueux de
        la vie privée, sans empreinte numérique, sans cookie tiers — et signalé ici.
      </p>

      <h2>9. Mineurs</h2>
      <p>
        Le service est ouvert aux personnes âgées de 16 ans et plus. Pour un mineur, le consentement
        d&apos;un parent ou tuteur est requis avant tout paiement.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Cette politique peut évoluer. La date de mise à jour est indiquée en haut de la page. En
        cas de changement majeur, on te préviendra par email ou WhatsApp.
      </p>
    </LegalShell>
  );
}
