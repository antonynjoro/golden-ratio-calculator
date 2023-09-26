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
            <TextField label="Base Number" type="number" size="small" placeholder="Enter a number" value={baseNumber} onChange={handleInputChange} />
            <button onClick={resetToBase} className="ml-2 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>

            </button>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6 flex justify-center items-center">
          <div className="text-sm sm:text-base lg:text-lg text-gray-600">{processDisplayNumber(lowerMultiple)}</div>
          <div className="text-2xl sm:text-4xl lg:text-6xl text-center mx-6">{processDisplayNumber(displayNumber)}</div>
          <div className="text-sm sm:text-base lg:text-lg text-gray-600">{processDisplayNumber(higherMultiple)}</div>
        </div>
        <div className="px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="mb-2 sm:mb-0">
            <input type="checkbox" id="round" checked={shouldRound} onChange={() => setShouldRound(!shouldRound)} />
            <label htmlFor="round" className="ml-2 text-sm text-gray-600">Round</label>
          </div>
          <div className="flex justify-center sm:justify-between mt-6">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded mx-2" onClick={() => setDisplayNumber(lowerMultiple)}>
              Previous Multiple
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded mx-2" onClick={() => setDisplayNumber(higherMultiple)}>
              Next Multiple
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
