export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: 'Comment je choisis entre Light et Pro ?',
    a: "Light si tu veux progresser tranquillement avec un coach (2 sessions/mois, budget serré). Pro si tu as un objectif concret à court terme : décrocher un poste, finir un projet, pivoter de stack (4 sessions/mois + roadmap + support prioritaire).",
  },
  {
    q: 'Je peux choisir mon mentor ?',
    a: "Oui. Tu vois tous les profils, leurs spécialités, leurs avis et leur entreprise actuelle. Tu choisis celui qui te correspond et tu gardes le même chaque mois.",
  },
  {
    q: "Le support WhatsApp, ça veut dire quoi exactement ?",
    a: "Tu peux écrire à ton mentor entre les sessions pour des questions courtes, des revues de code, du débuggage rapide. Il te répond sous 48h ouvrées en Light, sous 24h ouvrées en Pro. Ça ne remplace pas les sessions en direct.",
  },
  {
    q: 'Et si ça ne matche pas avec mon mentor ?',
    a: "Tu peux changer de mentor le mois suivant, sans frais. Notre objectif c'est que ça avance, pas de te bloquer.",
  },
  {
    q: 'Je peux mettre en pause ?',
    a: "Oui. Tu peux pauser ou arrêter à la fin de chaque mois. Aucun engagement long.",
  },
  {
    q: 'Comment je paie ?',
    a: "Mobile Money (MTN, Moov, Orange, Wave) ou carte Visa/Mastercard, via Chariow. Tout est sécurisé.",
  },
  {
    q: 'Je peux passer de Light à Pro (ou inversement) ?',
    a: "Oui, à n'importe quel renouvellement mensuel. Tu nous écris sur WhatsApp et on bascule ton abonnement.",
  },
];
