import React from 'react';
import Hero3D from './components/Hero3D';
import ManufactureWeb from './components/ManufactureWeb';
import HoloDesign from './components/HoloDesign';
import LiveMotion from './components/LiveMotion';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero3D />
      <ManufactureWeb />
      <HoloDesign />
      <LiveMotion />
      <FinalCTA />
    </div>
  );
}

export default App;
