import React from "react";
import CRMDashboardImg from "../../images/CRM-Dashboard-Images.svg";
import vectorArrowTH from "../../images/VectorArrowBlack.svg";

const FourthFold = () => {
  return (
    <div className="bg-[#D3EAE9]">
      <div className="mx-10">
        <div className=" py-10">
          <img src={CRMDashboardImg} alt="" />
        </div>
        <div className="text-[#042825] text-fiveTextHeading py-12">
          Set up a sales incentive Program. Elitebiz CRM
        </div>
        <div className="text-secondTextHeading">
          MacOS Ventura was designed to maximize the capabilities of Apple
          silicon. So your go-to pro apps run faster, and multitasking is
          smoother than ever. With over 15,000 optimized apps and plug‑ins
        </div>
        <div className="">
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
  );
};

export default FourthFold;
