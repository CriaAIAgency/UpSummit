import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcons } from '../components/SocialIcons';
import { CountUpStats } from '../components/homeSections/CountUpStats';
import { Play, MapPin, Calendar, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import Frases from '../components/homeSections/Frases';
import Historia from '../components/homeSections/Historia';
import Features from '../components/homeSections/Features';
import Patrocinadores from '../components/homeSections/Patrocinadores';
import { useNavigate } from 'react-router-dom';
import capa2 from '../assets/capa.png';

const Home = () => {
    const navigate = useNavigate();

    const scrollToFAQ = () => {
        navigate('/sobre');
        setTimeout(() => {
            const faqSection = document.getElementById('faq');
            if (faqSection) {
                const offset = 100;
                const elementPosition = faqSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return (
        <>
            <section className="relative h-screen">
                {/* Background Image */}
                <div className="absolute inset-0 bg-black/50">
                    <img
                        src={capa2}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Decorative Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Horizontal Lines */}
                    <div className="absolute w-full h-px bg-white/10 top-1/4"></div>
                    <div className="absolute w-full h-px bg-white/10 bottom-1/4"></div>
                    
                    {/* Gradient Lines */}
                    <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute top-1/4 left-0 h-px bg-gradient-to-r from-transparent to-transparent"
                    ></motion.div>
                    <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "10%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute top-1/4 right-64 h-px bg-gradient-to-r from-customPink to-customPurple"
                    ></motion.div>
                    <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="absolute bottom-1/4 right-0 h-px bg-gradient-to-l from-transparent to-transparent"
                    ></motion.div>
                    <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "10%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="absolute bottom-1/4 right-96 h-px bg-gradient-to-l from-customPurple to-customPink"
                    ></motion.div>
                </div>

                {/* Content */}
                <div className="relative h-full">
                    {/* Conteúdo Principal - Ajustado para ficar entre as linhas */}
                    <div className="absolute inset-0 flex items-center" style={{ top: '25%', bottom: '25%' }}>
                        <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full text-white">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6,
                                    ease: "easeOut"
                                }}
                                className="max-w-3xl"
                            >
                                <motion.h1 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-[2.5rem] sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-8 tracking-tight"
                                >
                                    <span className="text-white">UpSummit 2025</span>
                                    <br />
                                    <span className="text-white">Sua escalada</span>
                                    <br />
                                    <span className="text-white">para o </span>
                                    <span className="bg-gradient-to-r from-customPink via-customPink2 to-customPink2 bg-clip-text text-transparent">
                                        sucesso
                                    </span>
                                </motion.h1>
                                
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="group relative flex items-center gap-3 bg-gradient-to-r from-customPink to-customPink2 px-6 sm:px-8 py-3.5 rounded-full text-white overflow-hidden transition-all duration-300 text-base sm:text-lg font-medium"
                                    onClick={() => window.open('https://upsummit.com.br/', '_blank')}
                                >
                                    <span className="relative z-10">Garanta seu ingresso</span>
                                    <span className="relative z-10 rounded-full bg-white/20 p-1.5 transition-transform duration-300 group-hover:translate-x-1 flex items-center">
                                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                                </motion.button>
                            </motion.div>

                            {/* Play Button */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.6,
                                    delay: 0.7,
                                    ease: "easeOut"
                                }}
                                className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden md:block"
                            >
                                <motion.button 
                                    whileHover={{ scale: 1.1 }}
                                    className="relative flex items-center justify-center w-20 h-20 group"
                                >
                                    <div className="absolute inset-0 rounded-full border-2 border-white"></div>
                                    <svg 
                                        viewBox="0 0 24 24" 
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-10 h-10 text-white translate-x-0.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Social Links and Event Info Container */}
                    <div className="absolute bottom-6 sm:bottom-10 md:bottom-20 left-0 right-0">
                        <div className="max-w-7xl mx-auto px-6 sm:px-12">
                            <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-end md:space-y-0">
                                {/* Social Links */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.6,
                                        delay: 0.5,
                                        ease: "easeOut"
                                    }}
                                    className="flex space-x-8 sm:space-x-6"
                                >
                                    <a href="#" className="text-white hover:text-customPink transition">
                                        <SocialIcons.Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                    <a href="#" className="text-white hover:text-customPink transition">
                                        <SocialIcons.Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                    <a href="#" className="text-white hover:text-customPink transition">
                                        <SocialIcons.Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                </motion.div>

                                {/* Event Info */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.6,
                                        delay: 0.6,
                                        ease: "easeOut"
                                    }}
                                    className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6"
                                >
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        <span className="text-sm sm:text-base md:text-lg text-white">4, 5 e 6 de Abril</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        <span className="text-sm sm:text-base md:text-lg text-white">Goiânia - GO</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CountUpStats />
            <Frases />
            <Historia />
            <Features />


            {/* Nova seção de Dúvidas */}
            <section className="bg-[#11111A] py-20 relative">
                {/* Decorative Lines - Ajustada a posição */}
                <div className="absolute top-0 left-0 right-0 h-[4px] overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-customPink via-purple-800 to-purple-800"
                    ></motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-purple-800 text-sm font-semibold uppercase tracking-wider">
                            Dúvidas Frequentes
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                            Tire todas as suas{' '}
                            <span className="bg-gradient-to-r from-purple-800 to-purple-950 bg-clip-text text-transparent">
                                dúvidas
                            </span>
                        </h2>

                        <p className="text-gray-300 mb-8">
                            Encontre respostas para as principais perguntas sobre o UP Summit, 
                            desde informações sobre ingressos até detalhes sobre a programação e local do evento.
                        </p>

                        <button 
                            onClick={scrollToFAQ}
                            className="group relative flex items-center gap-2 bg-gradient-to-r from-purple-800 to-purple-950 px-6 py-3 rounded-full text-white overflow-hidden transition-all duration-300 mx-auto"
                        >
                            <span className="relative z-10">Ver perguntas frequentes</span>
                            <span className="relative z-10 rounded-full bg-white/20 p-1 transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                        </button>
                    </div>
                </div>
            </section>

            <section id="patrocinadores">
                <Patrocinadores />
            </section>
        </>
    )
}

export default Home;
