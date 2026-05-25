'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Détection de la section active pour la navigation
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Offres', href: '/#offres' },
    { name: 'Équipe', href: '/#coachs' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'À propos', href: '/about' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <Link href="/" className="flex items-center">
                      <span className="text-xl font-bold gradient-text">
                        HelpAll Skills
                      </span>
                    </Link>
                  </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex gap-8 items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
          >
            {navLinks.map((link, index) => {
              const isActive = activeLink === link.href.substring(1);
              return (
                <Link 
                  key={index} 
                  href={link.href}
                  className="relative"
                >
                  <span className={`text-sm font-medium transition-all duration-300 hover:text-turquoise ${
                    isActive 
                      ? 'text-turquoise' 
                      : isScrolled 
                        ? 'text-gray-800' 
                        : 'text-white'
                  }`}>
                    {link.name}
                    {isActive && (
                      <motion.span 
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-turquoise"
                        layoutId="activeNav"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          >
            <motion.a
              href="/#diagnostic"
              className="btn-primary btn-shine text-sm flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Trouver mon offre</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden pt-4 pb-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            >
              <motion.div 
                className="flex flex-col space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {navLinks.map((link, index) => {
                  const isActive = activeLink === link.href.substring(1);
                  return (
                    <motion.div 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <Link href={link.href}>
                        <span 
                          className={`block py-2 text-sm font-medium transition-all duration-300 ${
                            isActive 
                              ? 'text-turquoise' 
                              : isScrolled 
                                ? 'text-gray-800 hover:text-turquoise' 
                                : 'text-white hover:text-turquoise'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <a
                    href="/#diagnostic"
                    className="btn-primary text-center text-sm flex items-center justify-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Trouver mon offre</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 