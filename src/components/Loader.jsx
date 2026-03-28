// src/components/Loader.jsx
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // The vanilla js in Partical_BG takes about 1000ms total before fade out starts.
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setPercent(current);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      id="loader" 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white transition-opacity duration-1000 ease-in-out"
    >
      <div className="flex flex-col items-center">
        {/* Minimalist Brand Name */}
        <div className="text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-12 text-white">
          Vraj.Dev
        </div>
        
        {/* Percentage Counter */}
        <div className="text-7xl md:text-9xl font-extralight tracking-tighter tabular-nums">
          {percent}<span className="text-3xl md:text-5xl opacity-30 ml-2">%</span>
        </div>
        
        {/* Subtle Line Indicator - hooked to existing Partical_BG logic */}
        <div className="w-full max-w-60 h-px bg-white/10 mt-12 overflow-hidden">
          <div 
            id="progress-bar" 
            className="h-full bg-white w-0 transition-all duration-1000 ease-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
