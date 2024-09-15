import React, { useState, useEffect } from 'react';

function App() {
  const words = ['your code', 'your work', 'your vision'];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentFullWord = words[wordIndex];
      if (isDeleting) {
        setCurrentWord(currentFullWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentWord(currentFullWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentFullWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(150);
      }
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, typingSpeed, wordIndex]);

  return (
    <div className="relative min-h-screen bg-[#fff5c3] text-gray-900 flex flex-col justify-center items-center">
      {/* Background Orbs with Animations */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-400 opacity-50 animate-orb1"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-yellow-300 opacity-50 animate-orb2"></div>

      {/* Main Content */}
      <nav className="absolute top-0 left-0 right-0 py-6 px-8 flex justify-between items-center">
        <div className="text-2xl font-semibold transition-transform transform hover:scale-110 cursor-pointer">
          ducki
        </div>
        <div className="space-x-6">
          <button className="text-gray-700 hover:text-gray-900 transition-colors duration-300">About</button>
          <button className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Our Team</button>
          <button className="px-4 py-2 rounded-full bg-yellow-400 text-white hover:bg-yellow-500 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center text-center z-10">
        <h1 className="text-6xl font-bold text-gray-800">
          Understand <span className="text-yellow-500">{currentWord}</span> With Clarity.
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Ducki helps developers understand those tricky lines of code, just by hovering over the problems.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300">
            Add to Your IDE
          </button>
          <button className="px-6 py-3 bg-transparent border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Founders Info */}
      <p className="absolute bottom-5 text-sm text-gray-600">
        ducki was founded by rohan dhanam and aryan vasudevan
      </p>
    </div>
  );
}

export default App;
