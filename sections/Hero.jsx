import { useWindowSize } from "@utils/hooks";
import { fadeIn } from "@utils/motion";
import { motion } from "framer-motion";


const Hero = () => {
  const { width } = useWindowSize();
  
  return (
    <>
      <div className="gap-1 items-center pt-[10px] max-sm:pt-[50px] justify-center text-white w-full h-full flex flex-col relative">
        <span id="name-text" className="z-40">
          <p className="hero-text text-[80px] mt-[5%] max-sm:mt-[2%] tracking-[1px] font-sans leading-[1px] max-sm:pt-[10px] max-sm:text-[40px] max-sssm:[10px] mx-auto whitespace-nowrap text-center w-full">
            Oyeniyi Victor
          </p>
          <p className="z-50 text-[80px] subtext-gradient leading-tight tracking- max-sm:mt-[2px] max-sm:text-[40px] mx-auto whitespace-nowrap max-lg:whitespace-normal max-sm:whitespace-normal text-center w-full">
            Mobile & Web Developer
          </p>
        </span>

        <div className="bg-teal-400/10 rounded-full items-center px-2 py-1 flex flex-row z-40 gap-10 max-sm:gap-5 text-[14px] max-sm:text-[12px] mt-[15px] justify-center text-teal-300  font-sans"> 
          <p>Backend</p>
          <p>Frontend</p>
          <p>DevOps</p>
        </div>
        <div className=" z-40 rounded-[18px] border-none mt-[15px] w-auto py-2 px-2 bg-teal-400/10">
          <p className="text-center text-teal-300 text-[10px] px-2">Remote</p>
        </div>
        <motion.div
          viewport={{ once: true }}
          variants={fadeIn("up", "spring", 0.5, 2)}
          initial={`hidden`}
          whileInView={`show`}
          className=" cursor-pointer z-40 max-sm:pt-[20%] pt-10  w-full flex justify-center items-center"
        >
          <div
            className="w-[25px] cursor-pointer h-[74px] rounded-3xl border-[1px] border-grey flex justify-center z-40 items-start p-2"
            onClick={() => {
              document.getElementById("about-component").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <motion.svg
              viewport={{ once: true }}
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
    </>
  );
};

export default Hero;
