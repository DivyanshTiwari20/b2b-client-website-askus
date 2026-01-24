import React, { useState, useEffect, useCallback } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    quote: "You guys are amazing... it's been almost 5 months and we are getting amazing results touchwood. Thank you so much D2C team.",
    name: "Nitesh Jain",
    company: "Myneemoe"
  },
  {
    quote: "D2C scaled our ad spend from $5k to $50k/mo while maintaining a 4x ROAS. The creative strategy is next level.",
    name: "Sarah Jenkins",
    company: "FlowState Commerce"
  },
  {
    quote: "The video production team understood our brand instantly. Our CTR doubled within week one of the new campaign launch.",
    name: "Marcus Chen",
    company: "Urban/Mode"
  },
  {
    quote: "We were struggling with attribution. D2C fixed our pixel setup and unlocked clear data visibility. Growth followed immediately.",
    name: "Elena Rodriguez",
    company: "Vitality Greens"
  }
];

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 md:py-40 relative bg-surface/50 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-12 md:mb-16 flex justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary">
                <Quote size={20} className="md:w-7 md:h-7" fill="currentColor" />
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
        >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-light text-white mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto select-none">
                      "{testimonial.quote}"
                    </h2>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-primary to-transparent mb-6 md:mb-8"></div>
                        <div className="text-lg md:text-xl font-medium text-white mb-1">{testimonial.name}</div>
                        <div className="text-sm md:text-base font-mono text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12 md:mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-primary w-6' : 'bg-white/10 hover:bg-white/30'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;