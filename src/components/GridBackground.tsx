
import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] to-black"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 animate-grid-pulse"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-neon-blue/20 blur-[80px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 rounded-full bg-neon-pink/20 blur-[80px] animate-pulse-slow"></div>
      <div className="absolute top-2/3 left-1/3 w-60 h-60 rounded-full bg-neon-purple/10 blur-[100px] animate-pulse-slow"></div>
    </div>
  );
};

export default GridBackground;
