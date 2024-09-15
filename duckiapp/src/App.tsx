import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-900 flex flex-col justify-center items-center">
      <nav className="absolute top-0 left-0 right-0 py-6 px-8 flex justify-between items-center">
        <div className="text-2xl font-semibold">Ducki</div>
        <div className="space-x-6">
          <button className="text-gray-700">Products</button>
          <button className="text-gray-700">Enterprise</button>
          <button className="text-gray-700">Log In</button>
          <button className="px-4 py-2 rounded-full bg-yellow-400 text-white">
            Get Started
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Empower <span className="text-yellow-500">Your Business</span> with Data
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Ducki helps businesses unlock their data potential, offering AI-powered insights that streamline operations.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg">
            Get a Demo
          </button>
          <button className="px-6 py-3 bg-transparent border border-yellow-500 text-yellow-500 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
