// Home.js or the main component of your homepage

import React, { useEffect, useState } from "react";
import HeroSection from "./dash-comp/HeroSection";
import About from "./dash-comp/About";
import Expertise from "./dash-comp/Expertise";
import Achievements from "./dash-comp/Achievements";
import ArtGallery from "./dash-comp/ArtGallery";
import ReviewsSlider from "./dash-comp/ReviewSlider";
import Contact from "./dash-comp/Contact";
import DashNavbar from "./dash-comp/DashNavbar";

import { Helmet } from "react-helmet";
import { useSubdomain } from "./context/SubdomainContext";

const Dashbord = () => {
  const [siteSettings, setSiteSettings] = useState({ title: "", favicon: "" });
  const { userData, loading, error } = useSubdomain();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  useEffect(() => {
    const fetchSiteSettings = async () => {
      try {
        const response = userData.data;
        console.log(
          `https://admin.artpallatte.com${response.user.profile_img}`
        );

        setSiteSettings(
          {
            title: response.user.display_name,
            favicon: response.user.profile_img
              ? `https://admin.artpallatte.com${response.user.profile_img}`
              : "/logos/fav.jpg",
          }

          // Add more settings as needed
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchSiteSettings();
  }, []);
  return (
    <div id="home">
      <Helmet>
        <title>{siteSettings.title}</title>
        <link rel="icon" href={siteSettings.favicon} />
      </Helmet>
      <DashNavbar color={"white"} />
      <HeroSection />

      {/* About Section */}
      <About />

      {/* My Experties Areas */}

      <Expertise />

      {/* achievements Section */}

      <Achievements />

      {/* art-gallery Section */}
      <ArtGallery />

      {/* <ReviewsSlider /> */}

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Dashbord;
