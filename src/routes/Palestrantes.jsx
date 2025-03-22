import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
// Importar as imagens
import pvImage from '../assets/palestrantes/pv.jpg';
import rayImage from '../assets/palestrantes/ray.png';
import pabloImage from '../assets/palestrantes/pablo.jpg';

const Palestrantes = () => {
    const speakers = [
        {
            name: 'PAULO VIEIRA',
            role: 'CEO do Método CIS',
            description: 'Maior especialista em Alta Performance do Brasil, autor best-seller e criador do Método CIS.',
            image: pvImage,
            linkedin: '#',
            instagram: '#',
            highlight: true,
            topic: 'Liderança e Alta Performance'
        },
        {
            name: 'RAY GONÇALVES',
            role: 'Especialista em Marketing Digital',
            description: 'Referência em estratégias de marketing digital e vendas online.',
            image: rayImage,
            linkedin: '#',
            instagram: '#',
            highlight: true,
            topic: 'Marketing Digital'
        },
        {
            name: 'PABLO MARÇAL',
            role: 'Empresário e Mentor',
            description: 'Empreendedor serial e especialista em desenvolvimento pessoal.',
            image: pabloImage,
            linkedin: '#',
            instagram: '#',
            highlight: true,
            topic: 'Empreendedorismo'
        },
        // Adicione mais palestrantes aqui...
    ];

    return (
        <section className="relative bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header com mesma animação do Edicoes.jsx */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    className="mb-16 pt-8 md:pt-0"
                >
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-customPink text-sm font-semibold uppercase tracking-wider"
                    >
                        Nossos Palestrantes
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-neutral-900"
                    >
                        Aprenda com os{' '}
                        <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                            melhores
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-neutral-600 text-lg max-w-3xl"
                    >
                        Reunimos os maiores especialistas do mercado para compartilhar conhecimento,
                        experiências e insights que irão transformar sua visão sobre marketing e negócios.
                    </motion.p>
                </motion.div>

                {/* Palestrantes Principais */}
                <div className="mb-20">
                    <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-2xl font-semibold text-neutral-900 mb-8"
                    >
                        Keynote Speakers
                    </motion.h3>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {speakers.filter(speaker => speaker.highlight).map((speaker, index) => (
                            <motion.div
                                key={speaker.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6,
                                    delay: 0.2 + (index * 0.1),
                                    ease: "easeOut"
                                }}
                                className="bg-[#1F1F1F] rounded-2xl p-4 group flex flex-col"
                            >
                                <div className="flex-1 flex flex-col">
                                    <div className="aspect-square mb-4 overflow-hidden rounded-xl relative">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            loading="lazy"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                objectFit: 'cover',
                                                backfaceVisibility: 'hidden'
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-1">{speaker.name}</h4>
                                    <p className="text-customPink text-sm mb-2">{speaker.role}</p>
                                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{speaker.description}</p>
                                    <span className="inline-block bg-customPink/10 text-customPink px-3 py-1 rounded-full text-xs mb-4">
                                        {speaker.topic}
                                    </span>
                                </div>
                                <div className="flex gap-3 mt-auto pt-4">
                                    <a
                                        href={speaker.instagram}
                                        className="text-white/60 hover:text-customPink transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={speaker.linkedin}
                                        className="text-white/60 hover:text-customPink transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Todos os Palestrantes */}
                <div>
                    <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-2xl font-semibold text-neutral-900 mb-8"
                    >
                        Todos os Palestrantes
                    </motion.h3>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6,
                                    delay: 0.2 + (index * 0.05),
                                    ease: "easeOut"
                                }}
                                className="bg-[#1F1F1F] rounded-2xl p-4 group flex flex-col"
                            >
                                <div className="flex-1 flex flex-col">
                                    <div className="aspect-square mb-4 overflow-hidden rounded-xl relative">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            loading="lazy"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                objectFit: 'cover',
                                                backfaceVisibility: 'hidden'
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-1">{speaker.name}</h4>
                                    <p className="text-customPink text-sm mb-2">{speaker.role}</p>
                                    <span className="inline-block bg-customPink/10 text-customPink px-3 py-1 rounded-full text-xs">
                                        {speaker.topic}
                                    </span>
                                </div>
                                <div className="flex gap-3 mt-auto pt-4">
                                    <a
                                        href={speaker.instagram}
                                        className="text-white/60 hover:text-customPink transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={speaker.linkedin}
                                        className="text-white/60 hover:text-customPink transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut"
                    }}
                    className="flex justify-center mt-16"
                >
                    <button className="group flex items-center gap-2 bg-gradient-to-r from-customPink to-customPink2 px-8 py-4 rounded-full text-white hover:shadow-[0_0_20px_rgba(229,0,93,0.3)] transition-shadow duration-300">
                        <span>Garanta sua vaga</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Palestrantes; 