import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="dark:bg-black  text-black dark:text-gray-400 py-12 px-6 pt-10 shadow-lg  bg-gradient-to-t dark:from-black dark:via-black dark:to-gray-800 from-white via-blue-50 to-blue-100 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-lg md:text-2xl font-semibold dark:text-white text-black">Ayan Sharma</h2>
          <p className="mt-4 text-sm">
            Helping you create experiences where aesthetics & functionality seamlessly come together.
          </p>
          <div className="flex items-center gap-4 mt-6 text-xl">
            <FaLinkedin className="cursor-pointer text-black hover:text-black dark:text-white dark:hover:text-gray-300 " />
            <FaGithub className="cursor-pointer text-black hover:text-black dark:text-white dark:hover:text-gray-300" />
            <FaTwitter className="cursor-pointer text-black hover:text-black dark:text-white dark:hover:text-gray-300" />
          </div>
        </div>

        {/* Center Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="dark:text-white text-black font-semibold text-xl">General</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/">Home</Link> </li>
              <li><Link href="/project">Projects</Link> </li>
              <li><Link href="/about">About </Link> </li>
              <li><Link href="/Keypoints">keyPoints</Link> </li>
            </ul>
          </div>
          <div>
            <h3 className="dark:text-white text-black font-semibold text-xl">The Website</h3>
            <ul className="mt-4 space-y-2 text-sm ">
          
              <li><Link href="/Bookacall">Book a Call</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="dark:text-white text-black font-semibold text-xl">Contact</h3>
          <p className="mt-4 text-sm">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-blue-400">
            <Mail className="w-5 h-5" />
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ayansharma2006@email.com&su=Hello&body=I%20want%20to%20talk%20about... " target="_blank" className="hover:underline">
              ayansharma2006@gmail.com
            </Link>
          </div>
        </div>
      </div>

      {/* Exact Border Line as in the Image */}
      <div className="mt-10">
        <div className="h-[2px] bg-gradient-to-r  dark:from-black dark:via-gray-200 dark:to-black from-white via-blue-300 to-white opacity-50 mx-auto w-full"></div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 pt-4 text-center text-sm ">
        <p>Copyright © 2025 Ayan Sharma. All rights reserved.</p>
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-green-400">● Not Playing</span>
          <span>·</span>
          <span>Spotify</span>
          <span>·</span>
          <span>Ayan Sharma</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



