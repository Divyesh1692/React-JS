import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import ArtistSlider from "./Components/ArtistSlider";
import TestimonialSlider from "./Components/TestimonialSlider";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import MobileMenu from "./Components/MobileMenu";
import ScrollToTop from "./Components/ScrollToTop";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        window.scrollY / document.documentElement.scrollHeight;
      if (scrollPercentage > 0.14) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="home" className="cursor-hand relative">
      <MobileMenu />
      <div
        className={`w-full absolute justify-center z-40  ${
          isScrolled ? "sticky top-1  " : "mt-[35.5%]"
        }`}
      >
        <div className="fixed bottom-[5%] right-[3%] hover:cursor-pointer z-30 w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] border-[0.2vw] border-[#4B0082] rounded-full flex items-center justify-center bg-white">
          <ScrollToTop link="home" />
        </div>

        <Navbar />
      </div>
      <Hero />
      <Features />
      <ArtistSlider />
      <TestimonialSlider />
      <Footer />
    </section>
  );
};

export default Home;
