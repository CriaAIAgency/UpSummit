import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Historia = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-[#11111A] py-20 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { 
                            opacity: 1,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut",
                                staggerChildren: 0.1
                            }
                            }
                        }}
                    >
                        <motion.span 
                        variants={textVariants}
                        className="text-customPink text-sm font-semibold uppercase tracking-wider"
                        >
                        SOBRE O UP SUMMIT
                        </motion.span>
                        <motion.h2 
                        variants={textVariants}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                        >
                        A MELHOR
                        <br />
                        EXPERIÊNCIA
                        <br />
                        EM MKT
                        </motion.h2>
                        <motion.div 
                        variants={textVariants}
                        className="space-y-6 text-gray-300"
                        >
                        <p>
                            Um espaço onde cada conversa pode gerar uma nova oportunidade, cada palestra pode mudar sua perspectiva e cada conexão pode abrir portas para o sucesso.
                        </p>
                        <p>
                            Com o propósito de transformar o cenário empresarial ao conectar líderes, empreendedores e profissionais em torno das mais recentes tendências de marketing, inovação e negócios o UP Summit já impactou milhares de profissionais e empresas, criando histórias de sucesso que inspiram gerações.
                        </p>
                        <p>
                            Idealizado por uma empresa líder no segmento de capacitação, o evento se consolidou como uma plataforma única de aprendizado e networking, destacando-se por seu modelo híbrido, trilhas personalizadas e conteúdos exclusivos para públicos estratégicos.
                        </p>
                        </motion.div>
                        <motion.div
                        className="group"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                        >
                        <Link 
                            to="/"
                            className="inline-flex items-center gap-2 text-customPink font-semibold mt-8 group group-hover:text-white  transition-colors"
                        >
                            Conheça Nossa História
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 group-hover:text-white transition-transform" />
                        </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img
                                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
                                alt="Event moments"
                                className="rounded-lg w-full aspect-square object-cover"
                                />
                                <img
                                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
                                alt="Event moments"
                                className="rounded-lg w-full aspect-video object-cover"
                                />
                            </div>
                            <div className="pt-8">
                                <img
                                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
                                alt="Event moments"
                                className="rounded-lg w-full aspect-[4/5] object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Historia
