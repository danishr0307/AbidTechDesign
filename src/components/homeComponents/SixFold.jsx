import React from "react";
import ThirdSectionImg from "../../images/ThirdSectionImg.svg";

const SixFold = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-10 py-8">
          <div className="text-fiveTextHeading">
            The tools i work with to bring together all my Projects Ideas
            Globally
          </div>
          <div className="py-16">
            <img className="imgWidth" src={ThirdSectionImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SixFold;
