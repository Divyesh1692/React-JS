import React, { useState, useEffect } from "react";

import DashNavbar from "./dash-comp/DashNavbar";
import ArtGalleryCard from "./dash-comp/ArtGalleryCard";
import Contact from "./dash-comp/Contact";
import { useSubdomain } from "./context/SubdomainContext";

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);
  const { userData, loading, error } = useSubdomain();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  console.log("art");
  
  useEffect(() => {
    // Replace this with your actual API URL
    const fetchArtworks = () => {
      try {
        const response = userData.data;
        console.log(response);

        setArtworks(response.artworks); // Assuming API returns an array
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <DashNavbar color={"black"} />

      <div className="mt-[20%] md:mt-[8%]">
        <h2 className="text-[Poppins] flex justify-left md:hidden ml-[5%] text-[6.12vw] md:text-[2.09vw] font-[700] text-[#4B0082]">
          Art Gallery
        </h2>
        <div className="flex flex-col mt-[2%] md:flex-row relative ">
          {artworks.map((artwork) => (
            <ArtGalleryCard key={artwork._id} artwork={artwork} />
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ArtGallery;
