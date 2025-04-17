
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HealthMetrics = () => {
  // Mock data for the charts
  const weeklyData = [
    { day: 'Mon', mood: 7, sleep: 7.5, activity: 65, nutrition: 8 },
    { day: 'Tue', mood: 6, sleep: 6.8, activity: 45, nutrition: 7 },
    { day: 'Wed', mood: 8, sleep: 8.2, activity: 80, nutrition: 8.5 },
    { day: 'Thu', mood: 7, sleep: 7.0, activity: 70, nutrition: 7.5 },
    { day: 'Fri', mood: 9, sleep: 8.5, activity: 85, nutrition: 9 },
    { day: 'Sat', mood: 8, sleep: 9.0, activity: 60, nutrition: 8 },
    { day: 'Sun', mood: 7, sleep: 7.8, activity: 50, nutrition: 7 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Health Trends</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Visualize your health metrics over the past week.
        </p>
      </div>
      
      <Card className="bg-white/90 dark:bg-neon-darkBlue/60 border-0 shadow-lg dark:shadow-none dark:glow">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-700 dark:text-gray-300">Weekly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={weeklyData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="day" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }} 
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="mood"
                  name="Mood Score"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{r: 4}}
                  activeDot={{r: 6}}
                />
                <Line
                  type="monotone"
                  dataKey="sleep"
                  name="Sleep (hrs)"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={{r: 4}}
                />
                <Line
                  type="monotone"
                  dataKey="activity"
                  name="Activity (%)"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{r: 4}}
                />
                <Line
                  type="monotone"
                  dataKey="nutrition"
                  name="Nutrition Score"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  dot={{r: 4}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { 
            title: "Today's Mood", 
            value: "Positive", 
            change: "+15%", 
            isPositive: true,
            color: "bg-blue-500 dark:bg-blue-600"
          },
          { 
            title: "Sleep Quality", 
            value: "Good", 
            change: "+8%", 
            isPositive: true,
            color: "bg-purple-500 dark:bg-purple-600"
          },
          { 
            title: "Nutrition Score", 
            value: "8.5/10", 
            change: "+12%", 
            isPositive: true,
            color: "bg-amber-500 dark:bg-amber-600"
          },
        ].map((metric, index) => (
          <Card key={index} className="bg-white/90 dark:bg-neon-darkBlue/60 border-0 shadow-md dark:shadow-none dark:glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {metric.title}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {metric.value}
                  </h3>
                </div>
                <div className={`${metric.color} w-12 h-12 rounded-lg flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold">{index + 8}</span>
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`inline-flex items-center text-xs font-medium ${
                    metric.isPositive
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {metric.change} from last week
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HealthMetrics;
