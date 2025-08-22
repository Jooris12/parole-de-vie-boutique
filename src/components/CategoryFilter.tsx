import React from 'react';
import { Book, BookOpen, Music, Gift } from 'lucide-react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const iconMap = {
  Book,
  BookOpen,
  Music,
  Gift,
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategorySelect('all')}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
            selectedCategory === 'all'
              ? 'bg-amber-100 text-amber-800 border border-amber-200'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span>Tous les produits</span>
        </button>
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          return (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <IconComponent className="h-4 w-4" />
                <span>{category.name}</span>
              </div>
              <span className="text-sm text-gray-500">({category.count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};