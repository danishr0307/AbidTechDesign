import React from "react";
import { data } from "../Data";
import vectorArrow from "../../images/Vector-arrow.png";
import ElementIcon from "../../images/ELEMENTS-ARROW-ICON.svg";

const images = data.logoNameAndImages;
const FirstFold = () => {
  return (
    <>
      <section className="mx-10">
        <div className="text-white text-start text-lg pt-4 MarginTextAuto">
          <div className="flex justify-end">
            <span className="">
              <img src={ElementIcon} alt="" />
            </span>
          </div>
          <div className="text-firstTextHeading leading-height">
            <h2 className="pt-10">
              I'm Abid, a Product Designer at &nbsp;
              <span className="text-[#008F7C] font-bold ">
                Delivery Solution.
              </span>
              &nbsp;I enjoy creating User-centric, delightful, and human
              experiences.
            </h2>
            <div className="pt-6">
              <span className="text-secondTextHeading">
                Previously at Mintifi & Insomniacs
              </span>
            </div>
            <div className="pt-10">
              <span className="text-secondTextHeading font-semibold">
                <a href="" className=" inline-flex" target="_blank">
                  <span className="border-b-2 border-[#fff] text-sm">
                    Get My Resume
                  </span>
                  <span className="ml-5 pt-2">
                    <img
                      className="arrowIcon h-8 w-8"
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

   
    </>
  );
};

export default FirstFold;
