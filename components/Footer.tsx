import React from 'react';
import { motion } from 'framer-motion';
import RetroGrid from './RetroGrid';
import CTAButton from './CTAButton';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* ── CTA Section with Retro Grid ── */}
      <div className="relative min-h-[500px] md:min-h-[550px] flex flex-col items-center justify-center py-20 md:py-28 overflow-hidden">

        {/* Retro Grid Background */}
        <RetroGrid
          angle={65}
          cellSize={55}
          opacity={0.35}
          lineColor="#00E38C"
        />

        {/* Top gradient fade — seamless blend from content above */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: '50%',
            background: 'linear-gradient(to bottom, #0a0a0a 0%, #0a0a0a 10%, rgba(10,10,10,0.95) 30%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.3) 70%, transparent 100%)',
            zIndex: 2,
          }}
        />

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '30%',
            background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.8) 40%, transparent 100%)',
            zIndex: 2,
          }}
        />

        {/* Side fades */}
        <div
          className="absolute top-0 bottom-0 left-0 pointer-events-none"
          style={{
            width: '15%',
            background: 'linear-gradient(to right, #0a0a0a 0%, transparent 100%)',
            zIndex: 2,
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 pointer-events-none"
          style={{
            width: '15%',
            background: 'linear-gradient(to left, #0a0a0a 0%, transparent 100%)',
            zIndex: 2,
          }}
        />

        {/* Green glow at center/horizon */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '250px',
            background: 'radial-gradient(ellipse 70% 40% at 50% 50%, rgba(0,227,140,0.15) 0%, rgba(0,227,140,0.05) 40%, transparent 70%)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#F5F7FA' }}
          >
            Start Scaling Your{' '}
            <br />
            <span className="text-primary">D2C Business</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Stop burning cash on generic agencies. Partner with
            specialists who've scaled 200+ D2C brands to ₹1Cr+
            monthly revenue.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeUp} className="mb-8">
            <CTAButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 text-base md:text-lg tracking-wide"
            >
              Book Your Free Growth Call
            </CTAButton>
          </motion.div>

          {/* Limited Spots Badge */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-[0.2em]"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                backgroundColor: '#00E38C',
                boxShadow: '0 0 8px rgba(0,227,140,0.6)',
              }}
            />
            LIMITED SPOTS AVAILABLE
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="relative z-10 border-t py-8 px-6"
        style={{
          borderColor: 'rgba(255,255,255,0.06)',
          background: '#0a0a0a',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div
            className="text-xl md:text-2xl font-extrabold tracking-tight flex items-center gap-1"
            style={{ color: '#F5F7FA' }}
          >
            D2C<span className="text-primary text-glow">.</span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-10 text-xs md:text-sm font-mono uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Refunds</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
          </div>

          <div className="text-xs md:text-sm font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} D2C Digital Solutions.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;