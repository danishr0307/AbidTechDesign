import React from "react";
import { data } from "../Data";
const MarqueeOne = () => {
  let images = data.logoNameAndImages;
  return (
    <>
      <div className="animate-marquee text-cyan-100 flex justify-evenly py-16">
        {images.map((data, index) => {
          return (
            <span
              key={data.name}
              className={
                index < 2
                  ? `block md:block text-4xl mx-4`
                  : `md:block hidden text-4xl mx-4`
              }>
              <img src={data.image} alt={data.name} />
            </span>
          );
        })}
      </div>
      <div className="animate-marquee2 flex absolute whitespace-nowrap justify-evenly align-middle py-16">
        {images.map((data, index) => {
          return (
            <span
              key={data.name}
              className={
                index < 2
                  ? `block md:block text-4xl mx-4`
                  : `md:block hidden  text-4xl mx-4`
              }>
              <img src={data.image} alt={data.name} />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default MarqueeOne;
