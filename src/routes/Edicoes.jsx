import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, MapPin, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import joeljotaImage from '../assets/joeljota.jpeg';
import caitoImage from '../assets/caito.jpg';
import paulomuzyImage from '../assets/paulomuzy.jpg';
import apolinarioImage from '../assets/apolinario.jpeg';
import felipetitoImage from '../assets/felipetito.jpg';
import crisImage from '../assets/palestrantes/cris.jpeg';
import palcoImage from '../assets/palco.jpg';
import up2024Image from '../assets/up2024.jpg';
import up2023Image from '../assets/2023apolinario.jpg';
import VideoModal from '../components/VideoModal';

const editions = [
  {
    year: 2025,
    title: "UP Summit 2025: Escalando Negócios",
    description: "Prepare-se para a maior edição já realizada do UP Summit. Uma experiência imersiva focada em estratégias comprovadas de crescimento, inovação em escala e transformação digital. Descubra como escalar seu negócio de forma sustentável com os maiores especialistas do mercado.",
    coverImage: palcoImage,
    location: "São Paulo - SP",
    dates: "4, 5 e 6 de Abril",
    comingSoon: true
  },
  {
    year: 2024,
    title: "UP Summit 2024: A Era da Inteligência Artificial",
    description: "O Up Summit 2024 foi um divisor de águas para empreendedores que querem escalar seus negócios e dominar o mercado! Tivemos palestrantes de peso compartilhando estratégias valiosas, insights poderosos e experiências transformadoras.",
    stats: {
      attendees: "12.000",
      speakers: "60",
      partners: "45"
    },
    coverImage: up2024Image,
    videoUrl: "https://www.youtube.com/watch?v=tnhu3K0OMYU",
    highlights: [
      {
        title: "Joel Jota",
        image: joeljotaImage,
        role: "Mentor de Alta Performance"
      },
      {
        title: "Caito Maia",
        image: caitoImage,
        role: "CEO Chilli Beans"
      },
      {
        title: "Paulo Muzy",
        image: paulomuzyImage,
        role: "Médico e Influencer Fitness"
      }
    ],
    location: "São Paulo - SP",
    dates: "15, 16 e 17 de Março"
  },
  {
    year: 2023,
    title: "UP Summit 2023: O Futuro Começa Agora",
    description: "Uma edição histórica que marcou a transformação do marketing tradicional para o marketing do futuro. Exploramos as tendências emergentes e as tecnologias que estão moldando o futuro do marketing digital.",
    stats: {
      attendees: "10.000",
      speakers: "50",
      partners: "35"
    },
    coverImage: up2023Image,
    videoUrl: "https://www.youtube.com/watch?v=RFR0VdMor0k",
    highlights: [
      {
        title: "João Apolinário",
        image: apolinarioImage,
        role: "CEO da Polishop"
      },
      {
        title: "Cris Arcangeli",
        image: crisImage,
        role: "Empreendedora Serial"
      },
      {
        title: "Felipe Tito",
        image: felipetitoImage,
        role: "Ator e empresário"
      }
    ],
    location: "Rio de Janeiro - RJ",
    dates: "10, 11 e 12 de Março"
  }
];

const Edicoes = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handlePlayClick = (videoUrl) => {
    const videoId = getYoutubeId(videoUrl);
    if (videoId) {
      setCurrentVideoId(videoId);
      setShowVideoModal(true);
    }
  };

  return (
    <section className="relative bg-[#11111A] py-24 md:py-32">
      {/* Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-purple-800
          via-purple-800 to-purple-950"
        ></motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header Section - Updated to purple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          className="mb-12 md:mb-16 pt-8 md:pt-0"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block text-sm font-semibold text-purple-800 uppercase tracking-wider mb-4"
          >
            Nossa História
          </motion.span>
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white"
            >
              Edições do{' '}
              <span className="bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
                UpSummit
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-base md:text-lg"
            >
              Reviva os momentos mais marcantes de cada edição e acompanhe nossa evolução ao longo dos anos. 
              Uma história de inovação, conhecimento e networking que continua a crescer.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards Section - Updated buttons to purple */}
        <div className="space-y-8 md:space-y-12">
          {editions.map((edition, index) => (
            <motion.div
              key={edition.year}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.2 + (index * 0.1),
                ease: "easeOut"
              }}
              className="relative w-full max-w-[1400px] mx-auto"
            >
              <div
                className={`relative overflow-hidden rounded-lg md:rounded-xl transition-all duration-500 ${
                  expandedYear === edition.year ? 'aspect-[4/3] md:aspect-video' : 'aspect-[3/2] md:aspect-[21/9]'
                }`}
                onClick={() => !edition.comingSoon && setExpandedYear(expandedYear === edition.year ? null : edition.year)}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={edition.coverImage}
                    alt={edition.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center p-6 md:p-10">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent font-semibold">
                      {edition.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 md:w-5 h-4 md:h-5" />
                      <span className="text-sm md:text-base">{edition.dates}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 max-w-2xl">
                    {edition.title.replace('UP SUMMIT', 'UpSummit')}
                  </h2>

                  {edition.comingSoon ? (
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg">
                        <Clock className="w-4 h-4 text-purple-800" />
                        <span className="text-white font-medium text-sm md:text-base">Em breve</span>
                      </div>
                      <Link to="/palestrantes">
                        <button 
                          className="group relative flex items-center gap-2 bg-gradient-to-r from-purple-800 to-purple-950 px-3 md:px-4 py-2 rounded-lg text-white overflow-hidden transition-all duration-300"
                        >
                          <span className="relative z-10 text-sm md:text-base">Ver Palestrantes</span>
                          <span className="relative z-10 rounded-full bg-white/20 p-1 transition-transform duration-300 group-hover:translate-x-1">
                            <FiArrowRight className="w-4 h-4" />
                          </span>
                          <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 md:gap-4">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayClick(edition.videoUrl);
                        }} 
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg text-white hover:bg-white/20 transition"
                      >
                        <Play className="w-4 h-4" />
                        <span className="text-sm md:text-base">Trailer</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedYear(expandedYear === edition.year ? null : edition.year);
                        }}
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-800 to-purple-950 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition"
                      >
                        {expandedYear === edition.year ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                        <span className="text-sm md:text-base">Detalhes</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedYear === edition.year && !edition.comingSoon && (
                <div className="bg-[#1F1F1F] rounded-b-xl overflow-hidden w-full">
                  <div className="p-6 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Sobre a Edição</h3>
                        <p className="text-white/80 text-sm md:text-base mb-6">{edition.description}</p>
                        
                        <Link to="/palestrantes">
                          <button className="group relative flex items-center gap-2 bg-gradient-to-r from-purple-800 to-purple-950 px-4 py-2 rounded-lg text-white overflow-hidden transition-all duration-300">
                            <span className="relative z-10 text-sm md:text-base">Ver Todos os Palestrantes</span>
                            <span className="relative z-10 rounded-full bg-white/20 p-1 transition-transform duration-300 group-hover:translate-x-1">
                              <FiArrowRight className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                          </button>
                        </Link>
                      </div>

                      {edition.highlights && (
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Destaques</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {edition.highlights.map((highlight, index) => (
                              <div
                                key={index}
                                className="group relative"
                              >
                                <div className="aspect-square rounded-lg overflow-hidden mb-2">
                                  <img
                                    src={highlight.image}
                                    alt={highlight.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                  />
                                </div>
                                <h4 className="text-white font-medium text-sm md:text-base">{highlight.title}</h4>
                                {highlight.role && (
                                  <p className="text-xs md:text-sm text-white/60">{highlight.role}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId={currentVideoId}
      />
    </section>
  );
};

export default Edicoes;