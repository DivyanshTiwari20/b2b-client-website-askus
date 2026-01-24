import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, BarChart2, Lightbulb, TrendingUp, Users, Target, Zap } from 'lucide-react';

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
    description: "Aligning neighboring subsystems through simulation to achieve >90% system performance.",
    icon: <TrendingUp size={32} />,
    stat: "Scale Fast"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column: Heading */}
            <div className="lg:col-span-1">
                <div className="relative lg:sticky lg:top-32">
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                        <Zap size={20} className="text-primary" />
                        <span className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase">Why Choose Us</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-medium text-white mb-6 md:mb-8 leading-tight">
                        Accelerate <span className="text-primary">electrification</span> of your sales funnel.
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base md:text-lg max-w-sm mb-8 md:mb-10">
                        D2C Digital helps engineering teams save time, cut costs, and optimize power systems with physics-based tools and data-driven optimization.
                    </p>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary text-base font-bold border-b-2 border-primary pb-1 hover:text-white hover:border-white transition-colors">
                        Book a free strategy call
                    </button>
                </div>
            </div>

            {/* Right Column: Grid */}
            <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-surface border border-white/5 p-8 md:p-10 rounded-2xl hover:border-primary/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="font-mono text-primary text-xs md:text-sm border border-primary/30 px-3 py-1.5 rounded bg-primary/5">
                                    {service.stat}
                                </span>
                            </div>
                            
                            <div className="mb-8 md:mb-10 text-zinc-500 group-hover:text-primary transition-colors">
                                {service.icon}
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-3">
                                {service.title}
                            </h3>
                            <h4 className="text-xs md:text-sm font-mono text-zinc-500 mb-6 uppercase tracking-wider">
                                {service.subtitle}
                            </h4>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-6">
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