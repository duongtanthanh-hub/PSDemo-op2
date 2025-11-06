import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
        <div className="flex justify-center items-center gap-4">
            <span className="text-3xl font-extrabold text-blue-700">P/S</span>
            <div className="w-px h-8 bg-gray-300"></div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight">
                My Tet Journey Through Time
            </h1>
        </div>
      <p className="mt-2 text-sm md:text-base text-gray-600">
        Rediscover your Tet smile through the decades!
      </p>
    </header>
  );
};

export default Header;
