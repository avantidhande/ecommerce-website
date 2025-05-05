'use client';
import { useContext, useEffect } from 'react';
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';

export default function OrderPlaced() {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart(); // run only once on mount
  }, []); // No dependencies that change

  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-green-700">
          <span role="img" aria-label="celebration">🎉</span> Order Placed Successfully!
        </h1>
        <p className="text-gray-700 mb-6">Thank you for shopping with us. Your order has been placed and is being processed.</p>

        <Link
          href="/track-order"
          className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition"
        >
          Track Your Order
        </Link>
      </div>
    </main>
  );
}
