import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, BarChart3, Target, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-mono mb-8 md:mb-10 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Performance Marketing Engine
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight leading-[1.1] md:leading-[1.05] mb-8 md:mb-10 text-white max-w-4xl mx-auto">
            Use <span className="text-primary">Data-Driven Ads</span> to move from <span className="text-zinc-500">strategy</span> to <span className="text-primary">scale</span>
          </h1>

          <div className="relative w-full max-w-5xl mx-auto mt-12 mb-16 md:mt-16 md:mb-24">
             {/* Schematic Diagram "The V Model" aesthetic */}
             <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 relative z-10">
                   {/* Step 1 */}
                   <div className="flex flex-col items-center gap-4 md:gap-6 group cursor-pointer relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center group-hover:border-primary/50 transition-colors z-10 relative bg-surface">
                        <Target className="text-zinc-400 group-hover:text-primary transition-colors" size={28} />
                      </div>
                      <div className="text-base md:text-lg font-mono text-zinc-400 group-hover:text-white">1. Strategy</div>
                      
                      {/* Mobile vertical line */}
                      <div className="md:hidden h-8 w-px bg-white/10 absolute -bottom-8 left-1/2 -translate-x-1/2"></div>
                   </div>

                   {/* Connector Line Desktop */}
                   <div className="hidden md:block h-px w-24 bg-gradient-to-r from-white/10 via-primary/50 to-white/10 relative">
                      <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_#00E599]"></div>
                   </div>

                   {/* Step 2 (Highlighted) */}
                   <div className="flex flex-col items-center gap-4 md:gap-6 relative mt-4 md:mt-0">
                      <div className="absolute -inset-6 bg-primary/10 blur-xl rounded-full"></div>
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-primary bg-surface flex items-center justify-center shadow-[0_0_40px_rgba(0,229,153,0.15)] z-10 relative">
                        <Zap className="text-primary fill-primary/20" size={32} />
                      </div>
                      <div className="text-lg md:text-xl font-bold font-display text-white">2. Execution</div>
                      
                      <div className="absolute -right-24 top-0 md:-bottom-16 md:right-auto md:top-auto w-32 md:w-56 text-center hidden sm:block">
                        <div className="text-xs md:text-sm text-primary bg-primary/10 border border-primary/20 px-3 py-1 md:px-4 md:py-1.5 rounded inline-block font-medium">
                            ePOP Active
                        </div>
                      </div>

                       {/* Mobile vertical line */}
                       <div className="md:hidden h-8 w-px bg-white/10 absolute -bottom-8 left-1/2 -translate-x-1/2"></div>
                   </div>

                   {/* Connector Line Desktop */}
                   <div className="hidden md:block h-px w-24 bg-gradient-to-r from-white/10 via-primary/50 to-white/10"></div>

                   {/* Step 3 */}
                   <div className="flex flex-col items-center gap-4 md:gap-6 group cursor-pointer mt-4 md:mt-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center group-hover:border-primary/50 transition-colors z-10 relative bg-surface">
                        <BarChart3 className="text-zinc-400 group-hover:text-primary transition-colors" size={28} />
                      </div>
                      <div className="text-base md:text-lg font-mono text-zinc-400 group-hover:text-white">3. Scaling</div>
                   </div>
                </div>

                {/* Grid Overlay inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 bg-primary text-black px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold hover:bg-primary-dark transition-all text-base md:text-lg w-full sm:w-auto"
              >
                Book a demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;