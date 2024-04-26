import React from "react";
import { fadeIn } from "@utils/motion";
import { motion } from "framer-motion";
import { hobbys } from "@constants";

const Hobbies = () => {
  return (
    <>
      <div className="bg-transparent mt-[200px] pt-[100px] z-50 flex flex-col justify-start items-center max-sm:px-[30px]">
        <p className="subtopic text-[40px] text-start">
          Leisurely Inclinations.
        </p>
        <span className="mt-[20px]">
          <blockquote class="italic font-bold text-center text-white mt-2">
          A lesson without pain is meaningless. For you cannot gain something without sacrificing something else in return.<br /> <span class="text-grey">Edward Elric</span>
          </blockquote>
          <br />
          \n
        </span>
      </div>
      <motion.div
        viewport={{ once: true }}
        variants={fadeIn("up", "spring", 0.5, 1)}
        initial={`hidden`}
        whileInView={`show`}
        className=" pt-10 gap-8"
      >
        <div className=" pl-20 max-sm:pl-5 grid items-center  px-10 grid-auto-flow-row-dense grid-cols-[500px_auto] grid-rows-auto z-50 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 gap-4">
          {hobbys.map((hobby, index) => (
            <>
              <div
                key={index}
                className="flex mt-8 max-sm:mt-4
               flex-col gap-4 justify-start"
              >
                <p className="text-lighterblue text-[25px] font-semibold">
                  {hobby.hobby}
                </p>
                <div className="flex flex-row flex-wrap gap-2 ">
                  {hobby.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="rounded-[18px] border-none mt-[5px] w-fit py-1 px-2 bg-teal-400/10"
                    >
                      <p className="text-center text-teal-300 text-[12px] px-2">
                        {keyword}
                      </p>
                    </span>
                  ))}
                </div>
              </div>
              <div className="">
                <span
                  dangerouslySetInnerHTML={{ __html: hobby.short_note }}
                  className="text-[14px] text-grey"
                ></span>
              </div>
            </>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Hobbies;
