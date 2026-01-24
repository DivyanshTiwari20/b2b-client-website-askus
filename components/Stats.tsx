import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const stats = [
  { value: 8, label: "Years Exp.", suffix: "" },
  { value: 15, label: "Experts", suffix: "+" },
  { value: 100, label: "Clients", suffix: "+" },
  { value: 5, label: "Avg ROAS", suffix: "x" }
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-2 md:px-8 text-center md:text-left"
            >
              <div className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm md:text-base text-zinc-500 font-mono uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;