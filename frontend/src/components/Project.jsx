import React from "react";
import { ProjectData, ProjectDData } from "./Data";

const Project = () => {
  return (
    <>
      <div className="w-full mt-28 lg:mt-44 min-h-full overflow-hidden">
        <div data-aos="flip-down">
          {ProjectData.map((d) => (
            <p className="text-primary-cylogo font-semibold text-6xl overflow-hidden leading-snug md:leading-normal">
              {d.text}
            </p>
          ))}
        </div>
        <div className="overflow-hidden drop-shadow-xl">
          {ProjectDData.map((d) => (
            <div
              className="w-full grid lg:grid-cols-2 pb-12"
              data-aos="zoom-out"
            >
              <div>
                <div>
                  <p className="text-primary-ylogo text-4xl font-semibold overflow-hidden pb-3 font-hubballi">
                    {d.title}
                  </p>
                  <p className="flex pb-3 items-center gap-6 text-white text-lg font-nova font-extralight">
                    <a href={d.github} className="flex items-center gap-1">
                      {d.githubi} <span> {d.labelg}</span>
                    </a>
                    <a href={d.website} className="flex items-center gap-1">
                      {d.websitei} <span> {d.labelw}</span>
                    </a>
                  </p>
                  <p className="pb-8 text-white text-xl leading-relaxed font-chakra font-light tracking-wide">
                    {d.description}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex place-content-center">
                  <img
                    className="flex w-full lg:w-4/6 h-3/6 rounded-[30px] mb-8 place-self-center border-t-d border-l-d border-primary-blogo"
                    alt="Samuel Doghor"
                    src={d.img}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
