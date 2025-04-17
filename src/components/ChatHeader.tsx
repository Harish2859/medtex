
import React from 'react';

interface ChatHeaderProps {
  title: string;
  status?: string;
}

const ChatHeader = ({ title, status = "Online" }: ChatHeaderProps) => {
  return (
    <div className="glass-card p-4 mb-4 flex items-center">
      <div className="flex items-center">
        <div className="relative">
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-neon-purple/50">
            <div className="text-neon-purple text-xl font-semibold">AI</div>
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background"></div>
        </div>
        <div className="ml-3">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-xs text-gray-400">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
