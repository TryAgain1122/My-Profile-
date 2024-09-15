"use client";

import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";


const techIcons = [
  { Icons: <RiReactjsLine className="text-7xl text-cyan-400" /> },
  { Icons: <TbBrandNextjs className="text-7xl" /> },
  { Icons: <FaNodeJs className="text-7xl text-green-600" /> },
  { Icons: <DiMongodb className="text-7xl text-green-700" /> },
  { Icons: <SiRedux className="text-7xl text-violet-900" /> },
  { Icons: <SiTypescript className="text-7xl text-blue-700" /> },
  { Icons: <IoLogoJavascript className="text-7xl text-yellow-400" /> },
  { Icons: <FaJava className="text-7xl" /> },
  { Icons: <TbBrandCpp className="text-7xl" /> },
  { Icons: <SiExpress className="text-7xl" /> },
  { Icons: <RiTailwindCssFill className="text-7xl text-cyan-500" /> },
  { Icons: <SiMysql className="text-7xl text-cyan-800" /> },
];


const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="py-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techIcons.map((icon, index) => (
          <div className="p-4" key={index}>
            {icon.Icons}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
