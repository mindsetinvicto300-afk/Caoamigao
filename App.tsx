import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Author from './components/Author';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Author />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
};

export default App;