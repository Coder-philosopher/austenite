import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  handleScroll: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleScroll }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-400 opacity-10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500 opacity-10 rounded-full filter blur-3xl animate-ping" />
        <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-teal-400 opacity-10 rounded-full filter blur-2xl animate-spin-slow" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-teal-400">
            Revolutionizing Metal Waste Management with AI & Automation
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Our AI-powered platform transforms metal waste recycling through smart sorting, 
            blockchain tracking, and circular economy integration.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => handleScroll('how-it-works')}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
            >
              Explore The Future
            </button>

            <button className="bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-gray-700 hover:border-gray-600">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button 
          onClick={() => handleScroll('how-it-works')}
          className="flex flex-col items-center text-gray-400 hover:text-green-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
