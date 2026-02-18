import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-4 md:py-5'
        : 'bg-transparent border-b border-transparent py-6 md:py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl md:text-2xl font-display font-extrabold tracking-tight flex items-center gap-2 cursor-pointer z-50 relative" style={{ color: '#F5F7FA' }}
          onClick={() => scrollToSection('home')}
        >
          D2C<span className="text-primary text-glow">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center bg-white/5 rounded-full px-6 py-2 border border-white/5 mr-6 backdrop-blur-sm">
            <button onClick={() => scrollToSection('services')} className="px-5 py-1 text-base font-semibold hover:text-primary transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.65)' }}>Services</button>
            <button onClick={() => scrollToSection('about')} className="px-5 py-1 text-base font-semibold hover:text-primary transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.65)' }}>About</button>
            <button onClick={() => scrollToSection('reviews')} className="px-5 py-1 text-base font-semibold hover:text-primary transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.65)' }}>Reviews</button>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary-dark text-black px-8 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_15px_rgba(0,227,140,0.3)] hover:shadow-[0_0_25px_rgba(0,227,140,0.5)] hover:-translate-y-0.5 hover:brightness-110"
          >
            Book Strategy Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 relative">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-0 bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
              className="flex flex-col space-y-8 text-center p-8 w-full max-w-sm"
            >
              <button onClick={() => scrollToSection('services')} className="text-2xl font-display font-semibold text-zinc-300 hover:text-primary transition-colors duration-300">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-2xl font-display font-semibold text-zinc-300 hover:text-primary transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('reviews')} className="text-2xl font-display font-semibold text-zinc-300 hover:text-primary transition-colors duration-300">Reviews</button>
              <div className="h-px bg-white/10 w-full my-4"></div>
              <button onClick={() => scrollToSection('contact')} className="text-xl bg-primary text-black font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,227,140,0.4)]">
                Book Strategy Call
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;