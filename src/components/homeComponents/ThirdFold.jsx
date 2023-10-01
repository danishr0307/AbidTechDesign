import React from "react";
import ThirdSectionImg from "../../images/ThirdSectionImg.svg";
import vectorArrowTH from "../../images/VectorArrowBlack.svg";
import ZPayImg from "../../images/ZPayImgesFull.svg";

const ThirdFold = () => {
  return (
    <div className="bg-primaryWhite">
      <div className="mx-10">
        <div className="text-primaryDarkGreen text-SevenTextHeading py-12">
          Engaged in impactful projects with a skilled team, dedicated to
          empowering humanity's evolution.
        </div>
        <div className="text-primaryDarkGreen text-secondTextHeading">
          I developed interactive prototypes to present my vision to the
          leadership team. While not all ideas were implemented, these
          prototypes encompassed various design variations that may find utility
          in future feature projects."
        </div>
        <div className="">
          <div className="py-10">
            <img className="imgWidth" src={ThirdSectionImg} alt="" />
          </div>
          <div className="text-fiveTextHeading text-primaryDarkGreen  py-4">
            Source Correct - Saas
          </div>
          <div className="text-thirdTextHeading py-4 text-primaryDarkGreen">
            Our mission is to get Empower Amazon sellers with exceptional deals
            on essential tools for success."
          </div>
          <div className="pt-10">
            <span className="text-secondTextHeading font-semibold">
              <a href="" className=" inline-flex" target="_blank">
                <span className="border-b-2 border-[#000] text-sm">
                  Explore the Projects
                </span>
                <span className="ml-5 pt-2">
                  <img
                    className="arrowIcon h-8 w-8"
                    src={vectorArrowTH}
                    alt=""
                  />
                </span>
              </a>
            </span>
          </div>
          <div className="pt-10">
            <div className="bg-[#FF154F]">
              <div className="pt-5">
                <img className="imgWidth" src={ZPayImg} alt="" />
              </div>
            </div>
            <div className="text-fiveTextHeading text-primaryDarkGreen py-10">
              Z-Pay - Fintech
            </div>
            <div className="text-thirdTextHeading text-primaryDarkGreen">
              Parental Financial App Management Monitoring and Analyzing Kids'
              Spending
            </div>

            <div className="py-16">
              <span className="text-secondTextHeading font-semibold">
                <a href="" className=" inline-flex" target="_blank">
                  <span className="border-b-2 border-[#000] text-sm">
                    Explore the Projects
                  </span>
                  <span className="ml-5 pt-2">
                    <img
                      className="arrowIcon h-8 w-8"
                      src={vectorArrowTH}
                      alt=""
                    />
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdFold;
