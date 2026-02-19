import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientLogos from './components/ClientLogos';
import ReviewsMarquee from './components/ReviewsMarquee';
import DashboardShowcase from './components/DashboardShowcase';
import Roadmap from './components/Roadmap';


const App: React.FC = () => {
  return (
    <div className="bg-background text-zinc-100 min-h-screen selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20"></div>
        {/* Green Glow Bottom Left */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-primary rounded-full opacity-10 blur-[150px]"></div>
        {/* Subtle Top Right Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900 rounded-full opacity-20 blur-[120px]"></div>
      </div>

      {/* <Navbar /> */}
      <main className="relative z-10">
        <Hero />
        <ReviewsMarquee />
        <ClientLogos />
        <Roadmap />
        <About />

        {/* <Stats /> */}
        <DashboardShowcase />
        <Services />
        {/* <Testimonials /> */}
        {/* <Contact /> */}

      </main>
      <Footer />
    </div>
  );
};

export default App;