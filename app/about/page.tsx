"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const AboutMe = () => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);
  const pencilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (textRef.current && pencilRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    if (hovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      if (textRef.current) {
        // const rect = textRef.current.getBoundingClientRect();
        setPosition({ x: 0, y: 0 });
      }
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hovered]);

  return (
    <section 
      className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 relative min-h-screen"
    >

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
      {/* Animated Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-48 h-48 md:w-80 md:h-80  shadow-blue-500"
      >
        <Image
          src="/profile.jpg"
          alt="Your Name"
          layout="fill"
          objectFit="cover"
          className="rounded-full shadow-lg"
        />
      </motion.div>

      {/* Text and Pencil Animation */}
      <div 
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        ref={textRef}
      >
        <h2 className="text-3xl md:text-5xl font-bold relative inline-block">
          About Me
        </h2>
        <p className="mt-4 text-lg text-blue-900  dark:text-gray-300 max-w-lg">
          I am a passionate full-stack developer who enjoys creating interactive
          and visually appealing web applications. Always eager to learn and
          explore new technologies!
         <p> Currently I live in - Gorakhpur [273014], Uttar Pradesh(India) </p>
        </p>
      </div>

      {/* Pencil Animation */}
      <motion.div
        className="absolute w-24 h-24 md:w-32 md:h-32"
        ref={pencilRef}
        initial={{ x: 0, y: 0 }}
        animate={{ x: hovered ? position.x : 0, y: hovered ? position.y : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image
          src="/pencil.png"
          alt="Pencil"
          width={140}
          height={140}
        />
      </motion.div>
    </section>
  );
};

export default AboutMe;



