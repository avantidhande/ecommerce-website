// pages/about.js
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-4xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to ShopVerse! We are your one-stop destination for modern, stylish, and comfortable fashion. Whether you are shopping for Men, Women, or Kids, we have something for everyone. Our goal is to provide top-quality clothing and accessories to make you feel confident and stylish.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          At ShopVerse, we aim to bring the latest fashion trends to you at affordable prices. Our mission is to provide high-quality products that cater to all age groups, from trendy styles for men to fashionable and comfortable pieces for women and kids. We believe that fashion should be accessible, inclusive, and enjoyable for everyone.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Quality: We strive to offer top-notch products.</li>
          <li>Style: We keep up with the latest trends to provide fashionable choices.</li>
          <li>Customer Satisfaction: Our customers are our top priority.</li>
          <li>Affordability: We believe great fashion shouldn&apos;t break the bank.</li>
        </ul>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
