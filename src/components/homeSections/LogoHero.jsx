import { motion } from "framer-motion";
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

const logos = [
  Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10,
  Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20, Logo21
];

const LogoHero = () => {
  return (
    <section className="bg-white py-4">
      {[false, true].map((reverse, index) => (
        <div key={index} className="flex overflow-hidden mt-4">
          {[...Array(3)].map((_, i) => (
            <TranslateWrapper key={i} reverse={reverse}>
              <LogoItems isBottom={reverse} />
            </TranslateWrapper>
          ))}
        </div>
      ))}
    </section>
  );
};

const TranslateWrapper = ({ children, reverse = false }) => (
  <motion.div
    initial={{ translateX: reverse ? "-100%" : "0%" }}
    animate={{ translateX: reverse ? "0%" : "-100%" }}
    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    className="flex gap-4 px-2"
  >
    {children}
  </motion.div>
);

const LogoItem = ({ src }) => {
  const isSantri = src === Logo18;
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 transition-colors"
    >
      <img 
        src={src}
        alt="Logo"
        loading="lazy" // Aqui é onde adicionamos o lazy loading
        className={`max-w-full max-h-full object-contain ${
          isSantri ? "brightness-50 contrast-200 saturate-200" : ""
        }`}
      />
    </a>
  );
};

const LogoItems = ({ isBottom }) => {
  const startIndex = isBottom ? 11 : 0;
  return <>{logos.slice(startIndex, startIndex + 10).map((logo, index) => <LogoItem key={index} src={logo} />)}</>;
};

export default LogoHero;