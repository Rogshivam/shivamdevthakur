import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'CSS', 'HTML', 'JavaScript'],
  Backend: ['Node.js', 'PHP', 'Prisma'],
  Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
  Programming: ['C', 'C++', 'Python'],
  Tools: ['Postman', 'Linux'],
  DevOps: ['Docker', 'Jenkins', 'YAML', 'Kubernetes', 'CI/CD', 'DevOps'],
};

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 pt-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Card Container */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              🎓 Education
            </h3>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-lg font-medium text-gray-800 dark:text-white">
                B.Tech in Computer Science
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Maharshi Dayanand University · 2023 – Present
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              📍 Location
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Haryana, India
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              🛠️ Skills
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-md overflow-hidden"
                >
                  <h4 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
                    {skillList.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block whitespace-nowrap px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white rounded-full shadow-sm transition"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume (optional) */}
          {/* 
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              📄 Resume
            </h3>
            <a
              href="https://drive.google.com/file/d/1A4FnDAQeEGMFl9EN2kEyThgEWqn-r7Jh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div> 
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
