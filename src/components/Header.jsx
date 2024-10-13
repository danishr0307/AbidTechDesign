import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Main-Logo.svg";
import { data } from "../components/Data";

const navData = data.pathAndName;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto">
        <div className="mx-10">
          <nav className="flex space-x-4 justify-between pt-16">
            <div className="">
              <img src={Logo} alt="" />
            </div>
            <ul className="md:flex justify-end text-2xl hidden">
              {navData.map((data, index) => {
                return (
                  <li key={index} className="px-10 py-2 pt-6 text-secondaryLightGrayWhite">
                    <Link to={data.link}>{data.name}</Link>
                  </li>
                );
              })}
              <button className="rounded-full ... bg-secondaryLightGrayWhite text-primaryDarkGreen px-10 font-semibold">
                Get in Touch
              </button>
            </ul>
            {/* ----------HumBurger Menu-------------- */}
            <div
              className="md:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              <div
                className={
                  isOpen
                    ? "-rotate-45 h-2 w-12 bg-secondaryLightGrayWhite"
                    : "h-2 w-12 bg-secondaryLightGrayWhite mt-2"
                }></div>
              <div
                className={
                  isOpen
                    ? "rotate-45 h-2 w-12 bg-secondaryLightGrayWhite"
                    : "h-2 w-12 bg-secondaryLightGrayWhite mt-2"
                }></div>
            </div>
          </nav>
          <div
            className={
              isOpen
                ? "list-none text-center bg-secondaryLightGrayWhite mt-2 absolute w-4/5"
                : "hidden"
            }>
            {navData.map((data, index) => {
              return (
                <li key={index} className="px-10 py-2 pt-6 text-primaryDarkGreen text-lg">
                  <Link to={data.link}>{data.name}</Link>
                </li>
              );
            })}
            <button className="rounded-full ... bg-primaryDarkGreen text-secondaryLightGrayWhite py-2 px-10 font-semibold mb-2">
              Get in Touch
            </button>
          </div>
        </div>

        {/* ----------HumBurger Menu-------------- */}
      </div>
    </>
  );
};

export default Header;
