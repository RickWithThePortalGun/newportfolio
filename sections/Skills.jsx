import { fadeIn } from "@utils/motion";
import React from "react";
import {motion} from 'framer-motion'


const Skills = () => {
   
  return (
    <div className="bg-transparent pt-[100px] pl-[70px] max-sm:px-[30px]">
      <div className="h-fit max-sm:px-[30px] flex flex-row items-end max-sm:items-start max-sm:flex-col max-sm:pl-0">
        <span id="skill-text"><p  className="subtopic text-[40px]">Mastery of Craft.</p></span>
        <motion.p variants={fadeIn("left", "spring", 0.4, 1)} initial={`hidden`} whileInView={`show`} className="text-white pl-[40px] max-sm:pl-0  tools_tech font-semibold pt-10 text-[18px] font-sans">
          Tools and Technology
        </motion.p>
        <div className=" flex flex-row gap-4">
          <motion.p variants={fadeIn("left", "spring", 0.8, 2)} initial={`hidden`} whileInView={`show`} className="flex flex-row gap-2 items-center text-grey text-[15px] ml-[100px] max-sm:ml-0 justify-center max-sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>{" "}
            Proficient
          </motion.p>
          <motion.p variants={fadeIn("left", "spring", 1, 2)} initial={`hidden`} whileInView={`show`} className="flex flex-row gap-2 items-center text-grey text-[15px] max-sm:pl-0 pl-[50px] justify-center max-sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#888888" fillOpacity="0.93" />
            </svg>{" "}
            Mid
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 pt-10 max-sm:pt-5 gap-4 col-span-1 auto-rows-[150px] max-sm:auto-rows-[100px] my-10">
        <motion.div variants={fadeIn("left", "spring", 0.6, 2)} initial={`hidden`} whileInView={`show`}  className="bg-transparent h-full pl-10 pt-10 flex flex-col items-start justify-center">
          <p className="flex flex-row gap-2 items-center text-white text-[15px] font-sans font-semibold tracking-wide max-sm:pl-0 justify-center max-sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#888888" fillOpacity="0.93" />
            </svg>{" "}
            Backend
          </p>
          <p className="text-grey">
            Django, Supabase, Express, RESTful API, GraphQL{" "}
          </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "spring", 0.8, 2)} initial={`hidden`} whileInView={`show`} className="bg-transparent h-full pl-10 pt-10 flex flex-col items-start justify-center">
          <p className="flex flex-row gap-2 items-center text-white text-[15px] font-sans font-semibold tracking-wide max-sm:pl-0 justify-center max-sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>{" "}
            Frontend
          </p>{" "}
          <p className="text-grey">
            HTML, CSS, React, React-Native, Tailwind CSS{" "}
          </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "spring", 1.0, 2)} initial={`hidden`} whileInView={`show`} className="bg-transparent h-full pl-10 pt-10 flex flex-col items-start justify-center">
          <p className="flex flex-row gap-2 items-center text-white text-[15px] font-sans font-semibold tracking-wide max-sm:pl-0 justify-center max-sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>{" "}
            Version Control
          </p>
          <p className="text-grey">Git, GitHub, GitLab </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "spring", 1.2, 2)} initial={`hidden`} whileInView={`show`} className="bg-transparent h-full pl-10 pt-10 flex flex-col items-start justify-center">
          <p className="flex flex-row gap-2 items-center text-white text-[15px] font-sans font-semibold tracking-wide max-sm:pl-0 justify-center max-sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#888888" fillOpacity="0.93" />
            </svg>{" "}
            Database
          </p>
          <p className="text-grey">MongoDB, Supabase, PostgreSQL </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "spring", 1.4, 2)} initial={`hidden`} whileInView={`show`} className="bg-transparent h-full pl-10 pt-10 flex flex-col items-start justify-center">
          <p className="flex flex-row gap-2 items-center text-white text-[15px] font-sans font-semibold tracking-wide max-sm:pl-0 justify-center max-sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>{" "}
            DevOps
          </p>
          <p className="text-grey">
            Linux, Digital Ocean, Docker, AWS, Cloudinary
          </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "spring", 1.6, 2)} initial={`hidden`} whileInView={`show`} className="bg-transparent h-full pl-10 pt-10 flex flex-col items-start justify-center">
          <p className="flex flex-row gap-2 items-center text-white text-[15px] font-sans font-semibold tracking-wide max-sm:pl-0 justify-center max-sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#BDD4FF" fillOpacity="0.93" />
            </svg>{" "}
            Machine Learning
          </p>
          <p className="text-grey">
          Data Analytics, medium complex ML models, Data Visualization 
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
