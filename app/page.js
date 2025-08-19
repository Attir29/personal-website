"use client";
import Image from "next/image";

import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="bg-[#0a0a0a] md:px-24 overflow-hidden text-white">
      <section className="flex flex-col items-center h-screen justify-center p-12 gap-8 lg:mt-12">
        <div className="flex flex-col items-start justify-start w-full lg:text-[24px] md:text-[20px] text-[18px]">
          <motion.h1 
          initial={{
            opacity: 0,
            translateX: -70,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, translateX: 0 }}>I'M MIDZ</motion.h1>
        </div>
        <motion.div className="w-full flex justify-end items-center group"
        initial={{
            opacity: 0,
            translateX: 200,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, translateX: 0 }}>
          <img
            src="/img-hero2.png"
            alt=""
            className="lg:min-w-[780px] md:w-[650px] min-w-[550px] translate-x-[220px] md:translate-x-[140px] lg:translate-x-0  transition-all duration-1000 ease-in-out animate-pulse"
          />
        </motion.div>
        <motion.div className="w-full flex flex-col justify-between items-center text-[18px] sm:text-[20px] md:text-[24px] sm:flex-row"
        initial={{
            opacity: 0,
            translateY: 50,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, translateY: 0 }}>
          <p>LESS NOISES</p>
          <p>MORE IMPACT</p>
        </motion.div>
      </section>


      <section className="flex flex-col items-center h-screen justify-center p-12 gap-28">
        <div className="flex flex-col items-start justify-start w-full lg:text-[24px] md:text-[20px] text-[18px] ">
          <motion.h1
          initial={{
            opacity: 0,
            translateX: -70,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, translateX: 0 }}>ABOUT ME</motion.h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row md:justify-between w-full group">
          <motion.img
            src="/about-img.png"
            alt=""
            className="min-w-[280px] lg:max-w-[400px] group-hover:saturate-100 saturate-0 transition-all duration-300 ease-in-out"
            initial={{
              opacity: 0,
              translateX: -100,
              transition: { duration: 0.5 },
            }}
            whileInView={{ opacity: 1, translateX: 0 }}
          />
          <motion.p className="text-justify lg:max-w-[745px] text-[16px] sm:text-[20px] md:text-[24px]"
          initial={{
            opacity: 0,
            translateX: 70,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, translateX: 0 }}>
            I'm a front-end developer skilled in JavaScript, React, and Next.js.
            I design clean, intuitive UIs with Figma, and I’m confident in
            public speaking, making collaboration smooth and effective. Let’s
            create something great.
          </motion.p>
        </div>
      </section>

    </main>
  );
}
