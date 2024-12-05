"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Link href={"/"}>
          {/* <Image
            src={myImage}
            width={50}
            height={50}
            alt="Image"
            className="rounded-full"
          /> */}
          <h1 className="text-5xl font-bold">RL</h1>
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link href="https://www.linkedin.com/in/rafhael-luis-25ba0525b/" target="_blank">
            <FaLinkedin />
        </Link>
        <Link href="instagram.com" target="_blank">
            <FaInstagram />
        </Link>
        <Link href="facebook.com" target="_blank">
            <FaFacebook />
        </Link>
        <Link href="https://github.com/TryAgain1122" target="_blank">
            <FaGithub />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
