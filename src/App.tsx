import React, { useState } from 'react';
import { Recycle, BarChart3, Zap, Leaf, ChevronDown, Upload, Brain, Notebook as Robot, Link, LineChart, Cpu, Gauge, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Overview from './components/Overview';
import Benefits from './components/Benefits';
import LiveData from './components/LiveData';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import ImpactMetrics from './components/ImpactMetrics';
import Research from './components/Research';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar activeSection={activeSection} handleScroll={handleScroll} />
      
      <main>
        <section id="home" className="pt-20">
          <HeroSection handleScroll={handleScroll} />
          <Overview />
          <Benefits />
          <LiveData />
        </section>

        <section id="how-it-works" className="py-20">
          <HowItWorks />
        </section>

        <section id="features" className="py-20 bg-gray-800/50">
          <Features />
        </section>

        <section id="impact" className="py-20">
          <ImpactMetrics />
        </section>

        <section id="research" className="py-20 bg-gray-800/50">
          <Research />
        </section>

        
      </main>

      <Footer handleScroll={handleScroll} />
    </div>
  );
}

export default App;