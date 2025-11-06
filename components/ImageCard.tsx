import React from 'react';
import { GeneratedImage } from '../types';
import { DownloadIcon } from './icons';

interface ImageCardProps {
  image: GeneratedImage;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const { decade, imageUrl } = image;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    // Sanitize decade string for filename
    const filename = `ps_tet_journey_${decade.toLowerCase().replace(/\s+/g, '_')}.png`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src={imageUrl} alt={`Tet celebration in ${decade}`} className="w-full h-auto aspect-square object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 font-semibold rounded-full shadow-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <DownloadIcon className="w-5 h-5" />
              Download
            </button>
        </div>
      </div>
      <div className="p-4 bg-gray-50">
        <h3 className="text-xl font-bold text-gray-800 text-center">
          {decade}
        </h3>
      </div>
    </div>
  );
};

export default ImageCard;
