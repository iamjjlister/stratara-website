import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-slate-900 text-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-light tracking-widest text-2xl">STRATARA</span>
              <div className="h-px w-12 bg-orange-600 ml-4 hidden sm:block" />
            </a>
          </div>

          <nav className="hidden sm:flex space-x-8">
            <a href="/about" className="text-gray-100 hover:text-orange-600 transition-colors duration-200">About</a>
            <a href="/services" className="text-gray-100 hover:text-orange-600 transition-colors duration-200">Services</a>
            <a href="/contact" className="text-gray-100 hover:text-orange-600 transition-colors duration-200">Contact</a>
          </nav>

          <div className="sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-100 hover:text-orange-600 transition-colors">
              {isMobileMenuOpen ? 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                : 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <a href="/about" className="text-gray-100 hover:text-orange-600 transition-colors duration-200">About</a>
              <a href="/services" className="text-gray-100 hover:text-orange-600 transition-colors duration-200">Services</a>
              <a href="/contact" className="text-gray-100 hover:text-orange-600 transition-colors duration-200">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-light tracking-wide text-slate-900">
              Modern Family Office for the Next Generation
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Premium wealth management and life optimization services designed for young professionals earning $150k-500k annually.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-900 text-white px-8 py-3 rounded hover:bg-slate-800 transition-colors duration-200">
                Request Invitation
              </button>
              <button className="border border-slate-300 text-slate-900 px-8 py-3 rounded hover:border-slate-400 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:pl-12">
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg">
              <div className="p-8 grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded shadow-sm">
                  <div className="text-orange-600 text-4xl font-light mb-2">24/7</div>
                  <div className="text-slate-600">Concierge Service</div>
                </div>
                <div className="bg-white p-6 rounded shadow-sm">
                  <div className="text-orange-600 text-4xl font-light mb-2">AI</div>
                  <div className="text-slate-600">Powered Tools</div>
                </div>
                <div className="bg-white p-6 rounded shadow-sm">
                  <div className="text-orange-600 text-4xl font-light mb-2">1:1</div>
                  <div className="text-slate-600">Dedicated Support</div>
                </div>
                <div className="bg-white p-6 rounded shadow-sm">
                  <div className="text-orange-600 text-4xl font-light mb-2">360°</div>
                  <div className="text-slate-600">Life Strategy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default App;