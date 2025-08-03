import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-10">
            <motion.img
              src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747996179/wkxus9cr05i2ncsvtb5d.jpg"
              alt="Shivam Kumar"
              className="mx-auto h-48 w-48 sm:h-64 sm:w-64 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          </div>
          <div >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Shivam Kumar
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I build modern web applications using the latest frameworks and tools. I'm passionate about crafting clean, intuitive, and responsive user experiences that seamlessly combine performance with elegant design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3 text-center border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-white dark:bg-gray-800 ">
        <div className=" ">
          <About />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </section>
    </main>
  );
};

export default Home;
