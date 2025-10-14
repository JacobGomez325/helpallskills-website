'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Coaching Tech", href: "#coaching" },
        { name: "Formations", href: "#formations" },
        { name: "Acheter formations", href: "https://getskillsnow.mychariow.com/", external: true },
        { name: "Accompagnement", href: "#contact" },
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/about" },
        { name: "Nos coachs", href: "#coachs" },
        { name: "Témoignages", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Formations",
      links: [
        { name: "React & Frontend", href: "https://getskillsnow.mychariow.com/", external: true },
        { name: "Node.js & Backend", href: "https://getskillsnow.mychariow.com/", external: true },
        { name: "DevOps & Cloud", href: "https://getskillsnow.mychariow.com/", external: true },
        { name: "Toutes les formations", href: "https://getskillsnow.mychariow.com/", external: true },
      ]
    }
  ];
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
    }
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-turquoise-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildrenVariants}
          className="grid grid-cols-1 md:grid-cols-6 gap-10"
        >
          {/* Colonne Logo et Description */}
          <motion.div variants={fadeInUpVariants} className="md:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <div className="relative overflow-hidden">
                <span className="text-xl font-bold gradient-text">HelpAll Skills</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-turquoise-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 mb-6 max-w-xs">
              Nous aidons les professionnels de la tech à développer leurs compétences et à accélérer leur carrière grâce à un coaching personnalisé.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/helpall-skills/" className="icon-box hover:rotate-6" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61566201091766" className="icon-box hover:rotate-6" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://whatsapp.com/channel/0029Vak4piY4NVitBTDtGN1R" className="icon-box hover:rotate-6" aria-label="Canal WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Colonnes de liens */}
          {footerLinks.map((category, idx) => (
            <motion.div key={idx} className="md:col-span-1" variants={fadeInUpVariants}>
              <h4 className="text-sm font-semibold mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-turquoise-500 transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-gray-600 hover:text-turquoise-500 transition-all duration-300 hover:translate-x-1 inline-block">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Colonne Newsletter */}
          <motion.div className="md:col-span-1" variants={fadeInUpVariants}>
            <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Restez informé de nos actualités
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full px-3 py-2 text-sm text-white bg-turquoise-500 rounded-lg hover:bg-gradient-to-r hover:from-turquoise-500 hover:to-blue-500 transition-all duration-300 hover:shadow-glow-turquoise"
              >
                S&apos;abonner
              </button>
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
            <p className="text-xs text-gray-500">
              © {currentYear} HelpAll Skills. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-turquoise-500 transition-all duration-300">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-turquoise-500 transition-all duration-300">
                Conditions d&apos;utilisation
              </Link>
              <Link href="/legal" className="text-xs text-gray-500 hover:text-turquoise-500 transition-all duration-300">
                Mentions légales
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 