import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default App;