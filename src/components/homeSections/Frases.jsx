import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import SpeakerModal from '../SpeakerModal';
import { Link } from 'react-router-dom';

const Frases = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const speakers = [
        {
            name: 'PAULO VIEIRA',
            role: 'CEO da Febracis',
            description: 'O coach e fundador da Febracis Escola de Negócios já transformou mais de 1,5 milhão de vidas por meio do famoso Método CIS. Especialista em mudança de mentalidade e desenvolvimento pessoal.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/pv.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Desenvolvimento Pessoal'
        },
        {
            name: 'WASLEY COSTA',
            role: 'CEO do Up Summit',
            description: 'Empresário, construtor, mentor de negócios e CEO do Up Summit.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/wasley.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Empreendedorismo'
        },
        {
            name: 'CRIS ARCANGELI',
            role: 'Empreendedora Serial',
            description: 'Uma das maiores referências em inovação e construção de marcas no Brasil, Cris Arcangeli é uma empreendedora serial que transforma mercados. Criadora da categoria ALIMÉTICOS e do primeiro BEAUTYDRINK, ela também idealizou o Comunidades A1000, o primeiro reality show de impacto positivo do mundo.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/cris.jpeg',
            linkedin: '#',
            instagram: '#',
            topic: 'Inovação e Empreendedorismo'
        },
        {
            name: 'PABLO MARÇAL',
            role: 'Empresário e Mentor',
            description: 'O empresário, coach, escritor e mentor de negócios e alta performance. De Goiânia para a liderança nacional. Esposo da Carol e pai de quatro filhos. Pablo Marçal é empresário visionário, fundador de múltiplos negócios, mentor de milhões de pessoas impactadas por seus ensinamentos.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/pablo.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Alta Performance'
        },
        {
            name: 'JOÃO KEPLER',
            role: 'Empresário e Investidor-Anjo',
            description: 'Empresário, anjo-investidor e um dos maiores nomes do ecossistema de inovação e tecnologia do Brasil, Kepler é máxima referência no que diz respeito a construir uma empresa sólida e com capacidade de crescimento e expansão.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/joaokepler.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Inovação e Investimentos'
        },
        {
            name: 'BÁRBARA PORTO',
            role: 'CEO da Bárbara Porto',
            description: 'CEO e Diretora Criativa da Bárbara Porto, uma grande marca do universo de semijoias. Bárbara é referência em elegância, autenticidade e empoderamento feminino, esbanjando paixão pela moda e a arte de criar.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/barbara.jpg',
            linkedin: '#',
            instagram: '#',
            topic: 'Empreendedorismo Feminino'
        },
        {
            name: 'DOUGLAS NINJA',
            role: 'Deputado Federal e Influenciador',
            description: 'Ex-jogador profissional de basquete, influenciador digital e deputado federal por São Paulo, Ninja é referência em comunicação autêntica e transformação social. Criador do canal "Nunca Mexa com um Ninja", leva mensagens de superação, autoestima e poder pessoal a milhões de seguidores.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/douglas.jpeg',
            linkedin: '#',
            instagram: '#',
            topic: 'Comunicação e Liderança'
        },
        {
            name: 'RENNER SILVA',
            role: 'Palestrante Internacional',
            description: 'Eleito o melhor palestrante do Brasil pelo prêmio Top of Mind em Londres, Renner Silva impactou mais de 1 milhão de pessoas com suas palavras. Com mais de 1.300 palestras e 600 empresas atendidas, é referência em performance, comunicação e faturamento milionário no palco.',
            image: 'https://minio-minio.m7nkeb.easypanel.host/upsummit2025/palestrantes/renner.jpeg',
            linkedin: '#',
            instagram: '#',
            topic: 'Performance e Comunicação'
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
                        <span className="text-customPink">No palco do </span>
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
                        Reunimos os maiores especialistas do mercado para compartilhar conhecimento,
                        experiências e insights que irão transformar sua visão sobre marketing e negócios.
                    </motion.p>
                </motion.div>

                {/* Speakers Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                            className="bg-[#1F1F1F] rounded-2xl p-4 group flex flex-col cursor-pointer"
                            onClick={() => setSelectedSpeaker(speaker)}
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
                                <div className="flex-1">
                                    <span className="inline bg-customPink/10 text-customPink px-3 py-1 rounded-full text-xs">
                                        {speaker.topic}
                                    </span>
                                </div>
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

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut"
                    }}
                    className="flex justify-center"
                >
                    <Link to="/palestrantes">
                        <button className="group flex items-center gap-2 bg-gradient-to-r from-customPink to-customPink2 px-8 py-4 rounded-full text-white hover:shadow-[0_0_20px_rgba(229,0,93,0.3)] transition-shadow duration-300">
                            <span>Confira a lista completa de palestrantes</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Modal */}
            <SpeakerModal
                isOpen={!!selectedSpeaker}
                onClose={() => setSelectedSpeaker(null)}
                speaker={selectedSpeaker}
            />
        </section>
    );
};

export default Frases;