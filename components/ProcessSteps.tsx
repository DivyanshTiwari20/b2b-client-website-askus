import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crosshair, Zap, TrendingUp } from 'lucide-react';

/* ───────────────────────── data ───────────────────────── */
const steps = [
    {
        id: 1,
        label: '1. Strategy',
        title: 'Research & Plan',
        icon: Crosshair,
        isHero: false,
    },
    {
        id: 2,
        label: '2. Execution',
        title: 'Launch & Optimize',
        icon: Zap,
        isHero: true,
    },
    {
        id: 3,
        label: '3. Scaling',
        title: 'Grow & Dominate',
        icon: TrendingUp,
        isHero: false,
    },
];

/* ───────────────────── animation variants ─────────────── */
const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

/* ───────────────────── component ──────────────────────── */
const ProcessSteps: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative w-full max-w-5xl mx-auto mt-12 mb-0 md:mt-16 md:mb-0"
        >
            {/* ── Outer container ── */}
            <div className="process-container relative rounded-3xl p-8 md:p-16 overflow-hidden">
                {/* Background depth: subtle radial gradient */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            background:
                                'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,227,140,0.04) 0%, transparent 70%)',
                        }}
                    />
                    {/* Faint grid overlay */}
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                            backgroundSize: '28px 28px',
                        }}
                    />
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60" />

                {/* ── Cards row ── */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 relative z-10">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isHero = step.isHero;
                        const isHovered = hoveredId === step.id;

                        return (
                            <React.Fragment key={step.id}>
                                {/* Card */}
                                <motion.div
                                    variants={cardVariants}
                                    onMouseEnter={() => setHoveredId(step.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="relative group cursor-pointer"
                                    style={{
                                        zIndex: isHero ? 20 : 10,
                                    }}
                                >
                                    <motion.div
                                        className={`
                      process-card relative flex flex-col items-center gap-5 px-8 py-8 md:px-10 md:py-10
                      rounded-[22px] transition-all duration-300
                      ${isHero ? 'process-card--hero' : 'process-card--side'}
                    `}
                                        animate={{
                                            scale: isHero ? 1.05 : 1,
                                            opacity: isHero ? 1 : hoveredId === null ? 0.78 : isHovered ? 1 : 0.65,
                                            y: isHovered ? -6 : 0,
                                        }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            border: `1px solid rgba(255,255,255,${isHero ? '0.14' : '0.08'})`,
                                        }}
                                    >
                                        {/* Hover inner gradient glow */}
                                        <div
                                            className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                            style={{
                                                background:
                                                    'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,227,140,0.06) 0%, transparent 70%)',
                                            }}
                                        />

                                        {/* Hero pulsing glow */}
                                        {isHero && (
                                            <div className="process-hero-glow absolute -inset-4 rounded-[30px] pointer-events-none" />
                                        )}

                                        {/* Icon */}
                                        <div
                                            className={`
                        relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center
                        transition-all duration-300
                        ${isHero
                                                    ? 'process-icon--hero'
                                                    : 'border border-white/10 bg-black/30 group-hover:border-primary/40'
                                                }
                      `}
                                        >
                                            {isHero && (
                                                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-lg" />
                                            )}
                                            <Icon
                                                className={`relative z-10 transition-colors duration-300 ${isHero
                                                        ? 'text-primary'
                                                        : 'text-zinc-400 group-hover:text-white'
                                                    }`}
                                                size={isHero ? 30 : 26}
                                                strokeWidth={1.6}
                                            />
                                        </div>

                                        {/* Label */}
                                        <span
                                            className={`text-xs md:text-sm font-mono tracking-wider uppercase ${isHero ? 'text-zinc-400' : 'text-zinc-500'
                                                }`}
                                            style={{ opacity: 0.6 }}
                                        >
                                            {step.label}
                                        </span>

                                        {/* Title */}
                                        <span
                                            className={`text-base md:text-lg font-semibold tracking-tight ${isHero ? 'text-white' : 'text-zinc-200'
                                                }`}
                                        >
                                            {step.title}
                                        </span>
                                    </motion.div>
                                </motion.div>

                                {/* ── Desktop connector ── */}
                                {i < steps.length - 1 && (
                                    <div className="hidden md:flex items-center relative" style={{ width: '80px' }}>
                                        <div
                                            className="w-full h-px transition-opacity duration-300"
                                            style={{
                                                background:
                                                    'linear-gradient(90deg, rgba(0,227,140,0.35), rgba(0,227,140,0.12))',
                                                opacity:
                                                    hoveredId === steps[i + 1]?.id
                                                        ? 1
                                                        : hoveredId === step.id
                                                            ? 1
                                                            : 0.5,
                                            }}
                                        />
                                    </div>
                                )}

                                {/* ── Mobile connector ── */}
                                {i < steps.length - 1 && (
                                    <div className="md:hidden flex flex-col items-center" style={{ height: '32px' }}>
                                        <div
                                            className="w-px h-full"
                                            style={{
                                                background:
                                                    'linear-gradient(180deg, rgba(0,227,140,0.3), rgba(0,227,140,0.08))',
                                            }}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}

                    {/* ── Traveling glow dot (desktop only) ── */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full pointer-events-none" style={{ zIndex: 30 }}>
                        <div className="process-dot" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProcessSteps;
