import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CTAButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

// Sparkle particle component
const Sparkle: React.FC<{ delay: number; x: number; y: number }> = ({ delay, x, y }) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20],
        }}
        transition={{
            duration: 1.4,
            delay,
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 2,
            ease: 'easeOut',
        }}
    >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
                d="M5 0L5.88 3.82L10 5L5.88 6.18L5 10L4.12 6.18L0 5L4.12 3.82L5 0Z"
                fill="#00E38C"
                opacity="0.9"
            />
        </svg>
    </motion.div>
);

const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick, className = '' }) => {
    const [sparkles] = useState(() =>
        Array.from({ length: 6 }, (_, i) => ({
            id: i,
            x: 10 + Math.random() * 80,
            y: -10 + Math.random() * 30,
            delay: i * 0.8 + Math.random() * 2,
        }))
    );

    return (
        <div className="relative inline-block group">
            {/* Ambient glow behind button */}
            <motion.div
                className="absolute -inset-3 rounded-2xl opacity-50 blur-xl pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(0,227,140,0.4) 0%, transparent 70%)',
                }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Sparkle particles */}
            {sparkles.map((s) => (
                <Sparkle key={s.id} delay={s.delay} x={s.x} y={s.y} />
            ))}

            {/* Animated border ring */}
            <div className="absolute -inset-[2px] rounded-[14px] overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: 'conic-gradient(from 0deg, #00E38C, transparent 40%, transparent 60%, #00E38C)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            {/* Button */}
            <motion.button
                onClick={onClick}
                className={`relative bg-primary text-black font-bold rounded-xl overflow-hidden transition-colors duration-300 hover:bg-[#00cc7d] ${className}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
            >
                {/* Shine sweep */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 60%)',
                    }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: 'easeInOut',
                    }}
                />

                {/* Content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                    <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                </span>
            </motion.button>
        </div>
    );
};

export default CTAButton;
