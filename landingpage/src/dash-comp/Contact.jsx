import React, { useEffect, useState } from "react";
// import Response from "../config/Api";
import { Link } from "react-scroll";
import { useSubdomain } from "../context/SubdomainContext";

const Contact = () => {
  const { userData, loading, error } = useSubdomain();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  const [name, setName] = useState();
  const [profile, setProfile] = useState();
  const [email, setEmail] = useState();
  const [whatsapp, setWhatsapp] = useState();
  const [insta, setInsta] = useState();
  const [facebook, setFacebook] = useState();
  const [pinterest, setPinterest] = useState();

  const getData = async () => {
    try {
      const response = userData.data;
      // console.log(response);

      setName(response.user.display_name);
      setProfile(response.user.profile_img);
      setEmail(response.user.email);
      setWhatsapp(response.socialNetworkPlatform.socialMedia.whatsapp);
      setInsta(response.socialNetworkPlatform.socialMedia.instagram);
      setFacebook(response.socialNetworkPlatform.socialMedia.facebook);
      setPinterest(response.socialNetworkPlatform.socialMedia.pinterest);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="contact" className="relative mt-[10%] md:mt-[7%]">
      <div className="relative flex flex-col md:flex-row w-full drop-shadow shadow-[0_0_3px_rgba(237,108,48,1)] pb-[3%] md:pb-[2%]">
        <img
          className=" absolute flex flex-col md:hidden object-cover w-[100vw] mt-[5%] "
          src="/images/stars.svg"
          alt="Stars Background"
        />

        {/* name */}
        <div className="relative flex flex-col w-[91.12vw] md:w-[38.96vw] mx-auto md:ml-[2%] md:pt-[2%] pt-[5%]">
          <div className="text-[5vw] md:text-[2.5vw] flex font-bold flex text-[#333333] items-center">
            <img
              className="w-[9.45vw] h-[9.45vw] md:w-[3.20vw] md:h-[3.20vw] hidden md:inline object-cover rounded-full border-4 border-[#DAA520] mr-[5%] md:mr-[1%]"
              src={`https://admin.artpallatte.com/${profile}`}
              alt=""
            />
            <span>{name}</span>
          </div>
          <p className="text-[3.34vw] md:text-[1.25vw] md:w-[37vw] font-[500] md:font-[400] text-[#333333] mt-[3%]">
            Our platform is trusted by millions,& features an portfolio of
            financial product offerings.
          </p>
          <p className="text-[3.89vw] md:text-[1.39vw] font-[500] text-[#4B0082] mt-[3%]">
            <a href={`mailto:${email}`} target="_blank">{email}</a>
          </p>
        </div>
        {/* QUICK LINKS */}

        <div className="relative flex flex-col w-[91.12vw] md:w-[18.125vw] mx-auto mt-[5%] md:mt-[2%]">
          <p className="text-[3.89vw] md:text-[1.39vw] font-[500] text-[#333333]">
            QUICK LINKS
          </p>
          <div className="flex flex-col items-left space-y-[2%] py-[2%] text-[3.34vw] md:text-[0.972vw] ">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-700 cursor-pointer hover:text-[#4B0082]"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 cursor-pointer hover:text-[#4B0082]"
            >
              About
            </Link>
            <Link
              to="art-gallery"
              smooth={true}
              duration={500}
              className="text-gray-700 cursor-pointer hover:text-[#4B0082]"
            >
              Gallery
            </Link>

            <Link
              to="achievements"
              smooth={true}
              duration={500}
              className="text-gray-700 cursor-pointer hover:text-[#4B0082]"
            >
              Achievements
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 cursor-pointer hover:text-[#4B0082]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="relative flex flex-col w-[91.12vw] md:w-[18.125vw] mx-auto mt-[2%] md:mt-[2%] ">
          <p className="text-[3.89vw] md:text-[1.39vw] font-[500] text-[#333333] ">
            CONTACT
          </p>
          <div className="flex relative items-center mt-[1%]">
            <svg
              className="w-[5vw] h-[5vw] md:w-[1.67vw] md:h-[1.67vw] text-[#ED6C30] md:text-[#4B0082]"
              viewBox="0 0 24 24"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.268 6.06109C10.8544 6.17165 11.4041 6.42614 11.8678 6.80171C12.3315 7.17728 12.6945 7.66215 12.9244 8.21276C13.1542 8.76336 13.2437 9.36244 13.1846 9.95616C13.1256 10.5499 12.92 11.1196 12.5862 11.6142L21.8096 18.7726C22.1099 18.617 22.4541 18.5675 22.7862 18.6321C23.1183 18.6967 23.4188 18.8717 23.6389 19.1286C23.859 19.3855 23.9857 19.7092 23.9986 20.0472C24.0115 20.3853 23.9098 20.7177 23.7099 20.9906C23.51 21.2636 23.2237 21.4609 22.8975 21.5506C22.5713 21.6403 22.2244 21.6172 21.913 21.4849C21.6016 21.3526 21.3441 21.119 21.1823 20.8219C21.0205 20.5249 20.9638 20.1819 21.0215 19.8485L11.6408 12.5675C11.1991 12.8702 10.6954 13.0705 10.1664 13.1539C9.63743 13.2373 9.09652 13.2017 8.58306 13.0496C8.06961 12.8975 7.59656 12.6328 7.19836 12.2748C6.80016 11.9168 6.48686 11.4745 6.28127 10.98C6.07568 10.4856 5.98298 9.95159 6.00993 9.41682C6.03689 8.88205 6.18281 8.36003 6.43707 7.88879C6.69132 7.41754 7.04752 7.00895 7.47969 6.69277C7.91187 6.37659 8.40914 6.16079 8.93528 6.06109L8.93395 0H10.2674L10.268 6.06109ZM10.8008 9.59962C10.8008 9.7572 10.7697 9.91324 10.7094 10.0588C10.6491 10.2044 10.5607 10.3367 10.4493 10.4481C10.3378 10.5595 10.2055 10.6479 10.0599 10.7082C9.91432 10.7685 9.75826 10.7996 9.60066 10.7996C9.44307 10.7996 9.28701 10.7685 9.14141 10.7082C8.99581 10.6479 8.86351 10.5595 8.75207 10.4481C8.64064 10.3367 8.55224 10.2044 8.49193 10.0588C8.43162 9.91324 8.40058 9.7572 8.40058 9.59962C8.40058 9.28137 8.52701 8.97616 8.75207 8.75113C8.97713 8.52609 9.28238 8.39967 9.60066 8.39967C9.91895 8.39967 10.2242 8.52609 10.4493 8.75113C10.6743 8.97616 10.8008 9.28137 10.8008 9.59962Z"
                fill="currentcolor"
              />
              <path
                d="M14.4184 9.59007C14.4186 8.66794 14.1532 7.76526 13.6539 6.98997C13.1546 6.21468 12.4425 5.59959 11.6028 5.21824V0.0717773C14.4624 0.323101 15.9478 1.22373 17.2779 2.45635C17.3446 2.51901 17.4113 2.57968 17.4753 2.63834C18.042 3.15832 18.4927 3.57297 18.7254 4.19295L21.5482 11.7073C21.6239 11.909 21.6495 12.126 21.6229 12.3398C21.5963 12.5535 21.5183 12.7577 21.3956 12.9347C21.2728 13.1117 21.109 13.2563 20.9181 13.3561C20.7272 13.456 20.5149 13.5081 20.2995 13.5079H19.2121V15.0672L14.1617 11.146C14.3327 10.6453 14.4197 10.1198 14.419 9.59074M7.60255 5.23157V0.161774C1.60878 1.06374 0 5.5349 0 7.98413C0 11.8286 2.45551 14.8105 3.60693 16.0058V24.0002H15.0158V19.659H17.878C18.0793 19.659 18.2713 19.6137 18.442 19.5337L11.3848 14.0539C10.2184 14.5352 8.90938 14.5379 7.74097 14.0615C6.57257 13.585 5.63876 12.6678 5.1416 11.5081C4.64445 10.3485 4.62393 9.03976 5.08449 7.86512C5.54506 6.69048 6.44965 5.74439 7.60255 5.23157Z"
                fill="currentcolor"
              />
            </svg>
            <div className="flex flex-col items-left ml-[5%] text-[3.34vw] md:text-[1vw]">
              <p className="text-gray-700 hover:text-[#4B0082] ">
                Have Any Question?
              </p>
              <p className="text-gray-700 hover:text-[#4B0082]">{whatsapp}</p>
            </div>
          </div>
          <div className="flex space-x-3 mt-[5%]">
            {/* whatsapp */}
            {whatsapp ? (
              <a href={`https://wa.me/${whatsapp}`} target="_blank">
                <svg
                  className="w-[5vw] h-[5vw] md:w-[2.084vw] md:h-[2.084vw] text-[#535454] md:text-[#4B0082]"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0493 2.50007C8.22427 2.50007 2.66177 8.06257 2.66177 14.8876C2.66177 17.0751 3.23677 19.2001 4.31177 21.0751L2.56177 27.5001L9.12427 25.7751C10.9368 26.7626 12.9743 27.2876 15.0493 27.2876C21.8743 27.2876 27.4368 21.7251 27.4368 14.9001C27.4368 11.5876 26.1493 8.47507 23.8118 6.13757C22.6656 4.9802 21.3005 4.06253 19.7962 3.43802C18.2918 2.81352 16.6781 2.49467 15.0493 2.50007ZM15.0618 4.58757C17.8118 4.58757 20.3868 5.66257 22.3368 7.61257C23.2935 8.56947 24.0521 9.70571 24.569 10.9562C25.0859 12.2067 25.3511 13.5469 25.3493 14.9001C25.3493 20.5751 20.7243 25.1876 15.0493 25.1876C13.1993 25.1876 11.3868 24.7001 9.81177 23.7501L9.43677 23.5376L5.53677 24.5626L6.57427 20.7626L6.32427 20.3626C5.29245 18.7231 4.74635 16.8247 4.74927 14.8876C4.76177 9.21257 9.37427 4.58757 15.0618 4.58757ZM10.6618 9.16257C10.4618 9.16257 10.1243 9.23757 9.83677 9.55007C9.56177 9.86257 8.74927 10.6251 8.74927 12.1376C8.74927 13.6626 9.86177 15.1251 9.99927 15.3376C10.1743 15.5501 12.1993 18.6751 15.3118 20.0001C16.0493 20.3376 16.6243 20.5251 17.0743 20.6626C17.8118 20.9001 18.4868 20.8626 19.0243 20.7876C19.6243 20.7001 20.8493 20.0376 21.1118 19.3126C21.3743 18.5876 21.3743 17.9751 21.2993 17.8376C21.2118 17.7126 21.0118 17.6376 20.6993 17.5001C20.3868 17.3251 18.8618 16.5751 18.5868 16.4751C18.2993 16.3751 18.1243 16.3251 17.8868 16.6251C17.6868 16.9376 17.0868 17.6376 16.9118 17.8376C16.7243 18.0501 16.5493 18.0751 16.2493 17.9251C15.9243 17.7626 14.9243 17.4376 13.7493 16.3876C12.8243 15.5626 12.2118 14.5501 12.0243 14.2376C11.8743 13.9376 12.0118 13.7501 12.1618 13.6126C12.2993 13.4751 12.4993 13.2501 12.6243 13.0626C12.7868 12.8876 12.8368 12.7501 12.9368 12.5501C13.0368 12.3376 12.9868 12.1626 12.9118 12.0126C12.8368 11.8751 12.2118 10.3251 11.9493 9.71257C11.6993 9.11257 11.4493 9.18757 11.2493 9.17507C11.0743 9.17507 10.8743 9.16257 10.6618 9.16257Z"
                    fill="currentcolor"
                  />
                </svg>
              </a>
            ) : (
              ""
            )}
            {/* fb */}
            {facebook ? (
              <a href={`https://www.facebook.com/${facebook}`} target="_blank">
                <svg
                  className="w-[5vw] h-[5vw] md:w-[2.084vw] md:h-[2.084vw] text-[#535454] md:text-[#4B0082]"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.25 2.5H17.5C15.8424 2.5 14.2527 3.15848 13.0806 4.33058C11.9085 5.50268 11.25 7.0924 11.25 8.75V12.5H7.5V17.5H11.25V27.5H16.25V17.5H20L21.25 12.5H16.25V8.75C16.25 8.41848 16.3817 8.10054 16.6161 7.86612C16.8505 7.6317 17.1685 7.5 17.5 7.5H21.25V2.5Z"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            ) : (
              ""
            )}
            {/* insta */}
            {insta ? (
              <a href={`https://www.instagram.com/${insta}`} target="_blank">
                <svg
                  className="w-[5vw] h-[5vw] md:w-[2.084vw] md:h-[2.084vw] text-[#535454] md:text-[#4B0082]"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0012 11.25C14.0067 11.25 13.0529 11.6451 12.3496 12.3483C11.6463 13.0516 11.2512 14.0054 11.2512 15C11.2512 15.9946 11.6463 16.9484 12.3496 17.6516C13.0529 18.3549 14.0067 18.75 15.0012 18.75C15.9958 18.75 16.9496 18.3549 17.6529 17.6516C18.3562 16.9484 18.7512 15.9946 18.7512 15C18.7512 14.0054 18.3562 13.0516 17.6529 12.3483C16.9496 11.6451 15.9958 11.25 15.0012 11.25ZM15.0012 8.75C16.6589 8.75 18.2486 9.40848 19.4207 10.5806C20.5928 11.7527 21.2512 13.3424 21.2512 15C21.2512 16.6576 20.5928 18.2473 19.4207 19.4194C18.2486 20.5915 16.6589 21.25 15.0012 21.25C13.3436 21.25 11.7539 20.5915 10.5818 19.4194C9.40973 18.2473 8.75125 16.6576 8.75125 15C8.75125 13.3424 9.40973 11.7527 10.5818 10.5806C11.7539 9.40848 13.3436 8.75 15.0012 8.75ZM23.1262 8.4375C23.1262 8.8519 22.9616 9.24933 22.6686 9.54235C22.3756 9.83538 21.9781 10 21.5637 10C21.1493 10 20.7519 9.83538 20.4589 9.54235C20.1659 9.24933 20.0012 8.8519 20.0012 8.4375C20.0012 8.0231 20.1659 7.62567 20.4589 7.33265C20.7519 7.03962 21.1493 6.875 21.5637 6.875C21.9781 6.875 22.3756 7.03962 22.6686 7.33265C22.9616 7.62567 23.1262 8.0231 23.1262 8.4375ZM15.0012 5C11.9087 5 11.4037 5.00875 9.965 5.0725C8.985 5.11875 8.3275 5.25 7.7175 5.4875C7.20729 5.67546 6.7459 5.97579 6.3675 6.36625C5.97659 6.74452 5.67583 7.20592 5.4875 7.71625C5.25 8.32875 5.11875 8.985 5.07375 9.96375C5.00875 11.3437 5 11.8262 5 15C5 18.0937 5.00875 18.5975 5.0725 20.0362C5.11875 21.015 5.25 21.6737 5.48625 22.2825C5.69875 22.8262 5.94875 23.2175 6.36375 23.6325C6.785 24.0525 7.17625 24.3037 7.71375 24.5112C8.33125 24.75 8.98875 24.8825 9.96375 24.9275C11.3437 24.9925 11.8262 25 15 25C18.0937 25 18.5975 24.9912 20.0362 24.9275C21.0137 24.8812 21.6712 24.75 22.2825 24.5137C22.7927 24.3258 23.2541 24.0255 23.6325 23.635C24.0537 23.215 24.305 22.8237 24.5125 22.285C24.75 21.67 24.8825 21.0125 24.9275 20.035C24.9925 18.6562 25 18.1725 25 15C25 11.9075 24.9912 11.4025 24.9275 9.96375C24.8812 8.98625 24.7487 8.32625 24.5125 7.71625C24.3245 7.20604 24.0242 6.74465 23.6337 6.36625C23.2555 5.97534 22.7941 5.67458 22.2837 5.48625C21.6712 5.24875 21.0137 5.1175 20.0362 5.0725C18.6575 5.0075 18.175 5 15 5M15 2.5C18.3962 2.5 18.82 2.5125 20.1537 2.575C21.4837 2.6375 22.3912 2.84625 23.1875 3.15625C24.0125 3.47375 24.7075 3.90375 25.4025 4.5975C26.0384 5.22217 26.5302 5.97809 26.8437 6.8125C27.1525 7.60875 27.3625 8.51625 27.425 9.8475C27.4837 11.18 27.5 11.6037 27.5 15C27.5 18.3962 27.4875 18.82 27.425 20.1525C27.3625 21.485 27.1525 22.39 26.8437 23.1875C26.5302 24.0219 26.0384 24.7778 25.4025 25.4025C24.7778 26.0384 24.0219 26.5302 23.1875 26.8437C22.3912 27.1525 21.4837 27.3625 20.1537 27.425C18.82 27.4837 18.3962 27.5 15 27.5C11.6037 27.5 11.18 27.4875 9.84625 27.425C8.51625 27.3625 7.61 27.1525 6.8125 26.8437C5.97809 26.5302 5.22217 26.0384 4.5975 25.4025C3.96163 24.7778 3.46977 24.0219 3.15625 23.1875C2.84625 22.3912 2.6375 21.4837 2.575 20.1525C2.515 18.82 2.5 18.3962 2.5 15C2.5 11.6037 2.5125 11.18 2.575 9.8475C2.6375 8.515 2.84625 7.61 3.15625 6.8125C3.46977 5.97809 3.96163 5.22217 4.5975 4.5975C5.22217 3.96163 5.97809 3.46977 6.8125 3.15625C7.60875 2.84625 8.515 2.6375 9.84625 2.575C11.1812 2.51625 11.605 2.5 15.0012 2.5"
                    fill="currentColor"
                  />
                </svg>
              </a>
            ) : (
              ""
            )}
            {/* pinterest */}
            {pinterest ? (
              <a href={`https://in.pinterest.com/${pinterest}`} target="_blank">
                <svg
                  className="w-[5vw] h-[5vw] md:w-[2.084vw] md:h-[2.084vw] text-[#535454] md:text-[#4B0082]"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.615 23.9887C10.6442 23.5679 10.7037 23.1508 10.7937 22.7375C10.8725 22.3687 11.1112 21.325 11.4612 19.8125L11.47 19.775L11.9537 17.69C12.0525 17.265 12.1287 16.935 12.18 16.825C11.9387 16.2634 11.8178 15.6575 11.825 15.0462C11.825 13.375 12.77 12.08 13.995 12.08C14.445 12.0725 14.875 12.2675 15.1725 12.6125C15.47 12.9575 15.6075 13.4162 15.55 13.8575C15.55 14.4237 15.4437 14.855 14.9837 16.4012C14.9125 16.6384 14.8437 16.8764 14.7775 17.115C14.7168 17.3311 14.6613 17.5487 14.6112 17.7675C14.4912 18.25 14.6012 18.7637 14.9075 19.1487C15.056 19.3378 15.2477 19.4883 15.4666 19.5877C15.6854 19.6871 15.925 19.7325 16.165 19.72C18.03 19.72 19.415 17.2387 19.415 14.035C19.415 11.5725 17.8025 9.9425 15.125 9.9425C14.4548 9.91774 13.7867 10.0323 13.1629 10.2788C12.5392 10.5254 11.9734 10.8986 11.5012 11.375C11.0191 11.8619 10.6387 12.44 10.3822 13.0754C10.1258 13.7109 9.99837 14.391 10.0075 15.0762C9.97611 15.8147 10.2024 16.5412 10.6475 17.1312C10.8737 17.3062 10.96 17.61 10.8662 17.8687C10.815 18.0787 10.6912 18.5587 10.645 18.7187C10.6321 18.7972 10.6011 18.8717 10.5544 18.9361C10.5078 19.0005 10.4468 19.0532 10.3762 19.09C10.3078 19.1255 10.2318 19.1442 10.1547 19.1447C10.0775 19.1451 10.0014 19.1272 9.9325 19.0925C8.4825 18.4937 7.6875 16.87 7.6875 14.7925C7.6875 11.0612 10.8012 7.8125 15.4275 7.8125C19.3462 7.8125 22.2787 10.7237 22.2787 14.2375C22.2787 18.6525 19.8637 21.8675 16.4162 21.8675C15.9258 21.8825 15.4387 21.7818 14.9943 21.5736C14.55 21.3653 14.161 21.0553 13.8587 20.6687L13.805 20.89L13.5462 21.955L13.5437 21.965C13.3612 22.715 13.2337 23.2362 13.1837 23.4312C13.0504 23.8762 12.8837 24.3096 12.6837 24.7312C15.171 25.324 17.7908 24.9415 20.0048 23.6624C22.2187 22.3832 23.8586 20.3046 24.5873 17.8537C25.316 15.4028 25.0783 12.7659 23.9229 10.4849C22.7674 8.20396 20.7822 6.45222 18.3751 5.58975C15.9681 4.72727 13.3221 4.8196 10.981 5.84776C8.63988 6.87591 6.78156 8.76177 5.78796 11.1177C4.79435 13.4737 4.74095 16.1208 5.63874 18.5149C6.53652 20.909 8.31728 22.867 10.615 23.9887ZM15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="py-[0.5%] justify-center text-[3.34vw] md:text-[1vw] flex text-[#535454]">
        <p>© 2025 {name}. All rights reserved </p>
      </div>
    </section>
  );
};

export default Contact;
