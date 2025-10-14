'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  const stats = [
    { number: '21', label: 'Sept 2024 - Lancement' },
    { number: '100%', label: 'Francophone' },
    { number: '4', label: 'Offres d\'accompagnement' },
    { number: '24/7', label: 'Support disponible' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Méthode',
      description: 'Une approche structurée pour apprendre sans se perdre et progresser étape par étape dans la tech.'
    },
    {
      icon: '🤝',
      title: 'Mentors',
      description: 'Des accompagnateurs expérimentés qui vous guident personnellement dans votre parcours tech.'
    },
    {
      icon: '💪',
      title: 'Motivation',
      description: 'Une communauté d\'entraide motivante pour maintenir votre engagement et votre progression.'
    },
    {
      icon: '🧭',
      title: 'Guidance',
      description: 'Une direction claire avec des roadmaps précises pour savoir quoi faire semaine après semaine.'
    }
  ];

  const timeline = [
    {
      year: 'Sept 2024',
      title: 'Lancement de HelpAll Skills',
      description: 'Le 21 septembre 2024, lancement officiel du programme d\'accompagnement pour jeunes talents francophones en tech au Bénin'
    },
    {
      year: 'Oct-Déc 2024',
      title: 'Premiers Clients & Base Solide',
      description: 'Création du groupe WhatsApp, sessions gratuites, premiers témoignages et ventes des offres Starter, Booster, Express'
    },
    {
      year: 'Jan-Juin 2025',
      title: 'Croissance & Notoriété',
      description: 'Lancement du site web officiel, développement de l\'offre Pro, partenariats locaux et création de contenus réguliers'
    },
    {
      year: 'Juil-Sept 2025',
      title: 'Structuration & Automatisation',
      description: 'Mise en place d\'un CRM, automatisation des processus, recrutement de co-mentors et organisation des ressources'
    },
    {
      year: 'Oct-Déc 2025',
      title: 'Expansion & Impact',
      description: 'Ciblage d\'autres pays francophones, création d\'un espace Alumni, événement signature et objectif de 100 jeunes accompagnés'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-turquoise-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-bright to-turquoise bg-clip-text text-transparent">
              À propos de HelpAll Skills
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Programme d&apos;accompagnement pour jeunes talents francophones en tech, lancé le 21 septembre 2024 au Bénin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/22962435741" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 Nous contacter
              </a>
              <a 
                href="https://whatsapp.com/channel/0029Vak4piY4NVitBTDtGN1R" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Rejoindre la communauté
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-bright mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Notre mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                HelpAll Skills accompagne les jeunes talents francophones dans leur parcours tech. 
                Nous offrons une méthode structurée, des mentors expérimentés, une communauté motivante 
                et une guidance claire pour réussir dans la technologie.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Lancé le 21 septembre 2024 à Cotonou et Calavi au Bénin, notre objectif est d&apos;accompagner 
                100 jeunes talents d&apos;ici fin 2025 et de nous étendre vers d&apos;autres pays francophones d&apos;Afrique.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-bright/10 text-blue-bright rounded-full text-sm font-medium">
                  🇧🇯 Bénin
                </span>
                <span className="px-4 py-2 bg-turquoise/10 text-turquoise rounded-full text-sm font-medium">
                  100% Francophone
                </span>
                <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                  Accompagnement personnalisé
                </span>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-blue-bright to-turquoise rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Notre vision 2025</h3>
                <p className="text-lg opacity-90">
                  Devenir la référence en accompagnement tech pour les jeunes talents francophones d&apos;Afrique. 
                  D&apos;ici fin 2025 : 100 jeunes accompagnés, 10 structures partenaires, et une expansion 
                  vers le Sénégal, Togo et Cameroun.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des principes qui guident notre approche et définissent notre engagement envers nos apprenants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Notre roadmap stratégique
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De notre lancement en septembre 2024 à notre expansion africaine en 2025.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Ligne de connexion */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-turquoise via-blue-bright to-turquoise transform md:-translate-x-px"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icône centrale */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-turquoise to-blue-bright shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-turquoise to-blue-bright"></div>
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    {/* Badge de période */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-turquoise/10 to-blue-bright/10 text-turquoise mb-4">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {item.year}
                    </div>
                    
                    {/* Titre avec icône */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center">
                      {index === 0 && <span className="mr-2">🚀</span>}
                      {index === 1 && <span className="mr-2">👥</span>}
                      {index === 2 && <span className="mr-2">📈</span>}
                      {index === 3 && <span className="mr-2">⚙️</span>}
                      {index === 4 && <span className="mr-2">🌍</span>}
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Indicateur de progression */}
                    <div className="mt-4 flex items-center">
                      <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-turquoise to-blue-bright h-1.5 rounded-full transition-all duration-1000"
                          style={{ width: index === 0 ? '100%' : index === 1 ? '60%' : '0%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-xs text-gray-500 font-medium">
                        {index === 0 ? 'Terminé' : index === 1 ? 'En cours' : 'À venir'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-bright to-turquoise">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Prêt à tracer votre voie dans la tech ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez HelpAll Skills et bénéficiez d&apos;un accompagnement personnalisé pour réussir votre parcours tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/22962435741" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-bright px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                💬 Commencer maintenant
              </a>
              <a 
                href="https://whatsapp.com/channel/0029Vak4piY4NVitBTDtGN1R" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-blue-bright transition-all duration-300"
              >
                Rejoindre la communauté
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 