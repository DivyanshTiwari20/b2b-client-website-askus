import React from 'react';
import { motion } from 'framer-motion';
import { X, Target, TrendingUp, Users, Compass } from 'lucide-react';
import CTAButton from './CTAButton';

const hardFilters = [
    {
        title: 'Chasing shortcuts',
        desc: 'Want hacks, tricks or overnight scale.',
    },
    {
        title: 'Selling an unproven product',
        desc: 'Sales are driven by discounts, not demand.',
    },
    {
        title: 'Seeking constant reassurance',
        desc: 'Want opinions, not execution and accountability.',
    },
    {
        title: 'Operationally unprepared',
        desc: '₹1Cr+/month demand would break your operations.',
    },
    {
        title: 'Impatient with fundamentals',
        desc: 'Expect results without systems or data.',
    },
    {
        title: 'Lacking conviction',
        desc: 'Give up after a few days of testing.',
    },
];

const idealPartners = [
    {
        icon: Target,
        title: 'Brands doing ₹8L – ₹50L/month',
        desc: "You're past validation. Now you need control, not discovery.",
    },
    {
        icon: TrendingUp,
        title: 'Founders with ₹1Cr+ intent',
        desc: "You're building a category leader, not a side project.",
    },
    {
        icon: Users,
        title: 'Teams that delegate, not interfere',
        desc: 'You trust experts to own strategy and measure success by outcomes.',
    },
    {
        icon: Compass,
        title: 'Operators grounded in reality',
        desc: 'You know growth is engineered, not guessed.',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const PartnerFilter: React.FC = () => {
    return (
        <section
            className="relative overflow-hidden"
            style={{ paddingTop: '60px', paddingBottom: '60px', background: '#F5F5F5', color: '#111827' }}
        >
            {/* Subtle gradient accent at top */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                    width: '600px',
                    height: '300px',
                    background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,227,140,0.08) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
                        style={{ color: '#111827' }}
                    >
                        We Are Looking for <span style={{ color: '#00E38C' }}>Partners</span>, Not Just Clients
                    </h2>
                </motion.div>

                {/* Two Column Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* ── Left Card: Hard Filters ── */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-50px' }}
                        className="rounded-2xl p-8 md:p-10"
                        style={{
                            background: '#ffffff',
                            border: '1px solid rgba(239,68,68,0.2)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
                        }}
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUp}>
                            <span
                                className="inline-block px-3 py-1 rounded-md text-[11px] font-bold font-mono uppercase tracking-widest mb-6"
                                style={{
                                    background: 'rgba(239,68,68,0.1)',
                                    color: '#EF4444',
                                    border: '1px solid rgba(239,68,68,0.2)',
                                }}
                            >
                                Hard Filters
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                            variants={fadeUp}
                            className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight"
                            style={{ color: '#111827' }}
                        >
                            You're Not a Fit If You're..
                        </motion.h3>

                        {/* List */}
                        <div className="space-y-6">
                            {hardFilters.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="flex items-start gap-3"
                                >
                                    <div
                                        className="mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                                        style={{ color: '#EF4444' }}
                                    >
                                        <X size={16} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm md:text-base" style={{ color: '#111827' }}>
                                            {item.title}
                                        </p>
                                        <p className="text-sm mt-0.5" style={{ color: '#6B7280' }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right Card: Ideal Partners ── */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-50px' }}
                        className="rounded-2xl p-8 md:p-10 flex flex-col"
                        style={{
                            background: '#ffffff',
                            border: '1px solid rgba(0,227,140,0.25)',
                            boxShadow: '0 4px 30px rgba(0,227,140,0.06)',
                        }}
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUp}>
                            <span
                                className="inline-block px-3 py-1 rounded-md text-[11px] font-bold font-mono uppercase tracking-widest mb-6"
                                style={{
                                    background: 'rgba(0,227,140,0.1)',
                                    color: '#00C97A',
                                    border: '1px solid rgba(0,227,140,0.25)',
                                }}
                            >
                                Ideal Partners
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                            variants={fadeUp}
                            className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight"
                            style={{ color: '#111827' }}
                        >
                            Who We <em className="not-italic" style={{ color: '#00C97A' }}>Build</em> With..
                        </motion.h3>

                        {/* List */}
                        <div className="space-y-5 flex-1">
                            {idealPartners.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="flex items-start gap-4 rounded-xl p-4 transition-colors duration-300"
                                        style={{ background: 'rgba(0,227,140,0.04)', border: '1px solid rgba(0,227,140,0.1)' }}
                                    >
                                        <div
                                            className="mt-0.5 w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: 'rgba(0,227,140,0.1)',
                                                color: '#00C97A',
                                            }}
                                        >
                                            <Icon size={18} strokeWidth={2} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm md:text-base" style={{ color: '#111827' }}>
                                                {item.title}
                                            </p>
                                            <p className="text-sm mt-0.5" style={{ color: '#6B7280' }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <motion.div variants={fadeUp} className="mt-8">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full py-4 rounded-xl font-bold text-black text-base md:text-lg tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 flex items-center justify-center gap-2"
                                style={{ background: '#00E38C' }}
                            >
                                Request a Partnership Review
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PartnerFilter;
