import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import TechnologyPricingCTA from './components/TechnologyPricingCTA';

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-blue-600" />
        <span className="text-lg font-semibold text-gray-900">Solearn</span>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
        <a href="#features" className="hover:text-gray-900">Features</a>
        <a href="#pricing" className="hover:text-gray-900">Pricing</a>
        <a href="#download" className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Download</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t border-gray-100 bg-white">
    <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>© {new Date().getFullYear()} Solearn. The Place to be Ambitious Together!</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-gray-900">Privacy</a>
          <a href="#terms" className="hover:text-gray-900">Terms</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <div id="features">
          <ProblemSection />
          <FeaturesSection />
        </div>
        <TechnologyPricingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
