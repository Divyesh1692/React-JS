import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./Card";
import { useSubdomain } from "../context/SubdomainContext";

const Slider = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const { userData, loading, error } = useSubdomain();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  // ✅ Fetch Data When Component Mounts
  useEffect(() => {
    if (userData && userData.data && userData.data.user) {
      const artistInfo = userData.data.artistInfo;

      if (artistInfo) {
        // ✅ Structure the cards properly
        const formattedCards = [
          {
            id: 1,
            image: "/logos/moa.svg",
            title: "Media of Arts",
            content: artistInfo.media_of_arts.reduce((acc, item, index) => {
              acc[index + 1] = item;
              return acc;
            }, {}),
            color: "#FF5201",
          },
          {
            id: 2,
            image: "/logos/waoa.svg",
            title: "Work Area of Arts",
            content: artistInfo.work_area_of_arts.reduce((acc, item, index) => {
              acc[index + 1] = item;
              return acc;
            }, {}),
            color: "#006CA2",
          },
          {
            id: 3,
            image: "/logos/toa.svg",
            title: "Themes of Arts",
            content: artistInfo.themes_of_arts.reduce((acc, item, index) => {
              acc[index + 1] = item;
              return acc;
            }, {}),
            color: "#4B0082",
          },
        ];

        console.log("cards", formattedCards);

        setCards(formattedCards);
      }
    }
  }, [userData]); // ✅ Runs only when `userData` changes

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="w-[92vw] md:w-[69.45vw] mx-auto mt-[5%]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.7} // Slight overlap effect
        centeredSlides={true}
        
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
      >
        {console.log(cards.length)}
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <SwiperSlide key={card.id} className="w-[52vw] md:w-[23vw]">
              <Card
                card={card}
                index={index}
                expandedCard={expandedCard}
                toggleExpand={toggleExpand}
              />
            </SwiperSlide>
          ))
        ) : (
          <h2 className="text-center">No artist information available.</h2>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
