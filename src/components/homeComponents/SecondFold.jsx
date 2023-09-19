import React from "react";
import { data } from "../Data";
import videoSecondSection from "../../images/VIDEO.png";
function SecondFold() {
  let images = data.logoNameAndImages;
  // let videoSecondSection = data.logoNameAndImages
  return (
    <>
      <p className="text-fourHeading text-center mt-20 text-white flex justify-center items-center gap-6">
        <div className="bg-white opacity-50 w-32 h-1 bg-gradient-to-r from-black via-white to-black"></div>
        <div className="text-fourthTextHeading">WORKED FOR THE BEST</div>
        <div className="bg-white opacity-50 w-32 h-1 bg-gradient-to-l from-black via-white to-black"></div>
      </p>
      <section className="block mt-12">
        <div className="">
          <div className="animate-marquee whitespace-nowrap text-cyan-100 flex">
            {images.map((data) => {
              return (
                <span key={data.name} className="text-4xl mx-4">
                  <img src={data.image} alt={data.name} />
                </span>
              );
            })}
          </div>
        </div>
      </section>
      <div className="bg-[#032D29]">
        <div className="mx-10">
          <div className="text-fiveTextHeading text-white py-8">
            <span className="text-[#D3EAE9]">Fun & Experiments</span>, Shaping
            the product and services to improve better experience for users
          </div>
          <div className="text-thirdTextHeading text-white text-justify py-6">
            To hone my quick-fire prototyping skills, I designed and animated an
            app Consistently for 2 years.
          </div>
          <div className="h-80 pt-8">
            <div className="bg-[#FFF4D2] rounded-sm">
              <img className="pt-1 imgWidth" src={videoSecondSection} alt="videoData" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondFold;
