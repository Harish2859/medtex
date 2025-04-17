
import { Heart, Moon, CircleUser, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const WearableData = () => {
  const mockData = {
    heartRate: {
      current: 72,
      min: 58,
      max: 124,
      average: 68,
    },
    sleep: {
      total: 7.5,
      deep: 2.3,
      rem: 1.8,
      light: 3.4,
    },
    steps: {
      current: 8743,
      goal: 10000,
      distance: 6.2,
    },
    activity: {
      active: 124,
      calories: 1876,
      exercises: 2,
    },
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Wearable Data
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="bg-white/80 dark:bg-neon-darkBlue/60 border-0 shadow-md dark:shadow-none dark:glow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center text-gray-700 dark:text-gray-300">
              <Heart className="w-4 h-4 mr-2 text-red-500" /> Heart Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{mockData.heartRate.current}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">BPM</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 dark:text-gray-400">Min: {mockData.heartRate.min}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Max: {mockData.heartRate.max}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="relative h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 to-pink-500 dark:from-red-600 dark:to-pink-600 rounded-full"
                  style={{ width: `${(mockData.heartRate.current / 200) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/80 dark:bg-neon-darkBlue/60 border-0 shadow-md dark:shadow-none dark:glow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center text-gray-700 dark:text-gray-300">
              <Moon className="w-4 h-4 mr-2 text-indigo-500" /> Sleep
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{mockData.sleep.total}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">hrs</span>
              </div>
              <div className="space-y-1 text-right">
                <div className="flex items-center justify-end gap-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-700"></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Deep: {mockData.sleep.deep}h</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">REM: {mockData.sleep.rem}h</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Light: {mockData.sleep.light}h</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/80 dark:bg-neon-darkBlue/60 border-0 shadow-md dark:shadow-none dark:glow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center text-gray-700 dark:text-gray-300">
              <CircleUser className="w-4 h-4 mr-2 text-green-500" /> Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{mockData.steps.current.toLocaleString()}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">steps</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 dark:text-gray-400">{mockData.steps.distance} km</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Goal: {mockData.steps.goal.toLocaleString()}</div>
              </div>
            </div>
            <div className="mt-4">
              <Progress value={(mockData.steps.current / mockData.steps.goal) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/80 dark:bg-neon-darkBlue/60 border-0 shadow-md dark:shadow-none dark:glow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center text-gray-700 dark:text-gray-300">
              <Activity className="w-4 h-4 mr-2 text-orange-500" /> Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{mockData.activity.active}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">mins</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 dark:text-gray-400">{mockData.activity.calories} cal</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{mockData.activity.exercises} workouts</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-6 gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-6 rounded-md ${
                    i < 4 ? "bg-gradient-to-r from-orange-400 to-amber-300 dark:from-orange-600 dark:to-amber-500" : "bg-gray-200 dark:bg-gray-700"
                  }`}
                ></div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WearableData;
