import React from 'react';
import { motion } from 'framer-motion';
import Logo1 from '../../assets/patrocinadores/7pay.png';
import Logo2 from '../../assets/patrocinadores/acai.png';
import Logo3 from '../../assets/patrocinadores/ademicon.jpg';
import Logo4 from '../../assets/patrocinadores/alphapark.png';
import Logo5 from '../../assets/patrocinadores/atitude.png';
import Logo6 from '../../assets/patrocinadores/baly.png';
import Logo7 from '../../assets/patrocinadores/bp.png';
import Logo8 from '../../assets/patrocinadores/comfort.png';
import Logo9 from '../../assets/patrocinadores/conectada.png';
import Logo10 from '../../assets/patrocinadores/cravo.png';
import Logo11 from '../../assets/patrocinadores/empresa.png';
import Logo12 from '../../assets/patrocinadores/epoca.png';
import Logo13 from '../../assets/patrocinadores/kami.png';
import Logo14 from '../../assets/patrocinadores/linq.png';
import Logo15 from '../../assets/patrocinadores/lus.png';
import Logo16 from '../../assets/patrocinadores/maissaude.png';
import Logo17 from '../../assets/patrocinadores/qualityhotel.jpeg';
import Logo18 from '../../assets/patrocinadores/santri.png';
import Logo19 from '../../assets/patrocinadores/sqz.png';
import Logo20 from '../../assets/patrocinadores/support.png';
import Logo21 from '../../assets/patrocinadores/vsl.png';
import Logo22 from '../../assets/patrocinadores/sebrae.png';
import Logo23 from '../../assets/patrocinadores/guide.png';
import LogoVox from '../../assets/patrocinadores/vox2you.png';
import LogoAudicred from '../../assets/patrocinadores/audicred.png';
import LogoBox from '../../assets/patrocinadores/box.jpeg';
import LogoEfreela from '../../assets/patrocinadores/efreela.png';
import LogoHiper from '../../assets/patrocinadores/hiperestrutura.png';
import LogoReserva from '../../assets/patrocinadores/reserva35.jpeg';
import LogoSicoob from '../../assets/patrocinadores/sicoob.jpg';
import LogoSpa from '../../assets/patrocinadores/spamandarim.png';
import LogoTollit from '../../assets/patrocinadores/tollit.png';
import LogoWale from '../../assets/patrocinadores/waleengenharia.png';
import LogoTalisma from '../../assets/patrocinadores/talisma.png';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Patrocinadores = () => {
    const location = useLocation();
    const isPurplePage = location.pathname === '/motivos' || 
                        location.pathname === '/edicoes' || 
                        location.pathname.includes('/sobre');
    const isMotivosPage = location.pathname === '/motivos';

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const sponsors = {
        apoio: [Logo22], // Apenas Sebrae
        patrocinadores: [
            Logo2,  // acai
            LogoVox, // vox2you
            LogoWale, // wale
            Logo19, // sqz
            Logo21, // karla (vsl)
            Logo16, // maissaude
            Logo14, // linq
            Logo11, // empresa
            Logo13, // kami
            Logo15, // lus
            Logo12, // epoca
            LogoTalisma, // talisma
            Logo9,  // conectada
            Logo7,  // bp
            Logo5,  // atitude
            Logo3,  // ademicon
            Logo1,  // 7pay
            Logo10, // cravo
            LogoAudicred, // audicred
            LogoBox, // box
            LogoEfreela, // efreela
            LogoHiper, // hiperestrutura
            LogoReserva, // reserva35
            LogoSicoob, // sicoob
            LogoSpa, // spamandarim
            LogoTollit, // tollit
        ],
        ativacoes: [Logo20, Logo21, Logo18], // Support, VSL e Santri
        parcerias: [Logo6, Logo17, Logo23, Logo8, Logo4] // Comfort, Quality Hotel, Guide, Bally e Alphapark
    };

    // Combinar todos os logos em um único array
    const allSponsors = [
        ...sponsors.patrocinadores, 
        ...sponsors.apoio, 
        ...sponsors.ativacoes, 
        ...sponsors.parcerias
    ];

    const LogoItem = ({ src }) => {
        const isSantri = src === Logo18;
        return (
            <div className="w-[150px] h-[150px] flex justify-center items-center bg-white rounded-xl hover:bg-slate-50 transition-colors p-6">
                <img 
                    src={src}
                    alt="Logo"
                    loading="lazy"
                    className={`max-w-full max-h-full object-contain ${
                        isSantri ? "brightness-0" : ""
                    }`}
                />
            </div>
        );
    };

    return (
        <section className="relative bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="inline-block text-sm font-semibold text-purple-800 uppercase tracking-wider mb-4">
                        Nossos parceiros
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Parcerias de{' '}
                        <span className="bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
                            sucesso
                        </span>
                    </h2>

                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-800/30" />
                        <div className="w-2 h-2 rounded-full bg-purple-800" />
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-800/30" />
                    </div>
                    
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Uma feira de negócios que já impulsionou <span className="text-purple-800 font-semibold">milhões em transações</span> para patrocinadores com retornos sobre os investimentos que ultrapassam os <span className="text-purple-800 font-semibold">14000% de ROI</span>. O UpSummit oferece inúmeras oportunidades de conexão, aprendizado e crescimento.
                    </p>
                </div>

                {/* Seção de Apoio - Agora em primeiro lugar */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">Apoio</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.apoio.map((logo, index) => (
                            <LogoItem key={`apoio-${index}`} src={logo} />
                        ))}
                    </div>
                </div>

                {/* Seção de Patrocinadores */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">Patrocinadores</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.patrocinadores.map((logo, index) => (
                            <LogoItem key={`patrocinador-${index}`} src={logo} />
                        ))}
                    </div>
                </div>

                {/* Seção de Ativações de Marca */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">Ativação</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.ativacoes.map((logo, index) => (
                            <LogoItem key={`ativacao-${index}`} src={logo} />
                        ))}
                    </div>
                </div>

                {/* Seção de Parcerias */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">Parcerias</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.parcerias.map((logo, index) => (
                            <LogoItem key={`parceria-${index}`} src={logo} />
                        ))}
                    </div>
                </div>

                {/* CTA Buttons Section */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
                    <Link 
                        to="/patrocinar"
                        className="group flex h-14 items-center gap-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-950 pl-6 pr-8 transition-all duration-300 ease-in-out hover:pl-5 hover:text-white hover:from-customPink hover:to-customPink2"
                    >
                        <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-customPink group-active:-rotate-45" />
                        </span>
                        <span className="text-lg">Quero Patrocinar</span>
                    </Link>

                    {isMotivosPage ? (
                        <button 
                            onClick={scrollToTop}
                            className="group flex h-14 items-center justify-center px-6 text-purple-800 border-2 border-purple-800 bg-transparent rounded-full transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-950 hover:text-white"
                        >
                            <span className="text-lg">Descobrir Benefícios</span>
                        </button>
                    ) : (
                        <Link 
                            to="/motivos"
                            className="group flex h-14 items-center justify-center px-6 text-purple-800 border-2 border-purple-800 bg-transparent rounded-full transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-950 hover:text-white"
                        >
                            <span className="text-lg">Descobrir Benefícios</span>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Patrocinadores;
