import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Review {
    reviewer_name: string;
    rating: number;
    review_date: string;
    review_text: string;
    review_title?: string;
}

const reviews: Review[] = [
    {
        "reviewer_name": "GAYATRI GOKHALE",
        "rating": 5,
        "review_date": "10 months ago",
        "review_text": "I have worked with them for 6 months and waited this long to put this review because I wanted to check how the company performs for my brand and I can whole heartedly say that D2C Digital Solutions does a fantastic job at Performance Marketing. They are responsive and on-time with their deliverables. The team has consistently delivered what they promised and I am excited to see how much we can scale together. I wish them nothing but success ahead"
    },
    {
        "reviewer_name": "Priya Singh Thakur",
        "rating": 5,
        "review_date": "10 months ago",
        "review_title": "Ecommerce Growth Experts!",
        "review_text": "Since partnering with D2C Digital Solutions, our sales have skyrocketed! Their expertise in performance marketing helped us cut wasted ad spend and focus on high-converting audiences. Their transparency and proactive communication make them a trusted partner for long-term success."
    },
    {
        "reviewer_name": "Sanket Bhandari",
        "rating": 5,
        "review_date": "10 months ago",
        "review_text": "Khalid a pleasure to work with. Very professional and has solutions to many different challenging situations. Has good knowledge of fb ads and i would definitely recommend his team."
    },
    {
        "reviewer_name": "Prerna Joshi",
        "rating": 5,
        "review_date": "a year ago",
        "review_text": "Working with Khalid and his team has been an absolute pleasure, both by way of ease in communication as well as great results and output for our business. We have had a visible surge in queries as well as conversions shortly into our association with D-C I highly recommend getting them on board."
    },
    {
        "reviewer_name": "Tanisha Jain",
        "rating": 5,
        "review_date": "10 months ago",
        "review_text": "Thank you for the great work. We're working with them on a skincare beauty brand for performance marketing.. Definitely recommend if you're looking for a D2C / Digital marketing agency."
    },
    {
        "reviewer_name": "Ayush Manocha",
        "rating": 5,
        "review_date": "a year ago",
        "review_text": "One of the most genuine person I came across. I've been changing agencies since ages and honestly I lost faith in Instagram marketing. But khalid and his team were convincing in their first consultation and they give outstanding results right from the first month. And more importantly, they are available for u when u need them. Bcz of their unmatched efforts, my brand has seen growth which I never expected. Thanks khalid Moien and the whole team. Keep doing the good work. No, great work."
    },
    {
        "reviewer_name": "Khan Mohammad",
        "rating": 5,
        "review_date": "10 months ago",
        "review_text": "I have worked with Khalid and team for over a year now they are amazing they delivered what was promised and my sales are better than ever."
    },
    {
        "reviewer_name": "Ertiqa Altaf",
        "rating": 5,
        "review_date": "2 years ago",
        "review_text": "I had an incredible experience working with this performance marketing agency! Their team's expertise and dedication were evident from day one. They tailored a highly effective strategy that significantly boosted our online presence and conversions. Communication was excellent, and they were always transparent about their approach. I'm truly impressed by the results they delivered, and I highly recommend their services to anyone seeking top-notch performance marketing solutions."
    },
    {
        "reviewer_name": "Ahrar Wani",
        "rating": 5,
        "review_date": "2 years ago",
        "review_text": "Impressed by the remarkable services provided by D2C Digital Solutions. Their performance marketing strategies yielded impressive results for our business, boosting our online visibility and conversion rates significantly. Throughout the collaboration, the team's unwavering expertise, commitment, and transparent communication truly stood out. Thanks to their efforts, our business has experienced substantial growth, and I enthusiastically endorse D2C Digital Solutions to all seeking top-notch performance marketing solutions."
    },
    {
        "reviewer_name": "aamir rajput",
        "rating": 5,
        "review_date": "a year ago",
        "review_text": "I have a clothing brand and had a ROAS of almost 1 D2C team are amazing they took my ROAS to 5x in 45 days highly recommend"
    }
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="w-[350px] md:w-[450px] shrink-0 p-6 mx-4 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
        <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < review.rating ? "text-primary fill-primary" : "text-zinc-600"} />
            ))}
            <span className="ml-2 text-xs text-zinc-500 font-mono">{review.review_date}</span>
        </div>
        <p className="text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-4 hover:line-clamp-none transition-all duration-300">
            "{review.review_text}"
        </p>
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 flex items-center justify-center text-primary text-xs font-bold border border-primary/20">
                {review.reviewer_name.charAt(0)}
            </div>
            <div>
                <h4 className="text-white text-sm font-medium">{review.reviewer_name}</h4>
                {review.review_title && (
                    <p className="text-primary/70 text-[10px] uppercase tracking-wider mt-0.5">{review.review_title}</p>
                )}
            </div>
        </div>
    </div>
);

const Marquee = ({ children, reverse = false }: { children: React.ReactNode, reverse?: boolean }) => {
    return (
        <div className="flex overflow-hidden group">
            <motion.div
                initial={{ x: reverse ? "-50%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-50%" }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex py-4"
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

const ReviewsMarquee: React.FC = () => {
    const firstRow = reviews.slice(0, 5);
    const secondRow = reviews.slice(5);

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">
                    Voices of <span className="text-primary">Success</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Don't just take our word for it. Here's what our partners have to say about our data-driven growth strategies.
                </p>
            </div>

            <div className="relative flex flex-col gap-4">
                <Marquee>
                    {firstRow.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </Marquee>

                <Marquee reverse>
                    {secondRow.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </Marquee>

                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default ReviewsMarquee;
