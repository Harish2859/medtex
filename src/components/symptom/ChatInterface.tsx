import { useState } from "react";
import { Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm your AI health assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    // 🔁 Backend API call
    fetch("/api/symptom-checker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    })
      .then((res) => res.json())
      .then((data) => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.reply || "I'm sorry, I couldn't understand that. Please try again.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      })
      .catch((err) => {
        console.error("Error from backend:", err);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            content: "Oops! Something went wrong. Please try again later.",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      })
      .finally(() => setIsThinking(false));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="glass dark:glow dark:bg-neon-darkBlue/50 rounded-2xl flex flex-col h-[600px] w-full max-w-xl">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center">
          <Bot className="w-5 h-5 mr-2 text-primary dark:text-neon-blue" />
          AI Health Assistant
        </h3>
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs sm:max-w-md rounded-2xl p-4 ${
                message.sender === "user"
                  ? "bg-primary text-white dark:bg-neon-purple"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              } ${message.sender === "user" ? "rounded-tr-none" : "rounded-tl-none"}`}
            >
              <div className="flex items-start mb-1">
                {message.sender === "bot" ? (
                  <Bot className="w-5 h-5 mr-2 text-primary dark:text-neon-blue" />
                ) : (
                  <User className="w-5 h-5 mr-2 text-white" />
                )}
                <span className={`text-xs ${message.sender === "user" ? "text-white/80" : "text-gray-500"}`}>
                  {message.sender === "user" ? "You" : "AI Assistant"}
                </span>
              </div>
              <p className="whitespace-pre-wrap">{message.content}</p>
              <div className="text-right mt-1">
                <span className={`text-xs ${message.sender === "user" ? "text-white/70" : "text-gray-400"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            </div>
          </div>
        ))}

        {isThinking && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl rounded-tl-none p-4 max-w-xs sm:max-w-md">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-end space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your symptoms..."
            className="min-h-[60px] resize-none bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-neon-blue"
          />
          <Button
            onClick={handleSendMessage}
            disabled={input.trim() === "" || isThinking}
            size="icon"
            className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 dark:bg-neon-blue dark:hover:bg-neon-blue/90 transition-all duration-200"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

