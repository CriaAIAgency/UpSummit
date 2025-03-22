import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, MapPin, ChevronDown, ChevronUp, Clock } from 'lucide-react';

const editions = [
  {
    year: 2025,
    title: "UP Summit 2025: A Revolução do Marketing",
    description: "Prepare-se para a maior edição já realizada do UP Summit. Uma experiência imersiva que vai redefinir os padrões do marketing digital e transformar a maneira como pensamos sobre negócios.",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    location: "São Paulo - SP",
    dates: "4, 5 e 6 de Abril",
    comingSoon: true
  },
  {
    year: 2024,
    title: "UP Summit 2024: A Era da Inteligência Artificial",
    description: "Uma jornada transformadora através das últimas inovações em IA e suas aplicações práticas no marketing digital. Reunimos os maiores especialistas para compartilhar insights sobre como a IA está revolucionando a maneira como fazemos marketing.",
    stats: {
      attendees: "12.000",
      speakers: "60",
      partners: "45"
    },
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=tnhu3K0OMYU",
    highlights: [
      {
        title: "Joel Jota",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
        role: "Keynote Speaker"
      },
      {
        title: "Maria Silva",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        role: "AI Specialist"
      },
      {
        title: "Pedro Santos",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        role: "Marketing Director"
      }
    ],
    location: "São Paulo - SP",
    dates: "15, 16 e 17 de Março"
  },
  {
    year: 2023,
    title: "UP Summit 2023: Marketing do Futuro",
    description: "Uma edição histórica que marcou a transformação do marketing tradicional para o marketing do futuro. Exploramos as tendências emergentes e as tecnologias que estão moldando o futuro do marketing digital.",
    stats: {
      attendees: "10.000",
      speakers: "50",
      partners: "35"
    },
    coverImage: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=RFR0VdMor0k",
    highlights: [
      {
        title: "Ana Costa",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        role: "Digital Strategist"
      },
      {
        title: "Carlos Mendes",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
        role: "Tech Leader"
      },
      {
        title: "Julia Alves",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        role: "Marketing Expert"
      }
    ],
    location: "Rio de Janeiro - RJ",
    dates: "10, 11 e 12 de Março"
  }
];

const Edicoes = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative bg-[#11111A] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16 pt-8 md:pt-0"
        >
          <span className="inline-block text-sm font-semibold text-customPink uppercase tracking-wider mb-4">
            Nossa História
          </span>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
              Edições do{' '}
              <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                UpSummit
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Reviva os momentos mais marcantes de cada edição e acompanhe nossa evolução ao longo dos anos. 
              Uma história de inovação, conhecimento e networking que continua a crescer.
            </p>
          </div>
        </motion.div>

        {/* Cards Section */}
        <div className="space-y-8 md:space-y-12">
          {editions.map((edition) => (
            <div
              key={edition.year}
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
                  <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                    <span className="text-customPink text-xl md:text-2xl font-bold">
                      {edition.year}
                    </span>
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
                        <Clock className="w-4 h-4 text-customPink" />
                        <span className="text-white font-medium text-sm md:text-base">Em breve</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 md:gap-4">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(edition.videoUrl, '_blank');
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
                        className="flex items-center gap-2 bg-customPink px-3 md:px-4 py-2 rounded-lg text-white hover:bg-customPink2 transition"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Edicoes;