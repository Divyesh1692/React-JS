import React from "react";

const Achievement = ({ img, title, date, desc }) => {
  // ✅ Convert & Format the Date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative bg-white flex flex-col w-[61.67vw] md:w-[29.52vw] mx-auto items-center space-y-[4%] p-[2%]">
      <div className="bg-gradient-to-b from-[#FF0000] via-[#F4F4F4] via-[#F5F5F5] to-[#DAA520] p-[2%]">
        <img
          src={`https://admin.artpallatte.com/${img}`}
          alt={title}
          className="w-[45vw] h-[45vw] md:w-[22vw] md:h-[22vw] object-cover"
        />
      </div>

      <h2 className="text-[5vw] md:text-[1.53vw] font-semibold">{title}</h2>
      <p className="font-[400] text-[3.34vw] md:text-[1.25vw] text-[#FFB600]">
        {formattedDate}
      </p>
      <p className="text-[3.89vw] md:text-[1.25vw] mt-[5%] md:mt-[2%] w-[88.34vw] md:w-[75vw] text-[#535454] font-[600] text-center">
        {desc}
      </p>
    </div>
  );
};

export default Achievement;
