import React from 'react';
import { motion } from 'framer-motion';
import imagem8 from '../../assets/imagem8.png';
import imagem16 from '../../assets/imagem16.png';
import imagem4 from '../../assets/imagem4.png';

const Historia = () => {
    const images = [
        {
            src: imagem8,
            alt: "Evento Up Summit",
            className: "col-span-2 row-span-1"
        },
        {
            src: imagem16,
            alt: "Participantes do evento",
            className: "col-span-1 row-span-1"
        },
        {
            src: imagem4,
            alt: "Networking no evento",
            className: "col-span-1 row-span-1"
        }
    ];

    return (
        <section className="relative bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Texto */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <span className="text-customPink text-sm font-semibold uppercase tracking-wider">
                                Nossa História
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Transformando o{' '}
                                <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                    futuro
                                </span>
                                {' '}do marketing
                            </h2>
                            <p className="text-gray-600">
                                O UP Summit nasceu com o propósito de transformar o cenário empresarial brasileiro, 
                                conectando líderes, empreendedores e profissionais em torno das mais recentes 
                                tendências de marketing, inovação e negócios.
                            </p>
                            <p className="text-gray-600">
                                Com um modelo único que combina conteúdo de alta qualidade, networking estratégico 
                                e experiências imersivas, nos consolidamos como o principal evento de marketing e 
                                negócios do Centro-Oeste.
                            </p>
                        </motion.div>
                    </div>

                    {/* Grid de Imagens */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-2 gap-4">
                            {images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative rounded-2xl overflow-hidden ${image.className}`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Historia;
