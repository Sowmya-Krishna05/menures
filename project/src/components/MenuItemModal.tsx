import React from 'react';
import { X, Clock, Users, Leaf, Flame, Wheat } from 'lucide-react';
import { MenuItemType } from './MenuCategory';

interface MenuItemModalProps {
  item: MenuItemType & {
    image: string;
    cookingTime: string;
    servings: number;
    ingredients: string[];
    preparation: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 md:h-80 object-cover rounded-t-lg"
          />
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{item.name}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{item.cookingTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{item.servings} serving{item.servings > 1 ? 's' : ''}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.isVegetarian && (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      <Leaf className="h-4 w-4" />
                      <span>Vegetarian</span>
                    </div>
                  )}
                  {item.isSpicy && (
                    <div className="flex items-center space-x-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                      <Flame className="h-4 w-4" />
                      <span>Spicy</span>
                    </div>
                  )}
                  {item.isGlutenFree && (
                    <div className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      <Wheat className="h-4 w-4" />
                      <span>Gluten Free</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <span className="text-4xl font-bold text-yellow-600">${item.price.toFixed(2)}</span>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{item.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ingredients</h3>
                <ul className="space-y-2">
                  {item.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Preparation</h3>
                <p className="text-gray-700 leading-relaxed">{item.preparation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};