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
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Patrocinadores = () => {
    const sponsors = {
        diamond: [Logo18, Logo1, Logo2], // Santri e outros
        gold: [Logo3, Logo4, Logo5, Logo6, Logo7, Logo8],
        silver: [Logo9, Logo10, Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo19, Logo20, Logo21]
    };

    const LogoItem = ({ src }) => {
        const isSantri = src === Logo18;
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[150px] h-[150px] flex justify-center items-center bg-white rounded-xl hover:bg-slate-50 transition-colors p-6"
            >
                <img 
                    src={src}
                    alt="Logo"
                    loading="lazy"
                    className={`max-w-full max-h-full object-contain ${
                        isSantri ? "brightness-50 contrast-200 saturate-200" : ""
                    }`}
                />
            </motion.div>
        );
    };

    return (
        <section className="relative bg-white py-20">
            {/* Decorative Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-customPink
                    via-purple-800  to-purple-800"
                ></motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="inline-block text-sm font-semibold text-purple-800 uppercase tracking-wider mb-4">
                        Nossos parceiros
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
                            Patrocinadores
                        </span>
                    </h2>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-800 to-purple-950 mx-auto rounded-full mb-8"></div>
                    
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Com uma feira de negócios que já impulsionou milhões em transações para patrocinadores e retornos sobre os investimentos que ultrapassam os 14000% de ROI, no UpSummit você terá acesso a inúmeras oportunidades de conexão, aprendizado e crescimento.
                    </p>
                </motion.div>

                {/* Diamond Sponsors */}
                <div className="mb-16">
                    <h4 className="text-xl font-bold text-neutral-900 mb-8 text-center">
                        Patrocinadores Diamante
                    </h4>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.diamond.map((logo, index) => (
                            <LogoItem key={index} src={logo} />
                        ))}
                    </div>
                </div>

                {/* Gold Sponsors */}
                <div className="mb-16">
                    <h4 className="text-xl font-bold text-neutral-900 mb-8 text-center">
                        Patrocinadores Ouro
                    </h4>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.gold.map((logo, index) => (
                            <LogoItem key={index} src={logo} />
                        ))}
                    </div>
                </div>

                {/* Silver Sponsors */}
                <div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-8 text-center">
                        Patrocinadores Prata
                    </h4>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.silver.map((logo, index) => (
                            <LogoItem key={index} src={logo} />
                        ))}
                    </div>
                </div>

                {/* CTA Buttons Section */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
                    <Link 
                        to="/patrocinar"
                        className="group flex h-14 items-center gap-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-950 pl-6 pr-8 transition-all duration-300 ease-in-out hover:from-customPink hover:to-customPink2 hover:pl-5 hover:text-white active:bg-customPink"
                    >
                        <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-customPink group-active:-rotate-45" />
                        </span>
                        <span className="text-lg">Quero Patrocinar</span>
                    </Link>

                    <Link 
                        to="/motivos"
                        className="group flex h-14 items-center justify-center px-6 font-semibold text-purple-800 border-2 border-purple-800 bg-transparent rounded-full transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-950 hover:text-white"
                    >
                        <span className="text-base">Descobrir Benefícios</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Patrocinadores;
