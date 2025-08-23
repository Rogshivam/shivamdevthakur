"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ 
  title = "SHIVAM KUMAR", 
  speed = 15 // smaller = faster counting
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount(count + 1), speed);
      return () => clearTimeout(timer);
    }
  }, [count, speed]);

  return (
    <motion.div
      exit={{ y: "-100vh", transition: { duration: 1 } }}
      className="flex justify-center items-center h-full w-full bg-gray-100 dark:bg-gray-900 fixed top-0 left-0 z-[101]"
    >
      <h2
        className="text-5xl md:text-6xl font-extrabold uppercase tracking-[5px] text-center
                   w-[200px] md:w-auto 
                   bg-gradient-to-r from-black/60 via-white to-black/60
                   bg-clip-text text-transparent 
                   bg-no-repeat bg-[length:200%_100%] animate-shine"
      >
        {title}
      </h2>

      <p className="absolute bottom-[50px] left-[50px] text-white font-semibold text-base md:text-xl">
        Loading... {count}%
      </p>
    </motion.div>
  );
}
