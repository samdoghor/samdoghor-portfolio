import React from "react";
import { HeroData } from "./Data";

const Hero = () => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-3 pt-12 min-h-full">
        <div className="w-full lg:order-2 place-self-center" data-aos="flip-up">
          <img
            className="rounded-full"
            alt="Samuel Doghor"
            src="public/img/doghs.jpg"
          />
        </div>
        <div className="w-full md:col-span-2 pt-8 md:pt-0" data-aos="fade-down">
          {HeroData.map((d) => (
            <span>
              <p className="text-primary-ylogo font-black text-4xl md:text-7xl md:overflow-hidden pb-2 md:pb-4 pt-8 md:pt-16">
                {d.name}
              </p>
              <p className="text-white font-black text-2xl md:text-6xl md:overflow-hidden pb-8 md:pb-12 tracking-widest">
                {d.stack}
              </p>
              <p className="text-primary-ylogo font-normal text-lg md:text-xl md:overflow-hidden pb-2 md:pb-4">
                {d.text}
              </p>
              <p className="text-slate-400 font-normal text-sm md:text-base md:overflow-hidden pb-4 md:pb-6 leading-relaxed">
                {d.code1}
              </p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
