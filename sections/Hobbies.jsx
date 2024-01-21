import React from "react";
import { fadeIn } from "@utils/motion";
import { motion } from "framer-motion";
import { hobbys } from "@constants";

const Hobbies = () => {
  return (
    <>
      <div className="bg-transparent mt-[200px] z-50 flex flex-col justify-start items-center max-sm:px-[30px]">
        <p className="subtopic text-[40px] text-start">
          Leisurely Inclinations.
        </p>
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        initial={`hidden`}
        whileInView={`show`}
        className=" pt-20 gap-4"
      >
        <div className=" pl-20 max-sm:pl-5 grid items-start px-10 grid-auto-flow-row-dense grid-cols-[500px_auto] grid-rows-auto z-50 max-sm:grid-cols-1 gap-4">
          {hobbys.map((hobby, index) => (
            <>
              <div key={index} className="flex flex-col gap-4 justify-start">
                <p className="subtext-gradient text-[25px] font-semibold">
                  {hobby.hobby}
                </p>
                <div className="flex flex-row flex-wrap gap-2 ">
                  {hobby.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="rounded-[18px] border-[1px] mt-[5px] w-fit py-1 px-2 border-grey"
                    >
                      <p className="text-center text-grey text-[12px] px-2">
                        {keyword}
                      </p>
                    </span>
                  ))}
                </div>
              </div>
              <div className="">
                <span  dangerouslySetInnerHTML={{ __html:hobby.short_note}} className="text-[14px] text-grey"></span>
              </div>
            </>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Hobbies;
