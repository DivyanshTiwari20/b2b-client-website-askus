import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Lightbulb, TrendingUp, Target, Zap } from 'lucide-react';

const services = [
  {
    title: "Meta Network Ads",
    subtitle: "Facebook & Instagram",
    description: "Specializing in cutting-edge Meta ads with 8+ years of expertise delivering superior ROAS.",
    icon: <Target size={32} />,
    stat: "5x ROAS"
  },
  {
    title: "Creative Strategy",
    subtitle: "Research & Design",
    description: "Harnessing collective expertise to deliver innovative visual solutions that drive impact.",
    icon: <Lightbulb size={32} />,
    stat: "Data-Back"
  },
  {
    title: "Video Production",
    subtitle: "Content & CRO",
    description: "Crafting compelling visual narratives and optimizing conversions for maximum impact.",
    icon: <MonitorPlay size={32} />,
    stat: "High Conv."
  },
  {
    title: "Growth Scaling",
    subtitle: "Systematic Expansion",
    description: "Systematic scaling through data-backed iteration loops that compound revenue month over month.",
    icon: <TrendingUp size={32} />,
    stat: "Scale Fast"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative" style={{ paddingTop: '120px', paddingBottom: '120px', background: '#ffffff', color: '#111827' }}>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-1">
            <motion.div
              className="relative lg:sticky lg:top-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-6 md:mb-8 leading-tight" style={{ color: '#111827', letterSpacing: '-0.5px' }}>
                Accelerate <span style={{ color: '#00E38C' }}>growth</span> of your sales.
              </h2>
              <p className="leading-relaxed text-base md:text-lg max-w-sm mb-8 md:mb-10" style={{ color: '#6B7280', lineHeight: 1.6 }}>
                D2C Digital helps brands save time, cut costs, and scale profitably with data-driven performance marketing.
              </p>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-black px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all duration-300 text-lg md:text-xl tracking-wide hover:-translate-y-0.5 hover:brightness-110"
              >
                Book Your FREE Call Now
              </button>
            </motion.div>

          </div>

          {/* Right Column: Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
                  className="group relative overflow-hidden"
                  style={{
                    background: '#11161D',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '36px',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = 'translateY(-6px)';
                    el.style.borderColor = 'rgba(255,255,255,0.15)';
                    el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = 'translateY(0)';
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {/* Inner neon glow — radial gradient from bottom-left corner */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 0% 100%, rgba(0,227,140,0.22) 0%, rgba(0,227,140,0.08) 35%, transparent 65%)',
                      borderRadius: '16px',
                    }}
                  />

                  {/* Title — bold, green */}
                  <h3
                    className="font-display relative z-10"
                    style={{ fontSize: '22px', fontWeight: 700, color: '#00E38C', marginBottom: '16px', lineHeight: 1.3 }}
                  >
                    {service.title}:
                  </h3>

                  {/* Separator line */}
                  <div
                    className="relative z-10"
                    style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '20px' }}
                  />

                  {/* Description — white text */}
                  <p className="relative z-10" style={{ fontSize: '16px', lineHeight: 1.7, color: '#E5E7EB' }}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;