import React from 'react';
import { ChefHat, Clock, MapPin, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <ChefHat className="h-8 w-8 text-yellow-400" />
            <div>
              <h1 className="text-3xl font-bold">Bella Vista</h1>
              <p className="text-gray-300 text-sm">Fine Italian Restaurant</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-yellow-400" />
              <span>Open Daily 10AM - 11PM</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-yellow-400" />
              <span>Bella Vita</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-yellow-400" />
              <span>123-456-789</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};