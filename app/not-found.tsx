'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLangaugeStore } from '@/hooks/LanguageStore';

const NotFound = () => {
  const { langauge } = useLangaugeStore();

  const translations = {
    title: {
      en: "404 - Page Not Found",
      fr: "404 - Page Non Trouvée",
      ar: "404 - الصفحة غير موجودة"
    },
    subtitle: {
      en: "Looks like this blueprint got lost in the archives",
      fr: "On dirait que ce plan s'est perdu dans les archives",
      ar: "يبدو أن هذا المخطط قد ضاع في الأرشيف"
    },
    button: {
      en: "Back to Homepage",
      fr: "Retour à l'Accueil",
      ar: "العودة إلى الصفحة الرئيسية"
    }
  };

  return (
    <div className="custom-height flex items-center justify-center bg-white">
      <div className="max-w-5xl w-full mx-auto px-4"> {/* Increased max-width */}
        <div className="relative">
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 bg-gray-50" 
               style={{
                 backgroundImage: `
                   linear-gradient(#E5E5E5 1px, transparent 1px),
                   linear-gradient(90deg, #E5E5E5 1px, transparent 1px)
                 `,
                 backgroundSize: '20px 20px'
               }}>
          </div>

          {/* Content */}
          <motion.div 
            className="relative bg-white/50 p-12 rounded-lg  flex flex-col lg:flex-row  items-center gap-12" /* Changed to flex-row */
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Architectural Elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-gray-400 -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-gray-400 translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-gray-400 -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-gray-400 translate-x-1 translate-y-1" />

            {/* Architectural Sketch */}
            <div className="w-48 h-48 flex-shrink-0"> {/* Adjusted size and added flex-shrink-0 */}
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-gray-400 stroke-[0.5]">
                <motion.path
                  d="M20,80 L50,20 L80,80 Z M35,80 L50,40 L65,80 Z M50,20 L50,80"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="flex-grow"> {/* Added flex-grow */}
              <h1 className="text-6xl font-bold text-gray-900 mb-4">
                {translations.title[langauge]}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {translations.subtitle[langauge]}
              </p>

              <Link href="/">
                <motion.button
                  className="px-8 py-3 bg-black text-white rounded-lg font-semibold
                           hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {translations.button[langauge]}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
