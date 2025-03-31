import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import joelJotaImg from '../../assets/joeljota.jpeg';
import rodsonImg from '../../assets/rodson.png';
import brunoCunhaImg from '../../assets/brunocunha.png';

const TestimonialCard = ({ name, role, image, quote, rating }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-2xl p-6 shadow-lg relative"
  >
    <div className="absolute top-6 right-6">
      <Quote className="w-8 h-8 text-customPink/10" />
    </div>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <div className="flex gap-1 mt-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-customPink text-customPink" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600 italic">"{quote}"</p>
  </motion.div>
);

const SocialProof = () => {
  const testimonials = [
    {
      name: "Joel Jota",
      role: "Mentor de Alta Performance",
      image: joelJotaImg,
      quote: "Onde se reúne educação, estratégia e pessoas unidas por uma causa, coisas incríveis acontecem!",
      rating: 5
    },
    {
      name: "Rodson Witovicz",
      role: "Analista Técnico SEBRAE",
      image: rodsonImg,
      quote: "O Up Summit já nasceu grande. Rico em programação, trazendo o que há de mais moderno, os melhores palestrantes e as principais temáticas em inovação, empreendedorismo, tendências e oportunidades.",
      rating: 5
    },
    {
      name: "Bruno Cunha", 
      role: "Sócio Proprietário VOX2YOU",
      image: brunoCunhaImg,
      quote: "Foi sensacional para o crescimento da VOX2YOU. A participação em um evento como esse marca a história da nossa empresa.",
      rating: 5
    }
  ];

  return (
    <section className="relative bg-white pt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-customPink uppercase tracking-wider mb-4">
              Depoimentos
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que dizem sobre o{' '}
              <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                UP Summit
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Histórias reais de quem já viveu a experiência transformadora do maior evento de marketing do Brasil
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof; 