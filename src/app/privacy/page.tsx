'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Collecte des données",
      content: [
        "Nous collectons des informations lorsque vous vous inscrivez à nos formations, remplissez un formulaire de contact, ou interagissez avec notre site web.",
        "Les données collectées peuvent inclure : nom, adresse e-mail, numéro de téléphone, informations de paiement, et préférences de formation.",
        "Nous utilisons des cookies pour améliorer votre expérience utilisateur et analyser le trafic de notre site."
      ]
    },
    {
      title: "2. Utilisation des données",
      content: [
        "Vos données sont utilisées pour fournir nos services de formation et de coaching.",
        "Nous utilisons vos informations pour communiquer avec vous concernant vos formations et nos services.",
        "Avec votre consentement, nous pouvons vous envoyer des newsletters et des informations sur nos nouveaux programmes."
      ]
    },
    {
      title: "3. Protection des données",
      content: [
        "Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles.",
        "Vos données de paiement sont traitées de manière sécurisée par nos partenaires de paiement certifiés.",
        "L'accès à vos données est limité aux employés autorisés qui en ont besoin pour fournir nos services."
      ]
    },
    {
      title: "4. Partage des données",
      content: [
        "Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement.",
        "Nous pouvons partager des informations avec des prestataires de services tiers qui nous aident à exploiter notre site web et à fournir nos services.",
        "Nous pouvons divulguer des informations si la loi l'exige ou pour protéger nos droits."
      ]
    },
    {
      title: "5. Vos droits",
      content: [
        "Vous avez le droit d'accéder à vos données personnelles que nous détenons.",
        "Vous pouvez demander la correction ou la suppression de vos données.",
        "Vous pouvez vous opposer au traitement de vos données à des fins de marketing direct.",
        "Vous pouvez retirer votre consentement à tout moment."
      ]
    },
    {
      title: "6. Cookies",
      content: [
        "Notre site utilise des cookies pour améliorer votre expérience de navigation.",
        "Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter le fonctionnement du site.",
        "Nous utilisons Google Analytics pour analyser l'utilisation de notre site (données anonymisées)."
      ]
    },
    {
      title: "7. Conservation des données",
      content: [
        "Nous conservons vos données aussi longtemps que nécessaire pour fournir nos services.",
        "Les données de compte sont conservées tant que votre compte est actif.",
        "Nous pouvons conserver certaines informations pour nous conformer aux obligations légales."
      ]
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
              Politique de confidentialité
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Nous nous engageons à protéger et respecter votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.
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
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
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
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques de traitement des données, n&apos;hésitez pas à nous contacter.
            </p>
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