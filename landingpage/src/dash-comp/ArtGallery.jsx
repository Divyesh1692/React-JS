import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSubdomain } from "../context/SubdomainContext";

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);
  const { userData, loading, error } = useSubdomain();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  // Fetch data from userData on mount
  const getData = () => {
    try {
      const response = userData.data.artworks; // Assuming artworks is an array
      if (response && response.length > 0) {
        setArtworks(response); // Set the artworks to the state
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [userData]); // Fetch data when `userData` changes

  return (
    <section id="art-gallery" className="relative w-full flex flex-col">
      {/* Background for mobile */}
      <img
        className="absolute flex flex-col md:hidden object-cover w-[100vw] mt-[-10%]"
        src="/images/stars.svg"
        alt="Stars Background"
      />

      {/* Title and arrow */}
      <div className="w-full relative flex justify-center mt-[5%]">
        <h2 className="text-[Poppins] text-[5.56vw] md:text-[3.125vw] font-[600] text-[#4B0082]">
          Art Gallery
        </h2>
        <img
          className="absolute w-[18.34vw] ml-[20%] md:hidden"
          src="/images/arrow.svg"
          alt="Arrow"
        />
      </div>

      {/* Artwork Grid */}
      <div className="flex flex-wrap justify-center md:mt-[5%] gap-[2%] w-full">
        {artworks && artworks.length > 0 ? (
          artworks.map((artwork, index) => (
            <div
              key={index}
              className="w-[40vw] md:w-[30vw] h-[40vh] md:h-[30vh] flex justify-center items-center"
            >
              <img
                className="w-[40vw] md:w-[20vw] h-[40vw] md:h-[20vw] object-cover  rounded-lg" // Added rounded corners and full size
                src={`https://admin.artpallatte.com${artwork.mainImage}`} // Assuming mainImage contains image path
                alt={artwork.title}
              />
            </div>
          ))
        ) : (
          <h2 className="w-full text-center text-[#535454]">
            No artworks available.
          </h2>
        )}
      </div>

      {/* Button to See All Artworks */}
      <Link
        to="/artgallery"
        className="w-[29.17vw] md:w-[24.93vw] h-[8.89vw] md:h-[3.47vw] mt-[5%] mx-auto"
      >
        <button className="w-full h-full bg-[#4B0082] rounded-tl-2xl rounded-br-2xl flex justify-center items-center text-[3.89vw] md:text-[1.39vw] text-white font-[600]">
          See All
        </button>
      </Link>
    </section>
  );
};

export default ArtGallery;
