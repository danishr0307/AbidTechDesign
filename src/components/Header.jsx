import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Main-Logo.svg";
import { data } from "../components/Data";

const navData = data.pathAndName;
const Header = () => {
  const [isopen, setIsopen] = useState(false);

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
                  <li key={index} className="px-10 py-2 pt-6 text-white">
                    <Link to={data.link}>{data.name}</Link>
                  </li>
                );
              })}
              <button className="rounded-full ... bg-white text-cyan-800 px-10 font-semibold">
                Get in Touch
              </button>
            </ul>
            {/* ----------HumBurger Menu-------------- */}
            <div
              className="md:hidden"
              onClick={() => {
                setIsopen(!isopen);
              }}>
              <div
                className={
                  isopen
                    ? "-rotate-45 h-2 w-12 bg-white"
                    : "h-2 w-12 bg-white mt-2"
                }></div>
              <div
                className={
                  isopen
                    ? "rotate-45 h-2 w-12 bg-white"
                    : "h-2 w-12 bg-white mt-2"
                }></div>
            </div>
          </nav>
          <div
            className={
              isopen
                ? "list-none text-center bg-white mt-2 absolute w-4/5"
                : "hidden"
            }>
            {navData.map((data, index) => {
              return (
                <li key={index} className="px-10 py-2 pt-6 text-black text-lg">
                  <Link to={data.link}>{data.name}</Link>
                </li>
              );
            })}
            <button className="rounded-full ... bg-slate-800 text-white py-2 px-10 font-semibold mb-2">
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
