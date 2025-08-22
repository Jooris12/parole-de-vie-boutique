import React from 'react';
import { BookOpen, Heart, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-yellow-400 font-medium">4.8/5 - Plus de 10,000 clients satisfaits</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nourrissez votre 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                {' '}âme
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Découvrez notre collection exceptionnelle de Bibles, livres spirituels, 
              musique chrétienne et accessoires de foi. Tout ce dont vous avez besoin 
              pour approfondir votre relation avec Dieu.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Explorer le catalogue</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Nos coups de cœur</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-8 mt-12 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Livraison gratuite dès 50.000fcfa</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>Retour gratuit 30 jours</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all">
                  <img
                    src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Bible"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold">Bibles d'Étude</h3>
                  <p className="text-sm text-gray-300">Collection complète</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all">
                  <img
                    src="/src/assets/Albums.jpg"
                    alt="Albums"
                    className="w-full h-24 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold">Musique Chrétienne</h3>
                  <p className="text-sm text-gray-300">   inspirants</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all">
                  <img
                    src="/src/assets/Livres.jpg"
                    alt="Livres"
                    className="w-full h-24 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold">Livres Spirituels</h3>
                  <p className="text-sm text-gray-300">Croissance personnelle</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all">
                  <img
                    src="https://images.pexels.com/photos/1494944/pexels-photo-1494944.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Accessoires"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold">Accessoires</h3>
                  <p className="text-sm text-gray-300">Objets de dévotion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};