import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { fadeIn } from "@utils/motion";
import { annotate } from "rough-notation";

const Hero = () => {
  useEffect(() => {
    const e = document.querySelector("#name-text");
    if (e) {
      setTimeout(() => {
        annotate(e, {
          type: "box",
          color: "#ffd465",
          multiline: false,
        }).show();
      }, 1000);
    }
  }, []);
  return (
    <div className="gap-1 items-center justify-center text-white w-full h-full flex flex-col">
      <span id="name-text">
        <p className="hero-text text-[80px] mt-[5%] max-sm:mt-[2%] tracking-[1px] font-sans leading-[1px] max-sm:pt-[10px] max-sm:text-[50px] mx-auto whitespace-nowrap text-center w-full">
          Oyeniyi Victor
        </p>
      </span>
      <p className="hero-text text-[80px] subtext-gradient leading-tight tracking- max-sm:mt-[2px] max-sm:text-[50px] mx-auto whitespace-nowrap max-lg:whitespace-normal max-sm:whitespace-normal text-center w-full">
        Mobile & Web Developer
      </p>
      <div className="flex flex-row gap-10 max-sm:gap-5 text-[12px] max-sm:text-[8px] pt-[15px] justify-center text-grey font-sans">
        <p>Backend</p>
        <p>Frontend</p>
        <p>DevOps</p>
      </div>
      <div className="rounded-[18px] border-[1px] mt-[15px] w-auto py-2 px-2 border-grey">
        <p className="text-center text-grey text-[10px] px-2">Remote</p>
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 2)}
        initial={`hidden`}
        whileInView={`show`}
        className=" cursor-pointer z-50 max-sm:pt-[20%] pt-10  w-full flex justify-center items-center"
      >
          <div
            className="w-[25px] cursor-pointer h-[74px] rounded-3xl border-[1px] border-grey flex justify-center z-50 items-start p-2"
            onClick={() => {
              document.getElementById("about-component").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <motion.svg
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="39"
              viewBox="0 0 6 39"
              fill="none"
            >
              <path
                d="M0 0C0 0 0 2.5 3 2.5C6 2.5 6 0 6 0L3 39L0 0Z"
                fill="#D9D9D9"
              />
            </motion.svg>
          </div>
      </motion.div>
    </div>
  );
};

export default Hero;
