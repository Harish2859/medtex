
import React, { useState } from 'react';
import { Mic, MicOff, Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleVoiceMode = () => {
    setIsVoiceMode(!isVoiceMode);
    // In a real app, this would trigger voice recognition
  };

  return (
    <div className="relative w-full">
      <div className="glass-card flex items-center p-2 w-full">
        <button 
          onClick={toggleVoiceMode}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label={isVoiceMode ? "Disable voice input" : "Enable voice input"}
        >
          {isVoiceMode ? (
            <MicOff className="h-5 w-5 text-neon-pink" />
          ) : (
            <Mic className="h-5 w-5 text-gray-400" />
          )}
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isVoiceMode ? "Listening..." : "Type a message..."}
          className="flex-grow mx-2 py-2 px-3 bg-transparent focus:outline-none text-foreground"
          disabled={isVoiceMode}
        />
        
        <button
          onClick={handleSend}
          disabled={!message.trim() && !isVoiceMode}
          className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50"
          aria-label="Send message"
        >
          <Send className="h-5 w-5 text-neon-blue" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
