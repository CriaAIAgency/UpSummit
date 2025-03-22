import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Historia = () => {
    return (
        <section className="bg-[#11111A] py-20 text-white relative">
            {/* Decorative Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-customPink
                    via-purple-800 to-purple-800"
                ></motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-customPink text-sm font-semibold uppercase tracking-wider">
                            Sobre o Up Summit
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                            A melhor
                            <br />
                            <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                experiência
                            </span>
                            <br />
                            em marketing
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <p>
                                Um espaço onde cada conversa pode gerar uma nova oportunidade, cada palestra pode mudar sua perspectiva e cada conexão pode abrir portas para o sucesso.
                            </p>
                            <p>
                                Com o propósito de transformar o cenário empresarial ao conectar líderes, empreendedores e profissionais em torno das mais recentes tendências de marketing, inovação e negócios o UP Summit já impactou milhares de profissionais e empresas, criando histórias de sucesso que inspiram gerações.
                            </p>
                            <p>
                                Idealizado por uma empresa líder no segmento de capacitação, o evento se consolidou como uma plataforma única de aprendizado e networking, destacando-se por seu modelo híbrido, trilhas personalizadas e conteúdos exclusivos para públicos estratégicos.
                            </p>
                        </div>
                        <Link 
                            to="/sobre"
                            className="inline-flex items-center gap-2 text-customPink font-semibold mt-8 hover:text-white transition-colors"
                        >
                            Saiba mais sobre nós
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="relative">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Historia
