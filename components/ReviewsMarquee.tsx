import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';

interface Review {
    reviewer_name: string;
    rating: number;
    engagement: string;
    review_text: string;
    review_title?: string;
    role?: string;
    results: string[];
}

const reviews: Review[] = [
    {
        reviewer_name: "GAYATRI GOKHALE",
        rating: 5,
        engagement: "6 Month Engagement",
        role: "Skincare Brand Owner",
        review_text: "I have worked with them for 6 months and can wholeheartedly say that D2C Digital Solutions does a fantastic job at Performance Marketing. They are responsive and on-time with their deliverables. The team has consistently delivered what they promised.",
        results: [
            "ROAS increased from 1.8x → 4.7x",
            "CPA reduced by 42%",
            "Revenue scaled from ₹3L → ₹12L/month"
        ]
    },
    {
        reviewer_name: "Priya Singh Thakur",
        rating: 5,
        engagement: "Performance Partner Since 2024",
        review_title: "Ecommerce Growth Experts!",
        role: "D2C Founder",
        review_text: "Since partnering with D2C Digital Solutions, our sales have skyrocketed! Their expertise in performance marketing helped us cut wasted ad spend and focus on high-converting audiences. Their transparency and proactive communication make them a trusted partner.",
        results: [
            "Ad spend efficiency improved by 65%",
            "Conversion rate up 3.2x",
            "Monthly revenue crossed ₹18L"
        ]
    },
    {
        reviewer_name: "Sanket Bhandari",
        rating: 5,
        engagement: "Ongoing Growth Campaign",
        role: "E-commerce Entrepreneur",
        review_text: "Khalid is a pleasure to work with. Very professional and has solutions to many different challenging situations. Has good knowledge of fb ads and I would definitely recommend his team.",
        results: [
            "ROAS improved from 2.1x → 5.3x",
            "Order volume increased 180%",
            "CPA dropped by 38%"
        ]
    },
    {
        reviewer_name: "Ayush Manocha",
        rating: 5,
        engagement: "Performance Partner Since 2023",
        role: "Fashion Brand Owner",
        review_text: "One of the most genuine teams I've come across. I've been changing agencies for ages and lost faith. But Khalid and his team gave outstanding results right from the first month. My brand has seen growth which I never expected.",
        results: [
            "Revenue scaled ₹5L → ₹22L/month",
            "ROAS consistently above 4.5x",
            "Reduced blended CPA by 55%"
        ]
    },
    {
        reviewer_name: "Prerna Joshi",
        rating: 5,
        engagement: "6 Month Engagement",
        role: "Business Director",
        review_text: "Working with Khalid and his team has been an absolute pleasure, both in ease of communication as well as great results for our business. We have had a visible surge in queries as well as conversions shortly into our association.",
        results: [
            "Lead volume increased 3x",
            "Cost per lead reduced by 47%",
            "Revenue growth of 210%"
        ]
    },
    {
        reviewer_name: "Aamir Rajput",
        rating: 5,
        engagement: "Ongoing Growth Campaign",
        role: "Clothing Brand Founder",
        review_text: "I have a clothing brand and had a ROAS of almost 1. D2C team are amazing — they took my ROAS to 5x in 45 days. Highly recommend.",
        results: [
            "ROAS from 1x → 5x in 45 days",
            "Revenue tripled in 2 months",
            "Ad spend scaled 4x profitably"
        ]
    }
];

const stats = [
    { value: "₹3.5Cr+", label: "Ad Spend Managed" },
    { value: "40+", label: "Brands Scaled" },
    { value: "3.8x", label: "Avg ROAS" },
];

// Featured card = index 1 (center of first row on desktop)
const FEATURED_INDEX = 1;

const ReviewCard: React.FC<{ review: Review; index: number; featured?: boolean }> = ({ review, index, featured = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        className="group"
        style={{
            background: '#11161D',
            border: featured ? '1px solid rgba(0,227,140,0.3)' : '1px solid #1F2937',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: featured ? '0 14px 36px rgba(0,0,0,0.45)' : '0 10px 30px rgba(0,0,0,0.35)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            transform: featured ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.transform = featured ? 'scale(1.05) translateY(-6px)' : 'translateY(-6px)';
            el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
        }}
        onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.transform = featured ? 'scale(1.05)' : 'scale(1)';
            el.style.boxShadow = featured ? '0 14px 36px rgba(0,0,0,0.45)' : '0 10px 30px rgba(0,0,0,0.35)';
        }}
    >
        {/* Stars */}
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    className="fill-current"
                    style={{ color: i < review.rating ? '#FACC15' : '#374151' }}
                />
            ))}
        </div>

        {/* Engagement label */}
        <div style={{ fontSize: '12px', color: '#9CA3AF', opacity: 0.65, marginTop: '14px', marginBottom: '16px' }}>
            {review.engagement}
        </div>

        {/* Review text */}
        <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#E5E7EB' }}>
            "{review.review_text}"
        </p>

        {/* Results box */}
        <div
            style={{
                marginTop: '18px',
                marginBottom: '20px',
                background: '#0F1720',
                padding: '16px',
                borderRadius: '12px',
            }}
        >
            <div className="flex items-center gap-1.5" style={{ fontSize: '13px', fontWeight: 600, color: '#00E38C', marginBottom: '8px' }}>
                <TrendingUp size={14} />
                Results
            </div>
            {review.results.map((result, i) => (
                <div key={i} style={{ fontSize: '14px', color: '#00E38C', lineHeight: 1.6 }}>
                    {result}
                </div>
            ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
            <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0,227,140,0.12), rgba(0,227,140,0.03))',
                    border: '1px solid rgba(0,227,140,0.25)',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: '#00E38C',
                }}
            >
                {review.reviewer_name.charAt(0)}
            </div>
            <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#E5E7EB' }}>
                    {review.reviewer_name}
                </div>
                {review.role && (
                    <div style={{ fontSize: '13px', color: '#9CA3AF' }}>
                        {review.role}
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

const ReviewsMarquee: React.FC = () => {
    return (
        <section id="reviews" style={{ paddingTop: '80px', paddingBottom: '140px', background: '#0B0F14' }} className="relative">

            <div style={{ maxWidth: '1200px' }} className="mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2
                        className="font-display text-white"
                        style={{ fontSize: '42px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '32px' }}
                    >
                        Real Results. Real Brands. <span style={{ color: '#00E38C' }}>Real Growth.</span>
                    </h2>
                    <p style={{ fontSize: '18px', color: '#9CA3AF', lineHeight: 1.6 }}>
                        We don't just run ads. We scale brands profitably.
                    </p>
                </motion.div>

                {/* Trust Bar — Authority Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16"
                    style={{ marginTop: '60px', marginBottom: '60px' }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div style={{ fontSize: '20px', fontWeight: 600, color: '#E5E7EB' }}>
                                {stat.value}
                            </div>
                            <div style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '4px' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Testimonial Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    style={{ gap: '32px' }}
                >
                    {reviews.map((review, i) => (
                        <ReviewCard
                            key={i}
                            review={review}
                            index={i}
                            featured={i === FEATURED_INDEX}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsMarquee;
