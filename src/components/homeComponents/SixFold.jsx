import React from "react";
import ThirdSectionImg from "../../images/DesignTools.svg";

const SixFold = () => {
  return (
    <>
      <div className="bg-primaryWhite">
        <div className="mx-10 py-8">
          <div className="text-fiveTextHeading text-center font-semibold">
            Efficiently centralize my global project idea management using these
            indispensable tools
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
