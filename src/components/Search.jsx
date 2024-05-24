import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { FaMicrophoneAlt } from "react-icons/fa";
import Result from './Result';

const Search = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  const handleSearchClick = () => {
    if (inputText.trim() === '') {
      setError('Please enter a search term');
    } else {
      setError('');
      setShowModal(true);
    }
  };

  return (
    <div className='flex items-center justify-center h-[10rem] w-full'>
      <div className="search flex items-center bg-white rounded-full shadow-lg p-2">
        <input 
          type="text" 
          className='h-10 px-4 py-2 rounded-full border-none outline-none flex-grow text-gray-700 md:w-[25rem]' 
          placeholder='Search here...' 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button 
          type="button" 
          className='border-2 border-purple-600 text-purple-500 p-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out'>
          <FaMicrophoneAlt size={20} />
        </button>
        <button 
          onClick={handleSearchClick}
          type="button" 
          className='bg-purple-500 hover:bg-purple-600 text-white p-2 ml-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out'>
          <ImSearch size={20} />
        </button>
      </div>
      {error && <span className="text-red-500 fixed mt-[6rem]">{error}</span>}
      {showModal && <Result setShowModal={setShowModal} searchTerm={inputText} />}
    </div>
  );
};

export default Search;
