import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Metal Waste Collection & Smart IoT Tracking",
      description: "Smart bins with IoT sensors detect and categorize metal waste at the source. RFID tags and GPS tracking provide real-time monitoring of waste collection and transportation.",
      icon: "📡"
    },
    {
      number: 2,
      title: "AI-Based Material Classification",
      description: "Computer vision and deep learning algorithms identify different metal types (aluminum, copper, steel, etc.) with 95%+ accuracy, even when contaminated or mixed.",
      icon: "🧠"
    },
    {
      number: 3,
      title: "Automated Robotic Sorting & Impurity Removal",
      description: "Robotic arms guided by AI separate metals by type and remove impurities. This automated process is 50% faster than manual sorting with higher precision.",
      icon: "🤖"
    },
    {
      number: 4,
      title: "Blockchain-Enabled Supply Chain Monitoring",
      description: "Every step of the recycling process is recorded on an immutable blockchain ledger, ensuring transparency and traceability from collection to reuse.",
      icon: "🔗"
    },
    {
      number: 5,
      title: "Circular Economy Integration",
      description: "Recycled metals are processed and reintegrated into manufacturing, completing the circular economy loop and reducing the need for virgin material extraction.",
      icon: "♻️"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          How It Works
        </h2>
        <p className="text-lg text-gray-300">
          Our AI-powered platform transforms metal waste into valuable resources through a seamless, automated process
        </p>
      </div>

      {/* Process Steps - Interactive */}
      <div className="relative mb-20">
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-700">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500"
            style={{ width: `${(activeStep / steps.length) * 100}%` }}
          ></div>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`relative cursor-pointer group ${activeStep === step.number ? 'z-10' : ''}`}
              onClick={() => setActiveStep(step.number)}
            >
              <div 
                className={`
                  flex flex-col items-center transition-all duration-300
                  ${activeStep === step.number ? 'md:-translate-y-2' : 'opacity-70 hover:opacity-100'}
                `}
              >
                <div 
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4
                    transition-all duration-300 z-10 relative
                    ${activeStep === step.number 
                      ? 'bg-gradient-to-br from-green-500 to-blue-600 shadow-lg shadow-blue-500/20' 
                      : 'bg-gray-800 border border-gray-700 group-hover:border-gray-600'}
                  `}
                >
                  <span>{step.icon}</span>
                </div>
                <h3 
                  className={`
                    text-center text-sm font-medium mb-2 transition-colors duration-300
                    ${activeStep === step.number ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}
                  `}
                >
                  Step {step.number}
                </h3>
                <p 
                  className={`
                    text-center text-xs transition-colors duration-300 hidden md:block
                    ${activeStep === step.number ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'}
                  `}
                >
                  {step.title.split(' ')[0]} {step.title.split(' ')[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Step Details */}
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-16">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center text-2xl mr-4">
            <span>{steps[activeStep - 1].icon}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold">{steps[activeStep - 1].title}</h3>
        </div>
        
        <p className="text-gray-300 mb-8">{steps[activeStep - 1].description}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 rounded-xl overflow-hidden">
            <img 
              src={`https://source.unsplash.com/random/600x400/?recycling,metal,technology,${steps[activeStep - 1].title.split(' ')[0]}`} 
              alt={steps[activeStep - 1].title}
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6">
            <h4 className="font-semibold mb-4">Key Technologies</h4>
            <ul className="space-y-3">
              {activeStep === 1 && (
                <>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>IoT sensors for real-time waste detection and categorization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>RFID tagging system for tracking individual waste batches</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>GPS-enabled collection vehicles with route optimization</span>
                  </li>
                </>
              )}
              
              {activeStep === 2 && (
                <>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Computer vision systems with multi-spectral cameras</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Deep learning neural networks trained on millions of metal samples</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time classification with 95%+ accuracy for 30+ metal types</span>
                  </li>
                </>
              )}
              
              {activeStep === 3 && (
                <>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Precision robotic arms with advanced gripping mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>AI-guided sorting algorithms for optimal efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated contaminant detection and removal systems</span>
                  </li>
                </>
              )}
              
              {activeStep === 4 && (
                <>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Distributed ledger technology for immutable record-keeping</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Smart contracts for automated verification and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>End-to-end traceability from collection to remanufacturing</span>
                  </li>
                </>
              )}
              
              {activeStep === 5 && (
                <>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Digital material passports for recycled metals</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Industry partnerships for direct reintegration of materials</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Carbon footprint tracking and sustainability metrics</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Simulation */}
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Real-Time Smart Sorting Simulation</h3>
        
        <div className="relative h-80 bg-gray-900/70 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-400 text-center px-4">
              Interactive simulation would be displayed here, showing how AI identifies and sorts different metal types in real-time.
              <br /><br />
              <span className="text-sm">In a production environment, this would be an interactive WebGL or Three.js simulation allowing users to see the sorting process in action.</span>
            </p>
          </div>
          
          {/* Decorative elements to simulate a visualization */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="absolute top-4 right-4 text-xs text-gray-500">Simulation v1.0</div>
          
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-blue-500/30 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-green-500/30 animate-ping" style={{ animationDuration: '2.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-full bg-purple-500/30 animate-ping" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;