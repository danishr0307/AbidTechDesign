import React, { useState } from "react";
import Images from "./Images&Logo/Main-Logo.svg";

const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <nav className="flex justify-end space-x-4 mx-24">
          <div className="">
            <img src="./Images&Logo/Main-Logo.svg" alt="" />
          </div>
          <a href="/Home" className="font- px-3 py-2 text-white">
            Home
          </a>
          <a href="/About" className="font- px-3 py-2 text-white">
            About Me
          </a>
          <a href="/Insight" className="font- px-3 py-2 text-white">
            Insight
          </a>
          <a href="/Work" className="font- px-3 py-2 text-white">
            Work
          </a>
          <a href="/Contact" className="font- px-3 py-2 text-white">
            Contact Us
          </a>
          <button className="rounded-full ... bg-white text-cyan-800 px-3 font-semibold">
            Lets Connect
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
