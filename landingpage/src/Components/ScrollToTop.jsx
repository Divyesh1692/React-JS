import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-scroll";

const ScrollToTop = ({ link }) => {
  return (
    <div className="hover:cursor-pointer ">
      <Link to={link} smooth={true} duration={500} >
        <MdKeyboardDoubleArrowUp className="md:text-[2vw] text-[7vw] text-[#4B0082]" />
      </Link>
    </div>
  );
};

export default ScrollToTop;
