import React from "react";
import { ServiceData, headerSocialData } from "./Data";

const Service = () => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-3 mt-40 md:mt-44 min-h-full">
        <div className="col-span-2" data-aos="fade-right">
          <div>
            {ServiceData.map((d) => (
              <div>
                <p className="flex pb-4 items-center">
                  <img
                    className="rounded-full w-28 hidden md:block"
                    alt="Samuel Doghor"
                    src="/assets/images/doghs.jpg"
                  />
                  <span className="text-white items-center text-5xl md:text-7xl font-bold overflow-hidden ps-4 leading-snug md:leading-relaxed tracking-widest">
                    {d.service2}
                  </span>
                </p>
                <p className="text-primary-ylogo items-center text-6xl md:text-8xl font-bold overflow-hidden ps-4 tracking-widest">
                  {d.service3}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-14 md:mt-10" data-aos="fade-left">
          <div>
            <div>
              {ServiceData.map((d) => (
                <p className="text-xl md:text-2xl text-white leading-loose">
                  {d.service}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 grid-rows-2 mt-6">
              {headerSocialData.map((d) => (
                <div>
                  <a
                    className="flex text-lg text-primary-logo items-center gap-2 mt-6"
                    href={d.link}
                    key={d.id}
                    target="_blank"
                  >
                    {d.icon}
                    {d.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
