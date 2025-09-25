import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { MenuCategory } from './components/MenuCategory';
import { MenuItemModal } from './components/MenuItemModal';
import { SearchFilter } from './components/SearchFilter';
import { appetizers, mains, desserts, beverages } from './data/menuData';
import { Utensils, ChefHat, IceCream, Coffee } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const filterItems = (items: typeof appetizers) => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesVegetarian = !showVegetarianOnly || item.isVegetarian;
      return matchesSearch && matchesVegetarian;
    });
  };

  const filteredAppetizers = useMemo(() => filterItems(appetizers), [searchTerm, showVegetarianOnly]);
  const filteredMains = useMemo(() => filterItems(mains), [searchTerm, showVegetarianOnly]);
  const filteredDesserts = useMemo(() => filterItems(desserts), [searchTerm, showVegetarianOnly]);
  const filteredBeverages = useMemo(() => filterItems(beverages), [searchTerm, showVegetarianOnly]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover authentic Italian flavors crafted with the finest ingredients and traditional recipes passed down through generations.
          </p>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          showVegetarianOnly={showVegetarianOnly}
          onVegetarianToggle={() => setShowVegetarianOnly(!showVegetarianOnly)}
        />

        {filteredAppetizers.length > 0 && (
          <MenuCategory
            title="Appetizers"
            items={filteredAppetizers}
            icon={<Utensils className="h-8 w-8" />}
            onItemClick={handleItemClick}
          />
        )}

        {filteredMains.length > 0 && (
          <MenuCategory
            title="Main Courses"
            items={filteredMains}
            icon={<ChefHat className="h-8 w-8" />}
            onItemClick={handleItemClick}
          />
        )}

        {filteredDesserts.length > 0 && (
          <MenuCategory
            title="Desserts"
            items={filteredDesserts}
            icon={<IceCream className="h-8 w-8" />}
            onItemClick={handleItemClick}
          />
        )}

        {filteredBeverages.length > 0 && (
          <MenuCategory
            title="Beverages"
            items={filteredBeverages}
            icon={<Coffee className="h-8 w-8" />}
            onItemClick={handleItemClick}
          />
        )}

        {filteredAppetizers.length === 0 && filteredMains.length === 0 && 
         filteredDesserts.length === 0 && filteredBeverages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No menu items found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </main>

      {selectedItem && (
        <MenuItemModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <ChefHat className="h-6 w-6 text-yellow-400" />
            <span className="text-xl font-bold">Bella Vista</span>
          </div>
          <p className="text-gray-300 mb-2">Fine Italian Dining Experience</p>
          <p className="text-gray-400 text-sm">© 2025 Bella Vista Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;