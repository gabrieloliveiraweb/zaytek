import { Toaster } from 'react-hot-toast';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import ResponsiveHeroBanner from './components/ui/Responsive-hero-banner';

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            borderRadius: '10px',
          },
          success: {
            style: {
              background: '#0f3d2e',
              color: '#d1fae5',
              border: '1px solid #34d399',
            },
          },
          error: {
            style: { background: '#fff', color: '#0D1E22' },
          },
        }}
      />
      <div className="relative min-h-screen font-sans bg-bg-primary text-text-primary overflow-x-hidden w-full">
      <main id="main-content">
        <ResponsiveHeroBanner />
        <PainPoints />
        <Solutions />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <LeadForm />
        <FAQ />
        
        <div className="relative overflow-hidden bg-bg-dark">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-footer.webp')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#0D1E22]/90 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E22] via-[#0D1E22]/80 to-transparent" aria-hidden="true" />
          
          <div className="relative z-10 w-full">
            <CTA />
            <Footer />
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
