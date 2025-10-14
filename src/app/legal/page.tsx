'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LegalPage() {
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
              Mentions légales
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Informations légales et coordonnées de HelpAll Skills.
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
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Éditeur du site</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Nom de l&apos;entreprise :</strong> HelpAll Skills</p>
                <p><strong>Forme juridique :</strong> SARL</p>
                <p><strong>Capital social :</strong> 10 000 €</p>
                <p><strong>Siège social :</strong> 123 Avenue des Technologies, 75001 Paris, France</p>
                <p><strong>SIRET :</strong> 123 456 789 00012</p>
                <p><strong>RCS :</strong> Paris B 123 456 789</p>
                <p><strong>TVA Intracommunautaire :</strong> FR12345678901</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email :</strong> contact@helpallskills.com</p>
                <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                <p><strong>Directeur de publication :</strong> Jean Dupont</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Hébergement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">vercel.com</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Propriété intellectuelle</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Le contenu de ce site web (textes, images, vidéos, logos) est protégé par le droit d&apos;auteur. 
                  Toute reproduction, même partielle, est interdite sans autorisation préalable.
                </p>
                <p className="text-gray-600">
                  Les marques et logos présents sur ce site sont la propriété de HelpAll Skills ou de leurs détenteurs respectifs.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Responsabilité</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  HelpAll Skills s&apos;efforce de fournir des informations exactes et à jour, mais ne peut garantir 
                  l&apos;exactitude, la complétude ou l&apos;actualité des informations présentes sur le site.
                </p>
                <p className="text-gray-600">
                  L&apos;utilisateur est seul responsable de l&apos;utilisation qu&apos;il fait des informations présentes sur le site.
                </p>
              </div>
            </div>
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
              Besoin d&apos;informations ?
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