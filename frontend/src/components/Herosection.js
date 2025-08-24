"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Profile Image with effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group flex justify-center lg:justify-end"
        >
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse"></div>

          <motion.img
            src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747996179/wkxus9cr05i2ncsvtb5d.jpg"
            alt="Shivam Kumar"
            className="h-40 w-40 sm:h-56 sm:w-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl text-center lg:text-left flex flex-col"
        >
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shivam Kumar</span>
          </h1>

          <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Full Stack Developer
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            I build modern, responsive web applications that combine performance with clean design. 
            Always exploring new technologies and pushing creative boundaries.
          </p>

          {/* Buttons with effects */}
          <div className="mt-6 flex sm:flex-row  justify-center lg:justify-start gap-4 ">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/projects"
                className="px-6 py-3 pb-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
