import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <header className="text-center py-16">
        <h1 className="text-6xl font-semibold">TV Box</h1>
        <p className="text-2xl mt-4 text-gray-400">
          Revolutionizing the way you experience TV.
        </p>
      </header>
      <div className="flex justify-center mb-12">
        <img
          src={process.env.PUBLIC_URL + "/eurovision-box.png"}
          alt="Eurovision Box"
          className="rounded-lg shadow-lg w-96"
        />
      </div>
      <main className="max-w-5xl mx-auto grid gap-16">
        <section className="bg-black border-none shadow-xl p-12 text-center">
          <h2 className="text-4xl font-medium mt-6">Stunning 4K Streaming</h2>
          <p className="mt-4 text-gray-400">
            Immerse yourself in crystal-clear visuals with seamless performance.
          </p>
        </section>
        <section className="bg-black border-none shadow-xl p-12 text-center">
          <h2 className="text-4xl font-medium mt-6">Exclusive TV Content</h2>
          <p className="mt-4 text-gray-400">
            Behind-the-scenes, interviews, and bonus footage at your fingertips.
          </p>
        </section>
        <section className="bg-black border-none shadow-xl p-12 text-center">
          <h2 className="text-4xl font-medium mt-6">Order Yours Today</h2>
          <p className="mt-4 text-gray-400">
            Limited availability. Elevate your TV experience now.
          </p>
          <button className="mt-6 px-8 py-3 text-xl bg-white text-black rounded-full hover:opacity-80">
            Buy Now
          </button>
        </section>
      </main>
      <footer className="text-center py-12 text-gray-500 text-sm">
        &copy; 2025 TV Box. All rights reserved.
      </footer>
    </div>
  );
}
