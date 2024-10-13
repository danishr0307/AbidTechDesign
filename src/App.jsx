import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
//  import abidVideo from "./images/abidvide.mp4";
import CloseIcon from "./images/CLoseIcon.svg";
import FullWidthIcon from "./images/fullWidthIcon.svg";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [heightInc, setHeightInc] = useState(false);
  const checkStatus = () => {
    setIsOpen(!isOpen);
    setHeightInc(false);
  };
  return (
    <>
      <div className="mx-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <section className={isOpen ? "sticky" : "hidden"}>
          <div className=" fixed bottom-2 right-4">
            <button className="closeIcon" onClick={checkStatus}>
              <img
                className="closeIConSize h-10 w-12"
                src={CloseIcon}
                alt="CloseIcon"
              />
            </button>
            <video
              autoPlay
              muted={!heightInc}
              className={heightInc ? "videoHeightInc" : "videoFix"}>
              <source
                className=""
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                type="video/mp4"
              />
            </video>
            <button
              className="fullWidthIcon"
              onClick={() => setHeightInc(true)}>
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
