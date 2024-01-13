import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="text-white flex flex-1 font-montreal justify-between items-center">
      <div className="px-4 py-2 max-sm:px-1">
        <Image
          src={`/assets/Logo.svg`}
          width={50}
          height={45}
          className="max-sm:w-[30px]"
          alt="My Logo"
        />
      </div>
      <svg
        className="hidden max-sm:block"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="17"
        viewBox="0 0 25 17"
        fill="none"
      >
        <rect width="25" height="2" rx="1" fill="#D9D9D9" />
        <rect y="5" width="25" height="2" rx="1" fill="#D9D9D9" />
        <rect y="10" width="25" height="2" rx="1" fill="#D9D9D9" />
        <rect y="15" width="25" height="2" rx="1" fill="#D9D9D9" />
      </svg>
      <div className="max-sm:hidden text-grey flex flex-row items-center gap-10 font-sans font-normal text-[15px]">
        <p className="cursor-pointer" onClick={() => {
              document.getElementById("about-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>About Me</p>
        <p className="cursor-pointer" onClick={() => {
              document.getElementById("skills-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>Skills</p>
        <p className="cursor-pointer" onClick={() => {
              document.getElementById("education-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>Education</p>
        <p className="cursor-pointer" onClick={() => {
              document.getElementById("experience-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>Experiences</p>
        <div className="rounded-[28px] flex-shrink-0 border-[1px] px-[15px] py-[5px] my-auto w-auto border-grey">
          <p className="text-center">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
