import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Title from "./title";

// Dummy artist data
const artists = [
  {
    id: 1,
    name: "Jon Doe",
    profession: "Painter",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Emily Smith",
    profession: "Sculptor",
    location: "New York",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Carlos Rivera",
    profession: "Digital Artist",
    location: "Madrid",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sophia Wang",
    profession: "Illustrator",
    location: "Beijing",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const ArtistSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section id="engaged-artists" className="relative mt-[2%] cursor-hand">
      <Title bigText="Engaged Artists" smallText="Engaged Artists" />
      {/* <img
        className="absolute mt-[-30%] z-10 hidden md:flex"
        src="/images/leafs.png"
        alt=""
      /> */}
      <p className="md:w-[55vw] w-[83.89vw] md:text-[1.25vw] text-[3.34vw] mt-[2%] mx-auto text-center text-[#535454] font-[400]">
        Artists who share their work, engage with others, and participate in
        events create a strong, supportive community.{" "}
      </p>
      <div className="w-[85vw] z-20 mx-auto  relative mt-[2%]">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 3 }, // Show 3 cards on desktop
          }}
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keeps auto-slide working after user interaction
          }}
          loop={true}
          //   pagination={{ clickable: true }}
          navigation={false} // Disable default navigation
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {artists.map((artist) => (
            <SwiperSlide key={artist.id}>
              <div className=" p-[5%]  flex items-center md:space-x-[7%] justify-center space-x-[4%] hover:scale-105 duration-500">
                {/* Artist Image */}
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="md:w-[12.17vw] md:h-[12.17vw] w-[19.44vw] h-[19.44vw] rounded-full object-cover "
                />
                {/* Artist Info */}
                <div>
                  <h2 className="md:text-[1.74vw] text-[4.45vw] text-[#333333] font-bold">
                    {artist.name}
                  </h2>
                  <p className="md:text-[1.39vw] text-[3.34vw] text-[#535454]">
                    {artist.profession}
                  </p>
                  <p className="md:text-[1.39vw] text-[3.34vw] text-[#535454]">
                    {artist.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute w-[85vw] md:w-[7vw] mx-auto md:left-[48%] md:mt-[0%] mt-[-20%] z-30 flex md:space-x-2 justify-between">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className=" md:p-[8%] p-[2%] hover:scale-110 duration-500 bg-[#D8BFD8] text-white text-[5vw] md:text-[1.5vw] md:w-[2.82vw] md:h-[2.82vw] w-[8vw] h-[8vw]  rounded-full hover:bg-purple transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className=" md:p-[8%] p-[2%] hover:scale-110 duration-500 bg-[#D8BFD8] text-white text-[5vw] md:text-[1.5vw] md:w-[2.82vw] md:h-[2.82vw] w-[8vw] h-[8vw] rounded-full hover:bg-purple transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArtistSlider;
