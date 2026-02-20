import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    '/brand-logo/24skin.svg',
    '/brand-logo/Active Story.avif',
    '/brand-logo/Articulate.avif',
    '/brand-logo/Bathkart.avif',
    '/brand-logo/Believer_Bazaar_Logo.avif',
    '/brand-logo/Belogical.svg',
    '/brand-logo/Chivri.avif',
    '/brand-logo/Crazy Rc.webp',
    '/brand-logo/Elysian Cartpes.webp',
    '/brand-logo/Evolving.avif',
    '/brand-logo/Ghamandclo.avif',
    '/brand-logo/Glowjob.svg',
    '/brand-logo/Grindpound.avif',
    '/brand-logo/Inti Faishion.webp',
    '/brand-logo/Mrigangi.avif',
    '/brand-logo/My fair Lady.jpg',
    '/brand-logo/Myneemoe.svg',
    '/brand-logo/Panteazy.webp',
    '/brand-logo/Rughz.avif',
    '/brand-logo/Shana.avif',
    '/brand-logo/Synora mart.avif',
    '/brand-logo/Tinycare.avif',
    '/brand-logo/Verline.avif',
    '/brand-logo/Wildhorn.avif',
    '/brand-logo/Yaahvi.avif',
    '/brand-logo/aquave.avif',
];

// Split into 3 rows
const row1 = logos.slice(0, 9);
const row2 = logos.slice(9, 18);
const row3 = logos.slice(18);

const LogoCard: React.FC<{ src: string }> = ({ src }) => {
    const name = src.split('/').pop()?.split('.')[0] || 'Brand';
    return (
        <div
            className="flex-shrink-0 flex items-center justify-center rounded-xl mx-2 sm:mx-3"
            style={{
                width: '130px',
                height: '65px',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}
        >
            <img
                src={src}
                alt={name}
                className="max-h-[40px] max-w-[100px] object-contain"
                loading="lazy"
            />
        </div>
    );
};

const MarqueeRow: React.FC<{ items: string[]; direction: 'left' | 'right'; speed?: number }> = ({
    items,
    direction,
    speed = 30,
}) => {
    const animClass = direction === 'left' ? 'brand-marquee-left' : 'brand-marquee-right';
    return (
        <div className="overflow-hidden mb-4 md:mb-5">
            <div className="brand-marquee-row">
                <div
                    className={`brand-marquee-track ${animClass}`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {[...items, ...items].map((logo, i) => (
                        <LogoCard key={`${direction}-${i}`} src={logo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const BrandMarquee: React.FC = () => {
    return (
        <section
            className="relative overflow-hidden"
            style={{ paddingTop: '50px', paddingBottom: '50px', background: '#F5F5F5' }}
        >
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="text-center mb-10 md:mb-12 px-6"
            >
                <p
                    className="font-mono text-xs uppercase tracking-[0.25em] mb-3"
                    style={{ color: '#9CA3AF' }}
                >
                    Trusted by Leading Brands
                </p>
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
                    style={{ color: '#111827' }}
                >
                    Companies We've <em className="not-italic" style={{ color: '#00E38C', fontStyle: 'italic' }}>Scaled</em>
                </h2>
            </motion.div>

            {/* Side fades */}
            <div
                className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 md:w-40 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #F5F5F5, transparent)' }}
            />
            <div
                className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 md:w-40 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #F5F5F5, transparent)' }}
            />

            {/* Row 1 — right to left */}
            <MarqueeRow items={row1} direction="left" speed={28} />

            {/* Row 2 — left to right */}
            <MarqueeRow items={row2} direction="right" speed={32} />

            {/* Row 3 — right to left */}
            <MarqueeRow items={row3} direction="left" speed={26} />
        </section>
    );
};

export default BrandMarquee;
