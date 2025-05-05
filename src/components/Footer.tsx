'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">FashionHub</h3>
          <p className="text-sm text-gray-400">
            Your one-stop destination for modern, stylish, and comfortable fashion for Men, Women & Kids.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/category/men" className="hover:underline">Men</Link></li>
            <li><Link href="/category/women" className="hover:underline">Women</Link></li>
            <li><Link href="/category/kids" className="hover:underline">Kids</Link></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h4 className="font-semibold mb-3">Stay Connected</h4>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter Email address"
              className="px-3 py-2 rounded-l text-white outline-none w-full"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FashionHub. All rights reserved.
      </div>
    </footer>
  );
}
