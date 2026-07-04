'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

export function StorySection() {
  return (
    <section id="story" className="py-28">
      <div className="section-container">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-px w-6 bg-brand inline-block" />
            My Story
            <span className="h-px w-6 bg-brand inline-block" />
          </p>
          <h2 className="font-display text-section font-bold text-text-primary">
            Where It Started<span className="text-brand">.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Decorative left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="sticky top-28 glass-card rounded-2xl border border-brand/15 p-8">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-accent-violet/20 border border-brand/20">
                <Heart className="h-6 w-6 text-brand" />
              </div>

              <h3 className="font-display text-xl font-bold text-text-primary leading-snug">
                A Childhood Dream That Never Left
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Watching social development projects transform communities planted a seed that has guided every educational and professional decision since.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-text-primary">Not a title-seeker</span> — motivated by impact, not authority
                  </p>
                </div>
                <div className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-text-primary">Continuous learner</span> — MSc PM + Google certifications
                  </p>
                </div>
                <div className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-text-primary">Hands-on contributor</span> — part of the work, not above it
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 border-t border-white/8 pt-6">
                <p className="text-sm italic leading-relaxed text-text-muted">
                  "My heart remains with social development — driven by knowledge, curiosity, and the belief that thoughtful project work can genuinely help society."
                </p>
                <p className="mt-3 text-xs font-bold text-brand">— Kebron Kebede Olana</p>
              </div>
            </div>
          </motion.div>

          {/* Story paragraphs */}
          <div className="space-y-5">
            {profile.story.map((paragraph, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: idx * 0.12 }}
                className={`glass-card glass-card-hover rounded-2xl p-7 ${
                  idx === 0 ? 'border border-brand/15' : ''
                }`}
              >
                {idx === 0 && (
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">The Beginning</p>
                  </div>
                )}
                {idx === 1 && (
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-accent-violet" />
                    <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">Today</p>
                  </div>
                )}
                {idx === 2 && (
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-accent-emerald" />
                    <p className="text-xs font-bold uppercase tracking-widest text-accent-emerald">The Path Forward</p>
                  </div>
                )}
                <p className="text-base leading-[1.9] text-text-secondary">{paragraph}</p>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
              className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/8 to-accent-violet/8 p-7"
            >
              <p className="font-display text-base font-bold text-text-primary">
                If you work in social development and believe in the power of hands-on project contributors —
              </p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                I'd love to connect and explore how my skills in data analysis, monitoring & evaluation, and project management can serve the work you're doing.
              </p>
              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand/30 bg-brand/10 px-5 py-2.5 text-sm font-bold text-brand hover:bg-brand/20 hover:border-brand/50 transition-all duration-200"
                >
                  <Heart className="h-4 w-4" />
                  Let's Connect
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
