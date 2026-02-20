import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const comparisons = [
    {
        bad: { title: 'One-size-fits-all mindset', desc: 'The same ads, the same funnels, recycled across brands.' },
        good: { title: 'Custom-built growth systems', desc: 'Strategies designed around your margins, category, and stage.' },
    },
    {
        bad: { title: 'Obsessed with ROAS', desc: 'Celebrating numbers while ignoring CAC, LTV, and margins.' },
        good: { title: 'Profit-led metrics', desc: 'ROAS, CAC, LTV, and CM3 tracked together. No isolated numbers.' },
    },
    {
        bad: { title: 'Low retainers, high churn', desc: 'Pricing designed to sell easily, not to stay accountable.' },
        good: { title: 'Pricing with intent', desc: "Fees reflect ownership, not hours. We don't compete on price." },
    },
    {
        bad: { title: 'Speed without depth', desc: 'Surface-level knowledge without category or customer insights.' },
        good: { title: 'Niche Expertise', desc: 'Proven category expertise. No learning on your budget.' },
    },
    {
        bad: { title: 'Volume over outcomes', desc: 'Taking on as many clients as possible, regardless of fit.' },
        good: { title: 'Selective partnerships', desc: 'Few brands. High ownership. Zero dilution of focus.' },
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const WhyChooseUs: React.FC = () => {
    return (
        <section
            className="relative overflow-hidden"
            style={{ paddingTop: '60px', paddingBottom: '60px', background: '#F5F5F5', color: '#111827' }}
        >
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-4"
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold font-mono uppercase tracking-widest"
                        style={{
                            background: 'rgba(0,227,140,0.1)',
                            color: '#00C97A',
                            border: '1px solid rgba(0,227,140,0.25)',
                        }}
                    >
                        The Difference
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-3"
                >
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
                        style={{ color: '#111827' }}
                    >
                        Why Choose <span style={{ color: '#00E38C' }}>D2C Digital</span> Over Other Agencies?
                    </h2>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    className="text-center mb-12 md:mb-16 text-base"
                    style={{ color: '#6B7280' }}
                >
                    Most Agencies Optimise for Optics. We optimise for profit.
                </motion.p>

                {/* Column Headers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <XCircle size={20} style={{ color: '#EF4444' }} />
                        <span className="text-lg font-extrabold" style={{ color: '#111827' }}>Other Agencies</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <CheckCircle size={20} style={{ color: '#00C97A' }} />
                        <span className="text-lg font-extrabold" style={{ color: '#111827' }}>D2C Digital</span>
                    </motion.div>
                </div>

                {/* Comparison Rows */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    className="space-y-4"
                >
                    {comparisons.map((row, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
                        >
                            {/* Bad — Other Agencies */}
                            <div
                                className="rounded-xl p-5 md:p-6 transition-all duration-300"
                                style={{
                                    background: 'rgba(239,68,68,0.04)',
                                    border: '1px solid rgba(239,68,68,0.12)',
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <XCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#EF4444' }} />
                                    <div>
                                        <p className="font-bold text-sm md:text-base" style={{ color: '#111827' }}>
                                            {row.bad.title}
                                        </p>
                                        <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
                                            {row.bad.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Good — D2C Digital */}
                            <div
                                className="rounded-xl p-5 md:p-6 transition-all duration-300"
                                style={{
                                    background: 'rgba(0,227,140,0.04)',
                                    border: '1px solid rgba(0,227,140,0.15)',
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#00C97A' }} />
                                    <div>
                                        <p className="font-bold text-sm md:text-base" style={{ color: '#111827' }}>
                                            {row.good.title}
                                        </p>
                                        <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
                                            {row.good.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
