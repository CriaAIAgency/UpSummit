import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Frases = () => {
    const speakers = [
        {
            name: 'PAULO VIEIRA',
            role: 'Breve descrição contendo até 3',
            description: 'Maior especialista em Alta Performance do Brasil, autor best-seller e criador do Método CIS.',
            image: 'src/assets/palestrantes/pv.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Liderança e Alta Performance'
        },
        {
            name: 'RAY GONÇALVES',
            role: 'Breve descrição contendo até 3',
            image: 'src/assets/palestrantes/ray.png',
            linkedin: '#',
            instagram: '#'
        },
        {
            name: 'PABLO MARÇAL',
            role: 'Médico, fisiculturista e influenciador',
            image: 'src/assets/palestrantes/pablo.jpg',
            linkedin: '#',
            instagram: '#'
        },
        {
            name: 'THIAGO CONCER',
            role: 'Breve descrição contendo até 3',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
            linkedin: '#',
            instagram: '#'
        },
        {
            name: 'KENIA GAMA',
            role: 'Breve descrição contendo até 3',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
            linkedin: '#',
            instagram: '#'
        },
        {
            name: 'MARCOS FREITAS',
            role: 'Breve descrição contendo até 3',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
            linkedin: '#',
            instagram: '#'
        }
    ];

    return (
        <section className="relative bg-white pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    className="mb-12 pt-8 md:pt-0"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl md:text-6xl font-bold mt-4 mb-4 flex flex-col gap-4 me-10"
                    >
                        <span className="text-customPink">Quem já passou pelo</span>
                        <span className="text-transparent italic [-webkit-text-stroke:2px_#E5005D] font-bold">
                            UP SUMMIT
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-gray-600 text-lg max-w-3xl"
                    >
                        Os maiores nomes do mercado compartilharam segredos de liderança,
                        desenvolvimento pessoal com muitas histórias reais, lições valiosas e insights.
                    </motion.p>
                </motion.div>

                {/* Speakers Grid */}
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {speakers.map((speaker, index) => (
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
                                {speaker.description && (
                                    <p className="text-white/80 text-sm mb-4 line-clamp-3">
                                        {speaker.description}
                                    </p>
                                )}
                                {speaker.topic && (
                                    <div className="flex-1">
                                        <span className="inline-block bg-customPink/10 text-customPink px-3 py-1 rounded-full text-xs">
                                            {speaker.topic}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-3 mt-auto pt-4">
                                <a
                                    href={speaker.instagram}
                                    className="text-white/60 hover:text-customPink transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
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

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut"
                    }}
                    className="flex justify-center mb-12"
                >
                    <button className="group flex items-center gap-2 bg-gradient-to-r from-customPink to-customPink2 px-8 py-4 rounded-full text-white hover:shadow-[0_0_20px_rgba(229,0,93,0.3)] transition-shadow duration-300">
                        <span>Confira a lista completa de palestrantes</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Frases