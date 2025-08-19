"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState, usePath } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="flex w-full justify-between items-center border-b-1 border-[#333333] fixed top-0 left-0 z-50 bg-[#0a0a0a] h-[113px] text-white"
      initial={{
        opacity: 0,
        translateY: -70,
        transition: { duration: 0.8 },
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileInView={{ opacity: 1, translateY: 0 }}
    >
      <div className="p-8 border-r-1 border-[#333333]">
        <Link href="/">
          <img src="/logo.svg" alt="" />
        </Link>
      </div>

      <div
        className={`lg:hidden flex flex-col justify-center items-center gap-1 border-l-1 border-[#333333] h-[113px] p-8 cursor-pointer z-2 transition-all duration-300 ease-in-out ${
          isOpen ? "border-none" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-9 h-1 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "translate-y-1.5 rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-9 h-1 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-9 h-1 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "-translate-y-[10px] -translate-x-[0px] -rotate-45" : ""
          }`}
        ></div>
      </div>

      <ul
        className={`flex flex-col lg:flex-row lg:justify-between lg:items-center gap-7 lg:gap-0 pt-25 lg:pt-0 lg:w-fit w-[370px] h-screen lg:h-full absolute lg:static top-0 right-0 bg-black/10 backdrop-blur-3xl lg:bg-transparent lg:backdrop-blur-none z-0 ${
          isOpen ? "flex" : "hidden"
        } lg:flex `}
        onClick={() => setIsOpen(false)}
      >
        <li className="p-8 flex justify-start items-center lg:border-l-1 border-[#333333] h-[113px] w-[230px]">
          <Link href="/portfolio">WEB DEVELOPMENT</Link>
        </li>
        <li className="p-8 flex justify-start items-center lg:border-l-1 border-[#333333] h-[113px] w-[230px]">
          <Link href="/pubSpeak">PUBLIC SPEAKING</Link>
        </li>
      </ul>
    </motion.nav>
  );
}
