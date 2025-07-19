import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            The Metal Waste Crisis & Our Solution
          </h2>
          <p className="text-lg text-gray-300">
            Metal waste is a growing global challenge with significant environmental impacts. 
            Traditional recycling methods are inefficient, labor-intensive, and often miss valuable materials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-900/20">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">The Problem</h3>
            <p className="text-gray-300">
              Over 40% of valuable metals end up in landfills due to inefficient sorting. 
              Manual recycling processes are slow, inaccurate, and unable to meet growing demand.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Our Approach</h3>
            <p className="text-gray-300">
              We leverage AI, computer vision, and robotics to revolutionize metal waste sorting. 
              Our system identifies, classifies, and separates metals with 95%+ accuracy.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-900/20">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl">♻️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">The Impact</h3>
            <p className="text-gray-300">
              Our solution increases recycling rates by 30%, reduces CO₂ emissions, and creates a 
              transparent supply chain through blockchain verification.
            </p>
          </div>
        </div>

        {/* Infographic */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-2xl"></div>
          <div className="relative bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-8 text-center">The Circular Economy Journey</h3>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center text-center mb-8 md:mb-0">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🗑️</span>
                </div>
                <h4 className="font-semibold mb-2">Waste Accumulation</h4>
                <p className="text-sm text-gray-400 max-w-[200px]">Metal waste from industries and consumers</p>
              </div>
              
              <div className="hidden md:block text-green-400">→→→</div>
              
              <div className="flex flex-col items-center text-center mb-8 md:mb-0">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h4 className="font-semibold mb-2">Smart Sorting</h4>
                <p className="text-sm text-gray-400 max-w-[200px]">AI-powered detection and classification</p>
              </div>
              
              <div className="hidden md:block text-green-400">→→→</div>
              
              <div className="flex flex-col items-center text-center mb-8 md:mb-0">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <h4 className="font-semibold mb-2">Processing</h4>
                <p className="text-sm text-gray-400 max-w-[200px]">Automated separation and preparation</p>
              </div>
              
              <div className="hidden md:block text-green-400">→→→</div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h4 className="font-semibold mb-2">Circular Economy</h4>
                <p className="text-sm text-gray-400 max-w-[200px]">Reintegration into manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;