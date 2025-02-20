"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Tech Stack Data
const techStack = [
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "ReactJS", icon: "/react.png" },
  { name: "Postman", icon: "/postman.png" },
  { name: "Git", icon: "/git.png" },
  { name: "HTML", icon: "/html.png" },
  { name: "Express Js", icon: "/expressjs.png" },
  { name: "Python", icon: "/python.png" },
  { name: "Nest Js", icon: "/nextjs.png" },
  { name: "Node Js", icon: "/nodejs.png" },
  { name: "MongoDB", icon: "/mongo.png" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
  { name: "CSS", icon: "/css.png" },

];

export default function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    // <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all">
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black dark:bg-[radial-gradient(circle_at_top,_rgba(0,0,255,0.3)_0%,_transparent_70%)] transition-all">
     
      
      {/* Starry Background in Dark Mode */}
      <div className="absolute inset-0 w-full h-full pointer-events-none dark:bg-black">
        <div className="absolute w-full h-full animate-[twinkle_5s_infinite] dark:block hidden">
          {/* Stars */}
          {Array.from({ length: 50 }).map((_, i) => (
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

      {/* 3D Glass Effect */}
      <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
  className="relative flex justify-center items-center"
>
  <motion.div
    animate={{
      scale: [1, 1.05, 1],
      filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative"
  >
    <Image
      src="/techstack3.png"
      width={400}  // Increased size
      height={400}
      alt="Tech Stack"
      className="opacity-90 drop-shadow-[0_0_30px_rgba(0,150,255,0.6)]"
    />
  </motion.div>

  
</motion.div>


      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:text-5xl font-bold font-[Inter] z-10 text-3xl"
      >
        My Tech Stack
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-2 text-gray-600 dark:text-gray-400  z-10 font-[Inter] md:text-xl "
      >
        I constantly try to improve
      </motion.p>

      {/* Tech Stack Grid */}
      <motion.div
        className="mt-10 grid grid-cols-4 md:grid-cols-6 gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex items-center px-0 sm:px-4 c py-2 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition hover:shadow-lg hover:border-black dark:hover:border-white"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={tech.icon}
              width={24}
              height={24}
              alt={tech.name}
              className="bg-transparent dark:bg-black "
            />
            <span className="sm:ml-2 text-black dark:text-white text-sm mr-2 sm:mr-0 ">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800 transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      ></motion.div>

      {/* CSS for Twinkling Stars */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

