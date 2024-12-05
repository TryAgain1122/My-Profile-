"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-20">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <Image
              src={'/assets/rafhael.jpg'}
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
             IT enthusiast specializing in the MERN stack (MongoDB, Express.js, ReactJS, Node.js), skilled 
              at developing dynamic and efficient full-stack applications. Adept at rapidly mastering new 
              technologies and driven by a passion for continuous learning and innovation. Highly committed to
              staying at the forefront of industry trends through ongoing research and development.
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
