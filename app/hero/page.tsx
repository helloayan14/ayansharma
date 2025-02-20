"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const roles = ["Ayan Sharma", "Web Developer", "Full-Stack Engineer"];
const roles2 = [
  "Problem Solving",
  "Complete cycle of web development",
  "Let's connect",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-white dark:bg-black cursor-context-menu">
      {/* Starry Background in Dark Mode */}
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

      {/* Hero Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold md:text-6xl text-black dark:text-gray-400"
        >
          I help founders turn ideas into seamless{" "}
          <span className="dark:text-white font-[Geist] text-blue-800">
            digital websites
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-3 text-xl text-gray-600 dark:text-gray-400"
        >
          I am a{" "}
          <span className="md:text-3xl dark:text-pink-700 text-blue-500 font-bold tracking-wide">
            {roles[index]}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-3 text-sm md:text-lg text-black dark:text-gray-500 font-semibold"
        >
          Doing the following things to help you around <span className="dark:text-gray-100">
            {roles2[index]}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}  
          className="mt-6 flex space-x-4 justify-center"
        >
          <Link href="https://drive.google.com/file/d/1OTtE40uRk65iKFBa1SVfHQ7iZZGbzQ2q/view?usp=drive_link"
          target="_blank">
          
            <button className="px-6 py-3 dark:bg-white hover:dark:bg-gray-100 dark:text-black bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Resume
            </button> 
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition dark:text-white dark:border-gray-300 dark:hover:bg-white dark:hover:text-black">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>


      {/* Bottom Border with Transition Effect */}
      <motion.div
        className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800 transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      ></motion.div>

      {/* CSS for Twinkling Stars */}
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

export default Hero;
