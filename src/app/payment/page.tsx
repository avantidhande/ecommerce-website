'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PaymentPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/order-placed');
    }, 3000); // simulate 3 seconds payment delay

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-black">Processing Payment...</h1>
        <p className="text-gray-600">Please wait while we complete your order.</p>
      </div>
    </main>
  );
}
