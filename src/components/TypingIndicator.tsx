
import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex items-center px-4 py-3 max-w-[80%] rounded-2xl glass neon-glow-pink border-neon-pink/30 mb-4">
      <span className="typing-dot bg-neon-pink animate-typing-dot-1"></span>
      <span className="typing-dot bg-neon-pink animate-typing-dot-2"></span>
      <span className="typing-dot bg-neon-pink animate-typing-dot-3"></span>
    </div>
  );
};

export default TypingIndicator;
