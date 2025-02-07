import React from "react";
import Link from "next/link";
import { Home, User, Code, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg md:static md:w-auto z-10 md:mx-auto rounded-none md:rounded-xl p-4 md:w-4/5 lg:w-3/5 shadow-md lg:my-4">
      <ul className="flex justify-around md:justify-center space-x-6">
        <li>
          <Link
            href="/"
            className="text-gray-700 font-bold flex flex-col items-center"
          >
            <Home className="h-6 w-6 md:hidden" />
            <span className="md:block">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-700 font-bold flex flex-col items-center"
          >
            <User className="h-6 w-6 md:hidden" />
            <span className="md:block">About</span>
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-gray-700 font-bold flex flex-col items-center"
          >
            <Code className="h-6 w-6 md:hidden" />
            <span className="md:block">Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-gray-700 font-bold flex flex-col items-center"
          >
            <Mail className="h-6 w-6 md:hidden" />
            <span className="md:block">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
