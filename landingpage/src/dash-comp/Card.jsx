import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Card = ({ card, index, expandedCard, toggleExpand }) => {
  const isExpanded = expandedCard === index;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cardWidth = windowWidth > 768 ? "20.84vw" : "47.78vw"; // Desktop vs. Mobile

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Check if there is extra content to show
  const hasMoreContent = Object.values(card.content).length > 3;

  return (
    <motion.div
      className={`rounded-2xl h-[40vw] shadow-lg bg-white p-[8%] mx-[2%] mb-[10%]`}
      style={{
        backgroundImage: "url(/images/stars.svg)",
        minHeight: windowWidth > 768 ? "25vw" : "56vw",
        width: cardWidth,
        overflow: "hidden",
      }}
      animate={{ height: isExpanded ? "auto" : "auto" }} // Expands only from bottom
      transition={{ type: "spring", duration: 0.5 }}
    >
      <img
        className="w-[11.67vw] md:w-[7.28vw] mx-auto"
        src={card.image}
        alt=""
      />
      <h2 className="text-[4.45vw] md:text-[1.74vw] my-[5%] text-[#333333] font-bold text-center">
        {card.title}
      </h2>
      <div className="text-center text-[#535454] text-[3.89vw] md:text-[1.39vw]">
        {Object.values(card.content)
          .slice(0, 3) // Show first 3 items by default
          .map((item, index) => (
            <p key={index} className="my-[2%]">
              {item}
            </p>
          ))}
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center text-[#535454] text-[3.89vw] md:text-[1.39vw] mb-[20%] text-gray-600"
        >
          {Object.values(card.content)
            .slice(3) // Show remaining items when expanded
            .map((item, index) => (
              <p key={index} className="my-[2%]">
                {item}
              </p>
            ))}
        </motion.div>
      )}

      {/* ✅ Only show button if there are more than 3 items */}
      {hasMoreContent && (
        <button
          onClick={() => toggleExpand(index)}
          className={`fixed bottom-[12%] md:bottom-[15%] md:left-[32%] left-[30%] text-[3.89vw] md:text-[1.12vw] font-[500] flex justify-center mx-auto md:w-[7.57vw] text-[${card.color}]`}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </motion.div>
  );
};

export default Card;
