"use client";

import Image from "next/image";
import React from "react";
import myImage from "../assets/rafhael.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <Image
              src={myImage}
              alt="Image"
              className="rounded-3xl opacity-80 border border-stone-800"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-center mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Rafhael F. Luis
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              Self-taught IT professional specializing in the MERN (MongoDB,
              Express.js, ReactJS, Node.js) stack. Proficient in building
              full-stack applications with a strong ability to learn new
              technologies. Passionate about continuous learning and research.
            </p>
            {/* <Link
              href={"/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
