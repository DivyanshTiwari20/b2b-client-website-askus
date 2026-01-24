import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Counter from './Counter';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="h-0.5 w-10 bg-primary"></div>
                <span className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase">About D2C Digital</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white mb-8 md:mb-10 leading-tight">
              Driven by data.<br />
              <span className="text-zinc-600">Obsessed with growth.</span>
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-zinc-400 leading-relaxed text-lg md:text-xl mb-10 md:mb-12 font-light">
              <p>
                Welcome to D2C Digital Solutions. We aren't just an agency; we are your strategic partner in the complex world of direct-to-consumer commerce. We specialize in leveraging the power of Meta and various platforms to drive sales and sustain success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {['Data-Driven Strategies', 'Impeccable Development', 'Active CRO Efforts', 'SEO Optimization'].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-zinc-300">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative flex justify-center lg:justify-end"
          >
             {/* Tech Visual */}
             <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-white/10 bg-surface">
                 <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                 
                 {/* Central Circle */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48 md:w-72 md:h-72">
                        <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 border border-dashed border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl md:text-6xl font-display font-bold text-white flex items-center justify-center">
                                  <Counter value={98} />
                                  <span className="text-primary text-2xl md:text-3xl ml-1">%</span>
                                </div>
                                <div className="text-xs md:text-sm font-mono text-zinc-500 mt-2 md:mt-3 uppercase tracking-wider">Efficiency</div>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Floating Badges */}
                 <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-black/80 backdrop-blur border border-white/10 px-4 py-3 md:px-6 md:py-4 rounded-xl">
                    <div className="text-xs md:text-sm text-zinc-500 font-mono mb-1 md:mb-2">Total Scale</div>
                    <div className="text-white font-mono font-bold text-xl md:text-2xl">
                      <Counter value={12.4} prefix="$" suffix="M" decimals={1} />
                    </div>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;