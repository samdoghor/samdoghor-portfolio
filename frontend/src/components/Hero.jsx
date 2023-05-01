import React from "react";
import { HeroData } from "./Data";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-[url('')] bg-cover bg-no-repeat">
        <div className="flex flex-row">
          <div className="grid grid-cols-2">
            <div className="w-[100%] pt-32">
              {HeroData.map((d) => (
                <span>
                  <p className="text-4xl text-white font-extrabold tracking-widest py-2 font-mono">
                    {d.greet}
                  </p>
                  <p className="text-lg text-white font-normal tracking-widest py-2 font-serif">
                    {d.txt1}
                  </p>
                  <p className="text-4xl text-primary-logo font-extrabold tracking-widest py-2 font-mono">
                    {d.name.toUpperCase()}
                  </p>
                  <p className="text-lg text-white font-normal tracking-widest py-2 font-serif">
                    {d.txt2}
                    <span className=" text-primary-ylogo"> {d.stack} </span>
                    {d.txt3}
                  </p>
                  <p className="pt-8 text-xs text-white font-normal tracking-widest py-3 font-mono">
                    {d.code1}
                  </p>
                </span>
              ))}
            </div>
            <div className="w-[100%] bg-[url('src/assets/img/samueldoghor.png')] bg-cover bg-no-repeat h-screen"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
