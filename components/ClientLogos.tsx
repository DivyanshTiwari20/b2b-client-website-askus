import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex flex-col items-center"
                >
                    <p className="font-mono text-sm uppercase tracking-[0.2em] mb-12" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        Trusted by Industry Leaders
                    </p>

                    <div className="w-full flex justify-center">
                        <img
                            src="/logos.jpeg"
                            alt="Client Logos"
                            className="max-w-full h-auto opacity-70  transition-all duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientLogos;
