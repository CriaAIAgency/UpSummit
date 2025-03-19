import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Features = () => {
    const features = [
        {
            tag: 'Acesso a mentores de elite',
            title: 'Gigantes do mercado compartilhando estratégias, insights e oportunidades',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
        },
        {
            tag: 'Educação prática e aplicável',
            title: 'Conteúdo focado em resultados reais e aplicáveis ao seu negócio',
            image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80'
        },
        {
            tag: 'Jornada Pós-Evento',
            title: 'Acreditamos que conexões valiosas são a ponte entre um bom negócio e um império empresarial',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 0.8,
            ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid gap-6">
                {features.map((feature, index) => (
                    <motion.div
                    key={feature.tag}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                        opacity: 1,
                        transition: { delay: index * 0.2 }
                        }
                    }}
                    className="group relative overflow-hidden rounded-2xl"
                    >
                    {/* Background Image with Gradient Overlay */}
                    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10" />
                        <motion.img
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={feature.image}
                        alt={feature.tag}
                        className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                        <motion.div
                        variants={cardVariants}
                        className="max-w-2xl"
                        >
                        <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-br from-customPink to-customPink2 text-sm font-semibold text-white mb-6">
                            {feature.tag}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {feature.title}
                        </h3>
                        </motion.div>

                        {/* Arrow Button */}
                        <motion.button
                        variants={cardVariants}
                        className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center 
                                group-hover:bg-gradient-to-br from-customPink to-customPink2 transition-colors duration-300"
                        >
                        <ArrowUpRight className="w-6 h-6 text-white" />
                        </motion.button>
                    </div>
                </motion.div>
                ))}
                </div>
            </div>
        </section>
  )
}

export default Features
