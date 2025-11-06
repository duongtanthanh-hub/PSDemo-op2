import React from 'react';
import { GeneratedImage } from '../types';
import ImageCard from './ImageCard';

interface ResultsStepProps {
  images: GeneratedImage[];
  onReset: () => void;
}

const ResultsStep: React.FC<ResultsStepProps> = ({ images, onReset }) => {
  return (
    <div className="w-full text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Tet Journey Through Time!</h2>
      <p className="text-gray-600 mb-8">View, download, and share your unique Tet moments from each decade.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((image) => (
          <ImageCard key={image.decade} image={image} />
        ))}
      </div>

      <div className="mt-12">
        <button
          onClick={onReset}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors"
        >
          Create Another Journey
        </button>
      </div>
    </div>
  );
};

export default ResultsStep;