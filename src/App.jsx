import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import abidVideo from "./images/abidvide.mp4";
import CloseIcon from "./images/CLoseIcon.svg";
import FullWidthIcon from "./images/fullWidthIcon.svg";

function App() {
  return (
    <>
      <div className="mx-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <section className="">
          <div className="absolute bottom-8 right-8">
            <button className="closeIcon">
              <img
                className="closeIConSize h-14 w-18"
                src={CloseIcon}
                alt="CloseIcon"
              />
            </button>
            <video autoPlay muted className="videoFix">
              <source className="" src={abidVideo} type="video/mp4" />
            </video>
            <button className="fullWidthIcon">
              <img
                className="widthIconSize h-10 w-8"
                src={FullWidthIcon}
                alt="FullWidthIcon"
              />
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
