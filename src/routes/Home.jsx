import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcons } from '../components/SocialIcons';
import { CountUpStats } from '../components/homeSections/CountUpStats';
import { Play, MapPin, Calendar, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import Frases from '../components/homeSections/Frases';
import Historia from '../components/homeSections/Historia';
import Features from '../components/homeSections/Features';
import Patrocinadores from '../components/homeSections/Patrocinadores';

const Home = () => {

    return (
        <>
            <section className="relative h-screen">
                {/* Background Video */}
                <div className="absolute inset-0 bg-black/50">
                    <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                    >
                    <source src="/background-video.mp4" type="video/mp4" />
                    </video>
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
                        <div className="max-w-7xl mx-auto px-12 w-full text-white">
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
                                    className="text-4xl md:text-5xl 2xl:text-6xl font-semibold mb-4"
                                >
                                    UP SUMMIT 2025
                                    <br />
                                    SUA ESCALADA
                                    <br />
                                    PARA O{' '}
                                    <span className="bg-gradient-to-r from-customPink via-customPink to-customPink2 bg-clip-text text-transparent">
                                        SUCESSO
                                    </span>
                                </motion.h1>
                                
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group flex items-center gap-2 bg-gradient-to-r from-customPink to-customPink2 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold mt-6 md:mt-8 relative overflow-hidden hover:shadow-[0_0_20px_rgba(229,0,93,0.4)] transition-all duration-200"
                                >
                                    <span className="relative z-10">GARANTA SEU INGRESSO</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-customPink2 to-customPink opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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

                    {/* Social Links and Event Info Container - Mantido na parte inferior */}
                    <div className="absolute bottom-10 md:bottom-20 left-0 right-0">
                        <div className="max-w-7xl mx-auto px-12">
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-end space-y-6 md:space-y-0">
                                {/* Social Links */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.6,
                                        delay: 0.5,
                                        ease: "easeOut"
                                    }}
                                    className="flex space-x-6"
                                >
                                    <a href="#" className="text-white hover:text-customPink transition">
                                    <SocialIcons.Facebook />
                                    </a>
                                    <a href="#" className="text-white hover:text-customPink transition">
                                    <SocialIcons.Twitter />
                                    </a>
                                    <a href="#" className="text-white hover:text-customPink transition">
                                    <SocialIcons.Instagram />
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
                                    className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
                                >
                                    <div className="flex items-center space-x-2">
                                    <Calendar className="w-5 h-5 text-white" />
                                    <span className="text-base md:text-lg text-white">4, 5 e 6 de Abril</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                    <MapPin className="w-5 h-5 text-white" />
                                    <span className="text-base md:text-lg text-white">Goiânia - GO</span>
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
            <section id="patrocinadores">
                <Patrocinadores />
            </section>
        </>
    )
}

export default Home;
