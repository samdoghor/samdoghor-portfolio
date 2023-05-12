import React from "react";
import { ContactData, contactSocialData } from "./Data";

const Contact = () => {
  return (
    <>
      <div className="w-full mt-28 min-h-full overflow-hidden">
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
            <div className="w-full grid lg:grid-cols-3">
              <div className="lg:order-2 md:col-span-2"> </div>
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
        </div>
      </div>
    </>
  );
};

export default Contact;
