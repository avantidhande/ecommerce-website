'use client';
import { useEffect, useState, useContext } from "react";
import Image from "next/image";

import { CartContext } from "@/context/CartContext";
import Link from "next/link";

import Footer from "../components/Footer";

type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string; // Ensure this is a valid path or URL for images
};

export default function HomePage() {
  const { addToCart } = useContext(CartContext);
  const [bestSellers, setBestSellers] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        const best = [...data.men, ...data.women, ...data.kids].slice(0, 4);
        setBestSellers(best);
      })
      .catch(err => console.error("Failed to load products:", err));
  }, []);

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };



  return (
    <main className="min-h-screen bg-white text-gray-800" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Style Meets Comfort</h1>
          <p className="mt-4 text-lg md:text-xl">Explore the latest trends in fashion</p>
          <Link href="/allproducts">
  <button className="mt-6 px-6 py-3 bg-white text-black rounded hover:bg-yellow-500 transition">
    Shop Now
  </button>
</Link>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Men", "Women", "Kids"].map((category) => (
            <Link
              href={`/category/${category.toLowerCase()}`}
              key={category}
              className="group block bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  src={`/categories/${category.toLowerCase()}.jpg`} // Ensure this path is correct
                  alt={category}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full group-hover:brightness-90 transition"
                />
              </div>
              <div className="p-4 text-center bg-white">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-black">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers (Product Highlights) Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <div className="w-full h-[200px] flex items-center justify-center bg-white rounded-md overflow-hidden">
                <Image
                  src={product.image} // Check if this is the correct image path
                  alt={product.title}
                  width={300}
                  height={200}
                  className="object-contain w-full h-80"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-center">{product.title}</h3>
              <p className="text-gray-600">₹{product.price}</p>
              <div className="mt-4 flex gap-2">
                <Link
                  href={`/products/${product.id}`}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 block text-center"
                >
                  View Product
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
