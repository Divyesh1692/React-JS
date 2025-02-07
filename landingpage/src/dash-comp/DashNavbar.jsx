import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll
// import Response from "../config/Api";
import { useSubdomain } from "../context/SubdomainContext";

const DashNavbar = ({ color }) => {
  const { userData, loading, error } = useSubdomain();
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState();
  const [profile, setProfile] = useState();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const getData = async () => {
    try {
      const response = userData.data;

      console.log(response);

      setName(response.user.display_name);
      setProfile(response.user.profile_img);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 md:bg-transparent md:bg-opacity-0 shadow-none md:shadow-none md:border-none border-b bg-white">
      <div className="max-w-[95%] mx-auto ">
        <div className="flex justify-between h-[12vw] md:h-[4vw] items-center">
          {/* Left - Logo */}
          <div className="flex items-center justify-center md:drop-shadow-md md:shadow-md py-[0.3%]  px-[0.7%] bg-white rounded-full w-auto items-center justify-left flex ">
            <div className="text-[5vw] md:text-[1.12vw] flex  flex  justify-center items-center">
              <img
                className="w-[9vw] h-[9vw] shadow-lg drop-shadow-lg md:shadow-none md:drop-shadow-none  md:w-[2.2vw] md:h-[2.2vw]  object-cover rounded-full border-[0.5vw] md:border-[0.3vw] border-[#DAA520] mr-[2%]"
                src={`https://admin.artpallatte.com/${profile}`}
                alt=""
              />
              <span
                className={`md:text-black  font-[500]  text-[cgray] whitespace-nowrap `}
              >
                {name}
              </span>
            </div>
          </div>

          {/* Center - Menu Items */}
          <div className="hidden md:flex bg-white absolute fixed left-[30%] drop-shadow-md shadow-md rounded-full px-[2%] py-[0.5%] space-x-6 font-poppins shadow-md">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="relative cursor-pointer text-[cgray] text-[1.12vw] font-[500] hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              About
            </Link>
            <Link
              to="art-information"
              smooth={true}
              duration={500}
              className="relative cursor-pointer text-[cgray] text-[1.12vw] font-[500] hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Art Information
            </Link>
            <Link
              to="achievements"
              smooth={true}
              duration={500}
              className="relative cursor-pointer text-[cgray] text-[1.12vw] font-[500] hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Achievements
            </Link>
            <Link
              to="art-gallery"
              smooth={true}
              duration={500}
              className="relative cursor-pointer text-[cgray] text-[1.12vw] font-[500] hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Art Gallery
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="relative cursor-pointer text-[cgray] text-[1.12vw] font-[500] hover:text-[#4B0082] transition-colors duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                 before:bg-[#4B0082] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
            >
              Contact
            </Link>
          </div>

          {/* Right - Logout Button (Hidden in Mobile) */}
          <div className="hidden  ">
            <div
              className={` text-black bg-white px-[4%] w-[8vw] py-[5%] drop-shadow-md shadow-md flex justify-center items-center rounded-full  transition flex cursor-pointer hover:scale-105 duration-300`}
            >
              <span className="font-[600] text-[1.2vw]">Logout</span>{" "}
              <svg
                className="ml-[5%] w-[1.67vw] h-[1.67vw] "
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_7017)">
                  <path
                    d="M12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.477 6.977 2 12.5 2C14.0526 1.99922 15.584 2.36033 16.9727 3.05467C18.3613 3.74901 19.5691 4.75746 20.5 6H17.79C16.6352 4.98176 15.2112 4.31836 13.6887 4.0894C12.1663 3.86044 10.6101 4.07566 9.20689 4.70921C7.80371 5.34277 6.61315 6.36776 5.77807 7.66119C4.94299 8.95461 4.49887 10.4615 4.499 12.0011C4.49913 13.5407 4.9435 15.0475 5.77879 16.3408C6.61409 17.6341 7.80482 18.6589 9.2081 19.2922C10.6114 19.9255 12.1676 20.1405 13.69 19.9113C15.2125 19.6821 16.6364 19.0184 17.791 18H20.501C19.57 19.2427 18.3621 20.2512 16.9732 20.9456C15.5844 21.6399 14.0528 22.0009 12.5 22ZM19.5 16V13H11.5V11H19.5V8L24.5 12L19.5 16Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes  className="text-black text-[5vw]" />
              ) : (
                <FaBars  className="text-black text-[5vw]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden in Desktop) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="art-information"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600"
            >
              Art Information
            </Link>
            <Link
              to="achievements"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600"
            >
              Achievements
            </Link>
            <Link
              to="art-gallery"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600"
            >
              Art Gallery
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashNavbar;
