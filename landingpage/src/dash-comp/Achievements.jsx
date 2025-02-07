import React, { useEffect, useState } from "react";
// Assuming Achievement component is in the same folder
// import Response from "../config/Api";
import Achievement from "./Achievement";
import { useSubdomain } from "../context/SubdomainContext";

const Achievements = () => {
  const { userData, loading, error } = useSubdomain();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  // State to hold achievements data
  const [achievementsData, setAchievementsData] = useState([]);
  // const [loading, setLoading] = useState(true); // State for loading
  // const [error, setError] = useState(null); // State for error handling

  // Fetch data from the API
  useEffect(() => {
    const fetchAchievements = () => {
      try {
        // Replace the URL with your actual API endpoint
        const response = userData.data;
        console.log("ach", response.achievements.achievements);

        setAchievementsData(response.achievements.achievements);
        console.log(achievementsData);
        // Set data to state
        // setLoading(false);
      } catch (err) {
        // setError(err.message); // Set error message
      }
    };

    fetchAchievements(); // Call the function when the component mounts
  }, []); // Empty dependency array means this runs only once when component mounts

  return (
    <section
      id="achievements"
      className="relative mt-[10%] md:mt-[2%] overflow-hidden"
    >
      <div className="absolute flex flex-col md:hidden object-cover w-[100vw] mt-[-5%]">
        <img
          className=" md:hidden object-cover w-[100vw] "
          src="/images/stars.svg"
          alt="Stars Background"
        />
        <img
          className=" md:hidden object-cover w-[100vw] "
          src="/images/stars.svg"
          alt="Stars Background"
        />
      </div>

      <div className="w-full relative flex justify-center">
        <h2 className="text-[Poppins] text-[5.56vw] md:text-[3.125vw] font-[600] text-[#4B0082]">
          Achievements
        </h2>
        <img
          className="absolute w-[18.34vw] ml-[30%] md:hidden"
          src="/images/arrow.svg"
          alt="Arrow"
        />
      </div>

      <div className="text-[3.34vw] mt-[5%] md:mt-[2%] w-[88.34vw] md:w-[75vw] mx-auto text-[#535454] md:text-[1.39vw] font-[600] text-center">
        You’ve contributed to the global art community Art Pallatte and
        showcased creativity through inspiring projects.
      </div>

      {/* Mapping over the achievements and rendering the Achievement component */}
      <div className="mt-8 flex flex-wrap mx-auto md:w-[85vw]  justify-center items-center    flex">
        {achievementsData.map((achievement, index) => (
          <Achievement
            key={index}
            img={achievement.imageUrl}
            title={achievement.title}
            date={achievement.date}
            desc={achievement.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
