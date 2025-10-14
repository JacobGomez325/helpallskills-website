'use client';

import { motion } from 'framer-motion';

const CoachsSection = () => {
  const coachs = [
    {
      name: 'Édouard Hinvi',
      role: 'Expert DevOps',
      bio: 'Spécialiste en infrastructure cloud et automatisation. Expert en déploiement et gestion de systèmes distribués.',
      skills: ['DevOps', 'Cloud', 'CI/CD', 'Infrastructure'],
      available: false,
      status: 'Bientôt disponible'
    },
    {
      name: 'Amen Agbla',
      role: 'Développeur Frontend',
      bio: 'Expert en développement d\'applications web modernes avec JavaScript et frameworks avancés.',
      skills: ['JavaScript', 'TypeScript', 'Angular', 'Frontend'],
      available: false,
      status: 'Bientôt disponible'
    },
    {
      name: 'Aimé Sagbo',
      role: 'Développeur Full-Stack',
      bio: 'Développeur polyvalent spécialisé dans les technologies JavaScript modernes et les architectures backend.',
      skills: ['Vue.js', 'TypeScript', 'Express', 'Nest.js'],
      available: true,
      status: 'Disponible'
    },
    {
      name: 'Carlos Billetix',
      role: 'Développeur Python',
      bio: 'Expert en développement web Python et frameworks Django. Disponible pour sessions personnalisées.',
      skills: ['Python', 'Django', 'Backend', 'API'],
      available: true,
      status: 'Ven 21h, Sam 10h'
    },
    {
      name: 'Corentin',
      role: 'Développeur Python',
      bio: 'Spécialiste Python avec une approche pédagogique adaptée aux débutants et niveau intermédiaire.',
      skills: ['Python', 'Programmation', 'Algorithmique', 'Backend'],
      available: false,
      status: 'Bientôt disponible',
      email: 'corentinalcoy@gmail.com'
    },
    {
      name: 'Mr Lionel',
      role: 'Développeur Web',
      bio: 'Expert en développement web full-stack avec une solide expérience en technologies backend.',
      skills: ['Node.js', 'PHP', 'Web Development', 'Backend'],
      available: false,
      status: 'Bientôt disponible'
    },
    {
      name: 'Arsène',
      role: 'Développeur React',
      bio: 'Spécialiste en développement d\'interfaces utilisateur modernes avec React et Next.js.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      available: false,
      status: 'Bientôt disponible'
    },
    {
      name: 'Isaac',
      role: 'Développeur Polyvalent',
      bio: 'Développeur multi-langages avec expertise en JavaScript, TypeScript et Python.',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Full-Stack'],
      available: false,
      status: 'Bientôt disponible'
    },
    {
      name: 'Horace',
      role: 'Développeur Full-Stack',
      bio: 'Expert en développement web avec Django et React. Passionné par les architectures modernes.',
      skills: ['Django', 'React', 'Python', 'Frontend'],
      available: false,
      status: 'Bientôt disponible',
      email: 'folahanfayomi@gmail.com'
    },
    {
      name: 'Onésime',
      role: 'Développeur React',
      bio: 'Spécialiste React avec disponibilités régulières pour accompagnement personnalisé.',
      skills: ['React', 'JavaScript', 'Frontend', 'UI/UX'],
      available: true,
      status: 'Mer 21h30, Sam 21h30'
    },
    {
      name: 'Djroton',
      role: 'Développeur Next.js',
      bio: 'Expert en développement d\'applications web modernes avec JavaScript et Next.js.',
      skills: ['JavaScript', 'Next.js', 'React', 'Full-Stack'],
      available: false,
      status: 'Bientôt disponible'
    },
    {
      name: 'Claude',
      role: 'Expert DevOps',
      bio: 'Spécialiste en infrastructure et automatisation. Disponible pour sessions DevOps personnalisées.',
      skills: ['DevOps', 'Infrastructure', 'Automation', 'Cloud'],
      available: true,
      status: 'Sam 12h, Mar 20h',
      email: 'dev.claudy@gmail.com'
    },
    {
      name: 'Abraham',
      role: 'Data Analyst',
      bio: 'Expert en analyse de données avec disponibilités régulières pour accompagnement data.',
      skills: ['Data Analysis', 'Python', 'Statistics', 'Visualization'],
      available: true,
      status: 'Mar & Jeu 20h30',
      email: 'abklb27@gmail.com'
    },
    {
      name: 'Junior Médénou',
      role: 'Expert Mobile & Product',
      bio: 'Spécialiste en développement mobile et gestion de produit. Vision stratégique et technique.',
      skills: ['Mobile Development', 'Product Management', 'Strategy', 'Leadership'],
      available: false,
      status: 'Bientôt disponible'
    },
    {
      name: 'Judicaël',
      role: 'Développeur PHP',
      bio: 'Expert en développement web PHP avec une spécialisation en framework Laravel.',
      skills: ['PHP', 'Laravel', 'Backend', 'Web Development'],
      available: false,
      status: 'Bientôt disponible'
    },
    {
      name: 'Maxime',
      role: 'Expert Mobile & DevOps',
      bio: 'Double expertise en développement mobile et infrastructure DevOps pour projets complexes.',
      skills: ['Mobile Development', 'DevOps', 'Infrastructure', 'Cross-Platform'],
      available: false,
      status: 'Bientôt disponible'
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Séparer les coachs disponibles et non disponibles
  const availableCoachs = coachs.filter(coach => coach.available);
  const upcomingCoachs = coachs.filter(coach => !coach.available);

  return (
    <section id="coachs" className="section-padding-small bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-turquoise font-semibold mb-2 block">NOTRE ÉQUIPE D&apos;EXPERTS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Des coachs passionnés et expérimentés</h2>
          <p className="text-gray-600">
            Notre équipe est composée d&apos;experts du secteur tech qui partagent leur expertise et vous accompagnent vers la réussite.
          </p>
        </motion.div>

        {/* Coachs disponibles */}
        {availableCoachs.length > 0 && (
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold text-center mb-8 text-turquoise"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Coachs Disponibles
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {availableCoachs.map((coach, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-green-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-400/40 to-turquoise/40 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center text-2xl font-bold text-turquoise">
                        {coach.name.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Disponible
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-turquoise transition-colors">
                      {coach.name}
                    </h3>
                    <p className="text-turquoise font-medium text-sm mb-2">{coach.role}</p>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{coach.bio}</p>
                    
                    {coach.status !== 'Disponible' && (
                      <p className="text-green-600 text-xs font-medium mb-3">
                        📅 {coach.status}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {coach.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="text-xs bg-turquoise/10 text-turquoise px-2 py-1 rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                      {coach.skills.length > 3 && (
                        <span className="text-xs text-gray-500">+{coach.skills.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Autres coachs */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Notre Équipe Complète
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {upcomingCoachs.map((coach, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300/40 to-blue-bright/40 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center text-2xl font-bold text-gray-600">
                      {coach.name.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Bientôt
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-turquoise transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-turquoise font-medium text-sm mb-2">{coach.role}</p>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{coach.bio}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {coach.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {coach.skills.length > 3 && (
                      <span className="text-xs text-gray-500">+{coach.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Nos coachs sont sélectionnés pour leur expertise technique et leur capacité à transmettre leurs connaissances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/22962435741" className="btn-primary">
              Contacter un coach
            </a>
            <a href="#offres" className="btn-secondary">
              Voir nos offres
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachsSection;