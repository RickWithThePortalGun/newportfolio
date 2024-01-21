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
        viewport={{ once: true }}
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
                <div className="rounded-[18px] bg-teal-400/10 border-none mt-[5px] w-fit py-2">
                  <p className="text-center text-teal-300 text-[10px] px-2">
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
        viewport={{ once: true }}
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
                      {project.project_name}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </a>{" "}
                </div>
                <span
                  className={`items-start tracking-wider rounded-full text-[8px] w-fit px-2 py-1 my-2 flex justify-center gap-2 ${project.status==="Ongoing" ? "bg-yellow-400/10 text-yellow-300":"" || project.status==="Online"? "bg-teal-400/10 text-teal-300":"" || project.status==="Offline"? "bg-red-400/10 text-red-300":""}`}
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
