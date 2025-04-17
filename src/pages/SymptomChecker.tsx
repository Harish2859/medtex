
import ChatInterface from "@/components/symptom/ChatInterface";
import WearableData from "@/components/symptom/WearableData";
import { Card, CardContent } from "@/components/ui/card";

const SymptomChecker = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AI Symptom Checker
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Describe your symptoms to our AI assistant and get personalized health insights,
            enhanced with data from your connected wearables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          <div className="lg:col-span-4 flex justify-center">
            <ChatInterface />
          </div>
          
          <div className="lg:col-span-3">
            <WearableData />
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                AI Recommendations
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Rest and Hydration",
                    description: "Based on your symptoms and elevated heart rate, try to rest and increase fluid intake for the next 24 hours.",
                    color: "border-blue-500 dark:border-blue-600",
                  },
                  {
                    title: "Monitor Temperature",
                    description: "Your symptoms suggest monitoring your temperature every 4 hours for any signs of fever.",
                    color: "border-amber-500 dark:border-amber-600",
                  },
                  {
                    title: "Consider Telehealth",
                    description: "If symptoms persist for more than 48 hours, consider scheduling a telehealth appointment with a healthcare provider.",
                    color: "border-green-500 dark:border-green-600",
                  },
                ].map((recommendation, index) => (
                  <Card key={index} className={`border-l-4 ${recommendation.color} bg-white/80 dark:bg-neon-darkBlue/60 border-t-0 border-r-0 border-b-0 shadow-md dark:shadow-none`}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{recommendation.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{recommendation.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 rounded-full text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
            <span className="font-medium">Important:</span> This tool is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
