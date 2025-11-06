import React, { useState, useEffect } from 'react';
import { LOADING_MESSAGES } from '../constants';

const GeneratingStep: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % LOADING_MESSAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[300px]">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">Generating Your Journey...</h2>
      <p className="text-gray-600 transition-opacity duration-500 ease-in-out">
        {LOADING_MESSAGES[messageIndex]}
      </p>
    </div>
  );
};

export default GeneratingStep;
