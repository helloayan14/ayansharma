"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader } from "lucide-react";
export default function BookCall() {
   const { theme } = useTheme();
   const [isMounted, setIsMounted] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return null; // Prevents hydration mismatch

   return (
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 mt-5 dark:bg-black">
         {/* Twinkling Stars (Only in Dark Mode) */}
         {theme === "dark" && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {Array.from({ length: 50 }).map((_, i) => (
                  <div
                     key={i}
                     className="star"
                     style={{
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                        animationDelay: `${Math.random() * 3}s`,
                     }}
                  ></div>
               ))}
            </div>
         )}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-gray-800 dark:via-gray-400 dark:to-gray-800 transition-all"></div>
         {/* Heading */}
         <div className="text-center mb-6 relative z-10">
            <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
               {/* Replace Icon with Image */}
               <div className="relative w-10 h-10 ">
                  <Image
                     src="/meet.png" // Change to your image path
                     alt="Booking Icon"
                     layout="fill"
                     objectFit="contain"
                  />
               </div>
               Book a 30-Min Call
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
               Schedule a time that works for you!
            </p>
         </div>

         {/* Booking Widget with Loading */}
         <div className="w-full lg:max-w-6xl rounded-lg overflow-hidden shadow-lg relative z-10">
            {isLoading && (
               <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <p className="text-gray-600 dark:text-gray-400"><Loader size={20}/></p>
               </div>
            )}
            <iframe
               src="https://cal.com/helloayans/quick-chat"
               width="100%"
               height="700px"
               style={{
                  border: "2px black solid rgba(0, 0, 0, 0.1)",
                  backgroundColor: theme === "dark" ? "#18181b" : "#ffffff",

               }}
               className="rounded-lg"
               onLoad={() => setIsLoading(false)}
            ></iframe>
         </div>

         {/* Twinkling Stars CSS */}
         <style jsx>{`
            .star {
               position: absolute;
               width: 2px;
               height: 2px;
               background-color: white;
               border-radius: 50%;
               opacity: 0;
               animation: twinkle 3s infinite;
            }
            @keyframes twinkle {
               0%, 100% { opacity: 0; }
               50% { opacity: 1; }
            }
         `}</style>

         
      </div>
   );
}
