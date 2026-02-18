import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, BarChart3, Target, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center pt-12 pb-0 md:pt-16 md:pb-0 overflow-hidden">

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 relative z-10 w-full text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary text-xs md:text-xl font-mono font-bold mb-8 md:mb-10 uppercase tracking-widest">
            {/* <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> */}
            We are Performance Marketing Engine
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.15] md:leading-[1.15] mb-6 md:mb-8 text-white max-w-6xl mx-auto">
            Empower your brand with <span className="text-primary">Data-Driven Ads</span> that transform your marketing <span className="text-zinc-500">strategy</span> into <span className="text-primary">measurable scale !</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-400 max-w-5xl mx-auto mb-8 md:mb-10 leading-relaxed">
            We leverages real-time data to optimize every rupee of your ad spend for maximum ROI!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 md:mb-12">
            {['Better Ads', "Cheaper CPA's", 'High ROAS'].map((item) => (
              <div key={item} className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 bg-white/5 text-white text-sm md:text-base font-semibold">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {item}
              </div>
            ))}
          </div>

          <div className="flex justify-center w-full px-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-black px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all text-lg md:text-xl tracking-wide"
            >
              Book Your FREE Call Now
            </button>
          </div>
          <div className="relative w-full max-w-5xl mx-auto mt-12 mb-0 md:mt-16 md:mb-0">
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
                {/* <img src="./Bathkart.avif" alt="" srcset="" /> */}
                {/* Connector Line Desktop */}
                <div className="hidden md:block h-px w-24 bg-gradient-to-r from-white/10 via-primary/50 to-white/10 relative">
                  <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_#00E38C]"></div>
                </div>

                {/* Step 2 (Highlighted) */}
                <div className="flex flex-col items-center gap-4 md:gap-6 relative mt-4 md:mt-0">
                  <div className="absolute -inset-6 bg-primary/10 blur-xl rounded-full"></div>
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-primary bg-surface flex items-center justify-center shadow-[0_0_40px_rgba(0,227,140,0.15)] z-10 relative">
                    <Zap className="text-primary fill-primary/20" size={32} />
                  </div>
                  <div className="text-lg md:text-xl font-bold font-display text-white">2. Execution</div>

                  <div className="absolute -right-24 top-0 md:-bottom-16 md:right-auto md:top-auto w-32 md:w-56 text-center hidden sm:block">
                    {/* <div className="text-xs md:text-sm text-primary bg-primary/10 border border-primary/20 px-3 py-1 md:px-4 md:py-1.5 rounded inline-block font-medium">
                            ePOP Active
                        </div> */}
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



        </motion.div>
      </div>
    </section>
  );
};

export default Hero;