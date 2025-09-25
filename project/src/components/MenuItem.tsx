import React from 'react';
import { Leaf, Flame, Wheat } from 'lucide-react';
import { MenuItemType } from './MenuCategory';

interface MenuItemProps {
  item: MenuItemType & {
    image: string;
    cookingTime: string;
    servings: number;
    ingredients: string[];
    preparation: string;
  };
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-0 border border-gray-100 cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800 leading-tight">{item.name}</h3>
          <span className="text-xl font-bold text-yellow-600 ml-4">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {item.isVegetarian && (
              <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                <Leaf className="h-3 w-3" />
                <span>Vegetarian</span>
              </div>
            )}
            {item.isSpicy && (
              <div className="flex items-center space-x-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                <Flame className="h-3 w-3" />
                <span>Spicy</span>
              </div>
            )}
            {item.isGlutenFree && (
              <div className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                <Wheat className="h-3 w-3" />
                <span>Gluten Free</span>
              </div>
            )}
          </div>
          
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Click for details
          </span>
        </div>
      </div>
    </div>
  );
};