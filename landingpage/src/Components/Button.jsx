import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({
  mw,
  mh,
  dw,
  dh,
  content,
  bg,
  textColor,
  textSizeM,
  link,
  textSizeD,
}) => {
  return (
    <a
      className={`relative flex  justify-center items-center text-[${textColor}]  font-[400] bg-${bg} rounded-tl-2xl rounded-br-2xl  w-[${mw}] h-[${mh}] md:w-[${dw}] md:h-[${dh}] hover:scale-105 duration-300`}
      href={link}
    >
      <p
        className={`font-poppins mr-[5%] md:mr-[5%] text-[${textSizeM}] md:text-[${textSizeD}]`}
      >
        {content}
      </p>
      <GoArrowRight className="text-[5vw] md:text-[1.5vw]" />
    </a>
  );
};

export default Button;
