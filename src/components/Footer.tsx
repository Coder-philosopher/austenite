import React from 'react';
import {
  Recycle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MapPin
} from 'lucide-react';

interface FooterProps {
  handleScroll: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ handleScroll }) => {
  return (
    <footer className="relative bg-gray-900 pt-16 pb-8 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-spin-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Branding & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Recycle className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                MetalAI Recycle
              </span>
            </div>

            <p className="text-gray-400 mb-6 text-sm">
              Revolutionizing metal waste management with AI-powered solutions for a cleaner, circular future.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', section: 'home' },
                { name: 'How It Works', section: 'how-it-works' },
                { name: 'Features', section: 'features' },
                { name: 'Impact', section: 'impact' },
                { name: 'Research', section: 'research' },
              ].map(link => (
                <li key={link.section}>
                  <button
                    onClick={() => handleScroll(link.section)}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Developer - Abdullah</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://github.com/Coder-Philosopher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-green-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.06 10.954c.59.109.804-.254.804-.566 0-.28-.011-1.023-.017-2.008-3.278.713-3.97-1.58-3.97-1.58-.537-1.363-1.312-1.727-1.312-1.727-1.072-.733.082-.718.082-.718 1.185.083 1.81 1.217 1.81 1.217 1.053 1.805 2.762 1.283 3.435.98.107-.763.413-1.284.751-1.579-2.617-.298-5.368-1.308-5.368-5.823 0-1.286.461-2.339 1.215-3.163-.122-.297-.527-1.494.114-3.117 0 0 .987-.316 3.235 1.205a11.27 11.27 0 015.89 0c2.248-1.521 3.233-1.205 3.233-1.205.643 1.623.238 2.82.117 3.117.755.824 1.213 1.877 1.213 3.163 0 4.527-2.754 5.522-5.378 5.814.425.365.803 1.086.803 2.19 0 1.582-.015 2.858-.015 3.247 0 .315.212.682.81.566A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
                  </svg>
                  <span>Coder-Philosopher</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center pt-6 border-t border-gray-800 text-gray-500 text-xs">
          © 2025 MetalAI Recycle. All rights reserved by Abdullah. Unauthorized copying or reuse may result in copyright violation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
