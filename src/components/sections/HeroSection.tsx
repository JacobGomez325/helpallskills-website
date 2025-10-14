'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [, setHoverState] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animations plus audacieuses
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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 2, 
        ease: "easeInOut" 
      }
    }
  };

  const codeLines = [
    { width: "70%", delay: 0.3 },
    { width: "45%", delay: 0.5 },
    { width: "85%", delay: 0.7 },
    { width: "65%", delay: 0.9 },
    { width: "30%", delay: 1.1 }
  ];

  return (
    <section 
      id="hero" 
      className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Formes décoratives avancées */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-turquoise/20 to-blue-bright/5 rounded-full blur-3xl -z-10 opacity-80" />
      <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-gradient-to-tr from-blue-bright/10 to-turquoise/5 rounded-full blur-3xl -z-10 opacity-70" />
      
      {/* Grille numérique en arrière-plan */}
      <div className="absolute inset-0 -z-5 opacity-5">
        <div className="h-full w-full grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="h-full border-r border-turquoise/30" />
          ))}
        </div>
        <div className="h-full w-full grid grid-rows-12 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-full border-b border-blue-bright/30" />
          ))}
        </div>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Colonne de texte (occupe 3/5) */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerChildren}
            className="order-2 md:order-1 md:col-span-3"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center bg-gradient-to-r from-turquoise/10 to-blue-bright/10 px-4 py-2 rounded-full mb-6">
                <motion.div 
                  className="size-3 bg-turquoise rounded-full mr-3"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-sm font-semibold text-gray-800">Formation & Coaching Tech Premium</span>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
            >
              Transformez votre <span className="bg-gradient-to-r from-turquoise to-blue-bright bg-clip-text text-transparent relative inline-block">
                carrière tech
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <motion.path
                    d="M0,5 C50,2 150,7 200,3"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0AB9A6" />
                      <stop offset="100%" stopColor="#1261AC" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 max-w-2xl"
            >
              Coaching personnalisé et formations expertes pour propulser vos compétences digitales au niveau supérieur. Développez votre potentiel avec nos experts du secteur.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="#coaching" className="btn-primary group flex items-center justify-center">
                <span>Explorer nos programmes</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </motion.svg>
              </Link>
              <Link href="#contact" className="btn-secondary">
                Parler à un expert
              </Link>
            </motion.div>
            
            {/* Stats avancées */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-8"
            >
              <div className="relative">
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="text-4xl lg:text-5xl font-bold text-gray-900 flex"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    
                    
                    <span>10</span>
                    <span className="text-turquoise">+</span>
                  </motion.div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Clients formés</p>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-turquoise rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </div>
              
              <div className="relative">
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="text-4xl lg:text-5xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.3 }}
                  >
                    <span>2</span>
                    <span>5</span>
                    <span className="text-blue-bright">+</span>
                  </motion.div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Coachs experts</p>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-blue-bright rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 1.6 }}
                />
              </div>
              
              <div className="relative">
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="text-4xl lg:text-5xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                  >
                    <span>9</span>
                    <span>8</span>
                    <span className="text-turquoise">%</span>
                  </motion.div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Satisfaction client</p>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-turquoise to-blue-bright rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 1, delay: 1.7 }}
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Colonne avec animation tech (occupe 2/5) */}
          <motion.div 
            className="order-1 md:order-2 md:col-span-2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="relative h-[520px] md:h-[560px] w-full bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-100 overflow-visible"
              onMouseEnter={() => setHoverState(true)}
              onMouseLeave={() => setHoverState(false)}
            >
              {/* Terminal avec animation de code */}
              <div className="absolute inset-4 md:inset-6 bg-[#1e2130] rounded-xl shadow-2xl" style={{ height: 'calc(100% - 40px)' }}>
                {/* Barre de titre du terminal */}
                <div className="h-8 bg-[#252a3a] flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-gray-400 text-xs font-mono">coaching-terminal</div>
                </div>
                
                {/* Contenu du terminal */}
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center text-gray-400 mb-3">
                    <span className="mr-2">$</span>
                    <motion.span 
                      className="text-green-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      npm run start-coaching
                    </motion.span>
                  </div>
                  
                  <motion.div 
                    className="text-blue-400 my-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    &gt; Initializing HelpAll Skills coaching module...
                  </motion.div>
                  
                  <motion.div 
                    className="text-purple-400 my-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    &gt; Analyzing skills profile...
                  </motion.div>
                  
                  {/* Code qui s'écrit */}
                  <div className="mt-5 mb-4 text-gray-300">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      class <span className="text-yellow-400">SkillsCoaching</span> {"{"}
                    </motion.div>
                    
                    {codeLines.map((line, index) => (
                      <div key={index} className="ml-4 flex items-center my-2 h-4">
                        <motion.div
                          className="h-3 bg-turquoise/30 rounded-sm"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ 
                            width: line.width,
                            opacity: 1
                          }}
                          transition={{ 
                            delay: line.delay,
                            duration: 0.5
                          }}
                        />
                      </div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                    >
                      {"}"}
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="text-green-400 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                  >
                    &gt; Coach connected! Ready to start your transformation.
                  </motion.div>

                  <motion.div 
                    className="flex items-center text-gray-400 mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <span className="mr-2">$</span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      transition={{ delay: 2.1, duration: 0.6 }}
                      className="overflow-hidden"
                    >
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="inline-block w-2 h-5 bg-white ml-0.5"
                      />
                    </motion.span>
                  </motion.div>
                </div>
              </div>
              
              {/* Éléments décoratifs tech */}
              <div className="absolute top-8 -right-6 size-16 bg-blue-bright/60 rounded-full blur-md animate-pulse"></div>
              <div className="absolute bottom-10 -left-4 size-12 bg-turquoise/60 rounded-full blur-md animate-float"></div>
              
              {/* Badge moderne */}
              <motion.div 
                className="absolute -bottom-10 right-10 bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-gradient-to-br from-turquoise to-blue-bright rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Résultats garantis</p>
                    <p className="text-xl font-bold text-gray-900">100%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
