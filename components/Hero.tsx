import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import ProcessSteps from './ProcessSteps';

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">

      {/* Subtle floating background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,227,140,0.06) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 60% at 55% 45%, rgba(0,227,140,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 60% at 45% 40%, rgba(0,227,140,0.06) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 relative z-10 w-full text-center">

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary text-xs md:text-xl font-mono font-bold mb-8 md:mb-10 uppercase tracking-widest">
            We are Performance Marketing Engine
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.15] md:leading-[1.15] mb-6 md:mb-8 text-white max-w-6xl mx-auto">
            Empower your brand with <span className="text-primary">Data-Driven Ads</span> that transform your marketing <span className="text-zinc-500">strategy</span> into <span className="text-primary">measurable scale !</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-zinc-400 max-w-5xl mx-auto mb-8 md:mb-10 leading-relaxed">
            We leverages real-time data to optimize every rupee of your ad spend for maximum ROI!
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-10 md:mb-12">
            {['Better Ads', "Cheaper CPA's", 'High ROAS'].map((item) => (
              <div key={item} className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 bg-white/5 text-white text-sm md:text-base font-semibold">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center w-full px-4">
            <CTAButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 text-lg md:text-xl tracking-wide"
            >
              Book Your <span className="text-white font-extrabold">FREE</span> Call Now
            </CTAButton>
          </motion.div>

          <ProcessSteps />

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;