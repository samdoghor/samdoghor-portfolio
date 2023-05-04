import React from "react";
import { ServiceData, headerSocialData } from "./Data";

const Service = () => {
  return (
    <>
      <div className="w-full grid md:grid-cols-3 mt-12 md:mt-28">
        <div className="col-span-2">
          <p className="flex">
            {ServiceData.map((d) => (
              <span>
                <img
                  className="rounded-full w-14"
                  alt="Samuel Doghor"
                  src="src/assets/images/doghs.jpg"
                />
                <span> {d.service2} </span>
              </span>
            ))}
          </p>
        </div>
        <div className="w-full">
          <p className="overflow-hidden pb-12">
            {ServiceData.map((d) => (
              <span className="text-xl md:text-2xl text-white leading-loose">
                {d.service}
              </span>
            ))}
          </p>
          <p className="flex gap-5">
            {headerSocialData.map((d) => (
              <span>
                <a
                  className="text-lg text-primary-logo"
                  href={d.link}
                  key={d.id}
                >
                  {d.label}
                  {d.icon}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
