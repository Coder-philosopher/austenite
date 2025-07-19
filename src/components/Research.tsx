import React, { useState } from 'react';

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState('research');

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Research & Innovation
        </h2>
        <p className="text-lg text-gray-300">
          Exploring the cutting edge of AI and IoT in waste management
        </p>
      </div>

      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
        <div className="flex border-b border-gray-700">
          <button 
            className={`flex-1 py-4 text-center transition-colors ${
              activeTab === 'research' 
                ? 'bg-gray-700/50 text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
            }`}
            onClick={() => setActiveTab('research')}
          >
            AI & IoT Research
          </button>
          <button 
            className={`flex-1 py-4 text-center transition-colors ${
              activeTab === 'policies' 
                ? 'bg-gray-700/50 text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
            }`}
            onClick={() => setActiveTab('policies')}
          >
            Policies & Compliance
          </button>
          <button 
            className={`flex-1 py-4 text-center transition-colors ${
              activeTab === 'partners' 
                ? 'bg-gray-700/50 text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
            }`}
            onClick={() => setActiveTab('partners')}
          >
            Industry Partners
          </button>
        </div>

        <div className="p-8">
          {activeTab === 'research' && (
            <div>
              <h3 className="text-xl font-bold mb-8 text-center">Latest Research & Innovations</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-900/50 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="AI Research"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Research Paper</span>
                    <h4 className="text-lg font-semibold my-3">Advanced Neural Networks for Metal Classification</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      Our latest research on multi-spectral imaging combined with deep learning for identifying complex metal alloys.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Published: June 2025</span>
                      <button className="text-xs text-blue-400 hover:text-blue-300">Read More →</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="IoT Research"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Whitepaper</span>
                    <h4 className="text-lg font-semibold my-3">Next-Gen IoT Sensors for Waste Detection</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      Exploring low-power, high-sensitivity sensors capable of detecting metal composition through various containers.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Published: April 2025</span>
                      <button className="text-xs text-blue-400 hover:text-blue-300">Read More →</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Blockchain Research"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Case Study</span>
                    <h4 className="text-lg font-semibold my-3">Blockchain for Circular Economy Verification</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      How our blockchain implementation creates verifiable proof of recycling for regulatory compliance.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Published: May 2025</span>
                      <button className="text-xs text-blue-400 hover:text-blue-300">Read More →</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Research Partnerships</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center bg-gray-800/50 rounded-lg p-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">MIT Waste Management Innovation Lab</h5>
                      <p className="text-xs text-gray-400">Joint research on next-generation sorting algorithms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-800/50 rounded-lg p-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">🔬</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">European Circular Economy Institute</h5>
                      <p className="text-xs text-gray-400">Collaborative research on metal lifecycle analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-800/50 rounded-lg p-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Stanford AI for Sustainability Lab</h5>
                      <p className="text-xs text-gray-400">Research on energy-efficient AI for recycling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-800/50 rounded-lg p-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">🌍</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Global Metals Industry Consortium</h5>
                      <p className="text-xs text-gray-400">Industry-wide standards for AI-powered recycling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div>
              <h3 className="text-xl font-bold mb-8 text-center">Government Policies & Compliance</h3>
              
              <div className="bg-gray-900/50 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold mb-4">How Our Technology Meets Regulatory Requirements</h4>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h5 className="font-medium mb-2">EU Circular Economy Action Plan</h5>
                    <p className="text-sm text-gray-400 mb-3">
                      Our AI-powered recycling system helps businesses meet the EU's targets for metal recovery and reuse, 
                      supporting the transition to a circular economy.
                    </p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <span className="text-xs text-green-400">95% Compliant</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h5 className="font-medium mb-2">US EPA Sustainable Materials Management</h5>
                    <p className="text-sm text-gray-400 mb-3">
                      Our system's detailed tracking and reporting capabilities exceed EPA requirements for waste management 
                      and resource conservation.
                    </p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-xs text-green-400">100% Compliant</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h5 className="font-medium mb-2">ISO 14001 Environmental Management</h5>
                    <p className="text-sm text-gray-400 mb-3">
                      Our platform's analytics and reporting tools help organizations maintain ISO 14001 certification by 
                      documenting environmental performance improvements.
                    </p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      <span className="text-xs text-green-400">98% Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Incentives & Benefits</h4>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span className="text-sm text-gray-300">Tax credits for implementing AI-powered recycling technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span className="text-sm text-gray-300">Reduced waste disposal fees through higher recycling rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span className="text-sm text-gray-300">Carbon credit generation through verified emissions reduction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span className="text-sm text-gray-300">Compliance with Extended Producer Responsibility regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span className="text-sm text-gray-300">Qualification for green procurement programs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Compliance Reporting</h4>
                  
                  <p className="text-sm text-gray-400 mb-4">
                    Our platform generates comprehensive compliance reports for various regulatory frameworks:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Environmental Impact Assessment</span>
                      <button className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Sample Report</button>
                    </div>
                    <div className="h-px bg-gray-700"></div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Circular Economy Metrics</span>
                      <button className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Sample Report</button>
                    </div>
                    <div className="h-px bg-gray-700"></div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Carbon Footprint Reduction</span>
                      <button className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Sample Report</button>
                    </div>
                    <div className="h-px bg-gray-700"></div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Resource Recovery Documentation</span>
                      <button className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Sample Report</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'partners' && (
            <div>
              <h3 className="text-xl font-bold mb-8 text-center">Industry Collaboration</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-900/50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h4 className="font-semibold mb-2">Manufacturing Partners</h4>
                  <p className="text-sm text-gray-400">
                    Leading manufacturers integrating our recycled metals into their production processes
                  </p>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold mb-2">Investment Partners</h4>
                  <p className="text-sm text-gray-400">
                    Venture capital and impact investors supporting our mission for sustainable recycling
                  </p>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h4 className="font-semibold mb-2">Technology Partners</h4>
                  <p className="text-sm text-gray-400">
                    Technology providers enhancing our AI, robotics, and blockchain capabilities
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-6 text-center">Featured Partners</h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                    <span className="text-xl font-bold text-gray-400">Partner Logo</span>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                    <span className="text-xl font-bold text-gray-400">Partner Logo</span>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                    <span className="text-xl font-bold text-gray-400">Partner Logo</span>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                    <span className="text-xl font-bold text-gray-400">Partner Logo</span>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                    <span className="text-xl font-bold text-gray-400">Partner Logo</span>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                    <span className="text-xl font-bold text-gray-400">Partner Logo</span>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                    <span className="text-xl font-bold text-gray-400">Partner Logo</span>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                    <span className="text-xl font-bold text-gray-400">Partner Logo</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold mb-4">Become a Partner</h4>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join our ecosystem of forward-thinking organizations committed to revolutionizing metal recycling 
                  and advancing the circular economy.
                </p>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Contact Our Partnership Team
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;