"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const StaggeredDropDown = ({ onMenuToggle }) => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    onMenuToggle(!open);
  };
  return (
    <div className="mb-5 max-sm:pt-2 z-50 items-center justify-start">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <div
          onClick={() => {
            setOpen((pv) => !pv);
            setToggle((prevToggle) => !prevToggle);
            handleToggle();
          }}
          className="items-center max-md:flex hidden px-4 mt-2 py-1 rounded-full text-indigo-50 bg-transparent transition-colors"
        >
          <Image
            src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            unoptimized
            priority
            width={15}
            height={15}
            className="w-[20px] h-[20px] object-contain"
          />
        </div>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col justify-start items-start z-50 gap-2 px-4 py-2 rounded-lg shadow-xl absolute top-[120%] pl-8 bg-[#101010] border-[2px] border-lighterblue left-[50%] w-48 overflow-hidden"
        >
          <Option
            setOpen={setOpen}
            setToggle={setToggle}
            linkid="about-component"
            text="About Me"
            handleToggle={handleToggle}

          />
          <Option
            setOpen={setOpen}
            setToggle={setToggle}
            linkid="skills-component"
            text="Skills"
            handleToggle={handleToggle}

          />
          <Option
            setOpen={setOpen}
            setToggle={setToggle}
            linkid="education-component"
            text="Education"
            handleToggle={handleToggle}

          />
          <Option
            setOpen={setOpen}
            setToggle={setToggle}
            linkid="experience-component"
            text="Experiences"
            handleToggle={handleToggle}

          />
          <Option
            setOpen={setOpen}
            setToggle={setToggle}
            linkid="contact-component"
            text="Contact"
            handleToggle={handleToggle}

          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, setOpen, handleToggle, setToggle, linkid }) => {
  return (
    <p
      onClick={() => {
        document.getElementById(linkid).scrollIntoView({
          behavior: "smooth",
        });
        setOpen(false);
        setToggle(false);
        handleToggle(false); 
      }}
    >
      <motion.li
        className="flex items-center justify-center z-50 max-sm:justify-start gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-third text-[#fafafa] hover:text-first transition-colors cursor-pointer"
      >
        <span>{text}</span>
      </motion.li>
    </p>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};





