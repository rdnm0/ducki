import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  const words = ['that code', 'that line', 'that syntax error'];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`w-full h-full overflow-x-hidden ${isDarkMode ? 'dark' : ''} ${isDarkMode ? 'dark bg-gray-900 text-gray-200' : 'bg-[#fff5c3] text-gray-900'}`}>
      {/* Landing Page */}
      <div className={`relative min-h-screen flex flex-col justify-center items-center snap-start`}>
        {/* Background Orbs with Animations */}
        <div className={`absolute top-10 left-10 w-32 h-32 rounded-full ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-400'} opacity-50 animate-orb1`}></div>
        <div className={`absolute bottom-20 right-20 w-40 h-40 rounded-full ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-300'} opacity-50 animate-orb2`}></div>

        {/* Navbar */}
        <nav className={`fixed top-0 left-0 right-0 py-6 px-8 flex justify-between items-center ${isDarkMode ? 'bg-gray-900' : 'bg-[#fff5c3]'} bg-opacity-0 shadow-xl z-50`}>
          <div className="text-3xl font-semibold transition-transform transform hover:scale-110 cursor-pointer">
            ducki
          </div>
          <div className="space-x-6">
            <button
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-200 hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Our Mission
            </button>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-200 hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Learn More
            </button>
            <button
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-200 hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Our Team
            </button>
            <button className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-400 hover:bg-yellow-500'} text-white transition-colors duration-300`}>
              Get Started
            </button>
            <button
              onClick={handleToggleDarkMode}
              className={`ml-4 px-4 py-2 rounded-full ${isDarkMode ? 'bg-yellow hover:bg-gray-800' : 'bg-black hover:bg-gray-400'} text-gray-900 dark:text-white transition-colors duration-300`}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center z-10">
          <h1 className="text-6xl font-bold">
            We get it, <span className="text-yellow-500">{currentWord}</span> doesn't make sense.
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Ducki helps developers understand those tricky lines of code, just by hovering over the problems.
          </p>
          <div className="mt-8 space-x-4">
            <button className={`px-6 py-3 rounded-lg ${isDarkMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white transition-all duration-300`}>
              Add to Your IDE
            </button>
          </div>
        </div>

        {/* Founders Info */}
        <p className="absolute bottom-5 text-sm text-gray-600 dark:text-gray-400">
          ducki was founded by rohan dhanam and aryan vasudevan
        </p>
      </div>
          {/* Our Mission Page */}
          <div id="mission" className={`relative min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-[#fff5c3] text-gray-900'} flex flex-col justify-center items-center snap-start px-6 py-20`}>
  <h2 className="text-6xl font-bold mb-10 tracking-wide text-center  transition-transform transform hover:scale-110 duration-300">Our Mission</h2>
  
  <p className= "text-lg max-w-3xl text-center mt-4 leading-relaxed  ">
    Ducki aims to simplify coding for developers by providing instant explanations and insights into complex code, making debugging more efficient and coding easier. Our mission is to integrate AI into developer tools, enhancing productivity through real-time code analysis and context-aware suggestions.
  </p>

  {/* Decorative Line */}
  <div className="w-32 h-1 bg-yellow-400 mt-6 mb-12 rounded-full"></div>

  
</div>

          

          {/* Features Page */}
          <div id="features" className={`relative min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-[#fff5c3] text-gray-900'} flex flex-col justify-center items-center snap-start`}>
      <h2 className="text-5xl font-bold text-center mt-20">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-12 px-8">
        
        {/* Feature Card 1 */}
        <div className="feature-card p-6 bg-gradient-to-r  from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
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
          <h3 className="text-3xl font-semibold mb-4">Customizable Themes</h3>
          <p className="text-black-100">
            Choose from various themes, including a dark mode to suit your preferences and reduce eye strain during late-night coding sessions.
          </p>
        </div>

        {/* Feature Card 5 */}
        <div className="feature-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-semibold mb-4">Multi-Language Support</h3>
          <p className="text-black-100">
            Ducki supports a wide range of programming languages, offering explanations and suggestions tailored to the specific language you're using.
          </p>
        </div>

        {/* Feature Card 6 */}
        <div className="feature-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-semibold mb-4">Seamless IDE Integration</h3>
          <p className="text-black-100">
            Easily integrate Ducki into your preferred IDE with simple, one-click installation, and start coding more efficiently right away.
          </p>
        </div>
      </div>
    </div>

          {/* Our Team */}
          <div id="team" className={`relative min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-[#fff5c3] text-gray-900'} flex flex-col justify-center items-center snap-start`}>
        <h2 className="text-5xl font-bold text-center mt-20">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-12 px-8">
          <div className="team-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-black' : ''}`}>Rohan Dhanam</h3>
            <p className={`${isDarkMode ? 'text-black' : ''}`}>Co-Founder, Lead Developer</p>
          </div>
          <div className="team-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-black' : ''}`}>Aryan Vasudevan</h3>
            <p className={`${isDarkMode ? 'text-black' : ''}`}>Co-Founder, Product Designer</p>
          </div>
          <div className="team-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-black' : ''}`}>Advay Chandorkar</h3>
            <p className={`${isDarkMode ? 'text-black' : ''}`}>Co-Founder, Backend Engineer</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
