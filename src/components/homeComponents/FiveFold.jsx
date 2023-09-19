import React from "react";
import LiveTrackingImg from "../../images/Live-Tracking-Images.svg"

const FiveFold = () => {
  return (
    <>
      <div className="bg-[#042825]">
        <div className="mx-10 my-10 bg-white">
          <div className="mx-6 pt-8">
            <div className="text-fiveTextHeading">
              Natural Language Filters Tags
            </div>
            <div className="text-SixTextHeading">
              It’s quick and easy to find just what you’re looking for in Maps.
            </div>
            <div className="py-10">
              <img className="imgWidth" src={LiveTrackingImg} alt="LiveTra" />
            </div>
          </div>
        </div>
        <div className="mx-10 my-10 bg-[#FFF4D2]">
          <div className="mx-6 pt-8">
            <div className="text-fiveTextHeading">
              Natural Language Filters Tags
            </div>
            <div className="text-SixTextHeading">
              It’s quick and easy to find just what you’re looking for in Maps.
            </div>
            <div className="py-10">
              <img className="imgWidth" src={LiveTrackingImg} alt="LiveTra" />
            </div>
          </div>
        </div>
        <div className="mx-10 my-10 bg-[#FEE]">
          <div className="mx-6 pt-8">
            <div className="text-fiveTextHeading">
              Natural Language Filters Tags
            </div>
            <div className="text-SixTextHeading">
              It’s quick and easy to find just what you’re looking for in Maps.
            </div>
            <div className="py-10">
              <img className="imgWidth" src={LiveTrackingImg} alt="LiveTra" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveFold;
