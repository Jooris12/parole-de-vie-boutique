import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'bibles', name: 'Bibles', icon: 'Book', count: 15 },
  { id: 'books', name: 'Livres', icon: 'BookOpen', count: 42 },
  { id: 'music', name: 'Musique', icon: 'Music', count: 28 },
  { id: 'accessories', name: 'Accessoires', icon: 'Gift', count: 18 },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Bible Louis Segond 1910',
    author: 'Louis Segond',
    price: 29999,
    originalPrice: 39999,
    image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'bibles',
    description:
      'La Bible Louis Segond 1910 est une traduction française classique des Écritures saintes, réputée pour sa fidélité au texte original et sa beauté littéraire.',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    title: "Une Vie Motivée par l'Essentiel",
    author: 'Rick Warren',
    price: 19999,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'books',
    description:
      "Découvrez votre raison d'être sur terre dans ce livre transformateur qui a changé des millions de vies à travers le monde.",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    title: 'Hillsong United - Wonder',
    artist: 'Hillsong United',
    price: 16990,
    image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'music',
    description:
      "Album de louange contemporaine avec des chants puissants qui élèvent l'âme et glorifient Dieu.",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    title: "Bible d'Étude MacArthur",
    author: 'John MacArthur',
    price: 49000,
    originalPrice: 59999,
    image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'bibles',
    description:
      "Bible d'étude complète avec plus de 25 000 notes explicatives, cartes, et outils d'étude approfondis.",
    rating: 4.8,
    reviews: 67,
    inStock: true,
  },
  {
    id: '5',
    title: "Jésus t'appelle",
    author: 'Sarah Young',
    price: 14000,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'books',
    description:
      "Méditations quotidiennes pour une année entière, écrites dans la perspective de Jésus s'adressant directement au lecteur.",
    rating: 4.6,
    reviews: 143,
    inStock: true,
  },
  {
    id: '6',
    title: "Croix en Bois d'Olivier",
    price: 24990,
    image: 'https://images.pexels.com/photos/1494944/pexels-photo-1494944.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    description:
      "Magnifique croix artisanale en bois d'olivier de Terre Sainte, parfaite pour la décoration ou comme cadeau spirituel.",
    rating: 4.7,
    reviews: 45,
    inStock: true,
  },
  {
    id: '7',
    title: 'Bethel Music - Peace',
    artist: 'Bethel Music',
    price: 18909,
    image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'music',
    description:
      "Collection de chants de paix et d'adoration pour apaiser l'âme et rapprocher de Dieu.",
    rating: 4.8,
    reviews: 91,
    inStock: true,
  },
  {
    id: '8',
    title: "L'Évangile selon Jésus",
    author: 'John MacArthur',
    price: 20999,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'books',
    description:
      "Une exploration profonde de ce que signifie vraiment suivre Jésus selon ses propres enseignements.",
    rating: 4.9,
    reviews: 178,
    inStock: true,
  },
];
