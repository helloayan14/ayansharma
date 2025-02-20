"use client"
import { motion } from "framer-motion";

export default function ContactMe() {


  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-full dark:bg-black bg-white overflow-hidden text-center px-4"
    >

<div className="absolute inset-0 w-full h-full pointer-events-none dark:bg-black">
        <div className="absolute w-full h-full animate-[twinkle_5s_infinite] dark:block hidden">
          {/* Stars */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white opacity-70 rounded-full shadow-[0_0_4px_white]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800 transition-all"></div>
  
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white"
      >
        <div className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          FROM CONCEPT TO <span className="dark:text-pink-600 text-blue-800">CREATION</span>
        </div>
        <div className="text-2xl md:text-4xl mt-2 text-black dark:text-white">
          LET&apos;S MAKE IT <span className="dark:text-pink-600 text-blue-900">HAPPEN!</span>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ayansharma2006@email.com&su=Hello&body=I%20want%20to%20talk%20about...", "_blank")}
          className="mt-6 px-6 py-3 bg-black text-white dark:bg-white dark:text-black  text-lg font-medium rounded-full border border-gray-400 shadow-lg " 
        >
          Get In Touch 
        </motion.button>
        
        <p className="mt-4 dark:text-gray-300 text-lg  text-blue-500">
          I&apos;m available for full-time roles & freelance projects.
        </p>
      </motion.div>

      
    </div>
  );
}
