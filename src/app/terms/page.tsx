'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsPage() {
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
              Conditions d&apos;utilisation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Les conditions d&apos;utilisation de nos services de formation et de coaching.
            </p>
            <p className="text-sm text-gray-500">
              Dernière mise à jour : 1er janvier 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2>1. Acceptation des conditions</h2>
            <p>En utilisant nos services, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation.</p>
            
            <h2>2. Description des services</h2>
            <p>HelpAll Skills propose des formations en ligne et des services de coaching personnalisé dans le domaine de la technologie.</p>
            
            <h2>3. Inscription et compte</h2>
            <p>Pour accéder à certains services, vous devez créer un compte avec des informations exactes et à jour.</p>
            
            <h2>4. Paiement et remboursement</h2>
            <p>Les paiements sont traités de manière sécurisée. Les politiques de remboursement varient selon le type de service.</p>
            
            <h2>5. Propriété intellectuelle</h2>
            <p>Tout le contenu de formation reste la propriété de HelpAll Skills et ne peut être redistribué sans autorisation.</p>
            
            <h2>6. Responsabilités de l&apos;utilisateur</h2>
            <p>Vous vous engagez à utiliser nos services de manière responsable et légale.</p>
            
            <h2>7. Limitation de responsabilité</h2>
            <p>HelpAll Skills ne peut être tenu responsable des dommages indirects résultant de l&apos;utilisation de nos services.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Des questions ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary">
                Nous contacter
              </Link>
              <Link href="/" className="btn-secondary">
                Retour à l&apos;accueil
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 