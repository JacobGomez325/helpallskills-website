import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Structure simplifiée et claire des données
const FORMATIONS_DATA = [
  {
    id: 1,
    title: 'React Avancé',
    description: 'Maîtrisez les concepts avancés de React et ses écosystèmes',
    duration: '5 jours',
    level: 'Avancé',
    price: '2500€',
    image: '/images/formations/react.jpg',
    category: 'react'
  },
  {
    id: 2,
    title: 'React Native',
    description: 'Développez des applications mobiles avec React Native',
    duration: '4 jours',
    level: 'Intermédiaire',
    price: '2000€',
    image: '/images/formations/react-native.jpg',
    category: 'react'
  },
  {
    id: 3,
    title: 'Node.js & Express',
    description: 'Créez des APIs robustes avec Node.js et Express',
    duration: '4 jours',
    level: 'Intermédiaire',
    price: '1800€',
    image: '/images/formations/node.jpg',
    category: 'nodejs'
  },
  {
    id: 4,
    title: 'DevOps Pratique',
    description: 'Mettez en place une pipeline CI/CD complète',
    duration: '5 jours',
    level: 'Avancé',
    price: '2800€',
    image: '/images/formations/devops.jpg',
    category: 'devops'
  },
  {
    id: 5,
    title: 'Docker & Kubernetes',
    description: 'Maîtrisez la conteneurisation et l\'orchestration',
    duration: '3 jours',
    level: 'Intermédiaire',
    price: '2200€',
    image: '/images/formations/docker.jpg',
    category: 'devops'
  },
  {
    id: 6,
    title: 'AWS Cloud Architect',
    description: 'Concevez des architectures cloud scalables',
    duration: '6 jours',
    level: 'Avancé',
    price: '3200€',
    image: '/images/formations/aws.jpg',
    category: 'cloud'
  }
];

// Configuration des catégories avec labels et clés
const CATEGORIES_CONFIG = [
  { key: 'all', label: 'Tous', count: FORMATIONS_DATA.length },
  { key: 'react', label: 'React', count: FORMATIONS_DATA.filter(f => f.category === 'react').length },
  { key: 'nodejs', label: 'Node.js', count: FORMATIONS_DATA.filter(f => f.category === 'nodejs').length },
  { key: 'devops', label: 'DevOps', count: FORMATIONS_DATA.filter(f => f.category === 'devops').length },
  { key: 'cloud', label: 'Cloud', count: FORMATIONS_DATA.filter(f => f.category === 'cloud').length }
];

export default function InnovativeFormations() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filtrage réactif avec useMemo
  const filteredFormations = useMemo(() => {
    console.log('🔄 Recalcul du filtrage pour:', activeCategory);
    
    if (activeCategory === 'all') {
      console.log('✅ Retour de toutes les formations:', FORMATIONS_DATA.length);
      return FORMATIONS_DATA;
    }
    
    const filtered = FORMATIONS_DATA.filter(formation => formation.category === activeCategory);
    console.log('✅ Formations filtrées pour', activeCategory + ':', filtered.length);
    console.log('📝 Formations filtrées:', filtered.map(f => f.title));
    
    return filtered;
  }, [activeCategory]);

  // Handler pour le changement de catégorie
  const handleCategoryChange = (categoryKey: string) => {
    console.log('🖱️ Clic sur catégorie:', categoryKey);
    setActiveCategory(categoryKey);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-bright to-turquoise bg-clip-text text-transparent">
            Formations Innovantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des formations pratiques et intensives pour maîtriser les technologies les plus demandées
          </p>
        </div>

        {/* Debug Panel - Visible pour diagnostiquer */}
        <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <h3 className="font-bold text-blue-800 mb-3">🔍 Diagnostic du Filtrage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-blue-700">Catégorie active:</strong>
              <div className="bg-blue-100 p-2 rounded mt-1 font-mono">{activeCategory}</div>
            </div>
            <div>
              <strong className="text-blue-700">Formations trouvées:</strong>
              <div className="bg-blue-100 p-2 rounded mt-1 font-mono">{filteredFormations.length}</div>
            </div>
            <div>
              <strong className="text-blue-700">Total formations:</strong>
              <div className="bg-blue-100 p-2 rounded mt-1 font-mono">{FORMATIONS_DATA.length}</div>
            </div>
          </div>
          <div className="mt-4">
            <strong className="text-blue-700">IDs des formations filtrées:</strong>
            <div className="bg-blue-100 p-2 rounded mt-1 font-mono">
              [{filteredFormations.map(f => f.id).join(', ')}]
            </div>
          </div>
          <div className="mt-4">
            <strong className="text-blue-700">Titres des formations filtrées:</strong>
            <div className="bg-blue-100 p-2 rounded mt-1 text-xs">
              {filteredFormations.map(f => f.title).join(' | ')}
            </div>
          </div>
        </div>

        {/* Navigation par onglets */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES_CONFIG.map((category) => (
            <button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative border-2",
                activeCategory === category.key
                  ? "bg-gradient-to-r from-blue-bright to-turquoise text-white border-transparent shadow-lg shadow-blue-bright/20"
                  : "bg-white text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-gray-300"
              )}
            >
              {category.label}
              <span className={cn(
                "absolute -top-2 -right-2 min-w-[24px] h-6 rounded-full text-xs font-bold flex items-center justify-center border-2",
                activeCategory === category.key
                  ? "bg-white text-blue-bright border-white"
                  : "bg-turquoise text-white border-turquoise"
              )}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grille des formations */}
        <div className="min-h-[500px]">
          {filteredFormations && filteredFormations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image de la formation */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={formation.image}
                      alt={formation.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-turquoise/20 to-blue-bright/20';
                        placeholder.innerHTML = '<span class="text-3xl">📚</span>';
                        target.parentElement?.appendChild(placeholder);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badge niveau */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-sm font-medium bg-blue-bright/90 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                        {formation.level}
                      </span>
                    </div>
                    
                    {/* Badge catégorie */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium bg-white/90 text-gray-800 px-2 py-1 rounded-full backdrop-blur-sm capitalize">
                        {formation.category}
                      </span>
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                      {formation.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {formation.description}
                    </p>
                    
                    {/* Informations pratiques */}
                    <div className="flex items-center justify-between text-sm mb-6">
                      <div className="flex items-center text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formation.duration}
                      </div>
                      <div className="font-bold text-xl text-blue-bright">
                        {formation.price}
                      </div>
                    </div>
                    
                    {/* Bouton d'action */}
                    <a 
                      href="https://getskillsnow.mychariow.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-bright to-turquoise text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-bright/20 transition-all duration-300 active:scale-95 text-center block"
                    >
                      En savoir plus
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  Revenez bientôt pour découvrir nos nouvelles offres !
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 