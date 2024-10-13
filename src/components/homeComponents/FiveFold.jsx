import React from "react";
import LiveTrackingImg from "../../images/Live-Tracking-Images.svg";
import TrackingLive from "../../images/LiveTrackingCLip.svg";

const FiveFold = () => {
  return (
    <>
      <div className="bg-[#042825]">
        <div className="mx-10 my-10 bg-secondaryLightGray2 rounded-lg">
          <div className="mx-6 pt-8">
            <div className="py-10">
              <img className="imgWidth" src={TrackingLive} alt="LiveTra" />
            </div>
            <div className="text-fiveTextHeading">
              One-tap Natural Filter Interaction
            </div>
            <div className="text-SixTextHeading py-5 pb-10">
              It’s quick and easy to find just what you’re looking for in Maps.
            </div>
          </div>
        </div>
        <div className="mx-10 my-10 bg-[#FFF4D2] rounded-lg">
          <div className="mx-6 pt-8">
            <div className="py-10">
              <img className="imgWidth" src={LiveTrackingImg} alt="LiveTra" />
            </div>
            <div className="text-fiveTextHeading">Ultra-targeted Filters</div>
            <div className="text-SixTextHeading py-5 pb-10">
              Use ultra-targeted filters to search for restaurants by cuisine,
              price range, and whether they offer takeout.
            </div>
          </div>
        </div>
        <div className="mx-10 my-10 bg-[#FEE] rounded-lg">
          <div className="mx-6 pt-8">
            <div className="py-10">
              <img className="imgWidth" src={LiveTrackingImg} alt="LiveTra" />
            </div>
            <div className="text-fiveTextHeading">
              Matching Some of Your Filters
            </div>
            <div className="text-SixTextHeading py-5 pb-10">
              Sometimes you might not be able to get what you want, so we also
              suggest partial matches.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveFold;
