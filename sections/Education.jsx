import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const Education = () => {
  return (
    <div className="bg-transparent pt-[100px] pl-[70px] max-sm:px-[30px]">
      <span id="skill-text">
        <p className="subtopic text-[40px]">Learning's Scroll.</p>
      </span>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 pr-4 pt-10 gap-8 auto-rows-[200px] auto-cols-[200px] rounded-full max-sm:auto-rows-[200px] max-lg:auto-rows-[250px] max-lg:grid-cols-1">
        <motion.div
                    viewport={{once:true}}

          variants={fadeIn("up", "spring", 0.5, 1)}
          initial={`hidden`}
          whileInView={`show`}
          className="border-2 border-lighterblue rounded-[15px] text-white relative"
        >
          <div className=" pl-4 pt-5 flex flex-col items-start">
            <p className="text-[20px] font-bold text-[#BDD4FF]">2023</p>
            <p className="font-bold pt-4 py-4">Bachelor's Computer Engineering</p>
            <div className="absolute bottom-2 right-2 text-[13px] font-semibold text-lighterblue underline">
            University of Technology, Niger.
            </div>
          </div>
        </motion.div>
        <motion.div
                    viewport={{once:true}}

          variants={fadeIn("up", "spring", 0.7, 1)}
          initial={`hidden`}
          whileInView={`show`}
          className="border-2 border-lighterblue rounded-[15px] text-white relative"
        >
          <div className=" pl-4 pt-5 flex flex-col items-start">
            <p className="text-[20px] font-bold text-[#BDD4FF]">2021</p>
            <p className="font-bold pt-4 py-4">React.js, Tailwind CSS</p>
            <p className="font-bold pt-2">React-Native, Next.js</p>
            <div className="absolute bottom-2 right-2 text-[13px] font-semibold text-lighterblue underline">
              jsmastery.pro
            </div>
          </div>
        </motion.div>
        <motion.div
                    viewport={{once:true}}

          variants={fadeIn("up", "spring", 0.9, 1)}
          initial={`hidden`}
          whileInView={`show`}
          className="border-2 border-lighterblue rounded-[15px] text-white relative"
        >
          <div className=" pl-4 pt-5 flex flex-col items-start">
            <p className="text-[20px] font-bold text-[#BDD4FF]">2020</p>
            <p className="font-bold pt-4 py-4">
              Machine Learning and Data Analysis
            </p>
            <p className="font-bold">HTML, CSS and JavaScript</p>
            <div className="absolute bottom-2 right-2 text-[13px] font-semibold text-lighterblue underline">
              edureka.co{" "}
            </div>
          </div>
        </motion.div>
        <motion.div
                    viewport={{once:true}}

          variants={fadeIn("up", "spring", 0.9, 1)}
          initial={`hidden`}
          whileInView={`show`}
          className="border-2 border-lighterblue rounded-[15px] text-white relative"
        >          <div className="pl-4 pt-5 flex flex-col items-start">
            <p className="text-[20px] font-bold text-[#BDD4FF]">2018</p>
            <p className="font-bold pt-4 py-4">Python Development</p>
            <p className="font-bold pt-2 py-2">Django Framework</p>

            <div className="absolute bottom-2 right-2 text-[13px] font-semibold text-lighterblue underline">
              codewithmosh.com
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
