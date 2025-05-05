'use client';

import { useEffect, useState, useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Wait until component is mounted on client

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-black">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty. <Link href="/"><span className="text-blue-600 underline">Go shopping</span></Link></p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-gray-100 shadow rounded p-4 text-black">
              <Image src={item.image} alt={item.title} width={100} height={100} className="rounded" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-black-600">₹{item.price}</p>
              </div>
              <button
                className="text-red-600 hover:text-red-800 font-medium"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-xl text-black font-bold mt-4">
            Total: ₹{total}
          </div>

          <Link href="/payment">
  <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 w-fit self-end">
    Proceed to Payment
  </button>
</Link>

        </div>
      )}
    </main>
  );
}
