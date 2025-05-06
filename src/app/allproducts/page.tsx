'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
};

export default function AllProductsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch('/data/products.json');
        const data = await res.json();
  
        const combined = [...data.men, ...data.women, ...data.kids];
  
        // Shuffle the combined array (Fisher-Yates algorithm)
        for (let i = combined.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [combined[i], combined[j]] = [combined[j], combined[i]];
        }
  
        setProducts(combined); // ✅ use combined here
      } catch (error) {
        console.error('Error fetching all products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchAllProducts();
  }, []);
  

  if (loading) {
    return (
      <main className="px-6 md:px-20 py-16 min-h-screen bg-white text-center">
        <h1 className="text-2xl">Loading all products...</h1>
      </main>
    );
  }

  return (
    <main className="px-6 md:px-20 py-16 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-black">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="object-cover w-full h-[250px] rounded"
            />
            <h2 className="mt-4 text-lg text-black font-semibold">{product.title}</h2>
            <p className="text-gray-600 mb-1">₹{product.price}</p>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <Link href={`/products/${product.id}`}>
              <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
