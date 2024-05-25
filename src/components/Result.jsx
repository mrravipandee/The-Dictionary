import React, { useState, useEffect } from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { PiUserSound } from "react-icons/pi";

const Result = ({ setShowModal, searchTerm }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setData(result[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  const playAudio = (url) => {
    if (url) {
      new Audio(url).play();
    } else {
      console.log("No audio available");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-purple-500 bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Search: {searchTerm}</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-purple-500 border-2 p-1 rounded-full border-purple-500"
          >
            <MdOutlineCloseFullscreen size={24} />
          </button>
        </div>
        <div>
          {data ? (
            <>
              <h3 className="text-lg font-semibold">Phonetic:</h3>
              {data.phonetics.length > 0 && (
                <div className="mb-2">
                  <p>{data.phonetics[0].text}</p>
                  {data.phonetics[0].audio && (
                    <button
                      className="bg-purple-500 text-white p-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out"
                      onClick={() => playAudio(data.phonetics[0].audio)}
                    >
                      Pronounce <PiUserSound size={20} className="ml-2" />
                    </button>
                  )}
                </div>
              )}
              {data.meanings.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    Part of Speech: {data.meanings[0].partOfSpeech}
                  </h3>
                  {data.meanings[0].definitions.length > 0 && (
                    <div className="mb-2">
                      <p>
                        <strong>Definition:</strong> {data.meanings[0].definitions[0].definition}
                      </p>
                      {data.meanings[0].definitions[0].example && (
                        <p>
                          <strong>Example:</strong> {data.meanings[0].definitions[0].example}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <p>{searchTerm ? "Loading..." : "No search term provided."}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
