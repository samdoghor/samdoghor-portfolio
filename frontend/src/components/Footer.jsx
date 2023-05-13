import React from "react";
import { FooterData } from "./Data";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-28 mb-5 min-h-full overflow-hidden border-t-2 border-primary-blogo pt-4">
        <div>
          {FooterData.map((d) => (
            <div>
              <div className="text-white text-center text-lg">
                {d.copyright} {d.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
