'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface UserProfile {
  goal?: 'student' | 'career_boost' | 'career_change' | 'pro_team';
  availability?: 'full_time' | 'part_time' | 'weekends' | 'flexible';
  preference?: 'express' | 'light' | 'pro';
  commitment?: 'short' | 'medium' | 'long';
}

interface RealOffer {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  duration: string;
  format: string;
  features: string[];
  price: string;
  priceNote: string;
  buyLink: string;
  color: string;
  badge?: string;
  bestFor: string[];
  useCases: string[];
  matchScore?: number;
}

const ImmersiveExperience = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [recommendedOffers, setRecommendedOffers] = useState<RealOffer[]>([]);
  const [selectedOffer, setSelectedOffer] = useState<RealOffer | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [typedText, setTypedText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // 3 offres claires et focalisées — configurables depuis Payload CMS
  const realOffers: RealOffer[] = [
    {
      id: 'coaching-express',
      name: '⚡ Coaching Express',
      tagline: 'Un blocage résolu en 1 heure',
      description:
        "Tu as un bug précis, une question technique, une revue de code ou une préparation rapide à un entretien. Tu réserves un créneau, on règle ça ensemble, tu repartes débloqué.",
      icon: '⚡',
      duration: '1h',
      format: 'Session unique',
      features: [
        'Session visio individuelle de 1h',
        'Résolution d\'un blocage technique précis',
        'Récapitulatif envoyé sur WhatsApp sous 24h',
        'Revue de code, concept ou préparation entretien',
        'Aide sur projet personnel ou professionnel',
      ],
      price: '5 000 FCFA',
      priceNote: 'Session unique · Paiement sécurisé via Chariow',
      buyLink: 'https://chariow.com/helpallskills/coaching-express',
      color: 'from-amber-400 via-orange-500 to-red-500',
      badge: "Offre d'entrée",
      bestFor: ['student', 'career_boost', 'career_change', 'pro_team'],
      useCases: ['Débloquer un bug', 'Revue de code', 'Comprendre un concept', 'Préparer un entretien', 'Aide projet perso'],
    },
    {
      id: 'mentorat-light',
      name: '📈 Mentorat Light',
      tagline: 'Progresse régulièrement, sans pression',
      description:
        "Un accompagnement léger mais structuré. Tu gardes le même coach dédié chaque mois et tu avances à un rythme régulier. Support WhatsApp disponible entre les sessions.",
      icon: '📈',
      duration: '2 × 1h30 / mois',
      format: 'Abonnement mensuel',
      features: [
        '2 sessions de 1h30 par mois',
        'Même coach dédié tous les mois',
        'Support WhatsApp asynchrone (réponse sous 48h ouvrées)',
        'Le support WhatsApp ne remplace pas les sessions en direct',
        'Places limitées par coach — qualité garantie',
      ],
      price: '13 500 FCFA',
      priceNote: 'Par mois · Sans engagement minimum',
      buyLink: 'https://chariow.com/helpallskills/mentorat-light',
      color: 'from-blue-500 via-indigo-500 to-purple-500',
      badge: 'Le plus accessible',
      bestFor: ['student', 'career_boost'],
      useCases: ['Montée en compétences', 'Suivi mensuel régulier', 'Questions entre sessions', 'Progression structurée'],
    },
    {
      id: 'mentorat-pro',
      name: '🚀 Mentorat Pro',
      tagline: 'Accompagnement intensif avec roadmap',
      description:
        "Pour ceux qui veulent aller vite et loin. Préparation d'entretiens techniques, coaching carrière, suivi de projet freelance ou emploi. Ton coach te fournit une roadmap PDF personnalisée dès le départ.",
      icon: '🚀',
      duration: '4 × 1h30 / mois',
      format: 'Abonnement mensuel',
      features: [
        '4 sessions de 1h30 par mois',
        'Coach senior dédié',
        'Support WhatsApp prioritaire (réponse sous 24h ouvrées)',
        'Roadmap PDF personnalisée fournie par ton coach',
        'Places très limitées — max 5 mentorés actifs par coach',
        'Le support WhatsApp ne remplace pas les sessions en direct',
      ],
      price: '25 000 FCFA',
      priceNote: 'Par mois · Sans engagement minimum',
      buyLink: 'https://chariow.com/helpallskills/mentorat-pro',
      color: 'from-violet-600 via-purple-600 to-pink-600',
      badge: '⭐ Premium',
      bestFor: ['career_change', 'career_boost', 'pro_team'],
      useCases: ['Prépa entretiens tech', 'Coaching carrière', 'Suivi projet freelance', 'Accélération compétences'],
    },
  ];

  // Animation d'écriture à l'accueil
  useEffect(() => {
    if (currentStep === 0) {
      const text =
        "Salut ! 👋 Je suis ton guide HelpAll Skills. En 4 questions, je t'aide à trouver l'accompagnement tech qui te correspond vraiment.";
      let index = 0;
      const timer = setInterval(() => {
        setTypedText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(timer);
        }
      }, 38);
      return () => clearInterval(timer);
    }
  }, [currentStep]);

  // Recalculer les recommandations quand on revient à l'étape 5
  useEffect(() => {
    if (
      currentStep === 5 &&
      userProfile.goal &&
      userProfile.availability &&
      userProfile.preference &&
      userProfile.commitment
    ) {
      const recommendations = generateRecommendations(userProfile);
      setRecommendedOffers(recommendations);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, userProfile]);

  // Système de recommandation — 3 offres
  const generateRecommendations = (profile: UserProfile) => {
    const offers = realOffers.map((offer) => {
      let score = 0;

      // Score basé sur l'objectif
      if (profile.goal && offer.bestFor.includes(profile.goal)) {
        score += 30;
      }

      // Score basé sur la disponibilité
      if (profile.availability === 'flexible' && offer.id === 'coaching-express') score += 20;
      if (profile.availability === 'part_time' && offer.id === 'mentorat-light') score += 25;
      if (profile.availability === 'weekends' && offer.id === 'mentorat-light') score += 20;
      if (profile.availability === 'full_time' && offer.id === 'mentorat-pro') score += 25;

      // Score direct basé sur la préférence (correspond 1-to-1 aux offres)
      if (profile.preference === 'express' && offer.id === 'coaching-express') score += 50;
      if (profile.preference === 'light' && offer.id === 'mentorat-light') score += 50;
      if (profile.preference === 'pro' && offer.id === 'mentorat-pro') score += 50;

      // Score basé sur l'engagement
      if (profile.commitment === 'short' && offer.id === 'coaching-express') score += 35;
      if (profile.commitment === 'medium' && offer.id === 'mentorat-light') score += 30;
      if (profile.commitment === 'long' && offer.id === 'mentorat-pro') score += 35;

      return { ...offer, matchScore: Math.min(score, 99) };
    });

    return offers.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const ProgressBar = ({ step }: { step: number }) => (
    <div className="w-full max-w-xs mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-turquoise to-blue-bright rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${(step / 4) * 100}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      // ──────────────────────────────────────────
      // Étape 0 : Accueil avec aperçu des 3 offres
      // ──────────────────────────────────────────
      case 0:
        return (
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-24 md:pt-0">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 right-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-bright/10 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl" />
            </div>

            <motion.div
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-12 md:py-20"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-4xl mx-auto space-y-8 md:space-y-10">
                {/* Badge pays */}
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20"
                >
                  <span className="text-xl">🇧🇯</span>
                  <span className="text-white/90 text-sm font-semibold">Coaching Tech · Afrique francophone</span>
                </motion.div>

                {/* Titre principal */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight"
                >
                  <span className="block bg-gradient-to-r from-white via-blue-200 to-turquoise bg-clip-text text-transparent mb-2 md:mb-4">
                    Bienvenue chez
                  </span>
                  <span className="block bg-gradient-to-r from-turquoise via-blue-bright to-purple-400 bg-clip-text text-transparent">
                    HelpAll Skills
                  </span>
                </motion.h1>

                {/* Message animé */}
                <motion.div variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
                    <div className="text-lg md:text-2xl font-medium text-white/90 mb-3 min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
                      <span className="text-center leading-relaxed">
                        {typedText}
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block w-0.5 md:w-1 h-5 md:h-7 bg-turquoise ml-1"
                        />
                      </span>
                    </div>
                    <div className="text-white/50 text-sm">
                      3 offres claires · Paiement sécurisé via Chariow · Coachs dédiés
                    </div>
                  </div>
                </motion.div>

                {/* Aperçu des 3 offres */}
                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3 md:gap-4">
                  {[
                    { icon: '⚡', name: 'Coaching Express', price: '5 000 FCFA', sub: 'session unique' },
                    { icon: '📈', name: 'Mentorat Light', price: '13 500 FCFA', sub: '/ mois' },
                    { icon: '🚀', name: 'Mentorat Pro', price: '25 000 FCFA', sub: '/ mois' },
                  ].map((o, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 border border-white/10 hover:border-turquoise/30 text-center transition-all duration-300 cursor-default"
                      whileHover={{ y: -3 }}
                    >
                      <div className="text-2xl md:text-3xl mb-2">{o.icon}</div>
                      <div className="text-white text-xs md:text-sm font-bold mb-1 leading-tight">{o.name}</div>
                      <div className="text-turquoise font-black text-sm md:text-lg">{o.price}</div>
                      <div className="text-white/40 text-xs">{o.sub}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div variants={fadeInUp} className="space-y-4">
                  <motion.button
                    id="start-quiz-btn"
                    onClick={() => setCurrentStep(1)}
                    className="bg-gradient-to-r from-turquoise to-blue-bright text-white text-lg md:text-2xl font-bold px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-2xl group inline-flex items-center justify-center"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center">
                      {"Trouver mon accompagnement 🎯"}
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="ml-3 md:ml-4 group-hover:translate-x-2 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </motion.svg>
                    </span>
                  </motion.button>
                  <p className="text-white/40 text-sm">
                    ⏱️ 2 minutes · 4 questions · Résultat personnalisé
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // ──────────────────────────────────────────
      // Étape 1 : Objectif
      // ──────────────────────────────────────────
      case 1:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-turquoise-50 pt-32 md:pt-24 pb-12">
            <motion.div
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-6xl mx-auto space-y-6 md:space-y-10">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(0)}
                    className="text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-lg px-4 py-2 rounded-full border border-turquoise/20 shadow-lg">
                    <span className="text-xs font-semibold text-gray-600">Question 1 / 4 · Objectif</span>
                  </div>
                </motion.div>

                <ProgressBar step={1} />

                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight px-4"
                >
                  Quel est ton objectif ? 🎯
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
                  Dis-moi ce que tu cherches à accomplir
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                  {[
                    {
                      id: 'student',
                      icon: '🎓',
                      title: 'Apprendre & progresser',
                      description: 'Je veux monter en compétences dans la tech',
                      color: 'from-green-400 to-emerald-500',
                    },
                    {
                      id: 'career_boost',
                      icon: '🚀',
                      title: 'Booster ma carrière',
                      description: 'Je suis dev, je veux évoluer ou trouver mieux',
                      color: 'from-blue-500 to-turquoise',
                    },
                    {
                      id: 'career_change',
                      icon: '🔄',
                      title: 'Me reconvertir',
                      description: 'Je veux entrer dans la tech ou changer de stack',
                      color: 'from-purple-500 to-pink-500',
                    },
                    {
                      id: 'pro_team',
                      icon: '💼',
                      title: 'Décrocher un emploi',
                      description: "Je prépare des entretiens ou cherche du freelance",
                      color: 'from-orange-500 to-red-500',
                    },
                  ].map((option) => (
                    <motion.button
                      id={`goal-${option.id}`}
                      key={option.id}
                      onClick={() => {
                        setUserProfile((prev) => ({ ...prev, goal: option.id as UserProfile['goal'] }));
                        setCurrentStep(2);
                      }}
                      className="group bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all text-center"
                      variants={scaleIn}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`text-4xl md:text-5xl mb-3 md:mb-4 p-3 md:p-4 bg-gradient-to-br ${option.color} rounded-xl md:rounded-2xl inline-block`}
                      >
                        {option.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{option.title}</h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{option.description}</p>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // ──────────────────────────────────────────
      // Étape 2 : Disponibilité
      // ──────────────────────────────────────────
      case 2:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32 md:pt-24 pb-12">
            <motion.div
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-5xl mx-auto space-y-6 md:space-y-10">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(1)}
                    className="text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-lg px-4 py-2 rounded-full border border-turquoise/20 shadow-lg">
                    <span className="text-xs font-semibold text-gray-600">Question 2 / 4 · Disponibilité</span>
                  </div>
                </motion.div>

                <ProgressBar step={2} />

                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight px-4"
                >
                  Ta disponibilité ? ⏰
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
                  {"Ça m'aide à te proposer le format qui colle à ton emploi du temps"}
                </motion.p>

                <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      id: 'full_time',
                      icon: '⚡',
                      title: 'Temps plein',
                      description: "Je peux me consacrer intensément à ma progression (15h+/semaine)",
                      badge: 'Mentorat Pro recommandé',
                    },
                    {
                      id: 'part_time',
                      icon: '🕐',
                      title: 'Quelques heures / semaine',
                      description: "J'ai 3 à 6h par semaine à y consacrer",
                      badge: 'Mentorat Light adapté',
                    },
                    {
                      id: 'weekends',
                      icon: '📅',
                      title: 'Surtout les week-ends',
                      description: "Je travaille en semaine, le week-end est pour moi",
                      badge: 'Sessions flexibles disponibles',
                    },
                    {
                      id: 'flexible',
                      icon: '🔄',
                      title: 'Rythme libre',
                      description: "Je préfère commencer doucement, sans pression",
                      badge: 'Coaching Express pour démarrer',
                    },
                  ].map((option, index) => (
                    <motion.button
                      id={`avail-${option.id}`}
                      key={option.id}
                      onClick={() => {
                        setUserProfile((prev) => ({ ...prev, availability: option.id as UserProfile['availability'] }));
                        setCurrentStep(3);
                      }}
                      className="group bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all text-left"
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl md:text-4xl flex-shrink-0">{option.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">{option.title}</h3>
                          <p className="text-sm md:text-base text-gray-500 mb-3 leading-relaxed">{option.description}</p>
                          <div className="inline-flex items-center bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-3 py-1.5 rounded-full border border-turquoise/20">
                            <span className="text-xs font-semibold text-turquoise">✨ {option.badge}</span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // ──────────────────────────────────────────
      // Étape 3 : Type d'accompagnement (direct mapping aux offres)
      // ──────────────────────────────────────────
      case 3:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-turquoise-50 via-white to-indigo-50 pt-32 md:pt-24 pb-12">
            <motion.div
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-5xl mx-auto space-y-6 md:space-y-10">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(2)}
                    className="text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-lg px-4 py-2 rounded-full border border-turquoise/20 shadow-lg">
                    <span className="text-xs font-semibold text-gray-600">Question 3 / 4 · Type d&apos;accompagnement</span>
                  </div>
                </motion.div>

                <ProgressBar step={3} />

                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight px-4"
                >
                  Tu as plutôt besoin de... 🤔
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
                  Choisis ce qui te ressemble le plus — les prix sont affichés pour te donner une idée
                </motion.p>

                <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      id: 'express',
                      icon: '⚡',
                      title: 'Un coup de boost ponctuel',
                      description: "J'ai un problème précis à régler maintenant. Pas besoin d'un suivi long.",
                      examples: ["Débloquer un bug", "Préparer un entretien", "Comprendre un concept"],
                      price: '5 000 FCFA',
                      sub: 'Session unique',
                      color: 'from-amber-400 to-orange-500',
                    },
                    {
                      id: 'light',
                      icon: '📈',
                      title: 'Un suivi régulier léger',
                      description: "Je veux progresser chaque mois avec un coach dédié, à un rythme humain.",
                      examples: ["2 sessions / mois", "Support WhatsApp", "Même coach dédié"],
                      price: '13 500 FCFA',
                      sub: 'Par mois',
                      color: 'from-blue-500 to-indigo-500',
                    },
                    {
                      id: 'pro',
                      icon: '🚀',
                      title: 'Un accompagnement intensif',
                      description: "Je veux aller vite, avec un suivi serré, une roadmap et des résultats concrets.",
                      examples: ["4 sessions / mois", "Roadmap PDF perso", "Support prioritaire"],
                      price: '25 000 FCFA',
                      sub: 'Par mois',
                      color: 'from-violet-600 to-purple-600',
                    },
                  ].map((option, index) => (
                    <motion.button
                      id={`pref-${option.id}`}
                      key={option.id}
                      onClick={() => {
                        setUserProfile((prev) => ({ ...prev, preference: option.id as UserProfile['preference'] }));
                        setCurrentStep(4);
                      }}
                      className="group bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all text-left"
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`text-3xl mb-4 p-3 bg-gradient-to-br ${option.color} rounded-xl inline-block`}
                      >
                        {option.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{option.title}</h3>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{option.description}</p>
                      <div className="space-y-2 mb-5">
                        {option.examples.map((ex, i) => (
                          <div key={i} className="flex items-center text-xs text-gray-600 gap-2">
                            <div className="w-1.5 h-1.5 bg-turquoise rounded-full flex-shrink-0" />
                            {ex}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-gray-900">{option.price}</span>
                        <span className="text-xs text-gray-400">{option.sub}</span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // ──────────────────────────────────────────
      // Étape 4 : Engagement
      // ──────────────────────────────────────────
      case 4:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 md:pt-24 pb-12">
            <motion.div
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-5xl mx-auto space-y-6 md:space-y-10">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(3)}
                    className="text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-lg px-4 py-2 rounded-full border border-turquoise/20 shadow-lg">
                    <span className="text-xs font-semibold text-gray-600">Question 4 / 4 · Engagement</span>
                  </div>
                </motion.div>

                <ProgressBar step={4} />

                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight px-4"
                >
                  {"Sur quelle durée ? 🗓️"}
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
                  {"Dernière question, c'est la plus facile 😄"}
                </motion.p>

                <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      id: 'short',
                      icon: '⚡',
                      title: 'Court terme',
                      description: "J'ai besoin d'aide maintenant, pas d'engagement long",
                      duration: '1 session unique',
                    },
                    {
                      id: 'medium',
                      icon: '📅',
                      title: 'Quelques mois',
                      description: 'Je veux un suivi structuré sur 1 à 3 mois',
                      duration: '1 à 3 mois',
                      popular: true,
                    },
                    {
                      id: 'long',
                      icon: '🌟',
                      title: 'Long terme',
                      description: "Je m'engage plusieurs mois pour des résultats durables",
                      duration: '3 à 6 mois',
                    },
                  ].map((option, index) => (
                    <motion.button
                      id={`commit-${option.id}`}
                      key={option.id}
                      onClick={() => {
                        const updatedProfile = { ...userProfile, commitment: option.id as UserProfile['commitment'] };
                        setUserProfile(updatedProfile);
                        const recommendations = generateRecommendations(updatedProfile);
                        setRecommendedOffers(recommendations);
                        setShowRecommendations(true);
                        setTimeout(() => {
                          setCurrentStep(5);
                        }, 1500);
                      }}
                      className="group relative bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all text-center"
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.popular && (
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
                            ⭐ Le plus choisi
                          </div>
                        </div>
                      )}
                      <div className="text-4xl md:text-5xl mb-3 md:mb-4">{option.icon}</div>
                      <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">{option.title}</h3>
                      <p className="text-sm md:text-base text-gray-500 mb-4 leading-relaxed">{option.description}</p>
                      <div className="inline-flex items-center bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-3 py-1.5 rounded-full border border-turquoise/20">
                        <span className="text-xs font-semibold text-turquoise">{option.duration}</span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Modal analyse */}
            <AnimatePresence>
              {showRecommendations && (
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white rounded-3xl p-12 text-center max-w-md mx-4 shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div
                      className="size-24 bg-gradient-to-r from-turquoise to-blue-bright rounded-full mx-auto mb-6 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">Analyse en cours...</h3>
                    <p className="text-gray-500 mb-6">Je trouve ton accompagnement idéal ! 🎯</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-turquoise to-blue-bright rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      // ──────────────────────────────────────────
      // Étape 5 : Recommandations (avec prix visibles)
      // ──────────────────────────────────────────
      case 5:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 md:pt-24 pb-12 md:pb-20">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 right-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-bright/10 rounded-full blur-3xl" />
            </div>

            <motion.div
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-7xl mx-auto space-y-8 md:space-y-12">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(4)}
                    className="text-white/60 hover:text-white transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-green-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full border border-green-400/30">
                    <span className="text-sm md:text-base font-semibold text-white">✨ Résultat personnalisé</span>
                  </div>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight px-4"
                >
                  Tes offres recommandées 🎯
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/60 max-w-3xl mx-auto px-4">
                  Clique sur une offre pour voir les détails et accéder au paiement sécurisé via Chariow.
                </motion.p>

                <motion.div
                  className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
                  variants={staggerChildren}
                >
                  {recommendedOffers.map((offer, index) => (
                    <motion.div
                      id={`offer-card-${offer.id}`}
                      key={offer.id}
                      className={`group relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 transition-all cursor-pointer ${
                        index === 0
                          ? 'border-yellow-400 shadow-2xl shadow-yellow-500/20 lg:scale-105'
                          : 'border-white/50 shadow-xl hover:border-turquoise/50'
                      }`}
                      variants={scaleIn}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ scale: index === 0 ? 1.07 : 1.05, y: -8 }}
                      onClick={() => {
                        setSelectedOffer(offer);
                        setCurrentStep(6);
                      }}
                    >
                      {/* Badge % match */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div
                          className={`${
                            index === 0
                              ? 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400'
                              : 'bg-gradient-to-r from-turquoise to-blue-bright'
                          } text-white px-5 py-2 rounded-full text-sm font-black shadow-xl whitespace-nowrap`}
                        >
                          {index === 0 && '⭐ '}
                          {offer.matchScore}% de match
                          {index === 0 && ' ⭐'}
                        </div>
                      </div>

                      {index === 0 && (
                        <div className="absolute -top-4 -right-4 z-20">
                          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-2xl rotate-12 whitespace-nowrap border-2 border-yellow-300">
                            🏆 RECOMMANDÉ
                          </div>
                        </div>
                      )}

                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icône + titre */}
                        <div className="text-center mb-5">
                          <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                            {offer.icon}
                          </div>
                          <h3 className="text-2xl font-black mb-1 text-gray-900 leading-tight">{offer.name}</h3>
                          <p className="text-turquoise font-bold text-sm">{offer.tagline}</p>
                        </div>

                        {/* Prix visible dès la liste */}
                        <div className="mb-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                          <div className="text-2xl font-black text-gray-900">{offer.price}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{offer.priceNote}</div>
                        </div>

                        {/* Durée & format */}
                        <div className="mb-5 flex items-center justify-center gap-3 text-xs text-gray-600 font-medium">
                          <span className="flex items-center gap-1">⏱️ {offer.duration}</span>
                          <span className="text-turquoise">·</span>
                          <span className="flex items-center gap-1">📅 {offer.format}</span>
                        </div>

                        {/* Features (3 premières) */}
                        <div className="space-y-2.5 mb-6 flex-grow">
                          {offer.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 bg-gradient-to-br from-turquoise to-blue-bright rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Bouton */}
                        <motion.button
                          className={`w-full text-white py-4 px-6 rounded-2xl font-bold text-base ${
                            index === 0
                              ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500'
                              : 'bg-gradient-to-r from-turquoise to-blue-bright'
                          }`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span className="flex items-center justify-center gap-2">
                            {index === 0 && '🎯 '}Voir les détails & commander
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Méthodes de paiement */}
                <motion.div variants={fadeInUp} className="text-center space-y-2">
                  <p className="text-white/40 text-sm">
                    🔒 Paiement sécurisé via Chariow
                  </p>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    {['MTN MoMo', 'Wave', 'Orange Money', 'Moov Money'].map((m) => (
                      <span key={m} className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {m}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // ──────────────────────────────────────────
      // Étape 6 : Détail offre + commande Chariow
      // ──────────────────────────────────────────
      case 6:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 md:pt-24 pb-12 md:pb-20">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-20 right-10 w-96 h-96 bg-turquoise/8 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-bright/8 rounded-full blur-3xl" />
            </div>

            <motion.div
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-7xl mx-auto space-y-6 md:space-y-8">
                {/* Navigation */}
                <motion.div variants={fadeInUp} className="flex items-center justify-center">
                  <motion.button
                    onClick={() => setCurrentStep(5)}
                    className="text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Voir les autres offres
                  </motion.button>
                </motion.div>

                {/* En-tête offre */}
                <motion.div variants={fadeInUp} className="space-y-2">
                  <div className="text-5xl md:text-7xl mb-3">{selectedOffer?.icon}</div>
                  <h2 className="text-3xl md:text-5xl font-black leading-tight px-4">
                    <span className="bg-gradient-to-r from-turquoise via-blue-bright to-purple-600 bg-clip-text text-transparent">
                      {selectedOffer?.name}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-turquoise font-bold">{selectedOffer?.tagline}</p>
                </motion.div>

                {/* Grid détails / CTA */}
                <motion.div
                  variants={fadeInUp}
                  className="grid lg:grid-cols-5 gap-8 md:gap-10 items-start max-w-7xl mx-auto"
                >
                  {/* ── Colonne gauche : Détails (3/5) ── */}
                  <div className="lg:col-span-3 bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 border-2 border-turquoise/20 shadow-2xl text-left">
                    {/* Prix */}
                    <div className="mb-8 p-6 bg-gradient-to-br from-turquoise/10 via-blue-bright/10 to-purple-500/10 rounded-2xl border-2 border-turquoise/25 text-center">
                      <div className="text-sm text-gray-400 mb-1 uppercase tracking-widest font-semibold">
                        {selectedOffer?.format === 'Session unique' ? 'Tarif session' : 'Tarif mensuel'}
                      </div>
                      <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-turquoise to-blue-bright bg-clip-text text-transparent mb-2">
                        {selectedOffer?.price}
                      </div>
                      <div className="text-sm text-gray-400">{selectedOffer?.priceNote}</div>
                    </div>

                    <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed text-center">
                      {selectedOffer?.description}
                    </p>

                    {/* Durée & Format */}
                    <div className="mb-8 grid grid-cols-2 gap-4">
                      <div className="p-4 bg-turquoise/5 rounded-2xl border border-turquoise/10 text-center">
                        <div className="text-3xl mb-2">⏱️</div>
                        <div className="text-sm font-bold text-gray-900 mb-1">Durée</div>
                        <div className="text-xs text-gray-500">{selectedOffer?.duration}</div>
                      </div>
                      <div className="p-4 bg-blue-bright/5 rounded-2xl border border-blue-bright/10 text-center">
                        <div className="text-3xl mb-2">📅</div>
                        <div className="text-sm font-bold text-gray-900 mb-1">Format</div>
                        <div className="text-xs text-gray-500">{selectedOffer?.format}</div>
                      </div>
                    </div>

                    {/* Ce que tu reçois */}
                    <div className="mb-8">
                      <h4 className="font-black text-xl md:text-2xl mb-5 text-gray-900 flex items-center gap-2">
                        <span>✨</span> Ce que tu reçois exactement
                      </h4>
                      <div className="space-y-3">
                        {selectedOffer?.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-turquoise/5 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                          >
                            <div className="w-7 h-7 bg-gradient-to-br from-turquoise to-blue-bright rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Cas d'usage */}
                    <div className="p-5 bg-gradient-to-r from-blue-50 to-turquoise/5 rounded-2xl border border-turquoise/10">
                      <p className="text-sm font-bold text-gray-600 mb-3">💡 Parfait pour :</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedOffer?.useCases.map((uc, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white px-3 py-1.5 rounded-full border border-turquoise/20 text-turquoise font-semibold shadow-sm"
                          >
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── Colonne droite : CTA (2/5) ── */}
                  <div className="lg:col-span-2 space-y-5">
                    <motion.div
                      className="sticky top-24"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {/* Carte CTA principale */}
                      <div className="bg-gradient-to-br from-turquoise via-blue-bright to-purple-600 rounded-3xl p-1 shadow-2xl mb-5">
                        <div className="bg-white rounded-[22px] p-6 md:p-8 text-center">
                          {/* Alerte places limitées */}
                          <div className="mb-5 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                            <div className="flex items-center justify-center gap-2 text-amber-700 text-sm font-bold">
                              <span>🔥</span>
                              <span>Places limitées par coach</span>
                            </div>
                            <p className="text-xs text-amber-600 mt-1 leading-relaxed">
                              Chaque coach limite son nombre de mentorés actifs pour garantir la qualité de l&apos;accompagnement.
                            </p>
                          </div>

                          {/* Prix recap */}
                          <div className="mb-6">
                            <div className="text-4xl font-black text-gray-900">{selectedOffer?.price}</div>
                            <div className="text-sm text-gray-400 mt-1">{selectedOffer?.priceNote}</div>
                          </div>

                          {/* CTA Chariow */}
                          <motion.a
                            id="chariow-buy-btn"
                            href={selectedOffer?.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-turquoise to-blue-bright text-white text-xl font-black py-5 px-6 rounded-2xl text-center shadow-xl mb-4 hover:no-underline"
                            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(10, 185, 166, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="flex flex-col items-center gap-1.5">
                              <span>🛒 Commander maintenant</span>
                              <span className="text-sm font-medium opacity-80">Paiement sécurisé via Chariow</span>
                            </span>
                          </motion.a>

                          {/* WhatsApp */}
                          <motion.button
                            id="whatsapp-contact-btn"
                            onClick={() => window.open('https://wa.me/22901624357', '_blank')}
                            className="w-full bg-white border-2 border-turquoise text-turquoise font-bold py-4 px-6 rounded-2xl hover:bg-turquoise hover:text-white transition-all duration-300 text-base mb-4"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            💬 Une question ? WhatsApp
                          </motion.button>

                          <button
                            onClick={() => setCurrentStep(5)}
                            className="w-full text-gray-400 font-medium py-2 hover:text-turquoise transition-colors text-sm flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Voir les autres offres
                          </button>
                        </div>
                      </div>

                      {/* Engagements */}
                      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 border-2 border-turquoise/20 shadow-xl">
                        <h4 className="text-base font-black mb-4 text-gray-900 text-center">🛡️ Nos engagements</h4>
                        <div className="space-y-3">
                          {[
                            {
                              icon: '⚡',
                              title: 'Réservation rapide',
                              desc: 'Créneau confirmé sous 24h',
                              color: 'from-yellow-400 to-orange-500',
                            },
                            {
                              icon: '🎯',
                              title: 'Session orientée résultat',
                              desc: 'Accompagnement concret et personnalisé',
                              color: 'from-turquoise to-blue-bright',
                            },
                            {
                              icon: '📱',
                              title: 'Mobile Money accepté',
                              desc: 'MTN · Wave · Orange · Moov',
                              color: 'from-green-400 to-emerald-500',
                            },
                            {
                              icon: '🔒',
                              title: 'Paiement sécurisé',
                              desc: 'Via Chariow — 100% fiable',
                              color: 'from-blue-400 to-indigo-500',
                            },
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              <div
                                className={`text-lg bg-gradient-to-br ${item.color} w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
                              >
                                {item.icon}
                              </div>
                              <div>
                                <div className="font-bold text-sm text-gray-900">{item.title}</div>
                                <div className="text-xs text-gray-400">{item.desc}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImmersiveExperience;
