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
    <div className="w-full h-full overflow-x-hidden">
      {/* Landing Page */}
      <div className="relative min-h-screen bg-[#fff5c3] text-gray-900 flex flex-col justify-center items-center snap-start">
        {/* Background Orbs with Animations */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-400 opacity-50 animate-orb1"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-yellow-300 opacity-50 animate-orb2"></div>

        {/* Main Content */}
        <nav className="absolute top-0 left-0 right-0 py-6 px-8 flex justify-between items-center">
  <div className="text-3xl font-semibold transition-transform transform hover:scale-110 cursor-pointer">
    ducki
  </div>
  <div className="space-x-6">
    <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
      Learn More
    </button>
    <button onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
      Our Team
    </button>
    <button className="px-4 py-2 rounded-full bg-yellow-400 text-white hover:bg-yellow-500 transition-colors duration-300">
      Get Started
    </button>
  </div>
</nav>


        <div className="flex flex-col items-center text-center z-10">
          <h1 className="text-6xl font-bold text-gray-800">
            Understand <span className="text-yellow-500">{currentWord}</span> with clarity.
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Ducki helps developers understand those tricky lines of code, just by hovering over the problems.
          </p>
          <div className="mt-8 space-x-4">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300">
              Add to Your IDE
            </button>
          </div>
        </div>

        {/* Founders Info */}
        <p className="absolute bottom-5 text-sm text-gray-600">
          ducki was founded by rohan dhanam and aryan vasudevan
        </p>
      </div>

      {/* Features Page */}
      <div id="features" className="relative min-h-screen bg-[#fff5c3] text-black  flex flex-col justify-center items-center snap-start">
  <h2 className="text-5xl font-bold text-center mt-20">Features</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-12 px-8">
    
    {/* Feature Card 1 */}
    <div className="feature-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-semibold mb-4">Real-Time Code Explanation</h3>
      <p className="text-black-100">
        Ducki AI instantly analyzes your code and provides real-time explanations when you hover over problematic or complex code.
      </p>
    </div>

    {/* Feature Card 2 */}
    <div className="feature-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-semibold mb-4">Context-Aware Suggestions</h3>
      <p className="text-black-100">
        Powered by advanced natural language processing (NLP) models, Ducki understands the context of your code to offer relevant suggestions.
      </p>
    </div>

    {/* Feature Card 3 */}
    <div className="feature-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-semibold mb-4">AI-Powered Debugging</h3>
      <p className="text-black-100">
        Ducki’s AI not only explains code but also helps identify potential bugs, offering detailed debugging information with every explanation.
      </p>
    </div>

    {/* Feature Card 4 */}
    <div className="feature-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-semibold mb-4">Seamless IDE Integration</h3>
      <p className="text-black-100">
        Ducki integrates smoothly with all major IDEs like VSCode, JetBrains, and Sublime, ensuring you get instant insights wherever you code.
      </p>
    </div>

    {/* Feature Card 5 */}
    <div className="feature-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-semibold mb-4">Multi-Language Support</h3>
      <p className="text-black-100">
        With support for languages such as Python, JavaScript, C++, and more, Ducki is designed to assist across various tech stacks.
      </p>
    </div>

    {/* Feature Card 6 */}
    <div className="feature-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-semibold mb-4">Deep Learning Technology</h3>
      <p className="text-black-100">
        Built on deep learning models, Ducki’s AI continually learns from millions of code snippets to improve accuracy and explanations.
      </p>
    </div>
    
  </div>
  {/* Team Section */}
<div id="team" className="relative min-h-screen bg-[#fff5c3] text-black flex flex-col justify-center items-center snap-start">
  <h2 className="text-5xl font-bold text-center mt-20">Our Team</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl mx-auto mt-12 px-8">
    
    {/* Rohan Dhanam */}
    <div className="team-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-semibold mb-4">Rohan Dhanam</h3>
      <p className="text-black-100">
        Hey! I'm Rohan, a co-founder at Ducki. My work consists of maintaining the fullstack applications of our extension.
      </p>
    </div>

    {/* Aryan Vasudevan */}
    <div className="team-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-semibold mb-4">Aryan Vasudevan</h3>
      <p className="text-black-100">
        Aryan, co-founder of Ducki, specializes in integrating AI into developer tools, helping make code explanation easier for developers.
      </p>
    </div>

  </div>
</div>

</div>
    </div>
  );
}

export default App;
