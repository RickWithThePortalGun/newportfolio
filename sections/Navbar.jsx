import React from "react";
import Image from "next/image";
import Menu from "@components/Menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Briefcase, InfoIcon, LucideMenu, MenuSquare, PhoneCall, Puzzle, School2Icon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="text-white h-fit flex flex-1 font-montreal justify-between items-center">
      <div className="px-4 py-2 max-sm:px-1">
        <Image
          src={`/assets/Logo.svg`}
          width={50}
          height={45}
          className="max-sm:w-[30px]"
          alt="My Logo"
        />
      </div>
      <DropdownMenu  >
        <DropdownMenuTrigger className="max-lg:flex hidden">
          <LucideMenu size={30} className="mt-2" color="#fafafa" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-6 shadow-lg bg-[#0a0a0a] border-none ">
          <DropdownMenuItem className="text-white flex gap-4 font-bold"
            onClick={() => {
              document.getElementById("about-component").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About <InfoIcon size={15}/>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white flex gap-4 font-bold" onClick={() => {
            document.getElementById("skills-component").scrollIntoView({
              behavior: "smooth",
            });
          }}>Skills <Puzzle size={15}/></DropdownMenuItem>
          <DropdownMenuItem className="text-[#fafafa] font-bold flex gap-4" onClick={() => {
            document.getElementById("experience-component").scrollIntoView({
              behavior: "smooth",
            });
          }}>Experience <Briefcase size={15}/></DropdownMenuItem>
          <DropdownMenuItem className="text-[#fafafa] font-bold flex gap-4" onClick={() => {
            document.getElementById("education-component").scrollIntoView({
              behavior: "smooth",
            });
          }}>Education <School2Icon size={15}/></DropdownMenuItem>
          <DropdownMenuItem className="text-[#fafafa] flex gap-4 font-bold" onClick={() => {
            document.getElementById("contact-component").scrollIntoView({
              behavior: "smooth",
            });
          }}>Contact <PhoneCall size={15}/></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="max-lg:hidden  text-grey flex flex-row items-center gap-10 font-sans font-normal text-[15px]">
        <p
          className="cursor-pointer whitespace-nowrap hover-effect z-50"
          onClick={() => {
            document.getElementById("about-component").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          About Me
        </p>
        <p
          className="cursor-pointer hover-effect z-50"
          onClick={() => {
            document.getElementById("skills-component").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Skills
        </p>
        <p
          className="cursor-pointer hover-effect z-50"
          onClick={() => {
            document.getElementById("education-component").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Education
        </p>
        <p
          className="cursor-pointer hover-effect z-50"
          onClick={() => {
            document.getElementById("experience-component").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Experiences
        </p>
        <div className="rounded-[28px] z-50 hover-effect flex-shrink-0 border-[1px] px-[15px] py-[5px] my-auto w-auto border-grey">
          <p
            className=" cursor-pointer text-center"
            onClick={() => {
              document.getElementById("contact-component").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
