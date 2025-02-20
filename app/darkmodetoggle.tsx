"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {resolvedTheme === "light" ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
    </button>
  );
};

export default DarkModeToggle;


