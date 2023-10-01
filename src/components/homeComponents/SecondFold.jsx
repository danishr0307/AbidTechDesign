import React from "react";
import videoSecondSection from "../../images/VIDEO.png";
import MarqueeOne from "./MarqueeOne";
function SecondFold() {
  // let videoSecondSection = data.logoNameAndImages
  return (
    <>
      <p className="text-fourHeading text-center mt-20 flex justify-center items-center gap-6">
        <div className="bg-white opacity-50 w-32 h-1 bg-gradient-to-r from-black via-white to-black"></div>
        <div className="text-fourthTextHeading text-secondaryLightYellow">
          WORKED FOR THE BEST
        </div>
        <div className="bg-white opacity-50 w-32 h-1 bg-gradient-to-l from-black via-white to-black"></div>
      </p>
      <section className="block mt-12">
        <div className="flex relative  overflow-x-hidden">
          <MarqueeOne />
        </div>
        {/* <div className="md:flex relative md:visible hidden">
          <MarqueeOne />
        </div> */}
      </section>
      <div className="bg-[#032D29]">
        <div className="mx-10">
          <div className="text-fiveTextHeading py-8 text-secondaryLightGrayWhite">
            Fun & innovative experimentation enhancing Products and Services to
            provide a superior user experience.
          </div>
          <div className="text-thirdTextHeading py-6 text-secondaryLightGrayWhite">
            To hone my quick-fire prototyping skills, I designed and animated an
            app Consistently for 2 years.
          </div>
          <div className="h-80 pt-8">
            <div className="bg-[#FFF4D2] rounded-sm">
              <img
                className="pt-1 imgWidth"
                src={videoSecondSection}
                alt="videoData"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondFold;
