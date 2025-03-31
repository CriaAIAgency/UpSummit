import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, MapPin, ChevronDown, ChevronUp, Clock, X, Maximize2 } from 'lucide-react';
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
import up2025Image from '../assets/bg2.jpg';
import VideoModal from '../components/VideoModal';
import wasleyImage from '../assets/wasley/wasley5.jpeg';
import muzyImage from '../assets/imagem5.png';
import caitoImage2 from '../assets/caitoimg.jpg';
import muzyImage2 from '../assets/muzyimg3.jpg';
import joelImage from '../assets/joelimg.jpg';
import cris2025Image from '../assets/cris2025.jpg';
import mesaImage from '../assets/mesapalco.jpg';

const editions = [
  {
    year: 2025,
    title: "UP Summit 2025: Escalando Negócios",
    description: "Prepare-se para a maior edição já realizada do UP Summit. Uma experiência imersiva focada em estratégias comprovadas de crescimento, inovação em escala e transformação digital. Descubra como escalar seu negócio de forma sustentável com os maiores especialistas do mercado.",
    images: [wasleyImage, up2025Image, mesaImage],
    dates: "4, 5 e 6 de Abril",
    comingSoon: true
  },
  {
    year: 2024,
    title: "UP Summit 2024: A Era da Inteligência Artificial",
    description: "O Up Summit 2024 foi um divisor de águas para empreendedores que querem escalar seus negócios e dominar o mercado! Tivemos palestrantes de peso compartilhando estratégias valiosas, insights poderosos e experiências transformadoras.",
    images: [caitoImage2, joelImage, muzyImage2],
    stats: {
      attendees: "12.000",
      speakers: "60",
      partners: "45"
    },
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
    dates: "15, 16 e 17 de Março"
  },
  {
    year: 2023,
    title: "UP Summit 2023: O Futuro Começa Agora",
    description: "Uma edição histórica que marcou a transformação do marketing tradicional para o marketing do futuro. Exploramos as tendências emergentes e as tecnologias que estão moldando o futuro do marketing digital.",
    images: [up2023Image, cris2025Image],
    stats: {
      attendees: "10.000",
      speakers: "50",
      partners: "35"
    },
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
    dates: "11 e 12 de Março"
  }
];

const Edicoes = () => {
  const [expandedYears, setExpandedYears] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const initialIndexes = editions.reduce((acc, edition) => {
      acc[edition.year] = 0;
      return acc;
    }, {});
    setCurrentImageIndexes(initialIndexes);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes(prevIndexes => {
        const newIndexes = { ...prevIndexes };
        editions.forEach(edition => {
          newIndexes[edition.year] = (prevIndexes[edition.year] + 1) % edition.images.length;
        });
        return newIndexes;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  const toggleYear = (year) => {
    if (expandedYears.includes(year)) {
      setExpandedYears(expandedYears.filter(y => y !== year));
    } else {
      setExpandedYears([...expandedYears, year]);
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
                  expandedYears.includes(edition.year) ? 'aspect-[4/3] md:aspect-video' : 'aspect-[3/2] md:aspect-[21/9]'
                }`}
                onClick={() => !edition.comingSoon && toggleYear(edition.year)}
                onTouchStart={() => setShowContent(false)}
                onTouchEnd={() => setShowContent(true)}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndexes[edition.year]}
                      src={edition.images[currentImageIndexes[edition.year]]}
                      alt={edition.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent transition-opacity duration-300 md:opacity-100 ${
                      showContent ? 'opacity-100' : 'opacity-0'
                    }`} 
                  />
                  
                  {/* Botão de expandir - Apenas visível no mobile */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenImage(edition.images[currentImageIndexes[edition.year]]);
                    }}
                    className="md:hidden absolute top-4 right-4 bg-black/50 p-2 rounded-lg text-white hover:bg-black/70 transition-colors z-10"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div 
                  className={`relative h-full flex flex-col justify-center p-6 md:p-10 transition-opacity duration-300 md:opacity-100 ${
                    showContent ? 'opacity-100' : 'opacity-0'
                  }`}
                >
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
                          toggleYear(edition.year);
                        }}
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-800 to-purple-950 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition"
                      >
                        {expandedYears.includes(edition.year) ? (
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
              {expandedYears.includes(edition.year) && !edition.comingSoon && (
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

      {/* Modal de Imagem em Tela Cheia */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
            onClick={() => setFullscreenImage(null)}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={fullscreenImage}
              alt="Imagem em tela cheia"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <VideoModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId={currentVideoId}
      />
    </section>
  );
};

export default Edicoes;