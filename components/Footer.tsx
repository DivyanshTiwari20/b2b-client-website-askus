import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-10 md:py-16 border-t border-white/5 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="text-xl md:text-2xl font-display font-extrabold tracking-tight flex items-center gap-2" style={{ color: '#F5F7FA' }}>
          D2C<span className="text-primary text-glow">.</span>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-10 text-xs md:text-sm font-mono uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.65)' }}>
          <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Refunds</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
        </div>

        <div className="text-xs md:text-sm font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} D2C Digital Solutions.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;