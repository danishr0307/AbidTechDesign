import React from "react";
import ThirdSectionImg from "../../images/ThirdSectionImg.svg";
import vectorArrowTH from "../../images/VectorArrowBlack.svg";
import ZPayImg from "../../images/ZPayImgesFull.svg";

const ThirdFold = () => {
  return (
    <div className="bg-white">
      <div className="mx-10">
        <div className="text-[#042825] text-fiveTextHeading py-12">
          Recent Work with good team on some projects that help mankind become a
          better version of itself.
        </div>
        <div className="text-secondTextHeading">
          I animated user flows and features created by our team's designers and
          myself and turned them into interactive prototypes to communicate our
          vision to the leadership team.Although the most of of the ideas were
          never implemented, having them all in one place set the stage for
          future Outlook mail.
        </div>
        <div className="">
          <div className="py-10">
            <img className="imgWidth" src={ThirdSectionImg} alt="" />
          </div>
          <div className="text-fiveTextHeading text-[#042825] py-4">
            Source Correct Saas
          </div>
          <div className="text-SixTextHeading py-4 text-[#042825]">
            Crisp Designing a new mobile experience for the all-in-one messaging
            platform.
          </div>
          <div className="pt-10">
            <span className="text-secondTextHeading font-semibold">
              <a href="" className=" inline-flex" target="_blank">
                <span className="border-b-2 border-[#000] text-sm">
                  View The Project
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
            <div className="text-fiveTextHeading text-[#042825] py-10">
              Z Pay
            </div>
            <div className="text-SixTextHeading text-[#042825]">
              Crisp Designing a new mobile experience for the all-in-one
              messaging platform.
            </div>

            <div className="py-16">
              <span className="text-secondTextHeading font-semibold">
                <a href="" className=" inline-flex" target="_blank">
                  <span className="border-b-2 border-[#000] text-sm">
                    View The Project
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
