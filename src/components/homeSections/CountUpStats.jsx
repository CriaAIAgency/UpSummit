import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:py-24 relative">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat
          prefix="R$"
          num={15}
          suffix="M+"
          subheading="Em movimentações na feira de negócios"
        />
        <div className="h-[1px] w-12 bg-white sm:h-12 sm:w-[1px]" />
        <Stat
          num={5000}
          suffix="+"
          subheading="Histórias impulsionadas pelo UpSummit"
        />
        <div className="h-[1px] w-12 bg-white sm:h-12 sm:w-[1px]" />
        <Stat
          num={50}
          suffix="+"
          subheading="Empresas conectadas à experiência"
        />
      </div>
      
      <div className="relative pt-24">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-full max-w-[120px] bg-gradient-to-r from-transparent via-customPink/40 to-transparent" />
          <div className="w-2 h-2 bg-customPink/40 rotate-45 transform" />
          <div className="h-px w-full max-w-[120px] bg-gradient-to-r from-transparent via-customPink/40 to-transparent" />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ num, prefix, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl bg-gradient-to-r from-customPink to-customPink2 bg-clip-text text-transparent font-semibold sm:text-6xl">
        {prefix}
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-600">{subheading}</p>
    </div>
  );
};