import React, { useState } from 'react';

const tabs = [
  { key: 'metrics', label: 'Impact Metrics' },
  { key: 'case-studies', label: 'Case Studies' },
  { key: 'dashboard', label: 'Interactive Dashboard' },
];

const ImpactMetrics: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('metrics');

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Real-World Impact
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Measurable results from our AI-powered recycling technology
        </p>
      </div>

      <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex border-b border-gray-700 divide-x divide-gray-700">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              aria-pressed={selectedTab === tab.key}
              className={`flex-1 py-4 text-sm md:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 ${
                selectedTab === tab.key
                  ? 'bg-gray-700/50 text-white font-medium'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {selectedTab === 'metrics' && (
            <>
              <h3 className="text-xl font-bold text-center mb-10 text-white">Before & After Comparison</h3>
              {/* Side-by-side metric boxes */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Traditional Box */}
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <h4 className="text-lg font-semibold mb-6 text-red-400">Traditional Recycling</h4>
                  {[
                    { label: 'Sorting Speed', value: '100%', width: '100%' },
                    { label: 'Recycling Efficiency', value: '65%', width: '65%' },
                    { label: 'Hazardous Waste Detection', value: '40%', width: '40%' },
                    { label: 'Energy Consumption', value: '100%', width: '100%' },
                  ].map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="bg-gray-700 h-2 rounded-full">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Box */}
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <h4 className="text-lg font-semibold mb-6 text-green-400">AI-Powered Recycling</h4>
                  {[
                    { label: 'Sorting Speed', value: '+30%', width: '130%' },
                    { label: 'Recycling Efficiency', value: '+25%', width: '90%' },
                    { label: 'Hazardous Waste Detection', value: '+50%', width: '90%' },
                    { label: 'Energy Consumption', value: '-40%', width: '60%' },
                  ].map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="bg-gray-700 h-2 rounded-full">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlighted Metrics */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '30%', label: 'Faster Metal Sorting' },
                  { value: '25%', label: 'Increased Efficiency' },
                  { value: '50%', label: 'Better Waste Detection' },
                  { value: '40%', label: 'Lower Energy Usage' },
                ].map((metric, index) => (
                  <div key={index} className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{metric.value}</div>
                    <p className="text-sm text-gray-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {selectedTab === 'case-studies' && (
            <>
              <h3 className="text-xl font-bold text-center mb-10 text-white">Success Stories</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {[
                  {
                    title: 'Global Metals Corporation',
                    desc:
                      'Implemented our AI-powered sorting system across 5 recycling facilities, resulting in a 35% increase in metal recovery rates and $2.4M annual savings.',
                    type: 'Industrial Metals Recycling',
                    stat: '35% Improvement',
                    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                  },
                  {
                    title: 'TechRecycle Solutions',
                    desc:
                      'Specialized in e-waste recycling, our AI system helped recover 28% more precious metals from electronic components while reducing processing time by 40%.',
                    type: 'E-Waste Recycling',
                    stat: '28% More Recovery',
                    img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                  },
                ].map((cs, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700">
                    <img src={cs.img} alt={cs.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">{cs.title}</h4>
                      <p className="text-sm text-gray-400 mb-4">{cs.desc}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{cs.type}</span>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">{cs.stat}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Expert Testimonials</h4>
                <div className="space-y-6">
                  {[
                    {
                      name: 'Dr. Sarah Chen',
                      title: 'Chief Sustainability Officer, Global Metals Corp',
                      quote:
                        'The AI-powered sorting technology has transformed our recycling operations. We\'re processing more material with fewer resources while meeting stringent environmental standards.',
                    },
                    {
                      name: 'Michael Rodriguez',
                      title: 'Director of Innovation, TechRecycle Solutions',
                      quote:
                        'The blockchain tracking component provides unprecedented transparency. Our customers can verify sustainability with complete confidence.',
                    },
                  ].map((t, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-300 italic mb-2">"{t.quote}"</p>
                        <div className="text-xs text-gray-500">
                          <strong>{t.name}</strong> • {t.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {selectedTab === 'dashboard' && (
            <>
              <h3 className="text-xl font-bold text-center mb-10 text-white">Interactive Impact Dashboard</h3>

              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-400 text-center mb-6">
                  Adjust the parameters below to see how AI-based recycling impacts sustainability metrics.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: 'Processing Volume', min: 1000, max: 10000, default: 5000, unit: 'tons' },
                    { label: 'AI Efficiency Level', min: 80, max: 99, default: 95, unit: '%' },
                    { label: 'Metal Mix Complexity', min: 1, max: 5, default: 3, unit: '' },
                  ].map((slider, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-white mb-2">{slider.label}</label>
                      <input
                        type="range"
                        min={slider.min}
                        max={slider.max}
                        defaultValue={slider.default}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>
                          {slider.min} {slider.unit}
                        </span>
                        <span>
                          {slider.max} {slider.unit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dashboard results */}
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {[
                    { label: 'CO₂ Reduction', value: '1,250 tons', sub: 'Equivalent to 270 cars off the road' },
                    { label: 'Cost Savings', value: '$425,000', sub: 'Annual operational savings' },
                    { label: 'Metal Recovery Rate', value: '92.5%', sub: '+27.5% vs. traditional methods' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-gray-300 mb-2">{stat.label}</h5>
                      <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                      <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated chart */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-6 relative">
                <h4 className="text-lg font-semibold text-white mb-4">Projected Impact Over Time</h4>
                <div className="h-64 relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L10,90 L20,85 L30,75 L40,65 L50,55 L60,45 L70,40 L80,30 L90,25 L100,20" fill="none" stroke="#4ade80" strokeWidth="2" />
                    <path d="M0,100 L10,95 L20,92 L30,90 L40,85 L50,82 L60,80 L70,78 L80,75 L90,73 L100,70" fill="none" stroke="#60a5fa" strokeWidth="2" />
                  </svg>
                  <div className="absolute bottom-2 left-0 text-xs text-gray-500">Year 1</div>
                  <div className="absolute bottom-2 right-0 text-xs text-gray-500">Year 5</div>
                  <div className="absolute top-2 right-4 flex space-x-4 text-xs text-gray-400">
                    <div className="flex items-center">
                      <div className="w-3 h-1 bg-green-500 mr-1"></div>
                      <span>CO₂ Reduction</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-1 bg-blue-500 mr-1"></div>
                      <span>Cost Savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
