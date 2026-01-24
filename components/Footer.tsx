import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 md:py-16 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="text-xl md:text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2">
          D2C<span className="text-primary text-glow">.</span>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-10 text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Refunds</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>

        <div className="text-xs md:text-sm text-zinc-600 font-mono">
           © {new Date().getFullYear()} D2C Digital Solutions.
        </div>
      </div>
    </footer>
  );
};

export default Footer;