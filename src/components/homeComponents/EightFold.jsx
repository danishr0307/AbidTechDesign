import React from "react";
import UIDesignImages from "../../images/UI-Design-Images.svg";
import DesignProcessImages from "../../images/Design-Process-Images.svg";
import ClockIcons from "../../images/clock-icon.svg";
import LinkedInIcon from "../../images/LinkedIn-Icon.svg";
import InstagramIcon from "../../images/Instagram-Icon.svg";
import DribbleIcon from "../../images/Dribble-Icon.svg";

const EightFold = () => {
  return (
    <>
      <div className="bg-primaryWhite">
        <div className="mx-10">
          <div className="text-fiveTextHeading py-6">
            Exploring the Nexus of Design and Research: Unveiling Experiment
            Insights and Stories
          </div>
          <div className="text-SixTextHeading py-4">
            A collection of random experiments and snippets of my work.
          </div>
          <div className="py-6">
            <div className="bg-[#F4F4F4] rounded-xl">
              <div className="">
                <img className="imgWidth" src={UIDesignImages} alt="" />
              </div>
              <div className="text-secondTextHeading mx-5 py-8">
                What is UI Design?
              </div>
              <div className="flex gap-3 mx-5 pb-6">
                <div className="">
                  <img src={ClockIcons} alt="" />
                </div>
                <div className="text-[#A8A8A8]">8 Min Read</div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="bg-[#F4F4F4] rounded-xl">
              <div className="">
                <img className="imgWidth" src={DesignProcessImages} alt="" />
              </div>
              <div className="text-secondTextHeading mx-5 py-8">
                What is UI Design?
              </div>
              <div className="flex gap-3 mx-5 pb-6">
                <div className="">
                  <img src={ClockIcons} alt="" />
                </div>
                <div className="text-[#A8A8A8]">8 Min Read</div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div className="text-center">
            <div className="text-fiveTextHeading py-4 font-semibold">
              Lets Connect
            </div>
            <div className="text-secondTextHeading py-4">
              Don't hesitate to connect with me for potential collaborations or
              simply to exchange a friendly 😊
            </div>
            <div className="text-SixTextHeading text-[#008F7C] py-4">
              abidtechdesign.in
            </div>

            <div className="flex justify-center gap-8 py-10">
              <div className="">
                <img
                  className="socialMediaIcon LinkedInIconHover"
                  src={LinkedInIcon}
                  alt=""
                />
              </div>
              <div className="">
                <img className="socialMediaIcon" src={InstagramIcon} alt="" />
              </div>
              <div className="">
                <a
                  href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_image"
                  target="-blank">
                  <img className="socialMediaIcon" src={DribbleIcon} alt="" />
                </a>
              </div>
            </div>
            <div className="text-center text-[#A8A8A8] text-SixTextHeading py-16">
              © 2023 abidtechdesign. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EightFold;
