"use client"
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    title: "Reelise",
    description:
      "Developed a platform for Reels uploading to enjoy the social media of reels",
    image: "/project1.png",
    github: "https://github.com/helloayan14/Reelise",
    live: "https://reelise.vercel.app/",
    tech: ["Next.js", "React", "TypeScript", "Next Auth", "Daisy UI", "TailwindCSS", "Image Kit", "MongoDB"],
    bgColor: "#0D92F4"
  },
  {
    title: "Mssg Sent",
    description: "An anonymous messaging platform",
    image: "/project2.png",
    github: "https://github.com/helloayan14/mssgsent",
    live: "https://mssgsent.vercel.app/",
    tech: ["Next.js", "React", "TypeScript", "Next Auth", "Shadcn UI", "TailwindCSS", "Gmail SMTP", "MongoDB", "Mongoose", "Zod", "Cohere API"],
    bgColor: "#213555"
  },
  {
    title: "AS Blogs",
    description: "A Blogging platform.",
    image: "/project3.png",
    github: "https://github.com/helloayan14/As-Blogs",
    live: "https://as-blogs.vercel.app/",
    tech: ["React", "Vite", "Tailwind CSS", "Appwrite", "MongoDB"],
    bgColor: "#F7F7F7"
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-background text-foreground min-h-screen dark:bg-black overflow-hidden mt-10 border-t-2 ">
      {/* Heading */}
      {/* <h2 className="absolute  top-10 text-4xl font-bold text-center font-[Garamond] w-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-500 dark:via-pink-400 dark:to-pink-500 bg-clip-text text-transparent    ">
        Curated Work     
      </h2>  */}

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800"></div>

<h1 className="absolute  top-10 text-3xl font-semibold text-center  text-black dark:text-white md:text-5xl lg:text-4xl"><span className=" ">Projects</span></h1>



      {/* Twinkling Stars Effect */}
      <div className="absolute inset-0 pointer-events-none">  
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -5, 0] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="w-full lg:w-1/2 flex flex-col md:grid md:grid-cols-2 gap-x-4 gap-y-4  items-center relative  mt-10 min-h-screen">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveProject(activeProject === index ? null : index)}
            className="w-full max-w-3xl mb-12 p-6 rounded-xl backdrop-blur-lg shadow-lg cursor-pointer relative hover:shadow-xl transition-all bg-gradient-to-r dark:from-black dark:via-black dark:to-gray-800 from-white via-blue-50 to-blue-100   dark:hover:shadow-pink-300 hover:shadow-blue-300"
            style={{ backgroundColor: project.bgColor }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={project.image} alt={project.title} width={800} height={400} className="rounded-2xl border-4 border-white border-opacity-50" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-3 mt-4 border font-semibold border-blue-400  text-primary rounded-lg text-sm bg-opacity-100 hover:bg-opacity-80 backdrop-blur-md dark:text-black dark:border-white dark:bg-white bg-blue-400  text-white"
            >
              Click Anywhere to See
            </motion.button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 dark:bg-black dark:bg-opacity-90 bg-opacity-90 flex justify-center items-center z-50 p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}  
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-black p-6 rounded-lg shadow-lg max-w-md w-full border border-gray-500 backdrop-blur-lg"
            >
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Link
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="text-lg" /> {projects[activeProject].title}
                </Link>
              </h2>
              <p className="text-sm mb-2">{projects[activeProject].description}</p>
              <div className="flex flex-wrap gap-1">
                {projects[activeProject].tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 bg-primary dark:bg-white dark:text-black text-white rounded-lg text-xs"
                >
                  <Link href={projects[activeProject].live} target="_blank" rel="noopener noreferrer">
                    Visit Live
                  </Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 border border-primary text-primary rounded-lg text-xs"
                >
                  <Link href={projects[activeProject].github} target="_blank" rel="noopener noreferrer">
                    View Code
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


