
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MoodInput from "@/components/nutrition/MoodInput";
import MealCard from "@/components/nutrition/MealCard";

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState("meals");
  
  const mealData = [
    {
      id: "1",
      title: "Mood-Boosting Breakfast Bowl",
      image: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "A nutrient-rich breakfast bowl with greek yogurt, berries, nuts, and honey. High in omega-3s and antioxidants to boost mental clarity and mood.",
      tags: ["Breakfast", "High-Protein", "Omega-3"],
      nutrients: {
        calories: 420,
        protein: 24,
        carbs: 45,
        fats: 18,
      },
    },
    {
      id: "2",
      title: "Energy-Balancing Buddha Bowl",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "A balanced lunch with quinoa, roasted vegetables, avocado, and tahini dressing. Provides sustained energy and mood stabilization.",
      tags: ["Lunch", "Plant-Based", "Complex-Carbs"],
      nutrients: {
        calories: 550,
        protein: 18,
        carbs: 65,
        fats: 22,
      },
    },
    {
      id: "3",
      title: "Calming Turmeric Ginger Soup",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "A soothing soup with anti-inflammatory properties from turmeric and ginger. Perfect for reducing stress and supporting immune function.",
      tags: ["Dinner", "Anti-Inflammatory", "Comfort"],
      nutrients: {
        calories: 320,
        protein: 12,
        carbs: 35,
        fats: 14,
      },
    },
    {
      id: "4",
      title: "Focus-Enhancing Salmon Plate",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Wild-caught salmon with sweet potatoes and leafy greens. Rich in omega-3s and B vitamins to support brain function and focus.",
      tags: ["Dinner", "High-Omega-3", "Brain-Food"],
      nutrients: {
        calories: 480,
        protein: 32,
        carbs: 38,
        fats: 20,
      },
    },
    {
      id: "5",
      title: "Stress-Reducing Adaptogen Smoothie",
      image: "https://images.unsplash.com/photo-1553530666-ba11a90a0819?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "A blend of berries, banana, adaptogens, and plant milk. Supports adrenal function and helps reduce cortisol levels.",
      tags: ["Snack", "Adaptogens", "Quick"],
      nutrients: {
        calories: 290,
        protein: 8,
        carbs: 42,
        fats: 10,
      },
    },
    {
      id: "6",
      title: "Serotonin-Boosting Avocado Toast",
      image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Whole grain toast with avocado, poached egg, and microgreens. Contains tryptophan to support serotonin production.",
      tags: ["Breakfast", "Healthy-Fats", "Quick"],
      nutrients: {
        calories: 350,
        protein: 15,
        carbs: 30,
        fats: 22,
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Mood Nutrition
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get personalized meal recommendations based on your mood and emotional state to optimize your mental and physical wellbeing.
          </p>
        </div>

        <Tabs defaultValue="mood" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="mood">Mood Input</TabsTrigger>
            <TabsTrigger value="meals">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mood" className="pt-6">
            <MoodInput />
            
            <div className="mt-12 text-center">
              <button 
                className="inline-flex items-center px-4 py-2 text-primary dark:text-neon-blue hover:underline font-medium"
                onClick={() => setActiveTab("meals")}
              >
                View Meal Recommendations <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="meals" className="pt-6">
            <div className="space-y-8">
              <div className="bg-primary/10 dark:bg-neon-blue/10 rounded-lg p-4 border border-primary/20 dark:border-neon-blue/20 max-w-3xl mx-auto">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary dark:bg-neon-blue flex items-center justify-center">
                      <span className="text-white font-medium">AI</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Your Personalized Nutrition Plan
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Based on your mood analysis, we've selected these meals to help balance your emotional state and provide optimal nutrition.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mealData.map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="inline-block px-6 py-3 rounded-full text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
                  <span className="font-medium">Nutrition Tip:</span> Consistent meal timing helps stabilize mood throughout the day.
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Nutrition;
