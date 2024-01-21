"use client";
import React from "react";
import { startups, projects } from "@constants";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const Experience = () => {
  const statusColorMap = {
    Incomplete: "yellow-200",
    Offline: "red-200",
    Online: "green-200",
    Ongoing: "yellow-200",
  };

  const statusTextMap = {
    Incomplete: "Incomplete",
    Offline: "Offline",
    Online: "Online",
    Ongoing: "Ongoing",
  };
  return (
    <>
      {" "}
      <div className="bg-transparent mt-[200px] z-50 flex flex-col justify-start items-center max-sm:px-[30px]">
        <p className="subtopic text-[40px] text-start">Proven Prowess.</p>
        <p className="text-center text-white pt-10 text-[25px]">Startups</p>
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        initial={`hidden`}
        whileInView={`show`}
        className="grid items-start px-10 grid-cols-[200px_auto] z-50 max-sm:grid-cols-[150px_auto] pt-20 gap-4"
      >
        {startups.map((startup, index) => (
          <>
            <div className="text-end flex justify-center flex-row gap-4 items-center bg-transparent text-lightblue">
              <p>{startup.date}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 33 33"
                fill="none"
              >
                <circle
                  cx="16.5"
                  cy="16.5"
                  r="14"
                  stroke="white"
                  stroke-width="5"
                />
              </svg>
            </div>
            <div className="items-start pl-10 max-sm:pl-0 gap-4 justify-start flex flex-col bg-transparent">
              <div className="text-start bg-transparent flex flex-col justify-start text-white ">
                <div className="items-center flex flex-row gap-2">
                  {" "}
                  {startup.company_name}
                </div>
                <div className="text-lighterblue text-[12px] py-2">
                  {startup.designation}
                </div>
                <div className="max-sm:hidden text-grey text-[15px] py-2">
                  {startup.description}
                </div>
                <div className="rounded-[18px] border-[1px] mt-[5px] w-fit py-2 border-grey">
                  <p className="text-center text-grey text-[10px] px-2">
                  {startup.location}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </motion.div>
      <div className="bg-transparent mt-[50px] flex flex-col justify-start items-center z-50 max-sm:px-[30px]">
        <p className="text-center text-white pt-10 text-[25px]">Projects</p>
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.7, 1)}
        initial={`hidden`}
        whileInView={`show`}
        className="grid items-start px-10 grid-cols-[200px_auto] max-sm:grid-cols-[150px_auto] pt-20 gap-4"
      >
        {projects.map((project, index) => (
          <>
            <div className="text-end flex justify-center flex-row gap-4 items-center bg-transparent text-lightblue">
              <p>{project.date}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 33 33"
                fill="none"
              >
                <circle
                  cx="16.5"
                  cy="16.5"
                  r="14"
                  stroke="white"
                  stroke-width="5"
                />
              </svg>
            </div>
            <div className="items-start pl-10 max-sm:pl-0 gap-4 justify-start flex flex-col bg-transparent">
              <div className="text-start bg-transparent flex flex-col justify-start text-white ">
                <div className=" items-center flex flex-row gap-2 ">
                  <a target="_blank" href={project.link}>
                    <p className="cursor-pointer text-[15px]">
                      {project.project_name}
                    </p>
                  </a>{" "}
                </div>
                <span
                  className={`items-start tracking-wider rounded-full text-[8px] w-fit px-2 py-1 my-2 flex justify-center gap-2 border-[2px] border-${
                    statusColorMap[project.status]
                  } text-${statusColorMap[project.status]}`}
                >
                  {statusTextMap[project.status]}
                </span>
                <div className="text-lighterblue text-[12px] py-2">
                  {project.designation}
                </div>
                <div className="max-sm:hidden text-grey text-[15px] py-2">
                  {project.description}
                </div>
              </div>
            </div>
          </>
        ))}
      </motion.div>
    </>
  );
};

export default Experience;
