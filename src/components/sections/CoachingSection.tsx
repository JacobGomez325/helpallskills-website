'use client';

import { motion } from 'framer-motion';

const CoachingSection = () => {
  const coachingServices = [
    {
      icon: '/icons/individual.svg',
      title: 'Coaching Individuel',
      description: 'Sessions personnalisées adaptées à vos objectifs de carrière et à votre niveau technique actuel.',
      features: ['Analyse de parcours', 'Plan de développement', 'Sessions 1-à-1', 'Suivi régulier'],
    },
    {
      icon: '/icons/team.svg',
      title: 'Coaching d\'Équipe',
      description: 'Accompagnement pour les équipes tech souhaitant améliorer leurs compétences collectives.',
      features: ['Diagnostic d\'équipe', 'Ateliers collaboratifs', 'Développement de soft skills', 'Suivi de progression'],
    },
    {
      icon: '/icons/career.svg',
      title: 'Transition de Carrière',
      description: 'Accompagnement spécifique pour les personnes en reconversion vers les métiers tech.',
      features: ['Bilan de compétences', 'Découverte des métiers', 'Acquisition de compétences', 'Préparation aux entretiens'],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="coaching" className="section-padding-large bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">NOS SERVICES DE COACHING</span>
          <h2 className="section-title">Un accompagnement personnalisé pour vos objectifs tech</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos coachs experts vous accompagnent dans votre parcours avec des méthodes éprouvées et un suivi personnalisé pour atteindre vos objectifs professionnels.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coachingServices.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bento-card bento-card-hover group"
            >
              <div className="icon-box mb-6 group-hover:bg-turquoise/20">
                <div className="text-turquoise text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />}
                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />}
                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />}
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-turquoise transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-turquoise mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center"
          >
            Prendre rendez-vous
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingSection; 