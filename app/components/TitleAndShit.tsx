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
          className="block"
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
    </div>
  );
}
