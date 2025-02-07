import React from "react";

const FeaturesCard = ({ img, title, desc, imgOrder, textOrder }) => {
  return (
    <div className="relative cursor-hand flex flex-col md:flex-row md:w-[75vw] justify-between items-center mx-auto mb-[5%] md:mb-[0%]">
      <img
        className={`flex rounded-lg w-[45.05vw] h-[30.02vw] md:w-[32.56vw] md:h-[23.00vw] md:order-${imgOrder} object-cover mb-[3%] hover:scale-105 duration-500`}
        style={{
          boxShadow: "0px 0.5vw 2vw rgba(0, 0, 0, 0.5)",
          objectFit: "cover",
        }}
        src={img}
        alt=""
      />
      <div
        className={`md:order-${textOrder} flex flex-col justify-center  text-center md:text-left mb-[2%]`}
      >
        <h3 className="flex text-[4.45vw] mx-auto md:ml-0 md:text-[2.08vw] font-[600] text-01 w-[56.12vw] md:w-[28.34vw] md:mb-[2%]">
          {title}
        </h3>
        <p className="flex md:text-[1.39vw] text-[2.89vw] font-[400] w-[83.89vw] md:w-[37.70vw] text-02 ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
