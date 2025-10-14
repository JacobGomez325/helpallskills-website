'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Aminata D.',
      role: 'Étudiante en informatique',
      company: 'Université d&apos;Abomey-Calavi',
      image: '/images/testimonial-1.jpg',
      content: "Grâce à HelpAll, j'ai enfin trouvé une vraie méthode pour apprendre. Les coachings collectifs m'ont donné confiance et la roadmap claire m'aide à progresser semaine après semaine.",
      rating: 5
    },
    {
      id: 2,
      name: 'Koffi M.',
      role: 'Développeur Junior',
      company: 'Freelance',
      image: '/images/testimonial-2.jpg',
      content: "J'ai décroché mon premier stage en 2 mois grâce au coaching personnalisé. L'aide sur mon portfolio et les conseils pour les entretiens ont fait toute la différence.",
      rating: 5
    },
    {
      id: 3,
      name: 'Fatoumata S.',
      role: 'Reconversion professionnelle',
      company: 'En formation',
      image: '/images/testimonial-3.jpg',
      content: "Ce n'est pas une école, c'est mieux : j'ai des gens qui me soutiennent. La communauté WhatsApp est vraiment motivante et les mentors sont toujours disponibles.",
      rating: 5
    },
    {
      id: 4,
      name: 'Yves A.',
      role: 'Étudiant autodidacte',
      company: 'Cotonou',
      image: '/images/testimonial-4.jpg',
      content: 'Avant HelpAll Skills, j&apos;étais perdu dans mes apprentissages. Maintenant j&apos;ai une direction claire et je progresse vraiment. Le suivi WhatsApp est un plus énorme.',
      rating: 5
    }
  ];

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    if (isAutoplay) {
      startAutoplay();
    }
    
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay, startAutoplay]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
    
    // Redémarrer l'autoplay après un clic manuel après 10 secondes
    setTimeout(() => {
      setIsAutoplay(true);
    }, 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    direction.current = newDirection;
    
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      
      if (newIndex < 0) {
        return testimonials.length - 1;
      } else if (newIndex >= testimonials.length) {
        return 0;
      }
      
      return newIndex;
    });
    
    setIsAutoplay(false);
    
    // Redémarrer l'autoplay après un clic manuel après 10 secondes
    setTimeout(() => {
      setIsAutoplay(true);
    }, 10000);
  };

  const direction = useRef(1);

  return (
    <section id="testimonials" className="section-padding-large bg-gradient-to-br from-turquoise/5 to-blue-bright/5">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-turquoise font-semibold mb-2 block">TÉMOIGNAGES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que disent nos apprenants</h2>
          <p className="text-gray-600">
            Découvrez l&apos;impact de nos formations et de notre coaching sur la carrière de nos apprenants.
          </p>
        </motion.div>
        
        {/* Carousel de témoignages */}
        <div className="relative max-w-4xl mx-auto">
          {/* Contrôles */}
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-turquoise transition-colors focus:outline-none"
              aria-label="Témoignage précédent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          </div>
          
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-turquoise transition-colors focus:outline-none"
              aria-label="Témoignage suivant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          {/* Slides */}
          <div className="overflow-hidden relative">
            <AnimatePresence initial={false} custom={direction.current} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction.current}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 400, damping: 40 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  
                  if (swipe < -swipeConfidenceThreshold) {
                    direction.current = 1;
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    direction.current = -1;
                    paginate(-1);
                  }
                }}
                className="bg-white rounded-xl shadow-xl p-8 md:p-12 w-full"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Image ou avatar placeholder */}
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-turquoise to-blue-bright flex items-center justify-center text-white text-2xl font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic text-gray-800 mb-6">
                      &ldquo;{testimonials[currentIndex].content}&rdquo;
                    </blockquote>
                    
                    <div>
                      <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentIndex].role} - {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Indicateurs */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-turquoise w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 