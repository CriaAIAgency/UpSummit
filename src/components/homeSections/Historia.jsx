import React from 'react';
import imagem8 from '../../assets/imagem8.png';
import imagem14 from '../../assets/imagem14.png';
import wasley from '../../assets/wasley/wasley6.jpeg';

const Historia = () => {
    const images = [
        {
            src: wasley,
            alt: "Evento Up Summit",
            className: "col-span-2 row-span-1"
        },
        {
            src: imagem8,
            alt: "Participantes do evento",
            className: "col-span-1 row-span-1"
        },
        {
            src: imagem14,
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
                        <div className="space-y-6">
                            <span className="text-customPink text-sm font-semibold uppercase tracking-wider">
                                Nossa História
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Transformando o{' '}
                                <span className="bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent">
                                    futuro
                                </span>
                                {' '}dos negócios
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
                        </div>
                    </div>

                    {/* Grid de Imagens */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`relative rounded-2xl overflow-hidden group ${
                                        index === 0 
                                            ? "col-span-1 sm:col-span-2" 
                                            : "col-span-1"
                                    }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Historia;
