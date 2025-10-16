'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ModernHero = () => {
  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    const text = "Révèle ton potentiel avec un accompagnement personnalisé";
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/50">
      {/* Formes décoratives animées */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-turquoise/20 to-blue-bright/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-bright/20 to-turquoise/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grille subtile en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(10, 185, 166, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10, 185, 166, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Colonne texte */}
            <div>
              <motion.div variants={fadeInUp} className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-6 py-3 rounded-full border border-turquoise/20 shadow-soft">
                  <motion.div 
                    className="size-3 bg-turquoise rounded-full mr-3"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-sm font-semibold text-gray-800">🇧🇯 Coaching Tech Premium · Bénin & Afrique Francophone</span>
                </div>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-black leading-tight mb-6"
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Transforme ta
                </span>
                <br />
                <span className="bg-gradient-to-r from-turquoise via-blue-bright to-turquoise bg-clip-text text-transparent">
                  carrière tech
                </span>
              </motion.h1>

              <motion.div 
                variants={fadeInUp}
                className="mb-8"
              >
                <p className="text-2xl text-gray-700 font-medium min-h-[3rem]">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-0.5 h-7 bg-turquoise ml-1"
                  />
                </p>
              </motion.div>

              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-600 mb-10 leading-relaxed"
              >
                Coaching individuel, formations pratiques et communauté bienveillante 
                pour les étudiants, développeurs et professionnels en reconversion.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.a
                  href="#parcours-ia"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🤖 Découvre ton parcours IA</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>
                </motion.a>
                
                <motion.a
                  href="#formations"
                  className="btn-secondary text-lg px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Voir les formations
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-3 gap-6"
              >
                {[
                  { number: '150+', label: 'Talents formés', icon: '👥' },
                  { number: '98%', label: 'Satisfaction', icon: '⭐' },
                  { number: '6', label: 'Mois moyens', icon: '📈' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-turquoise to-blue-bright bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Colonne visuelle */}
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                {/* Card principale */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="size-16 bg-gradient-to-br from-turquoise to-blue-bright rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      🎯
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Accompagnement Premium</h3>
                      <p className="text-gray-600">Personnalisé selon ton profil</p>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3">
                    {[
                      'Coaching 1-to-1 avec experts',
                      'Communauté de 150+ talents',
                      'Roadmap personnalisée',
                      'Suivi WhatsApp quotidien'
                    ].map((feature, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-turquoise/5 to-blue-bright/5 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                      >
                        <div className="size-2 bg-turquoise rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA dans la card */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-turquoise to-blue-bright text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Démarrer maintenant - 3 000 FCFA/mois
                  </motion.button>
                </div>

                {/* Badges flottants */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-turquoise">3 000</div>
                    <div className="text-xs text-gray-600">FCFA/mois</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Démarrage immédiat</div>
                      <div className="text-xs text-gray-600">Accès en 5 minutes</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Éléments décoratifs */}
              <motion.div 
                className="absolute -z-10 top-10 -right-10 size-32 bg-gradient-to-br from-turquoise/30 to-blue-bright/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm font-medium">Découvre nos offres</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernHero;
