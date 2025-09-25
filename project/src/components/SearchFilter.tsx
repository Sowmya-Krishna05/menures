import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  showVegetarianOnly: boolean;
  onVegetarianToggle: () => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  onSearchChange,
  showVegetarianOnly,
  onVegetarianToggle,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <Filter className="text-gray-500 h-5 w-5" />
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showVegetarianOnly}
              onChange={onVegetarianToggle}
              className="w-4 h-4 text-yellow-600 rounded focus:ring-yellow-400"
            />
            <span className="text-gray-700">Vegetarian Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};