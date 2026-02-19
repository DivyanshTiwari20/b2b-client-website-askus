import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Discovery & Audit',
        description: '01 — Discovery & Audit We deep-dive into your brand, audience, and current ad performance to identify gaps and hidden growth opportunities — the same rigorous audit process we’ve used with brands that later made it to Shark Tank India.',
        image: '/logo-clients/image.png',
    },
    {
        number: '02',
        title: 'Strategy & Creatives',
        description: 'We craft a custom growth strategy with high-converting creatives, hooks, and copy tailored to your D2C brand — built using frameworks proven across multiple high-growth and Shark Tank-featured brands.',
        image: '/logo-clients/02.png',
    },
    {
        number: '03',
        title: 'Launch & Optimize',
        description: 'We launch campaigns, A/B test aggressively, and optimize daily for maximum ROAS — applying the same performance discipline trusted by fast-scaling consumer brands.',
        image: '/logo-clients/03.png',
    },
    // {
    //     number: '04',
    //     title: 'Scale & Dominate',
    //     description: 'Once we find winning combinations, we scale budgets strategically while protecting profitability — the exact approach that has helped several partner brands reach investor-ready scale.',
    //     image: '/logo-clients/image.png',
    // },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Roadmap: React.FC = () => {
    return (
        <section className="py-8 md:py-14 relative overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="text-center mb-16 md:mb-24 px-6"
            >
                <p className="font-mono text-sm uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    How We Work
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    Our <span className="text-primary">Roadmap</span> to Scale
                </h2>
            </motion.div>

            <div className="max-w-6xl mx-auto px-6 relative">
                {/* Vertical Timeline Line (desktop only) */}
                <div
                    className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,227,140,0.3) 10%, rgba(0,227,140,0.3) 90%, transparent 100%)',
                    }}
                />

                {/* Timeline pulsing dot (desktop) */}
                <motion.div
                    className="hidden md:block absolute left-1/2 top-0 w-3 h-3 rounded-full -translate-x-1/2"
                    style={{
                        backgroundColor: '#00E38C',
                        boxShadow: '0 0 12px rgba(0,227,140,0.6), 0 0 24px rgba(0,227,140,0.3)',
                    }}
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />

                {/* Steps */}
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={step.number}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 md:mb-28 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* ── Image Side ── */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="relative group w-full max-w-md">
                                    {/* Glow behind image */}
                                    <div
                                        className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none"
                                        style={{
                                            background: 'radial-gradient(ellipse, rgba(0,227,140,0.15) 0%, transparent 70%)',
                                        }}
                                    />
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-auto rounded-xl border border-white/10 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5"
                                    />
                                </div>
                            </div>

                            {/* ── Timeline Node (desktop only) ── */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm border-2 transition-all duration-300"
                                    style={{
                                        borderColor: 'rgba(0,227,140,0.5)',
                                        background: 'rgba(0,227,140,0.08)',
                                        color: '#00E38C',
                                        boxShadow: '0 0 20px rgba(0,227,140,0.15)',
                                    }}
                                >
                                    {step.number}
                                </div>
                            </div>

                            {/* ── Content Side ── */}
                            <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                                {/* Mobile step number */}
                                <div
                                    className="md:hidden inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 font-mono"
                                    style={{
                                        border: '1px solid rgba(0,227,140,0.3)',
                                        background: 'rgba(0,227,140,0.06)',
                                        color: '#00E38C',
                                    }}
                                >
                                    STEP {step.number}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                    {step.description}
                                </p>

                                {/* Decorative accent line */}
                                <div
                                    className={`hidden md:block mt-6 h-px w-16 ${isEven ? '' : 'ml-auto'}`}
                                    style={{
                                        background: 'linear-gradient(to right, rgba(0,227,140,0.5), transparent)',
                                    }}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Roadmap;
