import React, { useState, useEffect } from 'react';
import { BarChart3, Zap, Leaf } from 'lucide-react';

const LiveData: React.FC = () => {
  const [metrics, setMetrics] = useState({
    tonsRecycled: 0,
    co2Reduced: 0,
    energySaved: 0,
    materialsRecovered: 0
  });

  // Simulate live data updates
  useEffect(() => {
    const targetMetrics = {
      tonsRecycled: 12458,
      co2Reduced: 3245,
      energySaved: 67,
      materialsRecovered: 89
    };

    const interval = setInterval(() => {
      setMetrics(prev => ({
        tonsRecycled: Math.min(prev.tonsRecycled + 15, targetMetrics.tonsRecycled),
        co2Reduced: Math.min(prev.co2Reduced + 5, targetMetrics.co2Reduced),
        energySaved: Math.min(prev.energySaved + 0.5, targetMetrics.energySaved),
        materialsRecovered: Math.min(prev.materialsRecovered + 0.5, targetMetrics.materialsRecovered)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Live Impact Dashboard
          </h2>
          <p className="text-lg text-gray-300">
            Real-time metrics showing the environmental impact of our AI-powered recycling system
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-2xl blur-md"></div>
          <div className="relative bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-700/50 p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Global Impact Metrics</h3>
              <div className="flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm text-gray-400">Live Data</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center mb-3">
                  <BarChart3 className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-400">Total Recycled</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{metrics.tonsRecycled.toLocaleString()}</span>
                  <span className="ml-2 text-gray-400">tons</span>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center mb-3">
                  <Leaf className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm text-gray-400">CO₂ Reduction</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{metrics.co2Reduced.toLocaleString()}</span>
                  <span className="ml-2 text-gray-400">tons</span>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center mb-3">
                  <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-400">Energy Saved</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{metrics.energySaved.toLocaleString()}</span>
                  <span className="ml-2 text-gray-400">MWh</span>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center mb-3">
                  <div className="h-5 w-5 text-purple-400 mr-2 flex items-center justify-center">♻️</div>
                  <span className="text-sm text-gray-400">Recovery Rate</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{metrics.materialsRecovered.toLocaleString()}</span>
                  <span className="ml-2 text-gray-400">%</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
              <div className="h-40 relative">
                {/* Simulated chart - in a real app, use a charting library */}
                <div className="absolute inset-0 flex items-end">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 mx-0.5"
                      style={{ 
                        height: `${20 + Math.random() * 60}%`,
                        background: `linear-gradient(to top, rgb(74, 222, 128, ${0.3 + i/48}), rgb(59, 130, 246, ${0.3 + i/48}))`
                      }}
                    ></div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
                <div className="absolute top-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>Max: 500 tons/day</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>24h ago</span>
                <span>12h ago</span>
                <span>Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveData;