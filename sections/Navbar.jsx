import React from "react";
import Image from "next/image";
import Menu from "@components/Menu";

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
      <Menu/>
      <div className="max-sm:hidden  text-grey flex flex-row items-center gap-10 font-sans font-normal text-[15px]">
        <p className="cursor-pointer hover-effect z-50" onClick={() => {
              document.getElementById("about-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>About Me</p>
        <p className="cursor-pointer hover-effect z-50" onClick={() => {
              document.getElementById("skills-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>Skills</p>
        <p className="cursor-pointer hover-effect z-50" onClick={() => {
              document.getElementById("education-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>Education</p>
        <p className="cursor-pointer hover-effect z-50" onClick={() => {
              document.getElementById("experience-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>Experiences</p>
        <div className="rounded-[28px] z-50 hover-effect flex-shrink-0 border-[1px] px-[15px] py-[5px] my-auto w-auto border-grey">
          <p className=" cursor-pointer text-center" onClick={() => {
              document.getElementById("contact-component").scrollIntoView({
                behavior: "smooth",
              });
            }}>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
