import React from "react";

const Title = ({ bigText, smallText }) => {
  return (
    <div className="relative flex flex-col items-center cursor-hand">
      {/* Large Transparent Text with Border */}
      <h1
        className=" text-[9vw] md:text-[6.95vw]  font-bold capitalize opacity-10 text-transparent"
        style={{
          WebkitTextStroke: "1px #000", // Black stroke
        }}
      >
        {bigText}
      </h1>

      {/* Smaller Normal Text */}
      <p className="text-[5.5vw]  md:text-[3.47vw] absolute mt-[3%] md:mt-[3%] font-[600] text-[#22035F] capitalize">
        {smallText}
      </p>
    </div>
  );
};

export default Title;
