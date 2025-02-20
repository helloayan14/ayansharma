"use client";
import { useState, useEffect, JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MapPinned, Handshake, FolderOpenDot } from "lucide-react";
import Link from "next/link";
const WorkSection = () => {
  const { theme } = useTheme();
  const [showContact, setShowContact] = useState(false);
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (theme === "dark") {
      const starElements = Array.from({ length: 50 }).map((_, i) => {
        const size = Math.random() * 3 + 1; // Random size
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 2 + 1; // Random animation duration

        return (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${y}%`,
              left: `${x}%`,
              animation: `twinkle ${duration}s infinite alternate ease-in-out`,
            }}
          />
        );
      });
      setStars(starElements);
    } else {
      setStars([]); // Remove stars in light mode
    }
  }, [theme]);

  return (
    <>
      <main className="relative dark:bg-black border-b-3 border-transparent  dark:border-gradient-to-r dark:from-black dark:via-white dark:to-black pt-10 mt-12 ">
        {/* Twinkling Stars in Dark Mode */}
        {theme === "dark" && <div className="absolute inset-0">{stars}</div>}
        <h2 className="text-3xl lg:text-4xl font-bold  text-center w-full   mb-10">
         Essential Points
      </h2>
        

        <section className="relative flex flex-col md:grid md:grid-cols-2 gap-4 p-4 dark:bg-black min-h-screen lg:w-3/4 mx-auto border-b-2 border-transparent dark:border-b-2 dark:border-gradient-to-r dark:from-blue-500 dark:to-purple-500">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative dark:bg-black p-6 rounded-xl shadow-lg dark:hover:shadow-pink-300 hover:shadow-blue-300 hover:shadow-lg transition-all dark:text-white sm:mx-6 sm:my-4 bg-gradient-to-r dark:from-black dark:via-black dark:to-gray-800 from-white via-blue-50 to-blue-100"
          >
            <Image className="image-placeholder w-full h-80 bg-gray-700 rounded-lg mb-4" src={"/team2.jpg"} alt="Collaboration" width={500} height={500} />
            <h3 className="text-xl font-bold dark:text-pink-600 text-blue-500">Collaboration <Handshake className="inline ml-2" /></h3>
            <p className="text-black dark:text-gray-300 sm:mt-2">I prioritize client collaboration, fostering open communication.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative dark:bg-black p-6 rounded-xl shadow-lg dark:hover:shadow-pink-300 hover:shadow-blue-300  hover:shadow-lg transition-all cursor-pointer dark:text-white sm:mx-6 sm:my-4 bg-gradient-to-r dark:from-black dark:via-black dark:to-gray-800 from-white via-blue-50 to-blue-100"
            onClick={() => setShowContact(!showContact)}
          >
            <Image className="image-placeholder w-full h-80 bg-gray-700 rounded-lg mb-4" src={"/time2.jpg"} alt="Availability" width={500} height={500} />
            <h3 className="text-xl font-bold text-blue-500 dark:text-pink-600">Availability <MapPinned className="inline ml-2" /></h3>
            <p className="text-black dark:text-gray-300 sm:mt-2 sm:mb-2">I am available for new projects and collaborations.</p>
            {showContact && (
            <Link 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ayansharma2006@email.com&su=Hello&body=I%20want%20to%20talk%20about..."
            target="_blank"
            className="px-5 py-2 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-white dark:text-black"
          >
            Contact
          </Link>
            )}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative dark:bg-black p-6 rounded-xl shadow-lg dark:hover:shadow-pink-300 hover:shadow-blue-300 hover:shadow-lg transition-all md:col-span-2 dark:text-white sm:mx-6 sm:my-4 bg-gradient-to-r dark:from-black dark:via-black dark:to-gray-800 from-white via-blue-50 to-blue-100"
          >
            <Image className="image-placeholder w-full h-80 bg-gray-700 rounded-lg mb-4" src={"/work2.jpg"} alt="Current Project" width={500} height={500} />
            <h3 className="text-xl font-bold dark:text-pink-600 text-blue-600">Current Project <FolderOpenDot className="inline ml-2" /></h3>
            <p className="text-black dark:text-gray-300 sm:mt-2">Working on a Next.js portfolio with animations and motion effects.</p>
          </motion.div>
        </section>

        
      </main>
    </>
  );
};

export default WorkSection;

