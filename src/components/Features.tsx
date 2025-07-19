import React from 'react';
import { Brain, Notebook as Robot, Link, LineChart, Cpu, Gauge } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-green-400" />,
      title: "AI-Based Metal Classification",
      description: "Our computer vision and deep learning algorithms identify and sort metals with 95%+ accuracy, even when contaminated or mixed with other materials.",
      details: [
        "Multi-spectral imaging for precise material identification",
        "Real-time classification of 30+ metal types and alloys",
        "Continuous learning system that improves over time"
      ]
    },
    {
      icon: <Robot className="h-10 w-10 text-blue-400" />,
      title: "Automated Robotic Sorting",
      description: "AI-powered robotic arms precisely separate different metal types and remove impurities, increasing efficiency by 50% compared to manual sorting.",
      details: [
        "Precision robotic arms with advanced gripping mechanisms",
        "Automated contaminant detection and removal",
        "24/7 operation with minimal human intervention"
      ]
    },
    {
      icon: <Link className="h-10 w-10 text-purple-400" />,
      title: "Blockchain-Based Tracking",
      description: "Every step of the recycling process is recorded on an immutable blockchain ledger, ensuring complete transparency and traceability.",
      details: [
        "Immutable record of material origin and processing",
        "Smart contracts for automated verification",
        "End-to-end supply chain visibility"
      ]
    },
    {
      icon: <LineChart className="h-10 w-10 text-teal-400" />,
      title: "Environmental Compliance & Analytics",
      description: "AI-driven analytics provide detailed insights on carbon footprint reduction, helping industries meet global sustainability standards.",
      details: [
        "Real-time environmental impact monitoring",
        "Regulatory compliance reporting",
        "Sustainability metrics for ESG reporting"
      ]
    },
    {
      icon: <Cpu className="h-10 w-10 text-red-400" />,
      title: "Smart IoT Recycling Bins",
      description: "IoT-enabled bins automatically detect, categorize, and track metal waste from the point of disposal through the entire recycling process.",
      details: [
        "Embedded sensors for material detection",
        "Real-time fill level monitoring",
        "Optimized collection route planning"
      ]
    },
    {
      icon: <Gauge className="h-10 w-10 text-yellow-400" />,
      title: "Predictive Maintenance & Optimization",
      description: "AI algorithms predict equipment maintenance needs and optimize energy consumption for sustainable operations.",
      details: [
        "Predictive maintenance to prevent downtime",
        "Energy usage optimization",
        "Automated system calibration"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Cutting-Edge Technology at Work
        </h2>
        <p className="text-lg text-gray-300">
          Our platform combines multiple advanced technologies to create a comprehensive metal recycling solution
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/10 group"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-300 mb-6">{feature.description}</p>
            
            <ul className="space-y-2">
              {feature.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-sm text-gray-400">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Feature Highlight */}
      <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              AI-Powered Metal Recognition
            </h3>
            <p className="text-gray-300 mb-6">
              Our advanced computer vision system can identify and classify over 30 different types of metals and alloys with 95%+ accuracy, even when contaminated or mixed with other materials.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Aluminum Recognition</span>
                  <span className="text-sm text-green-400">98.5%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '98.5%' }}></div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Copper Recognition</span>
                  <span className="text-sm text-green-400">97.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '97.2%' }}></div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Steel Alloys Recognition</span>
                  <span className="text-sm text-green-400">95.8%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95.8%' }}></div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Mixed/Contaminated Metals</span>
                  <span className="text-sm text-green-400">93.1%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '93.1%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AI Metal Recognition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;