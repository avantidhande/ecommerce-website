'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/context/CartContext';

type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  description: string;
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch('/data/products.json');
        const data = await res.json();
        const allProducts = Object.values(data).flat() as ProductType[];
        const foundProduct = allProducts.find((p) => p.id === parseInt(id.toString()));
        setProduct(foundProduct || null);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) addToCart(product);
  };

  if (loading) {
    return (
      <main className="px-6 md:px-20 py-16 min-h-screen bg-white text-center">
        <h1 className="text-3xl font-semibold">Loading...</h1>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="px-6 md:px-20 py-16 min-h-screen bg-white text-center">
        <h1 className="text-3xl font-semibold">Product not found</h1>
      </main>
    );
  }

  return (
    <main className="px-6 md:px-20 py-16 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative overflow-hidden w-full h-[500px] group rounded">
  <Image
    src={product.image}
    alt={product.title}
    width={500}
    height={500}
    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-150"
  />
</div>

        <div>
          <p className="text-xl font-semibold text-gray-700">₹{product.price}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < Math.round(product.rating) ? '⭐' : '☆'}
              </span>
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
          </div>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
