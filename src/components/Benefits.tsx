import React from 'react';
import { Brain, Notebook as Robot, Link, Leaf } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-green-400" />,
      title: "AI-Powered Waste Sorting",
      description: "Our deep learning algorithms identify and classify metals with unprecedented accuracy, reducing manual sorting by 80%."
    },
    {
      icon: <Robot className="h-8 w-8 text-blue-400" />,
      title: "Smart Metal Classification",
      description: "Computer vision technology distinguishes between different metal types, alloys, and contaminants in real-time."
    },
    {
      icon: <Link className="h-8 w-8 text-purple-400" />,
      title: "Blockchain-Based Tracking",
      description: "Immutable ledger technology ensures complete transparency and traceability throughout the recycling process."
    },
    {
      icon: <Leaf className="h-8 w-8 text-teal-400" />,
      title: "Sustainable Impact",
      description: "Reduced energy consumption, lower CO₂ emissions, and higher recycling rates for a greener future."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Key Benefits
          </h2>
          <p className="text-lg text-gray-300">
            Our AI-powered platform delivers transformative advantages for metal recycling operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-900/20 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;