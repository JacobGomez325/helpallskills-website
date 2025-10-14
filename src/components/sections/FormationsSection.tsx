'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const FormationsSection = () => {
  const [activeTab, setActiveTab] = useState('tous');
  
  const formations = useMemo(() => {
    const allFormations = [
      {
        id: 1,
        title: "🌱 Starter",
        subtitle: "Commencer sans se perdre, avancer sans stress",
        description: "Pour débutants, étudiants, autodidactes",
        price: "3 000 FCFA/mois",
        duration: "Mensuel",
        level: "Débutant",
        category: "starter",
        features: [
          "1 coaching collectif par semaine",
          "Accès à une communauté d'entraide motivante", 
          "Une roadmap claire : que faire semaine après semaine",
          "Support WhatsApp"
        ],
        popular: false,
        color: "from-green-400 to-emerald-500",
        buyLink: "https://getskillsnow.mychariow.com/prd_4bj0mb"
      },
      {
        id: 2,
        title: "🚀 Booster",
        subtitle: "Un mentor pour te guider personnellement",
        description: "Pour développeurs juniors, freelances débutants",
        price: "5 000 FCFA/mois",
        duration: "Mensuel",
        level: "Intermédiaire",
        category: "booster",
        features: [
          "Tous les avantages de Starter",
          "1 coaching individuel de 30 minutes par mois",
          "Suivi personnalisé WhatsApp",
          "Aide sur ton portfolio ou projet perso"
        ],
        popular: true,
        color: "from-blue-bright to-turquoise",
        buyLink: "https://getskillsnow.mychariow.com/prd_763i3v"
      },
      {
        id: 3,
        title: "⚡ Coaching Express",
        subtitle: "Un coup de boost quand tu en as besoin",
        description: "Pour besoin ponctuel (CV, entretien, Git, organisation…)",
        price: "5 000 FCFA",
        duration: "Session unique",
        level: "Tous niveaux",
        category: "express",
        features: [
          "1 session unique de 45 minutes",
          "Aide ciblée sur ton besoin spécifique",
          "Plan d'action personnalisé",
          "Support immédiat"
        ],
        popular: false,
        color: "from-purple-500 to-pink-500",
        buyLink: "https://getskillsnow.mychariow.com/prd_mnew0p"
      },
      {
        id: 4,
        title: "🧑‍💼 Offre Pro",
        subtitle: "Pour les organisations qui veulent former leurs équipes",
        description: "Pour ONG, entreprises, équipes de développement",
        price: "50 000+ FCFA/mois",
        duration: "Sur mesure",
        level: "Professionnel",
        category: "pro",
        features: [
          "Formation d'équipe personnalisée",
          "Suivi et reporting détaillé",
          "Programme adapté aux besoins spécifiques",
          "Support dédié et prioritaire"
        ],
        popular: false,
        color: "from-gray-600 to-gray-800",
        buyLink: "https://wa.me/22962435741"
      }
     
    ];

    if (activeTab === 'tous') {
      return allFormations;
    }
    return allFormations.filter(formation => formation.category === activeTab);
  }, [activeTab]);

  const categories = [
    { id: 'tous', name: 'Toutes les offres', count: 4 },
    { id: 'starter', name: 'Starter', count: 1 },
    { id: 'booster', name: 'Booster', count: 1 },
    { id: 'express', name: 'Express', count: 1 },
    { id: 'pro', name: 'Pro', count: 1 }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="formations" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-turquoise font-semibold mb-2 block">👨‍🏫 NOS OFFRES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Coaching, mentoring et accompagnement personnalisé</h2>
          <p className="text-gray-600">
            Des programmes d&apos;accompagnement pensés pour t&apos;aider à progresser dans la tech, du débutant au professionnel confirmé.
          </p>
        </motion.div>

        {/* Tabs pour filtrer les formations */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {categories.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id 
                ? 'bg-turquoise text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.name}
              <span className="ml-2 text-xs opacity-75">
                ({tab.count})
              </span>
            </button>
          ))}
        </motion.div>
        
        {/* Grille de formations */}
        <div className="min-h-[400px]">
          {formations && formations.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={activeTab}
            >
              {formations.map(formation => (
                <motion.div 
                  key={formation.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-turquoise/70 to-blue-bright/70 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10" />
                    <div className="bg-gray-300 w-full h-full">
                      {/* Placeholder pour les images (remplacer par de vraies images) */}
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${formation.color}`}>
                        <div className="text-6xl">
                          {formation.category === 'starter' && '🌱'}
                          {formation.category === 'booster' && '🚀'}
                          {formation.category === 'express' && '⚡'}
                          {formation.category === 'pro' && '🧑‍💼'}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <div className="flex gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-xs py-1 px-2 rounded-full font-medium text-gray-700">
                          {formation.duration}
                        </span>
                        <span className="bg-white/90 backdrop-blur-sm text-xs py-1 px-2 rounded-full font-medium text-gray-700">
                          {formation.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                                    <div className="p-6 flex flex-col h-full">
                    {/* Header avec badge populaire */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-turquoise bg-turquoise/10 px-3 py-1 rounded-full">
                        {formation.level}
                      </span>
                      {formation.popular && (
                        <span className="text-xs font-bold text-white bg-gradient-to-r from-orange-400 to-red-500 px-2 py-1 rounded-full animate-pulse">
                          POPULAIRE
                        </span>
                      )}
                    </div>
                    
                    {/* Titre et prix */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{formation.title}</h3>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold text-turquoise">{formation.price}</span>
                        <span className="text-sm text-gray-500">/ {formation.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{formation.subtitle}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{formation.description}</p>
                    
                    {/* Features - prend l'espace disponible */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {formation.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-turquoise/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-turquoise text-xs font-bold">✓</span>
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button - toujours en bas */}
                    <div className="mt-auto">
                      <a 
                        href={formation.buyLink || "https://wa.me/22962435741"} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-turquoise to-blue-bright text-white py-3 px-4 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center block"
                      >
                        🛒 Acheter maintenant
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4">
              <div className="bg-gray-50 rounded-3xl p-12 border-2 border-dashed border-gray-200 text-center max-w-md">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-3">
                  Aucune formation disponible
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Les formations pour cette catégorie sont en cours de préparation.
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="https://getskillsnow.mychariow.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Acheter nos formations
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationsSection; 