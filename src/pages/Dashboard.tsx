
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HealthMetrics from "@/components/dashboard/HealthMetrics";
import MealCard from "@/components/nutrition/MealCard";
import { Calendar, Clock, List, Heart, Activity, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  // Sample data for saved meals
  const savedMeals = [
    {
      id: "1",
      title: "Mood-Boosting Breakfast Bowl",
      image: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "A nutrient-rich breakfast bowl with greek yogurt, berries, nuts, and honey.",
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
      description: "A balanced lunch with quinoa, roasted vegetables, avocado, and tahini dressing.",
      tags: ["Lunch", "Plant-Based", "Complex-Carbs"],
      nutrients: {
        calories: 550,
        protein: 18,
        carbs: 65,
        fats: 22,
      },
    },
    {
      id: "4",
      title: "Focus-Enhancing Salmon Plate",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Wild-caught salmon with sweet potatoes and leafy greens.",
      tags: ["Dinner", "High-Omega-3", "Brain-Food"],
      nutrients: {
        calories: 480,
        protein: 32,
        carbs: 38,
        fats: 20,
      },
    },
  ];

  // Sample data for history
  const historyItems = [
    {
      id: "1",
      title: "Symptom Check: Headache",
      date: "Today, 9:45 AM",
      summary: "Mild tension headache, recommended hydration and rest",
      type: "symptom",
    },
    {
      id: "2",
      title: "Mood Analysis: Slightly Anxious",
      date: "Yesterday, 4:20 PM",
      summary: "Detected mild anxiety, recommended stress-reducing foods",
      type: "mood",
    },
    {
      id: "3",
      title: "Nutrition Plan Generated",
      date: "Apr 15, 2025",
      summary: "Created weekly meal plan optimized for mental clarity",
      type: "nutrition",
    },
    {
      id: "4",
      title: "Symptom Check: Fatigue",
      date: "Apr 13, 2025",
      summary: "Fatigue likely due to sleep quality, suggested sleep hygiene improvements",
      type: "symptom",
    },
    {
      id: "5",
      title: "Mood Analysis: Energetic",
      date: "Apr 10, 2025",
      summary: "Detected high energy levels, recommended balanced nutrition",
      type: "mood",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Your personal health insights and records in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { 
            title: "Today's Mood", 
            value: "Energetic", 
            icon: Brain, 
            color: "bg-gradient-to-br from-blue-500 to-indigo-600"
          },
          { 
            title: "Sleep Quality", 
            value: "8.2 hrs", 
            icon: Clock, 
            color: "bg-gradient-to-br from-purple-500 to-pink-600"
          },
          { 
            title: "Activity", 
            value: "8,745 steps", 
            icon: Activity, 
            color: "bg-gradient-to-br from-green-500 to-emerald-600"
          },
          { 
            title: "Nutrition", 
            value: "8.5/10", 
            icon: Heart, 
            color: "bg-gradient-to-br from-amber-500 to-orange-600"
          },
        ].map((stat, index) => (
          <Card key={index} className="bg-white/90 dark:bg-neon-darkBlue/60 border-0 shadow-md dark:shadow-none dark:glow">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`h-12 w-12 rounded-lg ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="saved">Saved Meals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="pt-6">
          <HealthMetrics />
        </TabsContent>
        
        <TabsContent value="history" className="pt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Activity History</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your recent interactions with the platform.
              </p>
            </div>
            
            <div className="space-y-4">
              {historyItems.map((item) => (
                <Card key={item.id} className="bg-white/90 dark:bg-neon-darkBlue/60 border-0 shadow-md dark:shadow-none overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className={`w-2 ${
                        item.type === "symptom" 
                          ? "bg-blue-500 dark:bg-blue-600" 
                          : item.type === "mood" 
                          ? "bg-purple-500 dark:bg-purple-600" 
                          : "bg-green-500 dark:bg-green-600"
                      }`}></div>
                      <div className="p-4 flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.date}</p>
                          </div>
                          <div>
                            {item.type === "symptom" ? (
                              <List className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                            ) : item.type === "mood" ? (
                              <Brain className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                            ) : (
                              <Calendar className="h-5 w-5 text-green-500 dark:text-green-400" />
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{item.summary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="pt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Saved Meals</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your favorite recipes and meal recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
