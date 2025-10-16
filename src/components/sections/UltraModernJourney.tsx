'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface UserProfile {
  name?: string;
  goal?: 'student' | 'career_boost' | 'career_change';
  domain?: 'web_dev' | 'data_science' | 'devops' | 'mobile' | 'other';
  level?: 'beginner' | 'intermediate' | 'advanced';
  budget?: 'low' | 'medium' | 'high';
}

interface Offer {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  level: string;
  category: string;
  features: string[];
  buyLink: string;
  popular?: boolean;
  color: string;
  icon: string;
  description: string;
  targetProfile: string[];
  matchScore?: number;
}

const UltraModernJourney = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [recommendedOffers, setRecommendedOffers] = useState<Offer[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [typedText, setTypedText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Toutes les vraies offres HelpAll Skills
  const allOffers: Offer[] = [
    {
      id: 'starter',
      title: '🌱 Starter',
      subtitle: 'Commencer sans se perdre, avancer sans stress',
      description: 'Pour débutants, étudiants, autodidactes qui veulent démarrer en douceur',
      price: '3 000 FCFA',
      duration: 'par mois',
      level: 'Débutant',
      category: 'formation',
      features: [
        '1 coaching collectif par semaine',
        'Accès à une communauté d\'entraide motivante',
        'Une roadmap claire semaine après semaine',
        'Support WhatsApp quotidien'
      ],
      buyLink: 'https://getskillsnow.mychariow.com/prd_4bj0mb',
      color: 'from-emerald-400 via-green-500 to-teal-600',
      icon: '🌱',
      targetProfile: ['student', 'career_change'],
      popular: false
    },
    {
      id: 'booster',
      title: '🚀 Booster',
      subtitle: 'Un mentor pour te guider personnellement',
      description: 'Pour développeurs juniors, freelances débutants qui veulent progresser rapidement',
      price: '5 000 FCFA',
      duration: 'par mois',
      level: 'Intermédiaire',
      category: 'formation',
      features: [
        'Tous les avantages de Starter',
        '1 coaching individuel de 30min par mois',
        'Suivi personnalisé WhatsApp',
        'Aide sur ton portfolio ou projet perso'
      ],
      buyLink: 'https://getskillsnow.mychariow.com/prd_763i3v',
      color: 'from-blue-500 via-turquoise to-blue-600',
      icon: '🚀',
      targetProfile: ['student', 'career_boost'],
      popular: true
    },
    {
      id: 'express',
      title: '⚡ Coaching Express',
      subtitle: 'Un coup de boost quand tu en as besoin',
      description: 'Pour besoin ponctuel (CV, entretien, Git, organisation...)',
      price: '5 000 FCFA',
      duration: 'session unique',
      level: 'Tous niveaux',
      category: 'coaching',
      features: [
        '1 session unique de 45 minutes',
        'Aide ciblée sur ton besoin spécifique',
        'Plan d\'action personnalisé',
        'Support immédiat'
      ],
      buyLink: 'https://getskillsnow.mychariow.com/prd_mnew0p',
      color: 'from-purple-500 via-pink-500 to-red-500',
      icon: '⚡',
      targetProfile: ['student', 'career_boost', 'career_change'],
      popular: false
    },
    {
      id: 'individual',
      title: '👤 Coaching Individuel',
      subtitle: 'Sessions personnalisées pour tes objectifs',
      description: 'Accompagnement sur-mesure adapté à ton niveau et tes objectifs de carrière',
      price: 'Sur devis',
      duration: 'flexible',
      level: 'Tous niveaux',
      category: 'coaching',
      features: [
        'Analyse de parcours approfondie',
        'Plan de développement personnalisé',
        'Sessions 1-à-1 régulières',
        'Suivi et ajustements continus'
      ],
      buyLink: 'https://wa.me/22962435741',
      color: 'from-indigo-500 via-purple-600 to-pink-600',
      icon: '👤',
      targetProfile: ['career_boost', 'career_change'],
      popular: false
    },
    {
      id: 'career-transition',
      title: '🔄 Transition de Carrière',
      subtitle: 'Accompagnement complet pour ta reconversion',
      description: 'Programme spécialement conçu pour les personnes en reconversion vers la tech',
      price: 'Sur devis',
      duration: '3-6 mois',
      level: 'Débutant à Intermédiaire',
      category: 'coaching',
      features: [
        'Bilan de compétences complet',
        'Découverte approfondie des métiers tech',
        'Acquisition de compétences ciblées',
        'Préparation aux entretiens techniques'
      ],
      buyLink: 'https://wa.me/22962435741',
      color: 'from-orange-500 via-red-500 to-pink-600',
      icon: '🔄',
      targetProfile: ['career_change'],
      popular: false
    },
    {
      id: 'pro',
      title: '🧑‍💼 Offre Pro',
      subtitle: 'Formation d\'équipe sur-mesure',
      description: 'Pour ONG, entreprises, équipes de développement qui veulent monter en compétences',
      price: '50 000+ FCFA',
      duration: 'sur mesure',
      level: 'Professionnel',
      category: 'formation',
      features: [
        'Formation d\'équipe personnalisée',
        'Suivi et reporting détaillé',
        'Programme adapté aux besoins spécifiques',
        'Support dédié et prioritaire'
      ],
      buyLink: 'https://wa.me/22962435741',
      color: 'from-gray-600 via-gray-700 to-gray-800',
      icon: '🧑‍💼',
      targetProfile: ['career_boost'],
      popular: false
    }
  ];

  // Animation d'écriture effet machine à écrire
  useEffect(() => {
    if (currentStep === 0) {
      const text = "Salut ! 👋 Je suis ton guide IA HelpAll Skills. Prêt à découvrir le parcours parfait pour révéler ton potentiel ?";
      let index = 0;
      const timer = setInterval(() => {
        setTypedText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [currentStep]);

  // Système de recommandation intelligent
  const generateRecommendations = (profile: UserProfile) => {
    const offers = allOffers.map(offer => {
      let score = 0;
      
      // Score basé sur le profil
      if (profile.goal && offer.targetProfile.includes(profile.goal)) {
        score += 40;
      }
      
      // Score basé sur le niveau
      if (profile.level === 'beginner' && offer.level === 'Débutant') score += 30;
      if (profile.level === 'intermediate' && offer.level === 'Intermédiaire') score += 30;
      if (profile.level === 'advanced' && offer.level === 'Professionnel') score += 30;
      if (offer.level === 'Tous niveaux') score += 20;
      
      // Score basé sur le budget
      if (profile.budget === 'low' && offer.price.includes('3 000')) score += 25;
      if (profile.budget === 'medium' && offer.price.includes('5 000')) score += 25;
      if (profile.budget === 'high' && (offer.price.includes('Sur devis') || offer.price.includes('50 000'))) score += 25;
      
      // Bonus pour les offres populaires
      if (offer.popular) score += 10;
      
      return { ...offer, matchScore: score };
    });
    
    // Trier par score et prendre les 3 meilleurs
    const sorted = offers.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
    return sorted.slice(0, 3);
  };

  const handleProfileChoice = (goal: UserProfile['goal']) => {
    setUserProfile(prev => ({ ...prev, goal }));
    setCurrentStep(2);
  };

  const handleLevelChoice = (level: UserProfile['level']) => {
    setUserProfile(prev => ({ ...prev, level }));
    setCurrentStep(3);
  };

  const handleBudgetChoice = (budget: UserProfile['budget']) => {
    const updatedProfile = { ...userProfile, budget };
    setUserProfile(updatedProfile);
    
    // Générer les recommandations
    const recommendations = generateRecommendations(updatedProfile);
    setRecommendedOffers(recommendations);
    setShowRecommendations(true);
    
    setTimeout(() => {
      setCurrentStep(4);
    }, 1500);
  };

  const handleOfferSelect = (offer: Offer) => {
    setSelectedOffer(offer);
    setCurrentStep(5);
  };

  // Animations avancées
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      // Étape 0: Introduction moderne avec effet 3D
      case 0:
        return (
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Background animé avec particules */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            {/* Grille 3D en arrière-plan */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>
            
            <motion.div 
              className="container-custom relative z-10"
              style={{ y: containerY }}
            >
              <motion.div 
                className="text-center max-w-5xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
              >
                {/* Badge moderne avec glow */}
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 shadow-2xl">
                    <motion.div 
                      className="size-4 bg-gradient-to-r from-turquoise to-blue-bright rounded-full mr-4"
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [1, 0.6, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="text-lg font-medium text-white/90">Intelligence Artificielle · Recommandation Personnalisée</span>
                  </div>
                </motion.div>

                {/* Titre principal avec effet gradient animé */}
                <motion.h1 
                  variants={fadeInUp}
                  className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
                >
                  <span className="bg-gradient-to-r from-white via-blue-200 to-turquoise bg-clip-text text-transparent animate-pulse">
                    Révèle ton
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-turquoise via-blue-bright to-purple-400 bg-clip-text text-transparent relative">
                    Potentiel Tech
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-3 bg-gradient-to-r from-turquoise/50 to-blue-bright/50 rounded-full blur-lg"
                      animate={{
                        scaleX: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ delay: 2, duration: 1.5 }}
                    />
                  </span>
                </motion.h1>

                {/* Message avec effet machine à écrire dans un container moderne */}
                <motion.div 
                  variants={fadeInUp}
                  className="mb-16"
                >
                  <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
                    <div className="text-2xl md:text-3xl font-medium text-white/90 mb-6 min-h-[8rem] flex items-center justify-center">
                      <span className="text-center leading-relaxed">
                        {typedText}
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block w-1 h-8 bg-turquoise ml-2"
                        />
                      </span>
                    </div>
                    
                    {/* Stats impressionnantes */}
                    <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-turquoise mb-2">98%</div>
                        <div className="text-white/70 text-sm">Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-bright mb-2">150+</div>
                        <div className="text-white/70 text-sm">Talents accompagnés</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
                        <div className="text-white/70 text-sm">Mois moyenne résultats</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button ultra-moderne */}
                <motion.div variants={fadeInUp}>
                  <motion.button
                    onClick={() => setCurrentStep(1)}
                    className="group relative bg-gradient-to-r from-turquoise to-blue-bright text-white text-2xl px-12 py-6 rounded-2xl font-bold overflow-hidden transform transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Commencer mon analyse IA
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        className="ml-4 group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </motion.svg>
                    </span>
                    
                    {/* Effet de brillance */}
                    <motion.div 
                      className="absolute inset-0 bg-white/20 transform -skew-x-12"
                      animate={{
                        x: [-200, 300],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.button>
                </motion.div>

                {/* Éléments décoratifs 3D */}
                <motion.div 
                  className="absolute top-1/4 left-20 size-8 bg-turquoise/40 rounded-full blur-sm"
                  animate={{ 
                    y: [0, -30, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-1/3 right-16 size-12 bg-blue-bright/40 rounded-full blur-sm"
                  animate={{ 
                    y: [0, -40, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        );

      // Étape 1: Découverte du profil avec design premium
      case 1:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            {/* Background avec formes organiques */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-turquoise/20 to-blue-bright/10 rounded-full blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-pink-400/10 rounded-full blur-3xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <motion.div 
              className="container-custom relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-6xl mx-auto">
                {/* Progress bar moderne */}
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="flex justify-center items-center mb-8">
                    <div className="flex items-center bg-white/80 backdrop-blur-lg px-8 py-4 rounded-full shadow-lg border border-gray-200/50">
                      <div className="flex items-center space-x-3">
                        <div className="size-3 bg-turquoise rounded-full"></div>
                        <div className="w-20 h-1 bg-turquoise/30 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-turquoise rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '33%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Étape 1/3 : Ton profil</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                >
                  Parlons de toi ! 🎯
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed"
                >
                  Mon IA va analyser ton profil pour te recommander les meilleures options. Dis-moi, tu es plutôt...
                </motion.p>

                {/* Cards avec design ultra-moderne */}
                <motion.div 
                  variants={fadeInUp}
                  className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                  {[
                    {
                      id: 'student',
                      icon: '🎓',
                      title: 'Étudiant / Débutant',
                      description: 'Je découvre la tech et je veux acquérir des bases solides pour mon avenir',
                      gradient: 'from-emerald-400 via-teal-500 to-blue-600',
                      stats: 'Recommandé pour 65% des profils'
                    },
                    {
                      id: 'career_boost',
                      icon: '🚀',
                      title: 'Professionnel en poste',
                      description: 'Je suis déjà dans la tech et je veux booster ma carrière ou mes compétences',
                      gradient: 'from-blue-500 via-turquoise to-purple-600',
                      stats: 'Le plus populaire en 2024'
                    },
                    {
                      id: 'career_change',
                      icon: '🔄',
                      title: 'En reconversion',
                      description: 'Je viens d\'un autre domaine et je veux me reconvertir dans la tech',
                      gradient: 'from-purple-500 via-pink-500 to-red-500',
                      stats: '92% de réussite de transition'
                    }
                  ].map((option) => (
                    <motion.button
                      key={option.id}
                      onClick={() => handleProfileChoice(option.id as UserProfile['goal'])}
                      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-left overflow-hidden"
                      variants={scaleIn}
                      whileHover={{ scale: 1.03, y: -8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Gradient de fond au hover */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />
                      
                      {/* Badge statistique */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-turquoise/10 text-turquoise text-xs font-semibold px-3 py-1 rounded-full border border-turquoise/20">
                          {option.stats}
                        </span>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="text-6xl mb-6">{option.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">
                          {option.description}
                        </p>
                        
                        {/* Flèche animée */}
                        <div className="flex justify-end">
                          <motion.div
                            className="size-12 bg-gradient-to-r from-turquoise to-blue-bright rounded-full flex items-center justify-center text-white group-hover:shadow-lg"
                            whileHover={{ scale: 1.1 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // Étape 2: Évaluation du niveau avec interface moderne
      case 2:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-white to-blue-50">
            <motion.div 
              className="container-custom relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-5xl mx-auto">
                {/* Progress bar */}
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="flex justify-center items-center mb-8">
                    <div className="flex items-center bg-white/80 backdrop-blur-lg px-8 py-4 rounded-full shadow-lg border border-gray-200/50">
                      <div className="flex items-center space-x-3">
                        <div className="size-3 bg-turquoise rounded-full"></div>
                        <div className="w-20 h-1 bg-turquoise/30 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-turquoise rounded-full"
                            initial={{ width: '33%' }}
                            animate={{ width: '66%' }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Étape 2/3 : Ton niveau</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-black mb-8"
                >
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Quel est ton niveau actuel ?
                  </span>
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
                >
                  Sois honnête, ça nous aide à te proposer exactement ce qu&apos;il te faut ! 😉
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                  {[
                    {
                      id: 'beginner',
                      icon: '🌱',
                      title: 'Débutant',
                      description: 'Je commence tout juste ou j\'ai des bases très limitées',
                      features: ['Starter parfait', 'Coaching Express au besoin'],
                      color: 'from-green-400 to-emerald-500'
                    },
                    {
                      id: 'intermediate',
                      icon: '🚀',
                      title: 'Intermédiaire', 
                      description: 'J\'ai quelques connaissances mais je veux progresser rapidement',
                      features: ['Booster recommandé', 'Coaching Individuel possible'],
                      color: 'from-blue-500 to-turquoise'
                    },
                    {
                      id: 'advanced',
                      icon: '⭐',
                      title: 'Avancé',
                      description: 'J\'ai déjà de l\'expérience et je cherche un accompagnement spécialisé',
                      features: ['Coaching Individuel', 'Offre Pro si équipe'],
                      color: 'from-purple-500 to-pink-500'
                    }
                  ].map((level, index) => (
                    <motion.button
                      key={level.id}
                      onClick={() => handleLevelChoice(level.id as UserProfile['level'])}
                      className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                      />
                      
                      <div className="relative z-10">
                        <div className="text-5xl mb-4">{level.icon}</div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{level.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>
                        
                        <div className="space-y-2">
                          {level.features.map((feature, i) => (
                            <div key={i} className="bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-3 py-2 rounded-lg text-sm font-medium text-turquoise border border-turquoise/20">
                              ✨ {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // Étape 3: Budget avec interface premium 
      case 3:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-turquoise-50">
            <motion.div 
              className="container-custom relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-5xl mx-auto">
                {/* Progress bar complète */}
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="flex justify-center items-center mb-8">
                    <div className="flex items-center bg-white/80 backdrop-blur-lg px-8 py-4 rounded-full shadow-lg border border-gray-200/50">
                      <div className="flex items-center space-x-3">
                        <div className="size-3 bg-turquoise rounded-full"></div>
                        <div className="w-20 h-1 bg-turquoise/30 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-turquoise rounded-full"
                            initial={{ width: '66%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Étape 3/3 : Finalisation</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-black mb-8"
                >
                  <span className="bg-gradient-to-r from-turquoise to-blue-bright bg-clip-text text-transparent">
                    Quel est ton budget ? 💰
                  </span>
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
                >
                  Pas de stress ! On a des options pour tous les budgets. L&apos;important c&apos;est de commencer ! 🚀
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                  {[
                    {
                      id: 'low',
                      title: 'Budget serré',
                      range: 'Moins de 5 000 FCFA/mois',
                      description: 'Je veux commencer sans me ruiner, l\'essentiel d\'abord',
                      icon: '🌱',
                      recommended: 'Starter + Express au besoin',
                      color: 'from-green-400 to-emerald-500'
                    },
                    {
                      id: 'medium', 
                      title: 'Budget équilibré',
                      range: '5 000 - 10 000 FCFA/mois',
                      description: 'Je peux investir raisonnablement pour de bons résultats',
                      icon: '🚀',
                      recommended: 'Booster (le plus populaire)',
                      color: 'from-blue-500 to-turquoise',
                      popular: true
                    },
                    {
                      id: 'high',
                      title: 'Investment premium',
                      range: '10 000+ FCFA ou sur devis',
                      description: 'Je veux le meilleur accompagnement possible',
                      icon: '⭐',
                      recommended: 'Coaching Individuel sur-mesure',
                      color: 'from-purple-500 to-pink-500'
                    }
                  ].map((budget, index) => (
                    <motion.button
                      key={budget.id}
                      onClick={() => handleBudgetChoice(budget.id as UserProfile['budget'])}
                      className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {budget.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                            ⭐ Le plus choisi
                          </div>
                        </div>
                      )}
                      
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${budget.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                      />
                      
                      <div className="relative z-10">
                        <div className="text-5xl mb-4">{budget.icon}</div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{budget.title}</h3>
                        <div className="text-turquoise font-semibold text-lg mb-4">{budget.range}</div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{budget.description}</p>
                        
                        <div className="bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-4 py-3 rounded-xl border border-turquoise/20">
                          <div className="text-sm font-medium text-turquoise">Recommandé :</div>
                          <div className="text-sm text-gray-700 font-semibold">{budget.recommended}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      // Étape 4: Recommandations IA avec design futuriste
      case 4:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
            {/* Particules animées */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <motion.div 
              className="container-custom relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-7xl mx-auto">
                {/* Analyse IA en cours */}
                <motion.div variants={fadeInUp} className="mb-16">
                  <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
                    <motion.div 
                      className="size-20 bg-gradient-to-r from-turquoise to-blue-bright rounded-full mx-auto mb-8 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Mon IA analyse ton profil...
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                      Calcul du meilleur parcours pour révéler ton potentiel
                    </p>

                    {/* Barre de progression animée */}
                    <div className="w-full bg-white/20 rounded-full h-3 mb-8 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-turquoise to-blue-bright rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <div className="text-2xl font-bold text-turquoise mb-2">Profil analysé</div>
                        <div className="text-white/70">✓ Étudiant débutant</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-bright mb-2">Niveau évalué</div>
                        <div className="text-white/70">✓ Potentiel détecté</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400 mb-2">Recommandations</div>
                        <div className="text-white/70">✓ 3 options parfaites</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Recommandations avec design premium */}
                <AnimatePresence>
                  {showRecommendations && (
                    <>
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-white mb-4"
                      >
                        Tes recommandations personnalisées 🎯
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 mb-16 max-w-3xl mx-auto"
                      >
                        Basé sur ton profil, voici les 3 meilleures options pour ton parcours
                      </motion.p>

                      <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, staggerChildren: 0.1 }}
                      >
                        {recommendedOffers.map((offer, index) => (
                          <motion.div
                            key={offer.id}
                            className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.03, y: -8 }}
                            onClick={() => handleOfferSelect(offer)}
                          >
                            {/* Badge de match */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <div className="bg-gradient-to-r from-turquoise to-blue-bright text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                {offer.matchScore}% de match
                              </div>
                            </div>

                            {/* Badge populaire */}
                            {offer.popular && (
                              <div className="absolute -top-4 right-4">
                                <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                  LE PLUS POPULAIRE
                                </div>
                              </div>
                            )}
                            
                            <motion.div 
                              className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
                            />
                            
                            <div className="relative z-10 text-center">
                              <div className="text-5xl mb-4">{offer.icon}</div>
                              <h4 className="text-2xl font-bold mb-2 text-gray-900">{offer.title}</h4>
                              <p className="text-turquoise font-semibold mb-4">{offer.subtitle}</p>
                              
                              <div className="mb-6">
                                <div className="text-3xl font-bold text-gray-900 mb-1">{offer.price}</div>
                                <div className="text-gray-600">{offer.duration}</div>
                              </div>
                              
                              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{offer.description}</p>
                              
                              <div className="space-y-3 mb-8">
                                {offer.features.slice(0, 3).map((feature, i) => (
                                  <div key={i} className="flex items-center text-sm text-gray-700">
                                    <div className="size-2 bg-turquoise rounded-full mr-3"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                              
                              <motion.button
                                className="w-full bg-gradient-to-r from-turquoise to-blue-bright text-white py-4 px-6 rounded-2xl font-bold group-hover:shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Choisir cette option
                              </motion.button>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        );

      // Étape 5: Configurateur final qui pousse à l'achat
      case 5:
        return (
          <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-green-50 via-white to-turquoise-50">
            <motion.div 
              className="container-custom relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center max-w-6xl mx-auto">
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                    🎉 Parfait ! Tu as choisi {selectedOffer?.title}
                  </div>
                </motion.div>

                <motion.h2 
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-black mb-8"
                >
                  <span className="bg-gradient-to-r from-green-600 to-turquoise bg-clip-text text-transparent">
                    Prêt à transformer ta carrière ? 🚀
                  </span>
                </motion.h2>

                <motion.div 
                  variants={fadeInUp}
                  className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
                >
                  {/* Récapitulatif de l'offre */}
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Ton parcours personnalisé</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-turquoise/10 to-blue-bright/10 rounded-2xl">
                        <div>
                          <div className="font-bold text-gray-900">{selectedOffer?.title}</div>
                          <div className="text-sm text-gray-600">{selectedOffer?.subtitle}</div>
                        </div>
                        <div className="text-2xl">{selectedOffer?.icon}</div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Ce que tu vas recevoir :</h4>
                        <div className="space-y-2">
                          {selectedOffer?.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-700">
                              <div className="size-2 bg-turquoise rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Prix :</span>
                          <span className="text-2xl font-bold text-turquoise">{selectedOffer?.price}</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{selectedOffer?.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA de conversion */}
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-turquoise/10 to-blue-bright/10 rounded-3xl p-8 border border-turquoise/20">
                      <h4 className="text-2xl font-bold mb-4 text-gray-900">Pourquoi commencer maintenant ?</h4>
                      <div className="space-y-4 text-left">
                        <div className="flex items-start">
                          <div className="size-6 bg-turquoise rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Accompagnement immédiat</div>
                            <div className="text-sm text-gray-600">Dès ta commande, tu reçois l&apos;accès et tu peux commencer</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="size-6 bg-turquoise rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Résultats garantis</div>
                            <div className="text-sm text-gray-600">98% de nos apprenants progressent visiblement</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="size-6 bg-turquoise rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Communauté active</div>
                            <div className="text-sm text-gray-600">Plus de 150+ talents francophones t&apos;attendent</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="space-y-4">
                      <motion.a
                        href={selectedOffer?.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-turquoise to-blue-bright text-white text-2xl font-bold py-6 px-8 rounded-2xl text-center shadow-2xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        🚀 Commencer maintenant - {selectedOffer?.price}
                      </motion.a>
                      
                      <motion.button
                        onClick={() => window.open('https://wa.me/22962435741', '_blank')}
                        className="w-full bg-white border-2 border-turquoise text-turquoise font-semibold py-4 px-6 rounded-2xl hover:bg-turquoise hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.01 }}
                      >
                        💬 J&apos;ai des questions (WhatsApp)
                      </motion.button>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                      🔒 Paiement sécurisé • ⚡ Accès immédiat • 💚 Support francophone
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
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default UltraModernJourney;
