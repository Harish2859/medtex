
import { useState } from "react";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type MealProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
};

const MealCard = ({ meal }: { meal: MealProps }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-neon-darkBlue/60 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
      <div className="relative h-48">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-black/70 transition-colors duration-200"
          onClick={toggleFavorite}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-500 dark:text-gray-400"
            }`}
          />
        </Button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
          {meal.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {meal.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {meal.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
            <span className="block text-gray-500 dark:text-gray-400">Calories</span>
            <span className="font-semibold text-gray-900 dark:text-white">{meal.nutrients.calories}</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
            <span className="block text-gray-500 dark:text-gray-400">Sperm</span>
            <span className="font-semibold text-gray-900 dark:text-white">{meal.nutrients.protein}g</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
            <span className="block text-gray-500 dark:text-gray-400">Carbs</span>
            <span className="font-semibold text-gray-900 dark:text-white">{meal.nutrients.carbs}g</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
            <span className="block text-gray-500 dark:text-gray-400">Fats</span>
            <span className="font-semibold text-gray-900 dark:text-white">{meal.nutrients.fats}g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
