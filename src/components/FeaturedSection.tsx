import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface FeaturedSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  products,
  onAddToCart
}) => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  // Fonction pour formater le prix proprement
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Produits en Vedette
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits spirituels soigneusement choisis 
            pour nourrir votre foi et enrichir votre vie spirituelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews} avis)
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>

                {(product.author || product.artist) && (
                  <p className="text-gray-600 mb-3">
                    par {product.author || product.artist}
                  </p>
                )}

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-600">
                      {formatPrice(product.price)} FCFA
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(product.originalPrice)} FCFA
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
