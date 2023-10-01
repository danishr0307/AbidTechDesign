import React from "react";
import BubbleImagesFirst from "../../images/Bubble-Images1.png";
import BubbleImagesSecond from "../../images/Bubble-Images2.png";
import BubbleImagesThird from "../../images/Bubble-Images3.png";
import "./SevenFold.css";
const SevenFold = () => {
  return (
    <>
      <div className="bg-[#F1FEFF]">
        <div className="mx-10 py-16">
          <div className="text-fiveTextHeading font-semibold mb-6 text-center">
            Endorsement
          </div>
          <div className="text-thirdTextHeading text-center">
            What People say about working with me
          </div>
          <div className="py-8">
            <div className="pr-4">
              <img src={BubbleImagesFirst} alt="" />
            </div>
            <div className="pl-4 mt-5">
              <img src={BubbleImagesSecond} alt="" />
            </div>
            <div className="pr-4">
              <img src={BubbleImagesThird} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SevenFold;
