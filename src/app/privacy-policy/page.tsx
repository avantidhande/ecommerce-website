'use client';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        ShopVerse values your privacy. This page explains how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect your name, email, address, and other necessary details to process your orders and improve your experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To process orders and deliver products</li>
        <li>To send updates or promotional emails</li>
        <li>To improve our services and support</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You can request to update or delete your personal data by contacting us anytime.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        For any privacy-related questions, email us at <strong>support@ShopVerse.com</strong>.
      </p>
    </div>
  );
}
