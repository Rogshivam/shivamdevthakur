"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({
  title = "SHIVAM KUMAR",
  speed = 20
}) {
  const [count, setCount] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Check if loader was already shown this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (!hasSeenLoader) {
      setShowLoader(true);
      sessionStorage.setItem("hasSeenLoader", "true");
    }
  }, []);

  // Handle counting
  useEffect(() => {
    if (showLoader && count < 100) {
      const timer = setTimeout(() => setCount(count + 1), speed);
      return () => clearTimeout(timer);
    }
    if (count === 100) {
      setTimeout(() => setShowLoader(false), 500); // small delay before hiding
    }
  }, [count, speed, showLoader]);

  if (!showLoader) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: count === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col justify-center items-center h-full w-full 
                 bg-gray-100 dark:bg-gray-900 fixed top-0 left-0 z-[101]"
    >
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold uppercase 
             tracking-wide text-center px-4
             bg-gradient-to-r from-black/60 via-white to-black/60
             bg-clip-text text-transparent
             bg-no-repeat bg-[length:200%_100%] animate-shine break-words 
             "
      >
        {title}
      </motion.h2>

      {/* <div className="absolute bottom-12 flex flex-col items-center space-y-3">
         <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">
           Loading {count}%
         </p>
        <div className="w-64 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="h-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500"
          />
        </div>
      </div> */}
    </motion.div>
  );
}

