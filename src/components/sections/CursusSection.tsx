'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const CursusSection = () => {
  const [selectedPath, setSelectedPath] = useState('debutant');

  const paths = {
    debutant: {
      title: 'Parcours Débutant',
      description: 'Tu découvres la tech ? Commence ici !',
      icon: '🌱',
      color: 'from-green-400 to-emerald-500',
      steps: [
        {
          number: '01',
          title: 'Les Fondamentaux',
          duration: '2-3 mois',
          modules: ['HTML/CSS', 'JavaScript basics', 'Git & GitHub', 'Algorithmique'],
          offer: 'Starter - 3 000 FCFA/mois'
        },
        {
          number: '02',
          title: 'Premier Projet',
          duration: '1 mois',
          modules: ['Site web personnel', 'Portfolio', 'Responsive Design', 'Déploiement'],
          offer: 'Booster - 5 000 FCFA/mois'
        },
        {
          number: '03',
          title: 'Spécialisation',
          duration: '2-3 mois',
          modules: ['React ou Vue.js', 'Backend Node.js', 'Base de données', 'API REST'],
          offer: 'Coaching Individuel'
        }
      ]
    },
    reconversion: {
      title: 'Parcours Reconversion',
      description: 'Change de carrière avec confiance',
      icon: '🔄',
      color: 'from-purple-500 to-pink-500',
      steps: [
        {
          number: '01',
          title: 'Bilan & Orientation',
          duration: '2 semaines',
          modules: ['Analyse de compétences', 'Choix de spécialisation', 'Roadmap personnalisée', 'Objectifs clairs'],
          offer: 'Transition de Carrière'
        },
        {
          number: '02',
          title: 'Formation Intensive',
          duration: '4-6 mois',
          modules: ['Bases solides', 'Projets pratiques', 'Portfolio professionnel', 'Veille techno'],
          offer: 'Coaching Individuel'
        },
        {
          number: '03',
          title: 'Insertion Pro',
          duration: '1-2 mois',
          modules: ['CV tech optimisé', 'Préparation entretiens', 'Réseau LinkedIn', 'Premiers clients/jobs'],
          offer: 'Accompagnement Premium'
        }
      ]
    },
    professionnel: {
      title: 'Parcours Pro',
      description: 'Booste ta carrière et tes skills',
      icon: '🚀',
      color: 'from-blue-500 to-turquoise',
      steps: [
        {
          number: '01',
          title: 'Audit de Compétences',
          duration: '1 semaine',
          modules: ['Évaluation niveau', 'Identification gaps', 'Plan de montée', 'Objectifs pro'],
          offer: 'Coaching Express'
        },
        {
          number: '02',
          title: 'Upskilling Ciblé',
          duration: '3-4 mois',
          modules: ['Nouvelles technos', 'Best practices', 'Architecture', 'Leadership tech'],
          offer: 'Booster + Coaching'
        },
        {
          number: '03',
          title: 'Évolution Carrière',
          duration: 'Continu',
          modules: ['Prépa Senior/Lead', 'Négociation salaire', 'Personal branding', 'Mentorat inversé'],
          offer: 'Offre Pro sur mesure'
        }
      ]
    }
  };

  const currentPath = paths[selectedPath as keyof typeof paths];

  return (
    <section id="cursus" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-turquoise/10 to-blue-bright/10 text-turquoise font-semibold px-6 py-2 rounded-full border border-turquoise/20 mb-6">
            📚 Nos Cursus Progressifs
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ton parcours, étape par étape
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comme sur [Grafikart](https://grafikart.fr/cursus), mais avec un accompagnement humain personnalisé à chaque étape
          </p>
        </motion.div>

        {/* Path selector */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(paths).map(([key, path]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedPath(key)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                selectedPath === key
                  ? 'bg-gradient-to-r from-turquoise to-blue-bright text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
              }`}
              whileHover={{ scale: selectedPath === key ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl mr-2">{path.icon}</span>
              {path.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Current path display */}
        <motion.div
          key={selectedPath}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Path header */}
          <div className="text-center mb-12">
            <div className={`inline-block text-6xl mb-4 p-6 bg-gradient-to-br ${currentPath.color} rounded-3xl`}>
              {currentPath.icon}
            </div>
            <h3 className="text-3xl font-bold mb-2">{currentPath.title}</h3>
            <p className="text-xl text-gray-600">{currentPath.description}</p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {currentPath.steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connecting line */}
                {index < currentPath.steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b from-turquoise/50 to-blue-bright/30 transform translate-y-4" />
                )}

                <div className="relative flex gap-6">
                  {/* Step number */}
                  <div className={`flex-shrink-0 size-16 bg-gradient-to-br ${currentPath.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-turquoise font-semibold">⏱️ Durée : {step.duration}</p>
                      </div>
                      <div className="bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-6 py-3 rounded-xl border border-turquoise/20">
                        <div className="text-sm font-medium text-gray-600">Recommandé</div>
                        <div className="text-lg font-bold text-turquoise">{step.offer}</div>
                      </div>
                    </div>

                    {/* Modules */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.modules.map((module, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl"
                          whileHover={{ x: 5 }}
                        >
                          <div className="size-2 bg-turquoise rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{module}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#parcours-ia"
              className="inline-flex items-center bg-gradient-to-r from-turquoise to-blue-bright text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🤖 Mon IA va choisir ton parcours optimal</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-3">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </motion.a>
            <p className="text-gray-500 mt-4">
              En 3 questions, découvre exactement quelle formation te correspond
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CursusSection;
