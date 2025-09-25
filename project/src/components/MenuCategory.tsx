import React from 'react';
import { MenuItem } from './MenuItem';

export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isGlutenFree?: boolean;
}

interface MenuCategoryProps {
  title: string;
  items: (MenuItemType & {
    image: string;
    cookingTime: string;
    servings: number;
    ingredients: string[];
    preparation: string;
  })[];
  icon: React.ReactNode;
  onItemClick: (item: MenuItemType & {
    image: string;
    cookingTime: string;
    servings: number;
    ingredients: string[];
    preparation: string;
  }) => void;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items, icon, onItemClick }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center space-x-3 mb-8">
        <div className="text-yellow-500">{icon}</div>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-4"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} onClick={() => onItemClick(item)} />
        ))}
      </div>
    </section>
  );
};