"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-800">

      {/* LEFT - LOGO */}
      <div className="text-xl font-bold tracking-wide">
        ARUGUS
      </div>

      {/* CENTER - NAV */}
      <nav className="flex gap-8 text-gray-300">
        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="/products_introduce" className="hover:text-white">Products</Link>
        <Link href="/software" className="hover:text-white">Platform</Link>
        <Link href="/solution" className="hover:text-white">Solutions</Link>
        <Link href="/technology" className="hover:text-white">Technology</Link>
      </nav>

      {/* RIGHT - SEARCH + BUTTONS */}
      <div className="flex items-center gap-3">

        {/* SEARCH */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-40 md:w-56
              pl-9 pr-3 py-1.5
              bg-gray-800/60
              border border-gray-700
              rounded-lg
              text-sm text-gray-200
              placeholder-gray-500
              focus:outline-none focus:border-indigo-500
              transition
            "
          />
        </div>

        {/* LOGIN */}
        <Link
          href="/signin"
          className="px-4 py-1 bg-gray-700 rounded hover:bg-gray-600 transition"
        >
          Login
        </Link>

        {/* SIGNUP */}
        <Link
          href="/signup"
          className="px-4 py-1 bg-indigo-600 rounded hover:bg-indigo-500 transition"
        >
          Sign up
        </Link>

      </div>

    </header>
  );
}