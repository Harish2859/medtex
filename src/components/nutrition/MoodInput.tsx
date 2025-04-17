
import { useState } from "react";
import { Smile, Meh, Frown, User, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Mood = "happy" | "neutral" | "sad" | null;

const MoodInput = () => {
  const [selectedMood, setSelectedMood] = useState<Mood>(null);
  const [journalEntry, setJournalEntry] = useState("");
  const [detectedMood, setDetectedMood] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleMoodClick = (mood: Mood) => {
    setSelectedMood(mood);
  };

  const handleJournalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry(e.target.value);
  };

  const handleAnalyze = () => {
    if (!journalEntry.trim() && !selectedMood) return;
    
    setIsAnalyzing(true);
    
    // Simulate mood analysis delay
    setTimeout(() => {
      const moodOptions = [
        "Happy and energetic",
        "Calm and relaxed",
        "Focused and determined",
        "Mildly anxious",
        "Stressed but coping",
        "Tired and low energy",
        "Neutral",
        "Slightly sad",
      ];
      
      // Select a mood based on emoji or randomly if only journal text
      let analyzedMood;
      if (selectedMood === "happy") {
        analyzedMood = moodOptions.slice(0, 3)[Math.floor(Math.random() * 3)];
      } else if (selectedMood === "neutral") {
        analyzedMood = moodOptions.slice(3, 6)[Math.floor(Math.random() * 3)];
      } else if (selectedMood === "sad") {
        analyzedMood = moodOptions.slice(6)[Math.floor(Math.random() * 2)];
      } else {
        analyzedMood = moodOptions[Math.floor(Math.random() * moodOptions.length)];
      }
      
      setDetectedMood(analyzedMood);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <Card className="bg-white/90 dark:bg-neon-darkBlue/60 border-0 shadow-lg dark:shadow-none dark:glow">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">How are you feeling today?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center space-x-8">
            <Button
              variant="outline"
              className={`h-20 w-20 rounded-full flex flex-col items-center justify-center space-y-1 transition-all ${
                selectedMood === "happy"
                  ? "bg-green-100 border-green-400 dark:bg-green-900/30 dark:border-green-600"
                  : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
              onClick={() => handleMoodClick("happy")}
            >
              <Smile
                className={`h-10 w-10 ${
                  selectedMood === "happy" ? "text-green-500" : "text-gray-400"
                }`}
              />
              <span className="text-xs">Happy</span>
            </Button>
            
            <Button
              variant="outline"
              className={`h-20 w-20 rounded-full flex flex-col items-center justify-center space-y-1 transition-all ${
                selectedMood === "neutral"
                  ? "bg-yellow-100 border-yellow-400 dark:bg-yellow-900/30 dark:border-yellow-600"
                  : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
              onClick={() => handleMoodClick("neutral")}
            >
              <Meh
                className={`h-10 w-10 ${
                  selectedMood === "neutral" ? "text-yellow-500" : "text-gray-400"
                }`}
              />
              <span className="text-xs">Neutral</span>
            </Button>
            
            <Button
              variant="outline"
              className={`h-20 w-20 rounded-full flex flex-col items-center justify-center space-y-1 transition-all ${
                selectedMood === "sad"
                  ? "bg-blue-100 border-blue-400 dark:bg-blue-900/30 dark:border-blue-600"
                  : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
              onClick={() => handleMoodClick("sad")}
            >
              <Frown
                className={`h-10 w-10 ${
                  selectedMood === "sad" ? "text-blue-500" : "text-gray-400"
                }`}
              />
              <span className="text-xs">Sad</span>
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-primary dark:text-neon-blue" />
              <label htmlFor="journal" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                What's on your mind? (optional)
              </label>
            </div>
            <Textarea
              id="journal"
              value={journalEntry}
              onChange={handleJournalChange}
              placeholder="Share more about how you're feeling today..."
              className="resize-none min-h-[120px] bg-white/50 dark:bg-gray-900/50"
            />
          </div>
          
          <Button 
            onClick={handleAnalyze}
            disabled={(!journalEntry.trim() && !selectedMood) || isAnalyzing}
            className="w-full bg-primary hover:bg-primary/90 text-white dark:bg-neon-purple dark:hover:bg-neon-purple/90"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Mood"}
          </Button>
          
          {detectedMood && (
            <div className="mt-6 p-4 rounded-lg bg-primary/10 dark:bg-neon-blue/10 border border-primary/20 dark:border-neon-blue/20">
              <div className="flex items-start space-x-3">
                <Brain className="w-5 h-5 text-primary dark:text-neon-blue mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Mood Analysis</h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    Based on your input, you appear to be feeling <span className="font-semibold text-primary dark:text-neon-blue">{detectedMood}</span> today.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodInput;
