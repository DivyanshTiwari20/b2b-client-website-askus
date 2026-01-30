import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-[0.2em] mb-12">
                        Trusted by Industry Leaders
                    </p>

                    <div className="w-full flex justify-center">
                        <img
                            src="/logo-clients/logos.png"
                            alt="Client Logos"
                            className="max-w-full h-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientLogos;
