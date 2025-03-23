import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Newspaper, Radio, Camera, Share2, Download, Users, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Midia = () => {
    const benefits = [
        {
            icon: Globe,
            title: 'Alcance Nacional',
            description: 'Conecte-se com uma audiência qualificada e engajada de todo o Brasil'
        },
        {
            icon: Users,
            title: 'Networking Premium',
            description: 'Acesso exclusivo aos palestrantes e líderes empresariais'
        },
        {
            icon: TrendingUp,
            title: 'Visibilidade Estratégica',
            description: 'Exposição da sua marca em todos os materiais oficiais do evento'
        }
    ];

    const mediaTypes = [
        {
            icon: Newspaper,
            title: 'Imprensa Digital e Impressa',
            description: 'Portais de notícias, jornais, revistas e blogs especializados'
        },
        {
            icon: Radio,
            title: 'Rádio e Podcast',
            description: 'Emissoras de rádio e produtores de conteúdo em áudio'
        },
        {
            icon: Camera,
            title: 'TV e Vídeo',
            description: 'Canais de televisão, YouTube e produtoras de vídeo'
        },
        {
            icon: Share2,
            title: 'Influenciadores',
            description: 'Criadores de conteúdo com foco em negócios e empreendedorismo'
        }
    ];

    return (
        <section className="relative bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-sm font-semibold text-customPink uppercase tracking-wider mb-4">
                        Seja um parceiro de mídia
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        Amplifique o{' '}
                        <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                            impacto
                        </span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Junte-se ao maior evento de marketing do Brasil como parceiro de mídia 
                        e faça parte de uma história de transformação e sucesso.
                    </p>
                </motion.div>

                {/* Benefits Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6,
                                delay: 0.2 + (index * 0.1),
                                ease: "easeOut"
                            }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-customPink/10 rounded-lg flex items-center justify-center mb-4">
                                <benefit.icon className="w-6 h-6 text-customPink" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Press Kit Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-br from-customPink to-customPink2 rounded-3xl p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="relative">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Press Kit UP Summit 2025
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Acesse nosso material completo para imprensa, incluindo logos, 
                            fotos em alta resolução e release oficial do evento.
                        </p>
                        <Link to="/contato">
                            <button className="group relative flex items-center gap-2 bg-white mx-auto px-6 py-3 rounded-full text-customPink overflow-hidden transition-all duration-300">
                                <span className="relative z-10 text-base">Download Press Kit</span>
                                <Download className="relative z-10 w-5 h-5" />
                                <div className="absolute inset-0 bg-customPink/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <h2 className="text-3xl font-bold mb-6">
                        Vamos{' '}
                        <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                            conversar
                        </span>
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Entre em contato com nossa equipe e saiba mais sobre como 
                        se tornar um parceiro de mídia do UP Summit.
                    </p>
                    <Link to="/contato">
                        <button className="group relative flex items-center gap-2 bg-gradient-to-r from-customPink to-customPink2 mx-auto px-6 py-3 rounded-full text-white overflow-hidden transition-all duration-300">
                            <span className="relative z-10 text-base">Falar com a assessoria</span>
                            <span className="relative z-10 rounded-full bg-white/20 p-1 transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Midia;