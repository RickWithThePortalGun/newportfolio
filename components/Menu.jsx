"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);


  return (
    <div className=" mb-5 max-sm:pt-2 z-50 flex items-center justify-start max-sm:block hidden">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <div
          onClick={() => {
            setOpen((pv) => !pv);
            setToggle(!toggle);
          }}
          className="flex items-center px-4 mt-2 py-1 rounded-full text-indigo-50 bg-transparent transition-colors"
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
          className="flex flex-col z-50 gap-2 px-4 py-2 rounded-lg shadow-xl absolute top-[120%] pl-8 bg-teal-400/10 left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} text="About Me" />
          <Option setOpen={setOpen}  text="Skills" />
          <Option setOpen={setOpen}  text="Education" />
          <Option setOpen={setOpen} text="Experiences" />
        <Option setOpen={setOpen} text="Contact" />

        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center justify-center max-sm:justify-start  gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-third text-teal-300 hover:text-first transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
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

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
