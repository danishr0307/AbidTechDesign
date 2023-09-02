import React from "react";
import { data } from "../Data";
import vectorArrow from "../../images/Vector-arrow.png";
import ElementIcon from "../../images/ELEMENTS-ARROW-ICON.svg";

const images = data.logoNameAndImages;
const FirstFold = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="text-white text-start text-lg pt-12 MarginTextAuto">
          <div className="mx-auto">
            <span className="">
              <img src={ElementIcon} alt="" />
            </span>
          </div>
          <div className="text-firstTextHeading leading-height">
            <h2 className="pt-10">
              I'm Abid, a Product Designer at &nbsp;
              <span className="textColorGreen font-bold ">
                Delivery Solution.
              </span>
              &nbsp;I enjoy creating User-centric, delightful, and human
              experiences.
            </h2>
            <div className="pt-10">
              <span className="text-secondTextHeading">
                Previously at Mintifi & Insomniacs
              </span>
            </div>
            <div className="pt-10">
              <span className="text-thirdTextHeading font-semibold">
                <a href="" className=" inline-flex" target="_blank">
                  <span className="border-b-2 border-green-200 text-sm">
                    Get My Resume
                  </span>
                  <span className="ml-5 pt-2">
                    <img
                      className="arrowIcon h-4 w-8"
                      src={vectorArrow}
                      alt=""
                    />
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="block mt-32">
        <div className="">
          <div className="animate-marquee whitespace-nowrap text-cyan-100 flex">
            {images.map((data) => {
              return (
                <span key={data.name} className="text-4xl mx-4">
                  <img src={data.image} alt={data.name} />
                </span>
              );
            })}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default FirstFold;
