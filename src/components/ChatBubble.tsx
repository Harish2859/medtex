
import React from 'react';
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

const ChatBubble = ({ message, isUser, timestamp }: ChatBubbleProps) => {
  return (
    <div className={cn(
      "flex w-full mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] px-4 py-3 rounded-2xl glass",
        isUser 
          ? "neon-glow-blue border-neon-blue/30" 
          : "neon-glow-pink border-neon-pink/30"
      )}>
        <div className="text-sm sm:text-base">{message}</div>
        <div className="text-xs text-gray-400 mt-1 text-right">{timestamp}</div>
      </div>
    </div>
  );
};

export default ChatBubble;
