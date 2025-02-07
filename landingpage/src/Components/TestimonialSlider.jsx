import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Title from "./title";

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    review: "Amazing platform! Helped me showcase my artwork.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    review: "A must-use for any artist looking to collaborate and grow!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    review: "The best community of artists I've ever been a part of.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    review: "Great support and features. My art sales increased significantly!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const TestimonialSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonial" className="relative mt-[5%] cursor-hand">
      <Title bigText="Testimonial" smallText="Testimonial" />
      <p className="md:w-[55vw] w-[83.89vw] md:text-[1.25vw] text-[3.34vw] mt-[2%] mx-auto text-center text-[#535454] font-[400]">
        Real stories, real impact—see what our happy users have to say! Hear how
        our platform has helped them grow, connect, and achieve their goals.{" "}
      </p>
      <div className="relative w-[92vw] mx-auto my-[0%]">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={10} // Small gap for mobile
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 20 }, // More gap on desktop to avoid overlap
          }}
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keeps auto-slide working after user interaction
          }}
          centeredSlides={true} // Ensures middle slide is always centered
          grabCursor={true}
          //   pagination={{ clickable: true }}
          navigation={false} // Hide default Swiper arrows
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className={`bg-white p-[10%] my-[10%] md:mb-[10%] mx-auto w-[76.67vw] md:w-[26.39vw] drop-shadow rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300  ${
                  index === activeIndex
                    ? "scale-[115%]"
                    : "scale-100 opacity-70"
                }`}
              >
                {/* User Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[11.12vw] h-[11.12vw] md:w-[5vw] md:h-[5vw] rounded-full object-cover mb-[3%]"
                />
                {/* User Review */}
                <p className="text-01 text-[3.34vw] md:text-[1.25vw] text-center mb-[3%]">
                  "{testimonial.review}"
                </p>
                {/* User Name */}
                <h2 className="text-[3.89vw] md:text-[1.39vw] font-semibold">
                  {testimonial.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute w-[90vw] hidden md:flex md:w-[7vw] mx-auto md:left-[46.5%] md:mt-[0%] mt-[-25%] z-30 justify-between">
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

export default TestimonialSlider;
