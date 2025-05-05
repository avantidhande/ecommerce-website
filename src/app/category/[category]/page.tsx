'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryString = Array.isArray(category)
    ? category[0]
    : category || 'default-category';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/data/products.json');
        const data = await res.json();
        const categoryProducts = data[categoryString.toLowerCase()] || [];
        setProducts(categoryProducts);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryString]);

  if (loading) {
    return (
      <main className="px-6 md:px-20 py-16 min-h-screen bg-white text-center">
        <h1 className="text-2xl">Loading...</h1>
      </main>
    );
  }

  if (!products || products.length === 0) {
    return (
      <main className="px-6 md:px-20 py-16 min-h-screen bg-white text-center">
        <h1 className="text-3xl font-semibold text-black">
          No products found in {categoryString}
        </h1>
      </main>
    );
  }

  return (
    <main className="px-6 md:px-20 py-16 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-10 capitalize text-center text-black">
        {categoryString} Collection
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
            <p className="text-gray-600">₹{product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
