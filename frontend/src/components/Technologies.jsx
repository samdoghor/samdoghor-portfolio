import React from "react";
import { TechnologiesData, TechnologiesDData } from "./Data";

const Technologies = () => {
  return (
    <>
      <div
        className="w-full pt-28 lg:pt-32 min-h-full overflow-hidden border-t-2 border-primary-bnlogo mt-28"
        id="stack"
      >
        <div data-aos="flip-down">
          {TechnologiesData.map((d) => (
            <div>
              <p className="text-primary-cylogo font-semibold text-5xl md:text-6xl overflow-hidden leading-snug md:leading-normal">
                {d.heading}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full mt-10">
          <div
            data-aos="fade-right"
            className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3"
          >
            {TechnologiesDData.map((d) => (
              <div className="overflow-hidden rounded-2xl drop-shadow-md hover:animate-pulse hover:cursor-pointer">
                <div key={d.id}>
                  <div className="grid text-4xl text-white font-nova tracking-wider overflow-hidden font-bold p-2 justify-items-center">
                    <span className="text-center"> {d.icon} </span>
                  </div>
                  <div className="p-2 rounded-full text-primary-ylogo font-ubuntu font-bold tracking-wide text-center">
                    {d.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
