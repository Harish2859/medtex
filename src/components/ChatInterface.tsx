
import React, { useState, useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: formatTime(new Date()),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    // Add user message
    const userMessage = {
      text,
      isUser: true,
      timestamp: formatTime(new Date()),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response after delay
    setTimeout(() => {
      setIsTyping(false);
      
      const aiMessage = {
        text: getAIResponse(text),
        isUser: false,
        timestamp: formatTime(new Date()),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  // Simple AI response generator
  const getAIResponse = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return "Hello there! How can I assist you today?";
    } else if (lowerMsg.includes('how are you')) {
      return "I'm functioning optimally, thank you for asking! How are you doing?";
    } else if (lowerMsg.includes('name')) {
      return "I'm an AI assistant created to help answer your questions.";
    } else if (lowerMsg.includes('thank')) {
      return "You're welcome! Is there anything else you'd like help with?";
    } else if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye')) {
      return "Goodbye! Feel free to chat again anytime.";
    } else {
      return "That's an interesting message. Can you tell me more about what you're looking for?";
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto">
      <ChatHeader title="GlassGlow AI" />
      
      <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent p-4 mb-4 glass-card">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            message={msg.text}
            isUser={msg.isUser}
            timestamp={msg.timestamp}
          />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;
