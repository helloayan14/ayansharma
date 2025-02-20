"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import DarkModeToggle from "../darkmodetoggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-lg ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 shadow-md"
          : "bg-gradient-to-b from-white to-blue-100 dark:from-black dark:via-black dark:to-slate-800"
      } ${scrolled ? "" : "shadow-sm shadow-blue-300 dark:shadow-gray-900"} text-black dark:text-white`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center dark:text-gray-500 dark:hover:text-white">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold dark:text-white text-black">
          AS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Key Points", path: "/Keypoints" },
            { name: "Projects", path: "/project" },
            { name: "Experience", path: "/Experience" },
            { name: "About me", path: "/about" },
            { name: "Tech Stack", path: "/techstack" },
            { name: "Contact", path: "/contact" },
            { name: "Book a Call", path: "/Bookacall" },

          ].map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`relative px-2 py-1 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300 ${
                pathname === path ? "border-t-2 border-blue-500 dark:border-pink-400" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-black p-4 space-y-4 text-center shadow-md"
        >
          {[
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: "Projects", path: "/projects" },
            { name: "Tech Stack", path: "/techstack" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`block py-2 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300 ${
                pathname === path ? "border-t-2 border-blue-500 dark:border-blue-400" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;


