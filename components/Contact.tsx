import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks! We'll be in touch.");
      setFormState({ firstName: '', lastName: '', phone: '', email: '', website: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-40 relative">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-6 md:mb-8" style={{ color: '#F5F7FA', letterSpacing: '-0.5px' }}>
            Let’s reinvent your business.
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
            Ready to see 5x ROAS? Book your free strategy call today.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-3">
              <label className="text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-wide">First Name</label>
              <input
                required
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                type="text"
                className="w-full bg-surface border border-white/10 focus:border-primary rounded-xl px-5 py-4 text-white text-base md:text-lg outline-none transition-colors placeholder:text-zinc-700"
                placeholder="John"
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-wide">Last Name</label>
              <input
                required
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                type="text"
                className="w-full bg-surface border border-white/10 focus:border-primary rounded-xl px-5 py-4 text-white text-base md:text-lg outline-none transition-colors placeholder:text-zinc-700"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-3">
              <label className="text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-wide">Phone</label>
              <input
                required
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                type="tel"
                className="w-full bg-surface border border-white/10 focus:border-primary rounded-xl px-5 py-4 text-white text-base md:text-lg outline-none transition-colors placeholder:text-zinc-700"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-wide">Email</label>
              <input
                required
                name="email"
                value={formState.email}
                onChange={handleChange}
                type="email"
                className="w-full bg-surface border border-white/10 focus:border-primary rounded-xl px-5 py-4 text-white text-base md:text-lg outline-none transition-colors placeholder:text-zinc-700"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2 md:space-y-3">
            <label className="text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-wide">Website URL</label>
            <input
              required
              name="website"
              value={formState.website}
              onChange={handleChange}
              type="url"
              className="w-full bg-surface border border-white/10 focus:border-primary rounded-xl px-5 py-4 text-white text-base md:text-lg outline-none transition-colors placeholder:text-zinc-700"
              placeholder="https://yourbrand.com"
            />
          </div>

          <div className="space-y-2 md:space-y-3">
            <label className="text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-wide">Message</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-surface border border-white/10 focus:border-primary rounded-xl px-5 py-4 text-white text-base md:text-lg outline-none transition-colors placeholder:text-zinc-700"
              placeholder="Tell us about your goals..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-dark text-black font-bold text-lg md:text-xl py-4 md:py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,227,140,0.3)] hover:shadow-[0_0_30px_rgba(0,227,140,0.5)] mt-4"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin w-5 h-5 md:w-6 md:h-6" /> Processing...
              </>
            ) : (
              <>
                Request a quote <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;