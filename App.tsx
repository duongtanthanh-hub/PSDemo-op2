import React, { useState, useCallback } from 'react';
import { AppState, GeneratedImage } from './types';
import { generateTetJourney } from './services/geminiService';
import Header from './components/Header';
import UploadStep from './components/UploadStep';
import GeneratingStep from './components/GeneratingStep';
import ResultsStep from './components/ResultsStep';
import { fileToGenerativePart } from './utils/fileUtils';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.UPLOAD);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!uploadedImage) {
      setError('Please upload an image first.');
      return;
    }

    setAppState(AppState.GENERATING);
    setError(null);

    try {
      const imagePart = await fileToGenerativePart(uploadedImage);
      const results = await generateTetJourney(imagePart);
      setGeneratedImages(results);
      setAppState(AppState.RESULTS);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred during image generation.');
      setAppState(AppState.ERROR);
    }
  }, [uploadedImage]);

  const handleReset = () => {
    setAppState(AppState.UPLOAD);
    setUploadedImage(null);
    setGeneratedImages([]);
    setError(null);
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.UPLOAD:
        return (
          <UploadStep
            onImageUpload={setUploadedImage}
            onGenerate={handleGenerate}
          />
        );
      case AppState.GENERATING:
        return <GeneratingStep />;
      case AppState.RESULTS:
        return (
          <ResultsStep images={generatedImages} onReset={handleReset} />
        );
      case AppState.ERROR:
        return (
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Generation Failed</h2>
            <p className="text-gray-700 mb-6">{error}</p>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors"
            >
              Try Again
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl mx-auto">
        <Header />
        <main className="mt-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
