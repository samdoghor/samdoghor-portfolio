import React from "react";
import { TestimoniesData } from "./Data";

const Testimonies = () => {
  return (
    <>
      <div>
        {TestimoniesData.map((d) => (
          <div> {d.id} </div>
        ))}
      </div>
    </>
  );
};

export default Testimonies;
