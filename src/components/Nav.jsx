import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import Logo from '../assets/logopreta.png'
import { User, Cast } from 'lucide-react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-black 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-white py-2 shadow-xl"
          : "bg-white py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to='/' className="hover:opacity-80 duration-100">
          <img src={Logo} className="w-40" />
        </Link>
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsHovered(false);
      }}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#E5005D] transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      {/* <button className="flex items-center gap-2 rounded-md px-5 py-3 font-semibold bg-customPink text-white transition-colors hover:bg-[#E5005D] hover:text-white group">
        <Cast className="w-5 text-white group-hover:text-customPink" />
        <span>Área de Membros</span>
      </button> */}
      <button className="group flex h-10 items-center gap-2 rounded-full text-white bg-gradient-to-r from-customPink to-customPink2 pl-3 pr-4 transition-all duration-300 ease-in-out hover:from-purple-800 hover:to-purple-950 hover:pl-2 hover:text-white active:bg-customPurple">
        <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
          <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-customPurple group-active:-rotate-45" />
        </span>
        <span>Área de Membros</span>
      </button>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-gradient-to-br from-customPink via-customPink2 to-customPink2 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">Sobre Nós</h2>
          <p className="mb-6 max-w-xs text-sm text-neutral-200">
          Aprenda, conecte-se e inspire-se no maior evento empresarial do Centro-Oeste!
          </p>
        </div>
        <a
          href="/Sobre"
          className="flex items-center gap-1 text-sm text-white hover:underline"
        >
          Saiba Mais <FiArrowRight />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <a
          href="/Sobre"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Palestrantes</h3>
          <p className="text-sm">
          Conheça os líderes e especialistas que serão seus mentores.
          </p>
        </a>
        <a
          href="/Sobre"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Depoimentos</h3>
          <p className="text-sm">
          O impacto real: histórias de quem viveu a experiência.
          </p>
        </a>
        <a
          href="/Sobre"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Edições</h3>
          <p className="text-sm">
          Reviva os melhores momentos das edições anteriores.
          </p>
        </a>
        <a
          href="/Sobre"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Dúvidas</h3>
          <p className="text-sm">
          Tudo o que você precisa saber antes de participar.
          </p>
        </a>
      </div>
    </div>
  );
};

const Parceria = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Patrocinadores</h3>
          <a href="/patrocinar" className="block text-sm hover:underline">
          Quero ser um patrocinador
          </a>
          <a href="/motivos" className="block text-sm hover:underline">
          Por que patrocinar
          </a>
          <a href="#" className="block text-sm hover:underline">
          Empresas que já fazem parte
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Imprensa / Mídia</h3>
          <a href="#" className="block text-sm hover:underline">
          Quero ser parceiro de mídia
          </a>
        </div>
      </div>
      <button className="w-full rounded-lg border-2 border-customPink text-customPink px-4 py-2 font-semibold transition-colors hover:bg-customPink hover:text-white">
        Contato
      </button>
    </div>
  );
};

const CareersContent = () => {
  return (
    <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
    </div>
  );
};

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <img src={Logo} className="w-40" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;

const LINKS = [
  {
    text: "Sobre Nós",
    href: "#",
    component: AboutUsContent,
  },
  {
    text: "Parceria",
    href: "/patrocinar",
    component: Parceria,
  },
  {
    text: "Contato",
    href: "#",
  }
];