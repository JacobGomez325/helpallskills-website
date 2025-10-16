'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface UserProfile {
  name?: string;
  goal?: 'student' | 'career_boost' | 'career_change' | 'pro_team';
  availability?: 'full_time' | 'part_time' | 'weekends' | 'flexible';
  preference?: 'group' | 'individual' | 'intensive' | 'mentoring';
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
  buyLink: string;
  color: string;
  bestFor: string[];
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

  // Toutes les vraies offres du site helpallskills.com
  const realOffers: RealOffer[] = [
    {
      id: 'coaching-express',
      name: '⚡ Coaching Express',
      tagline: 'Un coup de boost immédiat',
      description: 'Résolution rapide d\'un problème ou conseil ciblé pour débloquer ta situation.',
      icon: '⚡',
      duration: '1 heure',
      format: 'Session unique',
      features: [
        'Session unique de 1 heure',
        'Conseil ciblé et personnalisé',
        'Plan d\'action immédiat',
        'Résolution rapide de problèmes'
      ],
      price: '15 000 FCFA',
      buyLink: 'https://helpallskills.com/#coaching',
      color: 'from-yellow-400 via-orange-500 to-red-500',
      bestFor: ['student', 'career_boost', 'career_change']
    },
    {
      id: 'formation-privee',
      name: '👨‍🏫 Formation Privée 1-to-1',
      tagline: 'Suivi personnalisé à ton rythme',
      description: 'Suivi personnalisé et rythme flexible adapté à tes objectifs spécifiques.',
      icon: '👨‍🏫',
      duration: 'Par mois',
      format: '3 séances/semaine',
      features: [
        '3 séances individuelles par semaine',
        'Suivi personnalisé continu',
        'Rythme flexible',
        'Accompagnement sur mesure'
      ],
      price: '75 000 FCFA',
      buyLink: 'https://helpallskills.com/#coaching',
      color: 'from-blue-500 via-indigo-600 to-purple-600',
      bestFor: ['student', 'career_boost']
    },
    {
      id: 'formation-groupe',
      name: '👥 Formation en Groupe',
      tagline: 'Apprends avec une communauté',
      description: 'Programme intensif de 3 mois avec 9h/semaine en groupe de 10 personnes maximum.',
      icon: '👥',
      duration: '3 mois',
      format: 'Groupe de 10 max',
      features: [
        '3 séances par semaine',
        '9h de formation/semaine',
        'Groupe de 10 personnes max',
        'Modalités de paiement flexibles'
      ],
      price: '150 000 FCFA',
      buyLink: 'https://helpallskills.com/#coaching',
      color: 'from-green-400 via-teal-500 to-blue-500',
      bestFor: ['student', 'career_change']
    },
    {
      id: 'bootcamp-semaine',
      name: '🚀 Bootcamp Format Semaine',
      tagline: 'Intensif et immersif 5j/7',
      description: 'Formation intensive de 5 jours par semaine pour une montée en compétences rapide et complète.',
      icon: '🚀',
      duration: '3 mois',
      format: 'Lun-Ven, 3h/jour',
      features: [
        'Formation intensive 5j/7',
        '15h de cours par semaine',
        'Projets pratiques quotidiens',
        'Mentoring individuel inclus'
      ],
      price: '220 000 - 250 000 FCFA',
      buyLink: 'https://helpallskills.com/#bootcamps',
      color: 'from-purple-500 via-pink-500 to-red-500',
      bestFor: ['career_change']
    },
    {
      id: 'bootcamp-weekend',
      name: '🏃‍♂️ Bootcamp Format Week-end',
      tagline: 'Modulaire et flexible',
      description: 'Formation modulaire sur 3 jours par semaine, parfaite pour concilier travail et formation.',
      icon: '🏃‍♂️',
      duration: '3 mois',
      format: 'Ven-Sam-Dim, 3h/séance',
      features: [
        'Formation 3j/semaine',
        '9h de cours par semaine',
        'Flexibilité horaire',
        'Projets en équipe'
      ],
      price: '180 000 - 200 000 FCFA',
      buyLink: 'https://helpallskills.com/#bootcamps',
      color: 'from-cyan-500 via-blue-500 to-indigo-600',
      bestFor: ['career_boost', 'career_change']
    },
    {
      id: 'mentorat-standard',
      name: '🤝 Mentorat Standard',
      tagline: 'Accompagnement intensif',
      description: 'Un accompagnement sur mesure pour développer tes compétences techniques et construire une stratégie de carrière solide.',
      icon: '🤝',
      duration: '3-6 mois',
      format: '1 séance 1h30/semaine',
      features: [
        '1 séance de 1h30 par semaine',
        'Mentor expérimenté dédié',
        'Support WhatsApp inclus',
        'Suivi personnalisé continu'
      ],
      price: '75 000 FCFA',
      buyLink: 'https://helpallskills.com/#mentorat',
      color: 'from-emerald-400 via-green-500 to-teal-600',
      bestFor: ['career_boost', 'career_change']
    },
    {
      id: 'mentorat-leger',
      name: '💼 Mentorat Léger',
      tagline: 'Option flexible',
      description: 'Parfait pour ceux qui ont un rythme moins soutenu ou un budget plus serré tout en gardant un accompagnement de qualité.',
      icon: '💼',
      duration: 'Flexible',
      format: '1 séance 1h30/2 semaines',
      features: [
        '1 séance toutes les 2 semaines',
        'Mentor expérimenté',
        'Support entre séances',
        'Rythme adapté à tes contraintes'
      ],
      price: '40 000 FCFA',
      buyLink: 'https://helpallskills.com/#mentorat',
      color: 'from-blue-400 via-cyan-500 to-teal-500',
      bestFor: ['student', 'career_boost']
    },
    {
      id: 'workshop',
      name: '🛠 Workshop Particuliers',
      tagline: 'Formations thématiques spécialisées',
      description: 'Workshops spécialisés de 4-6 semaines pour approfondir des compétences spécifiques.',
      icon: '🛠',
      duration: '4-6 semaines',
      format: '2 séances/semaine',
      features: [
        'Thématiques spécifiques',
        '2 séances par semaine',
        'Durée de 4 à 6 semaines',
        'Pratique intensive'
      ],
      price: '60 000 - 90 000 FCFA',
      buyLink: 'https://helpallskills.com/#formations',
      color: 'from-orange-400 via-red-500 to-pink-500',
      bestFor: ['student', 'career_boost']
    }
  ];

  // Animation d'écriture
  useEffect(() => {
    if (currentStep === 0) {
      const text = "Salut ! 👋 Je suis ton guide HelpAll Skills. Je vais t'aider à trouver l'accompagnement parfait pour ta carrière tech.";
      let index = 0;
      const timer = setInterval(() => {
        setTypedText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(timer);
        }
      }, 40);
      return () => clearInterval(timer);
    }
  }, [currentStep]);

  // Recalculer les recommandations quand on arrive à l'étape 5 (après navigation arrière)
  useEffect(() => {
    if (currentStep === 5 && userProfile.goal && userProfile.availability && userProfile.preference && userProfile.commitment) {
      const recommendations = generateRecommendations(userProfile);
      setRecommendedOffers(recommendations);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, userProfile]);

  // Système de recommandation intelligent
  const generateRecommendations = (profile: UserProfile) => {
    const offers = realOffers.map(offer => {
      let score = 0;
      
      // Score basé sur l'objectif
      if (profile.goal && offer.bestFor.includes(profile.goal)) {
        score += 40;
      }
      
      // Score basé sur la disponibilité
      if (profile.availability === 'full_time' && offer.id.includes('bootcamp-semaine')) score += 30;
      if (profile.availability === 'weekends' && offer.id.includes('bootcamp-weekend')) score += 30;
      if (profile.availability === 'part_time' && offer.format.includes('semaine')) score += 25;
      if (profile.availability === 'flexible' && offer.id.includes('leger')) score += 25;
      
      // Score basé sur la préférence
      if (profile.preference === 'group' && offer.id.includes('groupe')) score += 35;
      if (profile.preference === 'individual' && offer.id.includes('privee')) score += 35;
      if (profile.preference === 'intensive' && offer.id.includes('bootcamp')) score += 35;
      if (profile.preference === 'mentoring' && offer.id.includes('mentorat')) score += 35;
      
      // Score basé sur l'engagement
      if (profile.commitment === 'short' && offer.id === 'coaching-express') score += 30;
      if (profile.commitment === 'medium' && (offer.id.includes('formation') || offer.id.includes('workshop'))) score += 25;
      if (profile.commitment === 'long' && (offer.id.includes('bootcamp') || offer.id.includes('mentorat'))) score += 30;
      
      return { ...offer, matchScore: score };
    });
    
    // Trier par score et prendre les 3 meilleurs
    const sorted = offers.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
    return sorted.slice(0, 3);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      // Étape 0: Accueil chaleureux
      case 0:
        return (
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-24 md:pt-0">
            {/* Dégradé de fond subtil */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 right-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-bright/10 rounded-full blur-3xl" />
            </div>

            <motion.div 
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-12 md:py-20"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-4xl mx-auto space-y-8 md:space-y-12">
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

                <motion.div 
                  variants={fadeInUp}
                >
                  <div className="bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
                    <div className="text-lg md:text-2xl lg:text-3xl font-medium text-white/90 mb-4 min-h-[5rem] md:min-h-[6rem] flex items-center justify-center">
                      <span className="text-center leading-relaxed">
                        {typedText}
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block w-0.5 md:w-1 h-6 md:h-8 bg-turquoise ml-2"
                        />
                      </span>
                    </div>
                    
                    <div className="text-white/70 text-base md:text-lg">
                      Prêt à découvrir ton parcours idéal ? 🚀
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-4">
                  <motion.button
                    onClick={() => setCurrentStep(1)}
                    className="bg-gradient-to-r from-turquoise to-blue-bright text-white text-lg md:text-2xl font-bold px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-2xl group inline-flex items-center justify-center"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center">
                      {'C\'est parti ! 🎯'}
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
                  <p className="text-white/60 text-sm md:text-base">
                    ⏱️ 3 minutes pour trouver ton accompagnement parfait
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // Étape 1: Quel est ton objectif ?
      case 1:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-turquoise-50 pt-32 md:pt-24 pb-12">
            <motion.div 
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-6xl mx-auto space-y-8 md:space-y-12">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(0)}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm md:text-base"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full border border-turquoise/20 shadow-lg">
                    <span className="text-xs md:text-sm font-medium text-gray-700">Question 1/4 · Ton objectif</span>
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight px-4"
                >
                  Quel est ton objectif principal ? 🎯
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                >
                  {'Dis-moi ce que tu cherches, je vais t\'orienter vers le meilleur accompagnement'}
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                  {[
                    {
                      id: 'student',
                      icon: '🎓',
                      title: 'Étudiant',
                      description: 'Je veux apprendre les bases et progresser',
                      color: 'from-green-400 to-emerald-500'
                    },
                    {
                      id: 'career_boost',
                      icon: '🚀',
                      title: 'Booster ma carrière',
                      description: 'Je suis déjà en poste, je veux évoluer',
                      color: 'from-blue-500 to-turquoise'
                    },
                    {
                      id: 'career_change',
                      icon: '🔄',
                      title: 'Reconversion',
                      description: 'Je veux changer de domaine vers la tech',
                      color: 'from-purple-500 to-pink-500'
                    },
                    {
                      id: 'pro_team',
                      icon: '👥',
                      title: 'Former mon équipe',
                      description: 'Je cherche une formation pour mon entreprise',
                      color: 'from-orange-500 to-red-500'
                    }
                  ].map((option) => (
                    <motion.button
                      key={option.id}
                      onClick={() => {
                        setUserProfile(prev => ({ ...prev, goal: option.id as UserProfile['goal'] }));
                        setCurrentStep(2);
                      }}
                      className="group bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all text-center"
                      variants={scaleIn}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className={`text-4xl md:text-5xl mb-3 md:mb-4 p-3 md:p-4 bg-gradient-to-br ${option.color} rounded-xl md:rounded-2xl inline-block`}
                      >
                        {option.icon}
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{option.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{option.description}</p>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // Étape 2: Disponibilité
      case 2:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32 md:pt-24 pb-12">
            <motion.div 
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(1)}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm md:text-base"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full border border-turquoise/20 shadow-lg">
                    <span className="text-xs md:text-sm font-medium text-gray-700">Question 2/4 · Ta disponibilité</span>
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight px-4"
                >
                  Quelle est ta disponibilité ? ⏰
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                >
                  {'Ça m\'aide à te proposer le format qui colle parfaitement à ton emploi du temps'}
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="grid md:grid-cols-2 gap-4 md:gap-6"
                >
                  {[
                    {
                      id: 'full_time',
                      icon: '⚡',
                      title: 'Temps plein disponible',
                      description: 'Je peux me consacrer 100% à ma formation (15h/semaine ou plus)',
                      badge: 'Bootcamp intensif recommandé'
                    },
                    {
                      id: 'part_time',
                      icon: '🕐',
                      title: 'Quelques heures/semaine',
                      description: 'J\'ai 6-9h par semaine à consacrer à ma formation',
                      badge: 'Formation progressive'
                    },
                    {
                      id: 'weekends',
                      icon: '📅',
                      title: 'Uniquement week-ends',
                      description: 'Je travaille en semaine, je suis libre le week-end',
                      badge: 'Format week-end parfait'
                    },
                    {
                      id: 'flexible',
                      icon: '🔄',
                      title: 'Rythme flexible',
                      description: 'Je préfère un rythme souple que je peux adapter',
                      badge: 'Mentorat léger idéal'
                    }
                  ].map((option, index) => (
                    <motion.button
                      key={option.id}
                      onClick={() => {
                        setUserProfile(prev => ({ ...prev, availability: option.id as UserProfile['availability'] }));
                        setCurrentStep(3);
                      }}
                      className="group bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all text-left"
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="text-3xl md:text-4xl flex-shrink-0">{option.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">{option.title}</h3>
                          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">{option.description}</p>
                          <div className="inline-flex items-center bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-turquoise/20">
                            <span className="text-xs md:text-sm font-medium text-turquoise">✨ {option.badge}</span>
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

      // Étape 3: Format préféré
      case 3:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-turquoise-50 via-white to-blue-50 pt-32 md:pt-24 pb-12">
            <motion.div 
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(2)}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm md:text-base"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full border border-turquoise/20 shadow-lg">
                    <span className="text-xs md:text-sm font-medium text-gray-700">Question 3/4 · Ton format préféré</span>
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight px-4"
                >
                  Comment préfères-tu apprendre ? 📚
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                >
                  Chaque personne apprend différemment. Dis-moi ce qui te correspond le mieux
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="grid md:grid-cols-2 gap-4 md:gap-6"
                >
                  {[
                    {
                      id: 'group',
                      icon: '👥',
                      title: 'En groupe',
                      description: 'J\'aime apprendre avec d\'autres, échanger et créer du réseau',
                      pros: ['Dynamique de groupe', 'Tarif accessible', 'Réseau professionnel']
                    },
                    {
                      id: 'individual',
                      icon: '👤',
                      title: 'Individuel 1-to-1',
                      description: 'Je préfère un accompagnement personnalisé à 100%',
                      pros: ['100% personnalisé', 'Rythme adapté', 'Focus sur mes besoins']
                    },
                    {
                      id: 'intensive',
                      icon: '🔥',
                      title: 'Formation intensive',
                      description: 'Je veux un bootcamp complet pour une transformation rapide',
                      pros: ['Résultats rapides', 'Immersion totale', 'Portfolio complet']
                    },
                    {
                      id: 'mentoring',
                      icon: '🤝',
                      title: 'Mentorat',
                      description: 'Je veux un mentor qui me guide sur le long terme',
                      pros: ['Vision long terme', 'Conseils carrière', 'Soutien continu']
                    }
                  ].map((option, index) => (
                    <motion.button
                      key={option.id}
                      onClick={() => {
                        setUserProfile(prev => ({ ...prev, preference: option.id as UserProfile['preference'] }));
                        setCurrentStep(4);
                      }}
                      className="group bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all text-left"
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-4xl md:text-5xl mb-3 md:mb-4">{option.icon}</div>
                      <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">{option.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">{option.description}</p>
                      <div className="space-y-2">
                        {option.pros.map((pro, i) => (
                          <div key={i} className="flex items-center text-xs md:text-sm text-gray-700">
                            <div className="w-2 h-2 bg-turquoise rounded-full mr-2 flex-shrink-0"></div>
                            <span>{pro}</span>
                          </div>
                        ))}
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // Étape 4: Engagement
      case 4:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 md:pt-24 pb-12">
            <motion.div 
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={() => setCurrentStep(3)}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm md:text-base"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full border border-turquoise/20 shadow-lg">
                    <span className="text-xs md:text-sm font-medium text-gray-700">Question 4/4 · Ton engagement</span>
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight px-4"
                >
                  {'Sur quelle durée veux-tu t\'engager ? 🎯'}
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                >
                  {'Dernière question ! Ça va m\'aider à affiner mes recommandations'}
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="grid sm:grid-cols-3 gap-4 md:gap-6"
                >
                  {[
                    {
                      id: 'short',
                      icon: '⚡',
                      title: 'Court terme',
                      description: 'J\'ai besoin d\'un coup de boost ponctuel',
                      duration: '1 heure à 1 mois'
                    },
                    {
                      id: 'medium',
                      icon: '📅',
                      title: 'Moyen terme',
                      description: 'Je veux me former sur 1-3 mois',
                      duration: '1 à 3 mois',
                      popular: true
                    },
                    {
                      id: 'long',
                      icon: '🌟',
                      title: 'Long terme',
                      description: 'Je cherche un accompagnement sur plusieurs mois',
                      duration: '3-6 mois ou plus'
                    }
                  ].map((option, index) => (
                    <motion.button
                      key={option.id}
                      onClick={() => {
                        const updatedProfile = { ...userProfile, commitment: option.id as UserProfile['commitment'] };
                        setUserProfile(updatedProfile);
                        
                        // Générer les recommandations
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
                      <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">{option.description}</p>
                      <div className="inline-flex items-center bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-turquoise/20">
                        <span className="text-xs md:text-sm font-medium text-turquoise">{option.duration}</span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Modal d'analyse */}
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
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">Analyse en cours...</h3>
                    <p className="text-gray-600 mb-6">
                      Je trouve les meilleures options pour ton profil ! 🎯
                    </p>
                    
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

      // Étape 5: Recommandations (SANS PRIX encore)
      case 5:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 md:pt-24 pb-12 md:pb-20">
            {/* Dégradé de fond subtil */}
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
                    className="text-white/70 hover:text-white transition-colors font-medium text-sm md:text-base"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Retour
                  </motion.button>
                  <div className="inline-flex items-center bg-green-500/20 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full border border-green-400/30 shadow-lg">
                    <span className="text-sm md:text-lg font-semibold text-white">✨ Analyse terminée !</span>
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight px-4"
                >
                  Voici les 3 meilleures options pour toi ! 🎯
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-base md:text-xl text-white/80 max-w-3xl mx-auto px-4 leading-relaxed"
                >
                  {'Basé sur ton profil, j\'ai sélectionné les accompagnements les plus adaptés. '}
                  {'Clique sur une option pour découvrir les détails et le tarif 👇'}
                </motion.p>

                <motion.div 
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                  variants={staggerChildren}
                >
                  {recommendedOffers.map((offer, index) => (
                    <motion.div
                      key={offer.id}
                      className="group relative bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/50 shadow-2xl hover:shadow-3xl transition-all cursor-pointer"
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -8 }}
                      onClick={() => {
                        setSelectedOffer(offer);
                        setCurrentStep(6);
                      }}
                    >
                      {/* Badge de match */}
                      <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-turquoise to-blue-bright text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap">
                          {offer.matchScore}% de match
                        </div>
                      </div>

                      {index === 0 && (
                        <div className="absolute -top-3 md:-top-4 right-3 md:right-4">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap">
                            ⭐ MEILLEUR CHOIX
                          </div>
                        </div>
                      )}
                      
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl md:rounded-3xl`}
                      />
                      
                      <div className="relative z-10 text-center">
                        <div className="text-4xl md:text-5xl mb-3 md:mb-4">{offer.icon}</div>
                        <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">{offer.name}</h3>
                        <p className="text-turquoise font-semibold mb-3 md:mb-4 text-sm md:text-base">{offer.tagline}</p>
                        
                        <div className="mb-4 md:mb-6 text-xs md:text-sm text-gray-600">
                          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                            <span className="whitespace-nowrap">⏱️ {offer.duration}</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="whitespace-nowrap">📅 {offer.format}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">{offer.description}</p>
                        
                        <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left">
                          {offer.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-start text-xs md:text-sm text-gray-700">
                              <div className="w-2 h-2 bg-turquoise rounded-full mr-2 md:mr-3 mt-1 flex-shrink-0"></div>
                              <span className="leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <motion.button
                          className="w-full bg-gradient-to-r from-turquoise to-blue-bright text-white py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl font-bold group-hover:shadow-lg text-sm md:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Voir les détails et le prix 🎉
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="mt-8 md:mt-16 text-center space-y-3 md:space-y-4 px-4"
                >
                  <p className="text-white/60 text-sm md:text-base">
                    Clique sur une option pour découvrir les tarifs et détails complets
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // Étape 6: Détails de l'offre avec PRIX
      case 6:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-green-50 via-white to-turquoise-50 pt-32 md:pt-24 pb-12 md:pb-20">
            <motion.div 
              className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-6xl mx-auto space-y-6 md:space-y-8">
                <motion.div variants={fadeInUp}>
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-lg shadow-lg">
                    🎉 Excellent choix !
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight px-4"
                >
                  <span className="bg-gradient-to-r from-green-600 to-turquoise bg-clip-text text-transparent">
                    {selectedOffer?.name}
                  </span>
                </motion.h2>

                <motion.div 
                  variants={fadeInUp}
                  className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto"
                >
                  {/* Colonne gauche : Détails de l'offre */}
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/60 shadow-2xl text-left">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl md:text-5xl">{selectedOffer?.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl md:text-4xl font-black text-turquoise">{selectedOffer?.price}</div>
                        <div className="text-xs md:text-sm text-gray-500 mt-1">par mois</div>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-3xl font-bold mb-2 text-gray-900 leading-tight">{selectedOffer?.tagline}</h3>
                    <p className="text-gray-600 mb-6 text-sm md:text-lg leading-relaxed">{selectedOffer?.description}</p>

                    <div className="mb-6 p-4 bg-gradient-to-r from-turquoise/10 to-blue-bright/10 rounded-xl md:rounded-2xl border border-turquoise/20">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xl md:text-2xl font-bold text-gray-900">⏱️</div>
                          <div className="text-xs md:text-sm text-gray-600">{selectedOffer?.duration}</div>
                        </div>
                        <div>
                          <div className="text-xl md:text-2xl font-bold text-gray-900">📅</div>
                          <div className="text-xs md:text-sm text-gray-600">{selectedOffer?.format}</div>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-lg md:text-xl mb-4 text-gray-900">Ce que tu vas recevoir :</h4>
                    <div className="space-y-3">
                      {selectedOffer?.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-6 h-6 bg-turquoise/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-turquoise text-xs md:text-sm">✓</span>
                          </div>
                          <span className="text-sm md:text-base text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colonne droite : CTA et garanties */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-turquoise/10 to-blue-bright/10 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-turquoise/20">
                      <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Pourquoi démarrer maintenant ?</h4>
                      <div className="space-y-4">
                        {[
                          {
                            icon: '⚡',
                            title: 'Démarrage immédiat',
                            desc: 'Accès en moins de 5 minutes'
                          },
                          {
                            icon: '✨',
                            title: 'Satisfaction garantie',
                            desc: '98% de nos apprenants recommandent'
                          },
                          {
                            icon: '💬',
                            title: 'Support WhatsApp',
                            desc: 'Aide quotidienne de notre équipe'
                          },
                          {
                            icon: '🎯',
                            title: 'Accompagnement personnalisé',
                            desc: 'Suivi adapté à ton rythme'
                          }
                        ].map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="text-2xl md:text-3xl mr-3 md:mr-4 flex-shrink-0">{item.icon}</div>
                            <div className="min-w-0">
                              <div className="font-bold text-sm md:text-base text-gray-900">{item.title}</div>
                              <div className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-4">
                      <motion.a
                        href={selectedOffer?.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-turquoise to-blue-bright text-white text-lg md:text-2xl font-bold py-4 md:py-6 px-6 md:px-8 rounded-xl md:rounded-2xl text-center shadow-2xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center flex-wrap gap-2">
                          <span>Je démarre maintenant</span>
                          <span className="hidden md:inline">-</span>
                          <span className="font-black">{selectedOffer?.price}</span>
                        </span>
                      </motion.a>
                      
                      <motion.button
                        onClick={() => window.open('https://wa.me/22901624357 41', '_blank')}
                        className="w-full bg-white border-2 border-turquoise text-turquoise font-semibold py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl hover:bg-turquoise hover:text-white transition-colors duration-300 text-sm md:text-base"
                        whileHover={{ scale: 1.01 }}
                      >
                        {'💬 J\'ai des questions (WhatsApp)'}
                      </motion.button>

                      <motion.button
                        onClick={() => setCurrentStep(5)}
                        className="w-full text-gray-600 font-medium py-2 md:py-3 hover:text-gray-900 transition-colors text-sm md:text-base"
                        whileHover={{ scale: 1.01 }}
                      >
                        ← Voir les autres options
                      </motion.button>
                    </div>

                    <div className="text-center text-xs md:text-sm text-gray-500 space-y-2">
                      <div>🔒 Paiement sécurisé</div>
                      <div>⚡ Accès immédiat après paiement</div>
                      <div>💚 Support francophone dédié</div>
                    </div>
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
