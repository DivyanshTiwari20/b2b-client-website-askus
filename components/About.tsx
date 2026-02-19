import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-5 md:pt-8 pb-12 md:pb-20 relative overflow-hidden" style={{ background: '#F5F5F5', color: '#111827' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="h-0.5 w-10 bg-primary"></div>
              <span className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase">About D2C Digital</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-8 md:mb-10 leading-tight" style={{ color: '#111827', letterSpacing: '-0.5px' }}>
              Driven by data.<br />
              <span style={{ color: '#808793ff' }}>Obsessed with growth.</span>
            </h2>

            <div className="space-y-6 md:space-y-8 text-lg md:text-xl mb-10 md:mb-12" style={{ color: '#4B5563', lineHeight: 1.6 }}>
              <p>
                Welcome to D2C Digital Solutions. We aren't just an agency; we are your strategic partner in the complex world of direct-to-consumer commerce. We specialize in leveraging the power of Meta and various platforms to drive sales and sustain success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {['Data-Driven Strategies', 'Impeccable Development', 'Active CRO Efforts', 'SEO Optimization'].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  style={{ color: '#374151' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden">
              <img
                src="/Final-GIF.gif"
                alt="D2C Digital Solutions"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;