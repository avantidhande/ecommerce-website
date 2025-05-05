"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="sticky top-0 z-50 bg-transparent shadow-md flex justify-between px-6 py-4 items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-gray-500">ShopVerse</Link>

      {/* Links and Cart */}
      <div className="flex gap-6 items-center text-gray-600">
        <Link href="/products" className="hover:text-yellow-500 font-medium">
          Products
        </Link>

        {/* Cart Icon with Badge */}
        <Link href="/cart" className="relative">
          <FaShoppingCart className="text-2xl" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
