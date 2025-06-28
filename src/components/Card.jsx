import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from "motion/react";

const Card = ({width, start, para, hover="false"}) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover === "true" ? "#4c20ad" : "#3c3a43" }}
      className={`p-5 rounded-xl text-zinc-100 bg-zinc-800 ${width} min-h-[60vh] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between">
          <h1>Heading</h1>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Heading 2</h1>
      </div>
      <div className="w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight">
              Start a Project
            </h1>
            <button className="rounded-full px-4 py-3 border-1 border-zinc-100 mt-5">
              Contact Us
            </button>
          </>
        )}
        {para === true && (
          <>
            <p className="text-sm opacity-40 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card