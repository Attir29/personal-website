"use client";

import React from "react";
import portfolios from "../components/webdev";
import { motion } from "framer-motion";

export default function WebPort() {
  return (
    <section className="flex flex-col items-center h-fit justify-center p-12 gap-20 mt-32 md:px-28 text-white">
      <motion.div className="flex flex-col items-start justify-start w-full lg:text-[24px] md:text-[20px] text-[18px] transition-all"
      initial={{
            opacity: 0,
            translate: -100,
            transition: { duration: 1.5, delay: 0.2 },
          }}
          whileInView={{ opacity: 1, translate: 0 }}>
        <h1

        >
          WEB DEVELOPMENT
            </h1>
      </motion.div>

      <div className="grid grid-col-1 lg:grid-cols-2 w-full justify-center items-center gap-16">
        {portfolios.map((portfolio, index) => (
          <motion.div
            key={index}
            className="portfolio-item border-1 border-[#333333] hover:border-white group hover:scale-105 flex-col flex justify-between items-center w-full h-fit lg:min-h-[610px] transition-all duration-300 ease-in-out gap-12"
            initial={{
              opacity: 0,
              translateX: 150,
              transition: { duration: 0.5 },
            }}
            whileInView={{ opacity: 1, translateX: 0 }}
          >
            <img
              src={portfolio.image}
              alt={portfolio.name}
              className="w-full h-[400px] object-cover object-top group-hover:saturate-100 saturate-0 transition-all duration-300 ease-in-out"
            />
            <div className="flex flex-col justify-center items-center gap-2 w-full h-full lg:h-[260px] lg:justify-between lg:items-start px-6 pb-6 lg:px-8 lg:pb-8">
              <h2 className="text-[22px]  w-full flex justify-center items-center">
                {portfolio.name}
              </h2>
              <p className="text-[18px] w-fit flex justify-center items-center text-justify ">
                {portfolio.description}
              </p>
              <div className="w-full flex justify-center items-center text-justify">
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] border-1 border-white w-full hover:scale-105 hover:text-black hover:bg-white text-center transition-all duration-300 ease-in-out p-2"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
