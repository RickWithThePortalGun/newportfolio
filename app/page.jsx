"use client";
import { motion } from "framer-motion";
import { Navbar, Hero, About, Skills,Education, Experience } from "@/sections";
import LoadingScreen from "./loading";
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(delay); 
    };
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative font-sans max-w-[90rem] mx-auto w-full h-screen overflow-x-hidden"
        >
          <div className="w-full max-w-[90rem] px-6 flex z-50 justify-center fixed max-sm:bg-customblack bg-customblack">
            <Navbar />
          </div>

          <section
            className="pt-[80px] max-sm:pt-[0px] h-auto max-sm:h-full
         max-sm:mt-[0px] max-w-[90rem] w-full mx-auto"
          >
            <svg
              className="absolute top-0 right-0 z-50"
              xmlns="http://www.w3.org/2000/svg"
              width="500"
              height="500"
              viewBox="0 0 905 964"
              fill="none"
            >
              <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.1"
                filter="url(#filter0_f_7_21)"
              >
                <path
                  d="M1662.33 344.376C1669.07 674.849 1406.62 948.213 1076.15 954.95C745.677 961.687 14.9091 708.571 8.17207 378.097C1.43506 47.6234 721.281 -235.065 1051.75 -241.802C1382.23 -248.539 1655.59 13.9019 1662.33 344.376Z"
                  fill="url(#paint0_radial_7_21)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_7_21"
                  x="0.125"
                  y="-249.928"
                  width="1670.33"
                  height="1213.01"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="4"
                    result="effect1_foregroundBlur_7_21"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_7_21"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(1063.95 356.574) rotate(88.8321) scale(598.5 598.5)"
                >
                  <stop stopColor="#022DFF" stopOpacity="0.8" />
                  <stop offset="0.485" stopColor="#040DFF" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#0500FF" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              className="absolute z-36"
              xmlns="http://www.w3.org/2000/svg"
              width="725"
              height="1444"
              viewBox="0 0 725 1444"
              fill="none"
            >
              <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.1"
                filter="url(#filter0_f_8_11)"
              >
                <path
                  d="M-534.766 1259.9C-768.512 1026.19 -768.539 647.24 -534.827 413.495C-301.114 179.749 401.313 -143.802 635.059 89.9102C868.804 323.622 545.352 1026.1 311.64 1259.84C77.9281 1493.59 -301.021 1493.61 -534.766 1259.9Z"
                  fill="url(#paint0_radial_8_11)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_8_11"
                  x="-718.093"
                  y="0.9646"
                  width="1442.13"
                  height="1442.2"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="4"
                    result="effect1_foregroundBlur_8_11"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_8_11"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-111.593 836.668) rotate(-135.004) scale(598.5 598.5)"
                >
                  <stop stopColor="#022DFF" stopOpacity="0.8" />
                  <stop offset="0.485" stopColor="#040DFF" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#0500FF" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>{" "}
            <Hero />
          </section>
          <section id="about-component"  className="max-w-[90rem] mx-auto">
            <About />
          </section>
          <section id="skills-component"
            className="
    max-w-[90rem] max-h-max mx-auto relative"
          >
            <svg
              className="absolute rounded-[50%] top-0  right-0 z-50"
              xmlns="http://www.w3.org/2000/svg"
              width="500"
              height="500"
              viewBox="0 0 905 964"
              fill="none"
            >
              <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.1"
                filter="url(#filter0_f_7_21)"
              >
                <path
                  d="M1662.33 344.376C1669.07 674.849 1406.62 948.213 1076.15 954.95C745.677 961.687 14.9091 708.571 8.17207 378.097C1.43506 47.6234 721.281 -235.065 1051.75 -241.802C1382.23 -248.539 1655.59 13.9019 1662.33 344.376Z"
                  fill="url(#paint0_radial_7_21)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_7_21"
                  x="0.125"
                  y="-249.928"
                  width="1670.33"
                  height="1213.01"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="4"
                    result="effect1_foregroundBlur_7_21"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_7_21"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(1063.95 356.574) rotate(88.8321) scale(598.5 598.5)"
                >
                  <stop stopColor="#022DFF" stopOpacity="0.8" />
                  <stop offset="0.485" stopColor="#040DFF" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#0500FF" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>
            <Skills />
          </section>
          <section id="education-component" className="max-w-[90rem] max-h-max mx-auto relative">
          <svg
              className="absolute z-36"
              xmlns="http://www.w3.org/2000/svg"
              width="725"
              height="1444"
              viewBox="0 0 725 1444"
              fill="none"
            >
              <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.1"
                filter="url(#filter0_f_8_11)"
              >
                <path
                  d="M-534.766 1259.9C-768.512 1026.19 -768.539 647.24 -534.827 413.495C-301.114 179.749 401.313 -143.802 635.059 89.9102C868.804 323.622 545.352 1026.1 311.64 1259.84C77.9281 1493.59 -301.021 1493.61 -534.766 1259.9Z"
                  fill="url(#paint0_radial_8_11)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_8_11"
                  x="-718.093"
                  y="0.9646"
                  width="1442.13"
                  height="1442.2"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="4"
                    result="effect1_foregroundBlur_8_11"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_8_11"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-111.593 836.668) rotate(-135.004) scale(598.5 598.5)"
                >
                  <stop stopColor="#022DFF" stopOpacity="0.8" />
                  <stop offset="0.485" stopColor="#040DFF" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#0500FF" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>
            <Education/>
          </section>
          <section id="experience-component" className="max-w-[90rem] max-h-max mx-auto">
          <svg
              className="absolute z-36"
              xmlns="http://www.w3.org/2000/svg"
              width="725"
              height="1444"
              viewBox="0 0 725 1444"
              fill="none"
            >
              <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.1"
                filter="url(#filter0_f_8_11)"
              >
                <path
                  d="M-534.766 1259.9C-768.512 1026.19 -768.539 647.24 -534.827 413.495C-301.114 179.749 401.313 -143.802 635.059 89.9102C868.804 323.622 545.352 1026.1 311.64 1259.84C77.9281 1493.59 -301.021 1493.61 -534.766 1259.9Z"
                  fill="url(#paint0_radial_8_11)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_8_11"
                  x="-718.093"
                  y="0.9646"
                  width="1442.13"
                  height="1442.2"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="4"
                    result="effect1_foregroundBlur_8_11"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_8_11"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-111.593 836.668) rotate(-135.004) scale(598.5 598.5)"
                >
                  <stop stopColor="#022DFF" stopOpacity="0.8" />
                  <stop offset="0.485" stopColor="#040DFF" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#0500FF" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>
            <Experience/>
          </section>
          <section className="bg-[#fffffc] w-full px-6 ">gfxkyxkytx</section>
        </motion.div>
      )}
    </>
  );
}
