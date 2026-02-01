"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 flex items-center justify-center px-6">

      {/* Soft blur circles for aesthetic */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-700 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative max-w-4xl text-center z-10">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
        >
          Founders Hub
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200"
        >
          Unlock Premium Startup Tools — For Free
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-400 mb-10"
        >
          Get exclusive credits, discounts, and growth tools trusted by modern startups.
        </motion.p>

        {/* Register + Sign In Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/register">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 w-48">
              Register
            </button>
          </Link>

          <Link href="/login">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-indigo-700 transition-all duration-300 w-48">
              Sign In
            </button>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
