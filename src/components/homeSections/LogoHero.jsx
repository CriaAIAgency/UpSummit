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
// import Logo13 from '../../assets/patrocinadores/guide.PNG';
import Logo14 from '../../assets/patrocinadores/kami.png';
import Logo15 from '../../assets/patrocinadores/linq.png';
import Logo16 from '../../assets/patrocinadores/lus.png';
import Logo17 from '../../assets/patrocinadores/maissaude.png';
import Logo18 from '../../assets/patrocinadores/qualityhotel.jpeg';
import Logo19 from '../../assets/patrocinadores/santri.png';
import Logo20 from '../../assets/patrocinadores/sqz.png';
import Logo21 from '../../assets/patrocinadores/support.png';
import Logo22 from '../../assets/patrocinadores/vsl.png';

const LogoHero = () => {
  return (
    <section className="bg-white py-4">
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse = false }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ src }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 transition-colors"
    >
      <img src={src} alt="Logo" className="max-w-full max-h-full object-contain" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem src={Logo1} />
    <LogoItem src={Logo2} />
    <LogoItem src={Logo3} />
    <LogoItem src={Logo4} />
    <LogoItem src={Logo5} />
    <LogoItem src={Logo6} />
    <LogoItem src={Logo7} />
    <LogoItem src={Logo8} />
    <LogoItem src={Logo9} />
    <LogoItem src={Logo10} />
    <LogoItem src={Logo11} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem src={Logo12} />
    {/* <LogoItem src={Logo13} /> */}
    <LogoItem src={Logo14} />
    <LogoItem src={Logo15} />
    <LogoItem src={Logo16} />
    <LogoItem src={Logo17} />
    <LogoItem src={Logo18} />
    <LogoItem src={Logo19} />
    <LogoItem src={Logo20} />
    <LogoItem src={Logo21} />
    <LogoItem src={Logo22} />
  </>
);

export default LogoHero;
