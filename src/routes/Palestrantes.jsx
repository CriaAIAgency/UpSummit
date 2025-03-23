import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import SpeakerModal from '../components/SpeakerModal';
// Importar as imagens
import pvImage from '../assets/palestrantes/pv.jpg';
import rayImage from '../assets/palestrantes/ray.png';
import pabloImage from '../assets/palestrantes/pablo.jpg';
import alexImage from '../assets/palestrantes/alex.jpeg';
import barbaraImage from '../assets/palestrantes/barbara.jpg';
import carolImage from '../assets/palestrantes/carol.jpg';
import conradoImage from '../assets/palestrantes/conrado.png';
import crisImage from '../assets/palestrantes/cris.jpeg';
import edsonImage from '../assets/palestrantes/edson.jpg';
import janaineImage from '../assets/palestrantes/janaine.jpg';
import joaokeplerImage from '../assets/palestrantes/joaokepler.jpg';
import samuelImage from '../assets/palestrantes/samuel.jpg';
import michelleImage from '../assets/palestrantes/michelle.jpeg';
import wasleyImage from '../assets/palestrantes/wasley.png';
import fabioImage from '../assets/palestrantes/fabio.jpg';
import brunoImage from '../assets/palestrantes/bruno.jpg';

const Palestrantes = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const speakers = [
        {
            name: 'PAULO VIEIRA',
            role: 'CEO da Febracis',
            description: 'O coach e fundador da Febracis Escola de Negócios já transformou mais de 1,5 milhão de vidas por meio do famoso Método CIS. Especialista em mudança de mentalidade e desenvolvimento pessoal.',
            image: pvImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Desenvolvimento Pessoal'
        },
        {
            name: 'CRIS ARCANGELI',
            role: 'Empreendedora Serial',
            description: 'Uma das maiores referências em inovação e construção de marcas no Brasil, Cris Arcangeli é uma empreendedora serial que transforma mercados. Criadora da categoria ALIMÉTICOS e do primeiro BEAUTYDRINK, ela também idealizou o Comunidades A1000, o primeiro reality show de impacto positivo do mundo.',
            image: crisImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Inovação e Empreendedorismo'
        },
        {
            name: 'JOÃO KEPLER',
            role: 'Empresário e Investidor-Anjo',
            description: 'Empresário, anjo-investidor e um dos maiores nomes do ecossistema de inovação e tecnologia do Brasil, Kepler é máxima referência no que diz respeito a construir uma empresa sólida e com capacidade de crescimento e expansão.',
            image: joaokeplerImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Inovação e Investimentos'
        },
        {
            name: 'PABLO MARÇAL',
            role: 'Empresário e Mentor',
            description: 'O empresário, coach, escritor e mentor de negócios e alta performance. De Goiânia para a liderança nacional. Esposo da Carol e pai de quatro filhos. Pablo Marçal é empresário visionário, fundador de múltiplos negócios, mentor de milhões de pessoas impactadas por seus ensinamentos.',
            image: pabloImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Alta Performance'
        },
        {
            name: 'WASLEY COSTA',
            role: 'CEO do Up Summit',
            description: 'Empresário, construtor, mentor de negócios e CEO do Up Summit.',
            image: wasleyImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Empreendedorismo'
        },
        {
            name: 'BÁRBARA PORTO',
            role: 'CEO da Bárbara Porto',
            description: 'CEO e Diretora Criativa da Bárbara Porto, uma grande marca do universo de semijoias. Bárbara é referência em elegância, autenticidade e empoderamento feminino, esbanjando paixão pela moda e a arte de criar.',
            image: barbaraImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Empreendedorismo Feminino'
        },
        {
            name: 'FÁBIO OLIVEIRA',
            role: 'CEO do Sales Clube',
            description: 'Idealizador do método Vendedorismo e referência em operações comerciais no Brasil, Fábio tem uma trajetória que fala por si: empresário, fundador da MasterDoc, CEO e Co-Fundador do Sales Clube, a maior comunidade de vendas do país. Com mais de 25 anos de experiência, ele já transformou milhares de empresários e equipes de vendas por todo o Brasil.',
            image: fabioImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Vendas'
        },
        {
            name: 'JANAINE VALÉRIA',
            role: 'Advogada Empresarial',
            description: 'Advogada Empresarial e especialista em Assessoria Jurídica para empresas, Janaine atua no âmbito Societário, Contratual e Gestão de Riscos.',
            image: janaineImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Direito Empresarial'
        },
        {
            name: 'EDSON MACKEENZY',
            role: 'CEO da Business Design Academy',
            description: 'Educador, conselheiro de negócios, autor best seller e especialista em investimento. Ao longo da sua jornada, fundou a Business Design Academy, atuou como diretor no fundo de investimentos americano The Venture City e na Bossa Nova Investimentos, e fundou o Videolog.tv, a primeira plataforma global de compartilhamento de vídeo - lugar este que atua como CEO.',
            image: edsonImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Investimentos'
        },
        {
            name: 'ALEX MONTEIRO',
            role: 'Especialista em Marketing de Influência',
            description: 'Fundador da maior agência especializada em marketing de influência da América Latina, Alex Monteiro já impulsionou carreiras como Whindersson Nunes, Gkay, Tirullipa, Rezende e muitos outros.',
            image: alexImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Marketing Digital'
        },
        {
            name: 'CONRADO ADOLPHO',
            role: 'Mentor de Negócios',
            description: 'Empresário, mentor de negócios, um dos maiores vendedores do Brasil e reconhecido como o "mentor dos mentores", com mais de 1.000 empresas atendidas individualmente.',
            image: conradoImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Mentoria'
        },
        {
            name: 'BRUNO AVELAR',
            role: 'Chief Visionary Officer',
            description: 'Empresário, coach, palestrante, escritor, mestre em networking, mentor e CVO (Chief Visionary Officer) de centenas de empresas.',
            image: brunoImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Networking'
        },
        {
            name: 'RAY GONÇALVES',
            role: 'Especialista em Marketing Digital',
            description: 'Ray Gonçalves é uma especialista em marketing e vendas que auxilia empresários a aumentarem suas vendas utilizando estratégias digitais. Com mais de 900 empresas atendidas, Ray se destaca por colocar seus clientes à frente no mercado, oferecendo diagnósticos personalizados para identificar oportunidades de crescimento.',
            image: rayImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Marketing Digital'
        },
        {
            name: 'CAROL IASMIN',
            role: 'Especialista em Neurovendas',
            description: 'Com mais de 16 anos de experiência no mercado de vendas, Carol é especialista em neurovendas e a mulher palestrante Top 1 em treinamentos de vendas no Brasil. Com uma linguagem clara e direta, transforma teorias em estratégias práticas que qualquer um pode usar.',
            image: carolImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Neurovendas'
        },
        {
            name: 'SAMUEL PEREIRA',
            role: 'Fundador da SDA Holding',
            description: 'Empresário, investidor, fundador da SDA Holding e criador do Segredos da Audiência Ao Vivo, o maior Espetáculo de Tráfego e Audiência do Brasil. Com mais de 14 anos de experiência no digital, ele tem mais de 16 milhões de visitas em um de seus sites.',
            image: samuelImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Tráfego Digital'
        },
        {
            name: 'MICHELLE WADHY',
            role: 'Co-fundadora da Fast Escova',
            description: 'Co-fundadora da Fast Escova, uma franqueadora de sucesso com mais de 350 unidades e 4.500 colaboradores em apenas 6 anos. Com formação em Administração de Empresas e MBA em Gestão Comercial, Michelle acumula mais de 25 anos de experiência liderando grandes empresas, incluindo a Avon Cosméticos, onde gerenciou mais de 30 mil pessoas.',
            image: michelleImage,
            linkedin: '#',
            instagram: '#',
            topic: 'Franquias'
        }
    ];

    return (
        <section className="relative bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
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

                {/* Palestrantes 2025 */}
                <div>
                    <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-2xl font-semibold text-neutral-900 mb-8"
                    >
                        Palestrantes 2025
                    </motion.h3>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                    <button 
                        onClick={() => window.open('https://upsummit.com.br/', '_blank')}
                        className="group relative flex items-center gap-2 bg-gradient-to-r from-customPink to-customPink2 px-8 py-4 rounded-full text-white overflow-hidden transition-all duration-300"
                    >
                        <span className="relative z-10 text-lg">Garantir meu ingresso</span>
                        <span className="relative z-10 rounded-full bg-white/20 p-1.5 transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRight className="w-6 h-6" />
                        </span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </button>
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

export default Palestrantes; 