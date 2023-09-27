"use client"
import { useState } from "react";
import TextField from "./components/TextField";

export default function Home() {
  const [baseNumber, setBaseNumber] = useState(16);
  const [shouldRound, setShouldRound] = useState(false);
  const goldenRatio = 1.618033988749895;
  const [displayNumber, setDisplayNumber] = useState(16);
  const lowerMultiple = displayNumber / goldenRatio;
  const higherMultiple = displayNumber * goldenRatio;



  const handleInputChange = (e) => {
    const newBaseNumber = parseFloat(e.target.value);
    setBaseNumber(newBaseNumber);
    setDisplayNumber(newBaseNumber);
  };

  const resetToBase = () => {
    setDisplayNumber(baseNumber);
  };
  
  

  const processDisplayNumber = (num) => {
    return shouldRound ? Math.round(num) : num.toFixed(2);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl flex flex-col h-screen justify-center">
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center">
              <TextField
                label="Base Number"
                type="number"
                size="small"
                placeholder="Enter a number"
                value={baseNumber}
                onChange={handleInputChange}
              />
              <button
                onClick={resetToBase}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-6 flex justify-center items-center">
            <div className="text-sm sm:text-base lg:text-lg text-gray-600">
              {processDisplayNumber(lowerMultiple)}
            </div>
            <div className="text-2xl sm:text-4xl lg:text-6xl text-center mx-6">
              {processDisplayNumber(displayNumber)}
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-600">
              {processDisplayNumber(higherMultiple)}
            </div>
          </div>
          <div className="px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-2 sm:mb-0">
              <input
                type="checkbox"
                id="round"
                checked={shouldRound}
                onChange={() => setShouldRound(!shouldRound)}
              />
              <label htmlFor="round" className="ml-2 text-sm text-gray-600">
                Round
              </label>
            </div>
            <div className="flex justify-center sm:justify-between mt-6">
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded mx-2"
                onClick={() => setDisplayNumber(lowerMultiple)}
              >
                Previous Number
              </button>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded mx-2"
                onClick={() => setDisplayNumber(higherMultiple)}
              >
                Next Number
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" sticky bottom-2 right-2">
        <a
          href="https://www.buymeacoffee.com/antonymutharia"
          target="_blank"
          rel="noopener noreferrer" 
          className="group flex justify-center text-gray-500 hover:text-gray-800 "
        >
          Buy me a coffee
          <svg
            className="ml-2 text-current  group-hover:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path fill="currentColor" d="M440-240q-117 0-198.5-81.5T160-520v-240q0-33 23.5-56.5T240-840h500q58 0 99 41t41 99q0 58-41 99t-99 41h-20v40q0 117-81.5 198.5T440-240ZM240-640h400v-120H240v120Zm200 320q83 0 141.5-58.5T640-520v-40H240v40q0 83 58.5 141.5T440-320Zm280-320h20q25 0 42.5-17.5T800-700q0-25-17.5-42.5T740-760h-20v120ZM160-120v-80h640v80H160Zm280-440Z" />
          </svg>
        </a>
      </div>
      
    </div>
  );
}
