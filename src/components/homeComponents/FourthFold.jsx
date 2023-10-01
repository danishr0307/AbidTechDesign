import React from "react";
import CRMDashboardImg from "../../images/CRM-Dashboard-Images.svg";
import vectorArrowTH from "../../images/VectorArrowBlack.svg";

const FourthFold = () => {
  return (
    <div className="bg-[#D3EAE9]">
      <div className="mx-10">
        <div className=" py-10">
          <img className="imgWidth" src={CRMDashboardImg} alt="" />
        </div>
        <div className="text-primaryDarkGreen text-fiveTextHeading py-12">
          Elitebiz CRM- Set up a sales incentive program.
        </div>
        <div className="text-secondTextHeading">
          Create lasting customer relationships with the top premier CRM
          Software assign them to the concerned sales representatives depending
          on their area of expertise and ensure sales fulfilment within the
          committed time to the customer.
        </div>
        <div className="">
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
  );
};

export default FourthFold;
