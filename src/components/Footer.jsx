import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { TbApi } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 sm:h-22 h-auto w-full flex flex-col sm:flex-row items-center justify-between bg-purple-400 bg-opacity-30 backdrop-blur-sm p-4 px-10">
      <h2 className="text-purple-700 text-sm mb-2 sm:mb-0">Developed in India 🇮🇳</h2>
      <div className="flex space-x-6">
        <a href="https://github.com/mrravipandee/the-dictionary/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center text-purple-700 hover:text-purple-900">
          <FaGithub size={20} />
          <span className="text-xs">GitHub</span>
        </a>
        <a href="mailto:imravipanday@gmail.com" className="flex flex-col items-center justify-center text-purple-700 hover:text-purple-900">
          <IoIosContact size={20} />
          <span className="text-xs">Contact</span>
        </a>
        <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center text-purple-700 hover:text-purple-900">
          <TbApi size={20} />
          <span className="text-xs">API</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
