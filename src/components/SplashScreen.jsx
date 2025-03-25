import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    // Chama onComplete após a animação (2.5s)
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer); 
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#11111A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-32 h-32">
        {/* Quadrado com cor de fundo - Sem animação */}
        <div className="absolute -top-6 right-14 z-10">
          {/* Quadrado de recorte */}
          <div className="absolute h-20 w-20 bg-[#11111A]" />
        </div>

        {/* Quadrado externo usando SVG com path personalizado */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Definição do gradient */}
          <defs>
            <linearGradient id="lineGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#20053D" /> {/* Roxo no topo direito */}
              <stop offset="100%" stopColor="#A10243" /> {/* Rosa embaixo esquerda */}
            </linearGradient>
          </defs>
          
          <motion.path
            d="M 128 0 L 128 128 L 0 128 L 0 0 L 128 0"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="36"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>

        {/* Quadrado rosa em formato de L */}
        <motion.div
          className="absolute -top-0 right-11 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="relative">
            {/* Parte horizontal do L */}
            <div className="absolute h-5 w-11 bg-white" />
            {/* Parte vertical do L */}
            <div className="absolute left-6 h-11 w-5 bg-white" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen; 