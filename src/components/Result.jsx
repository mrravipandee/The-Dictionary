import React from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { PiUserSound } from "react-icons/pi";

const Result = ({ setShowModal, searchTerm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-purple-500 bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Search Result</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-purple-500 border-2 p-1 rounded-full border-purple-500"
          >
            <MdOutlineCloseFullscreen size={24} />
          </button>
        </div>
        <p>
          {searchTerm
            ? `Results for "${searchTerm}"`
            : "No search term provided."}
        </p>
        <button className="mt-4 bg-purple-500 text-white p-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out">
          Pronounce <PiUserSound size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Result;
