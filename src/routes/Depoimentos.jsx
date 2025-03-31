import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Play } from 'lucide-react';
import VideoModal from '../components/VideoModal';
import Dep1 from '../assets/depoimentos/dep1.jpeg';
import Dep2 from '../assets/depoimentos/dep2.jpeg';
import Dep3 from '../assets/depoimentos/dep3.jpeg';
import Dep4 from '../assets/depoimentos/dep4.jpeg';
import Dep5 from '../assets/depoimentos/dep5.jpeg';
import Dep6 from '../assets/depoimentos/dep6.jpeg';
import Dep7 from '../assets/depoimentos/dep7.jpeg';
import Dep8 from '../assets/depoimentos/dep8.jpeg';
import Dep9 from '../assets/depoimentos/dep9.jpeg';

// Reorganizando os testimonials em categorias
const testimonials = {
  speakers: [
    {
      name: "Thiago Concer",
      company: "Especialista em Marketing Digital",
      videoUrl: "https://www.youtube.com/watch?v=OsDrf1zE2jo"
    }
  ],
  sponsors: [
    {
      name: "Bruno Cunha",
      company: "Vox 2 you",
      videoUrl: "https://www.youtube.com/watch?v=Qc0V0Ewd0Wo"
    },
    {
      name: "Elvira Leones",
      company: "Hiper Estrutura Solar",
      videoUrl: "https://www.youtube.com/watch?v=yLaPHzuH2ow"
    },
    {
      name: "Waldemar Neto",
      company: "Wale Engenharia",
      videoUrl: "https://www.youtube.com/watch?v=5bS1MieE3wY"
    },
    {
      name: "Márcia Queiroz",
      company: "Fast Escova",
      videoUrl: "https://www.youtube.com/watch?v=-xSmcf--7UM"
    },
    {
      name: "Flávio Lima",
      company: "Primodialle",
      videoUrl: "https://www.youtube.com/watch?v=7bQDOFcOUTA"
    },
    {
      name: "Rodson Witovicz",
      company: "SEBRAE",
      videoUrl: "https://www.youtube.com/watch?v=c7dETIZ2Ff8"
    }
  ],
  attendees: [
    { image: Dep1 },
    { image: Dep3 },
    { image: Dep2 },
    { image: Dep4 },
    { image: Dep5 },
    { image: Dep8 },
    { image: Dep7 },
    { image: Dep9 },
    { image: Dep6 }
  ]
};

const TestimonialCard = ({ name, role, image, quote, rating, videoUrl, onPlayClick }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg relative group hover:shadow-xl transition-shadow duration-300">
    <div className="absolute top-6 right-6">
      <Quote className="w-8 h-8 text-purple-800/10" />
    </div>
    
    {/* Imagem e Info */}
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
            <Star key={i} className="w-4 h-4 fill-purple-800 text-purple-800" />
          ))}
        </div>
      </div>
    </div>

    {/* Quote */}
    <p className="text-gray-600 italic mb-4">"{quote}"</p>

    {/* Play Button */}
    <button
      onClick={() => onPlayClick(videoUrl)}
      className="w-full flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-800 py-2 rounded-lg transition-colors"
    >
      <Play className="w-4 h-4" />
      <span className="font-medium">Ver depoimento</span>
    </button>
  </div>
);

const TestimonialSection = ({ title, description, testimonials, onPlayClick }) => (
  <div className="mb-32">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group cursor-pointer"
          onClick={() => onPlayClick(testimonial.videoUrl)}
        >
          {/* Thumbnail do YouTube */}
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <img
              src={`https://img.youtube.com/vi/${getYoutubeId(testimonial.videoUrl)}/maxresdefault.jpg`}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-4 text-center">
            <h3 className="font-semibold text-gray-900 text-lg">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600">
              {testimonial.company}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const getYoutubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Simplificando o InstagramTestimonialSection
const InstagramTestimonialSection = ({ title, description, testimonials }) => (
  <div className="mb-32">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={testimonial.image}
            alt="Depoimento"
            className="w-full h-auto"
          />
        </motion.div>
      ))}
    </div>
  </div>
);

const Depoimentos = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const handlePlayClick = (videoUrl) => {
    const videoId = getYoutubeId(videoUrl);
    if (videoId) {
      setCurrentVideoId(videoId);
      setShowVideoModal(true);
    }
  };

  return (
    <section className="relative bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-32">
          <span className="inline-block text-sm font-semibold text-purple-800 uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Transformando{' '}
            <span className="bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
              histórias
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-800/30" />
            <div className="w-2 h-2 rounded-full bg-purple-800" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-800/30" />
          </div>
        </div>

        {/* Seções de Depoimentos */}
        <TestimonialSection
          title="Palestrantes"
          description="O que nossos palestrantes dizem sobre a experiência de compartilhar conhecimento no UP Summit."
          testimonials={testimonials.speakers}
          onPlayClick={handlePlayClick}
        />

        <TestimonialSection
          title="Patrocinadores"
          description="Depoimentos de empresas que escolheram fazer parte desta história."
          testimonials={testimonials.sponsors}
          onPlayClick={handlePlayClick}
        />

        <InstagramTestimonialSection
          title="O que nosso público diz"
          description="Comentários de participantes que viveram a experiência UP Summit."
          testimonials={testimonials.attendees}
        />
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId={currentVideoId}
      />
    </section>
  );
};

export default Depoimentos; 