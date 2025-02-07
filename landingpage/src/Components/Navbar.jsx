import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <section>
      <div className="w-[40vw] mx-auto hidden md:flex bg-white drop-shadow-lg backdrop-blur-lg rounded-full px-[2%] py-[0.5%] space-x-[5%] font-poppins shadow-2xl">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="relative text-[cgray] text-[1.12vw] font-[500] cursor-pointer hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
        >
          Home
        </Link>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="relative text-[cgray] text-[1.12vw] font-[500] cursor-pointer hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
        >
          Features Of Platform
        </Link>
        <Link
          to="engaged-artists"
          smooth={true}
          duration={500}
          className="relative text-[cgray] text-[1.12vw] font-[500] cursor-pointer hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
        >
          Engaged Artists
        </Link>
        <Link
          to="testimonial"
          smooth={true}
          duration={500}
          className="relative text-[cgray] text-[1.12vw] font-[500] cursor-pointer hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
        >
          Testimonial
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
