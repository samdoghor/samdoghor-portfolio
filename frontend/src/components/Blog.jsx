import React from "react";
import { BlogData } from "./Data";

const Blog = () => {
  return (
    <>
      <div className="w-full mt-20 min-h-full overflow-hidden">
        <div data-aos="flip-down">
          {BlogData.map((d) => (
            <p className="text-white font-semibold text-6xl overflow-hidden leading-snug md:leading-normal">
              {d.text}
            </p>
          ))}
        </div>
        <div className="pt-10">
          {BlogData.map((d) => (
            <p className="text-white font-semibold text-4xl overflow-hidden leading-snug md:leading-normal font-ubuntu">
              {d.cs}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
