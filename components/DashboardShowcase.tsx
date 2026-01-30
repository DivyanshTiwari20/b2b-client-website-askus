import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Target, ShoppingCart, Star, ExternalLink, ZoomIn } from 'lucide-react';

interface ShowcaseItem {
    id: string;
    category: 'google-ads' | 'meta-ads' | 'shopify' | 'reviews';
    title: string;
    image: string;
}

const categories = [
    { id: 'all', title: 'All Proof', icon: LayoutDashboard },
    { id: 'meta-ads', title: 'Meta Ads', icon: Target },
    { id: 'google-ads', title: 'Google Ads', icon: Target },
    { id: 'shopify', title: 'Shopify Stats', icon: ShoppingCart },
    { id: 'reviews', title: 'Reviews', icon: Star },
];

const showcaseItems: ShowcaseItem[] = [
    // Google Ads
    { id: 'g1', category: 'google-ads', title: 'Bathroom Accessories Brand', image: '/dashboard-ss/Google Ads Dashboard SS/Bathroom accesoories brand.jpeg' },
    { id: 'g2', category: 'google-ads', title: 'RC Toys Brand', image: '/dashboard-ss/Google Ads Dashboard SS/RC Toys brand.jpeg' },
    { id: 'g3', category: 'google-ads', title: 'Shapewear Brand', image: '/dashboard-ss/Google Ads Dashboard SS/Shapewear brand.jpeg' },

    // Meta Ads
    { id: 'm1', category: 'meta-ads', title: 'Scale Strategy #1', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/1 (1).png' },
    { id: 'm2', category: 'meta-ads', title: 'Scale Strategy #2', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/1 (2).png' },
    { id: 'm3', category: 'meta-ads', title: 'Scale Strategy #3', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/1 (3).png' },
    { id: 'm4', category: 'meta-ads', title: 'Campaign Optimization', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/Ads Manager - Manage ads - Campaigns (1).png' },
    { id: 'm5', category: 'meta-ads', title: 'ROAS Maximization', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/Ads Manager - Manage ads - Campaigns (2).png' },
    { id: 'm6', category: 'meta-ads', title: 'Direct Response Ads', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/Ads Manager - Manage ads - Campaigns (3).png' },
    { id: 'm7', category: 'meta-ads', title: 'Testing Framework', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/Ads Manager - Manage ads - Campaigns (4).png' },
    { id: 'm8', category: 'meta-ads', title: 'Scaling Phase', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/Ads Manager - Manage ads - Campaigns (5).png' },
    { id: 'm9', category: 'meta-ads', title: 'Performance Dashboard', image: '/dashboard-ss/Meta Ads Dashboard Screenshots/_62  Ads Manager - Manage ads - Campaigns.png' },

    // Shopify
    { id: 's1', category: 'shopify', title: 'CrazyRC.com Analytics', image: '/dashboard-ss/Shopify Dashboard SS/CrazyRC.com · Analytics · Shopify.png' },
    { id: 's2', category: 'shopify', title: 'Ghamand Growth', image: '/dashboard-ss/Shopify Dashboard SS/Ghamand · Analytics · Shopify.png' },
    { id: 's3', category: 'shopify', title: 'Inti Fashions Analytics', image: '/dashboard-ss/Shopify Dashboard SS/Inti Fashions · Analytics · Shopify.png' },
    { id: 's4', category: 'shopify', title: 'My Fair Lady Sales', image: '/dashboard-ss/Shopify Dashboard SS/My Fair Lady · Analytics · Shopify.png' },
    { id: 's5', category: 'shopify', title: 'SHANA Analytics', image: '/dashboard-ss/Shopify Dashboard SS/SHANA · Analytics · Shopify.png' },
    { id: 's6', category: 'shopify', title: 'SynoraMart Dashboard', image: '/dashboard-ss/Shopify Dashboard SS/SynoraMart · Analytics · Shopify.png' },
    { id: 's7', category: 'shopify', title: 'The Active Story Stats', image: '/dashboard-ss/Shopify Dashboard SS/The Active Story · Analytics · Shopify.png' },
    { id: 's8', category: 'shopify', title: 'WILDHORN Performance', image: '/dashboard-ss/Shopify Dashboard SS/WILDHORN · Analytics · Shopify.png' },
    { id: 's9', category: 'shopify', title: 'Yaahvi Analytics', image: '/dashboard-ss/Shopify Dashboard SS/Yaahvi · Analytics · Shopify.png' },
    { id: 's10', category: 'shopify', title: 'Bathkart.in Results', image: '/dashboard-ss/Shopify Dashboard SS/bathkart.in · Analytics · Shopify.png' },

    // Reviews
    { id: 'r1', category: 'reviews', title: 'Client Feedback (Google)', image: '/dashboard-ss/Google Reviews SS/D2C Digital Solutions - Google Maps (1).png' },
    { id: 'r2', category: 'reviews', title: 'Customer Satisfaction', image: '/dashboard-ss/Google Reviews SS/D2C Digital Solutions - Google Maps (10).png' },
    { id: 'r3', category: 'reviews', title: 'Partner Review', image: '/dashboard-ss/Google Reviews SS/D2C Digital Solutions - Google Maps (11).png' },
    { id: 'r4', category: 'reviews', title: 'Client Testimonial', image: '/dashboard-ss/Google Reviews SS/D2C Digital Solutions - Google Maps (12).png' },
    { id: 'r5', category: 'reviews', title: 'Brand Feedback', image: '/dashboard-ss/Google Reviews SS/D2C Digital Solutions - Google Maps (13).png' },
    { id: 'r6', category: 'reviews', title: 'Performance Review', image: '/dashboard-ss/Google Reviews SS/D2C Digital Solutions - Google Maps (2).png' },
    { id: 'r7', category: 'reviews', title: 'Growth Review', image: '/dashboard-ss/Google Reviews SS/D2C Digital Solutions - Google Maps (3).png' },
    { id: 'r8', category: 'reviews', title: 'Success Story Review', image: '/dashboard-ss/Google Reviews SS/D2C Digital Solutions - Google Maps.png' },
];

const DashboardShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredItems = activeTab === 'all'
        ? showcaseItems
        : showcaseItems.filter(item => item.category === activeTab);

    return (
        <section className="py-24 bg-background relative" id="reviews">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        OUR TRACK RECORD
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                        Proven <span className="text-primary italic">Success</span> Across Platforms
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto font-light">
                        Real dashboards, real results. We let the numbers speak for themselves.
                        From Meta and Google to Shopify analytics, see how we scale brands.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 ${activeTab === cat.id
                                ? 'bg-primary text-black border-primary font-medium'
                                : 'bg-surface/50 text-zinc-400 border-white/5 hover:border-white/10 hover:bg-surface'
                                }`}
                        >
                            <cat.icon size={18} />
                            <span>{cat.title}</span>
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-surface/40 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button
                                            onClick={() => setSelectedImage(item.image)}
                                            className="p-3 bg-primary text-black rounded-full hover:scale-110 transition-transform"
                                        >
                                            <ZoomIn size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-5 border-t border-white/5 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-primary/70 font-mono">
                                            {item.category.replace('-', ' ')}
                                        </span>
                                        <h4 className="text-white text-sm font-medium mt-1">{item.title}</h4>
                                    </div>
                                    <ExternalLink size={16} className="text-zinc-600 group-hover:text-primary transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-md cursor-zoom-out"
                    >
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Dashboard Screenshot"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <Star size={32} className="rotate-45" /> {/* Using Star as a cross replacement for simplicity or just X */}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default DashboardShowcase;
