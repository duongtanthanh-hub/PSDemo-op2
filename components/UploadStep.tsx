import React, { useState, useRef, useCallback, ChangeEvent } from 'react';
import { UploadIcon } from './icons';

interface UploadStepProps {
  onImageUpload: (file: File) => void;
  onGenerate: () => void;
}

const UploadStep: React.FC<UploadStepProps> = ({ onImageUpload, onGenerate }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }
      setFile(selectedFile);
      onImageUpload(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl transition-all duration-300 w-full max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Your Photo</h2>
        <p className="text-gray-600 mb-6">Upload a clear, front-facing photo of yourself to begin your journey.</p>
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />

      <div 
        className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-gray-50 transition-colors"
        onClick={handleUploadClick}
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="h-full w-full object-contain p-2 rounded-lg" />
        ) : (
          <div className="text-center text-gray-500">
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2">Click to browse or drag and drop</p>
            <p className="text-xs">PNG, JPG, WEBP up to 10MB</p>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onGenerate}
          disabled={!file}
          className="w-full md:w-auto px-12 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
        >
          Generate My Tet Journey
        </button>
      </div>
    </div>
  );
};

export default UploadStep;
