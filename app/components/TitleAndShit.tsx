"use client";

import { motion } from "framer-motion";

export default function TitleAndShit() {
  return (
    <div className="text-[12rem] leading-[10rem] flex flex-col items-center font-semibold uppercase text-center justify-center">
      <p className="overflow-hidden h-max w-full">
        <motion.span
          initial={{ x: "2rem", y: "10rem", opacity: 0 }}
          animate={{ x: "2rem", y: "0rem", opacity: 1 }}
          transition={{ duration: 1.8, delay: 0, ease: "anticipate" }}
          className='block font-extrabold text-transparent bg-clip-text bg-left-top [background-image: url("/text-background-a2ce454e.png");] bg-gradient-to-tl from-sky-500 via-blue-500 to-blue-950'
        >
          Upup
        </motion.span>
      </p>
      <p className="overflow-hidden h-max w-full">
        <motion.span
          initial={{ x: "-8rem", y: "10rem", opacity: 0 }}
          animate={{ x: "-8rem", y: "0rem", opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.2,
            ease: "anticipate",
          }}
          className="block"
        >
          and
        </motion.span>
      </p>
      <p className="overflow-hidden h-max w-full">
        <motion.span
          initial={{ x: "6rem", y: "10rem", opacity: 0 }}
          animate={{ x: "6rem", y: "0rem", opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.3,
            ease: "anticipate",
          }}
          className="block"
        >
          Away
        </motion.span>
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl font-normal mt-12 -ml-24 flex flex-col items-start gap-8"
      >
        <p className="[text-transform:none]">
          The most powerful open source file uploader for your react project
        </p>

        <button className="bg-gradient-to-br from-sky-500 via-blue-500 to-blue-700 text-white p-3 px-8 rounded">
          Try it now!
        </button>
      </motion.div>
    </div>
  );
}
