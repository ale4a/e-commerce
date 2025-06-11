import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality. Perfect for music lovers and professionals.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Electronics',
    stock: 15,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Electronics',
    stock: 8,
    featured: true
  },
  {
    id: '3',
    name: 'Laptop Backpack',
    description: 'Durable and stylish laptop backpack with multiple compartments and water-resistant material.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Accessories',
    stock: 25
  },
  {
    id: '4',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with excellent bass and 12-hour battery life. Perfect for outdoor adventures.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Electronics',
    stock: 12,
    featured: true
  },
  {
    id: '5',
    name: 'Coffee Mug Set',
    description: 'Set of 4 ceramic coffee mugs with beautiful designs. Perfect for your morning coffee ritual.',
    price: 34.99,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Home',
    stock: 30
  },
  {
    id: '6',
    name: 'Yoga Mat',
    description: 'Premium yoga mat with excellent grip and cushioning. Eco-friendly and non-slip surface.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Sports',
    stock: 20
  },
  {
    id: '7',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life. Great for work and gaming.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Electronics',
    stock: 18
  },
  {
    id: '8',
    name: 'Plant Pot Set',
    description: 'Set of 3 modern ceramic plant pots in different sizes. Perfect for indoor plants and home decoration.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Home',
    stock: 22
  }
];

export const categories = ['All', 'Electronics', 'Accessories', 'Home', 'Sports'];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};