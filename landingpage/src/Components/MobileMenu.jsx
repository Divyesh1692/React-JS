import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b border-[#D8BFD8]  flex z-50 sticky top-0 md:hidden">
      {/* Navbar Container */}
      <div className="flex  bg-white w-[100vw]  p-[3%] items-center justify-between">
        <img
          onClick={() => setIsOpen(!isOpen)}
          className="w-[39.70vw] z-20 left-[3%]  hover:cursor-pointer"
          src="/logos/mobileLogo.svg"
          alt=""
        />
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[7vw] text-black focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col  pt-[40%]  transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[2%] right-[3%] text-[7vw]"
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        <div className="relative flex text-[6vw] space-y-[7%] justify-center items-center pl-[0%] text-black flex-col font-poppins mb-[1%] md:pt-[5%]">
          {/* <h3 className="text-[3.89vw] md:text-[1.25vw] uppercase text-white font-[500] mb-[2%] md:mb-[5%] ">
            Quick Links
          </h3> */}

          <Link
            onClick={() => setIsOpen(false)}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="features"
            smooth={true}
            duration={500}
          >
            Features Of Platform
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="engaged-artists"
            smooth={true}
            duration={500}
          >
            Engaged Artists
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="testimonial"
            smooth={true}
            duration={500}
          >
            Testimonial
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="footer"
            smooth={true}
            duration={500}
            className="text-[6vw] md:text-[0.98vw] mb-[1%] md:mb-[10%] hover:text-white duration-300 hover:cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <img
          className="absolute w-[100vw] opacity-[10%] pt-[40%] pointer-events-none"
          src="/images/paintTray.svg"
          alt=""
        />
      </div>
    </nav>
  );
};

export default MobileMenu;
