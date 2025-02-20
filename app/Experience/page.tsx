'use client';

import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 dark:bg-black overflow-hidden min-h-screen">
      {/* Twinkling Starlight effect for dark mode */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="w-full h-full bg-transparent animate-pulse" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 100%)`,
          animation: 'twinkle 3s infinite alternate'
        }}></div>
      </div>

      {/* Gradient Upper Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800 transition-all"></div>
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="lg:text-4xl text-3xl font-bold mb-6 "
      >
        Work Experience
      </motion.h2>
      
      {/* Fresher Message */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="dark:bg-black text-black dark:text-white p-6 rounded-2xl shadow-lg dark:shadow-pink-500/50 shadow-blue-500/20 max-w-md text-center"
      >
        <p className="text-lg font-semibold">I am a fresher, eager to learn and grow in the industry.</p>
        <p className="mt-2 text-blue-400 dark:text-gray-600">Motivated to work on real-world projects and excited to collaborate with teams.</p>
      </motion.div>
      
      {/* Future Experience Section (Hidden Initially) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 w-full max-w-2xl"
      >
        {/* Placeholder for future experiences */}
        <div className="border border-gray-700 rounded-lg p-4 text-center text-gray-500">
          My future work experiences will appear here.
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;


