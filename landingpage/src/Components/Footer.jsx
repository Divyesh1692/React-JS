import React from "react";
import { Link } from "react-scroll";
import { BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <section
      id="footer"
      className="relative mt-[5%] bg-cover bg-center cursor-hand"
      style={{ backgroundImage: "url('/images/footer.png')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 w-[100%] "></div>

      <div className="relative w-[95%] mx-auto flex flex-col md:flex-row pl-[2%] justify-between">
        <div className="text-white  pt-[5%]">
          {/* Content */}
          <h2 className="text-[5.56vw] md:text-[2.084vw]  font-semibold font-poppins">
            Art Pallatte
          </h2>
          <p className="mt-[2%] w-[65.28vw] md:w-[37vw] text-[3.34vw] md:text-[1.39vw] font-[400] font-poppins ">
            Our platform is trusted by millions,& features an portfolio of
            financial product offerings.
          </p>
          <p className="mt-[2%] text-[3.89vw] md:text-[1.39vw] font-[500] font-poppins">
            Support@artpallatte.com
          </p>
        </div>

        <div className="relative flex text-white md:text-white/80 flex-col font-poppins mb-[3%] md:pt-[5%]">
          <h3 className="text-[3.89vw] md:text-[1.25vw] uppercase text-white font-[500] mb-[2%] md:mb-[5%] ">
            Quick Links
          </h3>

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-[3.34vw] md:text-[0.98vw] mb-[1%] md:mb-[10%] hover:text-white duration-300 hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="text-[3.34vw] md:text-[0.98vw] mb-[1%] md:mb-[10%] hover:text-white duration-300 hover:cursor-pointer"
          >
            Features Of Platform
          </Link>
          <Link
            to="engaged-artists"
            smooth={true}
            duration={500}
            className="text-[3.34vw] md:text-[0.98vw] mb-[1%] md:mb-[10%] hover:text-white duration-300 hover:cursor-pointer"
          >
            Engaged Artists
          </Link>
          <Link
            to="testimonial"
            smooth={true}
            duration={500}
            className="text-[3.34vw] md:text-[0.98vw] mb-[1%] md:mb-[10%] hover:text-white duration-300 hover:cursor-pointer"
          >
            Testimonial
          </Link>
        </div>

        {/* Contact */}
        <div className="relative flex flex-col w-[91.12vw] md:w-[18.125vw]  md:mt-[0%]  mb-[5%] md:pt-[5%]">
          <p className="text-[3.89vw] md:text-[1.39vw] font-[500] text-white md:mb-[5%] ">
            CONTACT
          </p>

          <div className="flex space-x-3 mt-[2%] items-center">
            {/* whatsapp */}
            <a href={"https://wa.me/+919898167407"}>
              <svg
                className="w-[5vw] h-[5vw] md:w-[2.084vw] md:h-[2.084vw] text-white md:text-white/80 hover:text-white duration-300 hover:cursor-pointer "
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
            {/* fb */}
            <a href={"https://www.facebook.com/profile.php?id=61570033063266"}>
              <svg
                className="w-[5vw] h-[5vw] md:w-[2.084vw] md:h-[2.084vw] text-white md:text-white/80 hover:text-white duration-300 hover:cursor-pointer "
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
            {/* insta */}
            <a href={"https://www.instagram.com/artpallatte/"}>
              <svg
                className="w-[5vw] h-[5vw] md:w-[2.084vw] md:h-[2.084vw] text-white md:text-white/80 hover:text-white duration-300 hover:cursor-pointer"
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
            {/* pinterest */}
            <a href={"https://in.pinterest.com/ArtPallatte/"}>
              <svg
                className="w-[5vw] h-[5vw] md:w-[2.084vw] md:h-[2.084vw] text-white md:text-white/80 hover:text-white duration-300 hover:cursor-pointer"
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
            <a href={"https://x.com/EffecttoS42892"}>
              <BsTwitterX className="w-[4vw] h-[4vw] md:w-[1.65vw] md:h-[1.65vw] text-white md:text-white/80 hover:text-white duration-300 hover:cursor-pointer" />
            </a>
            <a href={"https://www.youtube.com/@ArtPallatte"}>
              <BsYoutube className="w-[5.5vw] h-[5.5vw] md:w-[2.2vw] md:h-[2.2vw] text-white md:text-white/80 hover:text-white duration-300 hover:cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center z-30 text-white border-t border-white py-[0.2%]">
        <p className=" text-[3vw] md:text-[1vw]  text-center  font-poppins ">
          © 2025 Artpallatte. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
