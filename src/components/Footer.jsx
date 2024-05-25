import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { TbApi } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 sm:h-22 h-auto w-full flex flex-col sm:flex-row items-center justify-between bg-purple-400 bg-opacity-30 backdrop-blur-sm p-4 px-10">
      <h2 className="text-purple-700 text-sm mb-2 sm:mb-0">Developed in India 🇮🇳</h2>
      <div className="flex space-x-16 md:space-x-8">
        <button className="flex flex-col items-center justify-center text-purple-700 hover:text-purple-800">
          <FaGithub size={20} />
          <span className="text-xs">GitHub</span>
        </button>
        <button className="flex flex-col items-center justify-center text-purple-700 hover:text-purple-800">
          <IoIosContact size={20} />
          <span className="text-xs">Contact</span>
        </button>
        <button className="flex flex-col items-center justify-center text-purple-700 hover:text-purple-800">
          <TbApi size={20} />
          <span className="text-xs">API</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
