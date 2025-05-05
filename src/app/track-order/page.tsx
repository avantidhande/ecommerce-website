'use client';

export default function TrackOrder() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black mb-4">Track Your Order</h1>
        <p className="text-gray-600 mb-4">Your order is currently being packed and will be shipped soon.</p>
        <div className="mt-6 text-sm text-gray-500">Tracking ID: <span className="font-mono text-black">#FH123456789</span></div>
      </div>
    </main>
  );
}
