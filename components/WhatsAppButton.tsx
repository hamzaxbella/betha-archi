'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '+33000000000'; // Replace with actual phone number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
