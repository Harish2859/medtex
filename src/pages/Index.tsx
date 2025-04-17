
import { Link } from "react-router-dom";
import { ArrowRight, ActivitySquare, Brain, Apple, Smartphone, Watch, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-blue to-medical-green dark:from-neon-purple/20 dark:to-neon-blue/20 opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Healthcare,
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent dark:from-neon-blue dark:to-neon-purple"> Reimagined</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                AI-powered health monitoring and personalized recommendations at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/symptom-checker">
                  <Button size="lg" className="group">
                    Try Symptom Checker
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/nutrition">
                  <Button size="lg" variant="outline">
                    Explore Mood Nutrition
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative lg:absolute lg:right-0 lg:top-0 w-full h-full flex justify-center items-center">
                <div className="relative w-full max-w-md">
                  <div className="glass dark:glow rounded-3xl p-6 shadow-xl animate-float">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <div className="h-32 bg-gradient-blue rounded-xl flex items-center justify-center p-4">
                          <ActivitySquare className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      <div className="h-32 bg-gradient-purple rounded-xl flex items-center justify-center p-4">
                        <Brain className="h-12 w-12 text-white" />
                      </div>
                      <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-300 dark:from-green-600 dark:to-emerald-500 rounded-xl flex items-center justify-center p-4">
                        <Apple className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-neon-darkBlue/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our platform combines AI technology with medical expertise to provide personalized health insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-neon-darkBlue/60 rounded-xl p-8 shadow-md transition-all hover:shadow-lg">
              <div className="bg-primary/10 dark:bg-neon-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ActivitySquare className="h-8 w-8 text-primary dark:text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AI Symptom Checker</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Chat with our AI to analyze your symptoms, track vital signs from wearables, and get personalized health recommendations.
              </p>
              <Link to="/symptom-checker" className="inline-flex items-center text-primary dark:text-neon-blue hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-neon-darkBlue/60 rounded-xl p-8 shadow-md transition-all hover:shadow-lg">
              <div className="bg-accent/10 dark:bg-neon-purple/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Apple className="h-8 w-8 text-accent dark:text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Mood Nutrition App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Track your mood patterns and receive AI-curated meal recommendations to improve your mental and physical wellbeing.
              </p>
              <Link to="/nutrition" className="inline-flex items-center text-accent dark:text-neon-purple hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Device Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Seamless Device Integration
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Connect with your favorite wearables and devices to get the most accurate insights about your health.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Watch className="h-6 w-6 text-primary dark:text-neon-blue mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Apple Watch</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Track heart rate, activity, and sleep patterns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Watch className="h-6 w-6 text-primary dark:text-neon-blue mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Fitbit</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Monitor steps, calories burned, and exercise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Smartphone className="h-6 w-6 text-primary dark:text-neon-blue mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Smartphones</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Sync with iOS and Android health apps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Tablet className="h-6 w-6 text-primary dark:text-neon-blue mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Tablets</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Access your data on larger screens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 dark:from-neon-blue/20 dark:to-neon-purple/20 rounded-3xl blur-xl opacity-70"></div>
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Wearable devices" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-neon-darkBlue/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What Our Users Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real stories from people who have improved their health with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The symptom checker helped me identify a health issue early. The AI recommendations were spot on!",
                name: "Sarah J.",
                role: "Fitness Instructor"
              },
              {
                quote: "I've completely changed my diet based on the mood nutrition recommendations. I feel more energetic than ever.",
                name: "Michael T.",
                role: "Software Engineer"
              },
              {
                quote: "Connecting my Apple Watch has given me insights I never had before. The sleep tracking analysis is amazing.",
                name: "Emma L.",
                role: "Healthcare Professional"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass dark:glow p-6 rounded-xl shadow-md">
                <p className="italic text-gray-600 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-blue rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent dark:from-neon-blue dark:to-neon-purple rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to transform your health journey?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already improved their wellbeing with our AI-powered health platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/symptom-checker">
                <Button size="lg" variant="secondary" className="border-white border">
                  Try Symptom Checker
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="bg-white text-primary dark:bg-white dark:text-neon-purple">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
