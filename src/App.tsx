/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-bg-primary text-text-primary overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solutions />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Testimonials />
      <FAQ />
      
      <div className="relative overflow-hidden bg-bg-dark">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-[#0D1E22]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E22] via-[#0D1E22]/80 to-transparent" />
        
        <div className="relative z-10 w-full">
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
