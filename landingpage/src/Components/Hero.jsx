import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: `${e.clientX}px`,
        
        y: `${e.clientY}px`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="cursor-hand mt-[4%] md:mt-[0%]">
      <div className="relative flex flex-col justify-center items-center ">
        <div
          className="absolute  inset-0 z-10 hidden md:block rounded-lg md:rounded-none pointer-events-none w-[90.84vw] h-[52.78vw] md:w-[100%] md:h-[36.46vw] mx-auto"
          style={{
            background: `radial-gradient(200px at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.72))`,
          }}
        ></div>

        {/* Logo */}
        <img
          className="w-[33.89vw] md:w-[13.96vw] hidden md:block absolute z-40 left-[3%] top-[1%] md:left-[1%] md:top-[2%] "
          src="/logos/logo.svg"
          alt=""
        />

        {/* Hero Image */}
        <img
          className="w-[90.84vw] h-[52.78vw] rounded-lg md:rounded-none md:w-[100vw] md:h-[36.46vw] object-cover mx-auto"
          src="/images/heroDesk.png"
          alt=""
        />
        <div className="absolute hidden md:flex  z-30 left-[2%] top-[58%] text-white">
          <p className="text-[1.2vw]  animate-pulseText">
            Don't hover on the Paintings
          </p>
        </div>

        {/* Black Overlay */}
        {/* <div className="absolute mx-auto rounded-lg md:rounded-none w-[90.84vw] h-[52.78vw] md:w-[100%] md:h-[36.46vw] inset-0 bg-black opacity-50"></div> */}

        {/* Leafs Image */}
        <img
          className="absolute w-[100vw] mt-[83.5%] ml-[0%] hidden md:flex"
          src="/images/leafs.png"
          alt=""
        />
        <h3 className="mt-[5%] text-01 text-[6vw] md:text-[3.125vw] font-poppins w-[78.89vw] md:w-[66.53vw] font-[600] mx-auto text-center">
          “Empowering Artist with a{" "}
          <span className="bg-gradient-to-r from-purple to-green bg-clip-text text-transparent">
            Digital Future
          </span>
          ”
        </h3>
        <p className="mt-[2%] text-[3.34vw] md:text-[1.39vw] text-center text-balance w-[88.89vw] md:w-[58.34vw] font-[500] font-poppins mb-[4%] md:mb-[2%]">
          Join the largest community of artists, gallery owners, designers, and
          art lovers. Showcase your talent, create a personal website,
          collaborate, and grow.
        </p>

        <Button
          mw="32.23vw"
          mh="9.73vw"
          dw="12.92vw"
          dh="3.125vw"
          content="Get Started"
          bg="purple"
          textColor="white"
          textSizeM="3.34vw"
          textSizeD="1.39vw"
          link="https://example.com"
        />
      </div>
    </section>
  );
};

export default Hero;
