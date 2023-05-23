import React from "react";
import { ContactData, contactSocialData } from "./Data";

const Contact = () => {
  return (
    <>
      <div
        className="w-full pt-28 lg:pt-44 min-h-full overflow-hidden"
        id="contact"
      >
        <div>
          <div data-aos="flip-down">
            {ContactData.map((d) => (
              <div>
                <p className="text-primary-cylogo font-semibold text-5xl md:text-6xl overflow-hidden leading-snug md:leading-normal">
                  {d.heading}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <div className="w-full grid lg:grid-cols-2">
              <div>
                <div>
                  {ContactData.map((d) => (
                    <div>
                      <p className="flex  text-primary-ylogo text-2xl align-middle gap-4">
                        {d.ticon} {d.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 grid-rows-2 mt-6">
                  {contactSocialData.map((d) => (
                    <div>
                      <a
                        className="flex text-lg text-white items-center gap-2 mt-6"
                        href={d.link}
                        key={d.id}
                        target="_blank"
                        data-aos="zoom-in"
                      >
                        {d.icon}
                        {d.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div>
                  {ContactData.map((d) => (
                    <div className="flex justify-center items-center gap-10 h-fit overflow-hidden pt-10 text-center">
                      <a
                        className="self-center  text-white font-semibold text-lg"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                      >
                        <img
                          className="w-32 mb-8 rounded-full"
                          alt="Samuel Doghor"
                          src={d.logo}
                        />
                        Manchester United
                      </a>
                      <a
                        className="self-center text-white font-semibold text-lg"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                      >
                        <img
                          className="w-32 mb-8 self-center rounded-full"
                          alt="Samuel Doghor"
                          src={d.image}
                        />
                        Marcus Rashford
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
