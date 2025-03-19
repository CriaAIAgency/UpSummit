import React from 'react';
import { motion } from 'framer-motion';
import LogoHero from './LogoHero';

const Patrocinadores = () => {
    return (
        <section className="relative bg-white py-20">
            {/* Decorative Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Horizontal Lines */}
                <div className="absolute w-full h-px bg-white/10 top-40"></div>
                <div className="absolute w-full h-px bg-white/10 bottom-40"></div>
                
                {/* Gradient Lines */}
                <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-customPink2 via-customPink to-customPurple"
                ></motion.div>

            </div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
                >
                <h3 className="text-customPink text-4xl md:text-5xl font-bold mb-6 uppercase">Patrocinadores</h3>
                <p className="text-xl text-neutral-950">
                Com uma feira de negócios que já impulsionou milhões em transações para patrocinadores e retomos sobre os investimentos que ultrapassam os 14000% de ROl, no UpSummit você terá acesso a inúmeras oportunidades de conexão, aprendizado e crescimento.
                </p>
                </motion.div>

                {/* Feature Image */}
                {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden"
                >
                <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                    alt="Sponsors showcase"
                    className="w-full h-[400px] object-cover"
                />
                </motion.div> */}
            </div>

            <LogoHero />
        </section>
  )
}

export default Patrocinadores
