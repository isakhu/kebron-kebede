'use client';

import { motion } from 'framer-motion';
import { Target, BookOpen, MapPin } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { profile } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-elevated/20 to-transparent" />

      <div className="section-container relative">
        <SectionTitle
          title="About"
          accent="Who I Am"
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main about card */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card glass-card-hover rounded-2xl p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                <Target className="h-5 w-5 text-brand" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">Who I Am</h3>
            </div>
            <p className="text-base leading-[1.9] text-text-secondary">
              {profile.about}
            </p>

            <div className="mt-8 border-t border-white/8 pt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">Career Objective</p>
              <p className="text-base leading-[1.85] text-text-secondary">
                {profile.objective}
              </p>
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10">
                  <BookOpen className="h-4 w-4 text-brand" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Current Role</p>
              </div>
              <p className="font-display text-sm font-bold text-text-primary leading-snug">
                Payment Platform Performance Analyst
              </p>
              <p className="mt-1 text-xs text-brand font-semibold">Business Team</p>
              <p className="mt-0.5 text-xs text-text-muted">Cooperative Bank of Oromia · Feb 2024–Present</p>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-violet/15">
                  <BookOpen className="h-4 w-4 text-accent-violet" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Education</p>
              </div>
              <p className="font-display text-sm font-bold text-text-primary">MSc Project Management</p>
              <p className="mt-0.5 text-xs text-accent-violet font-semibold">MIC · 2023–2025 (In Progress)</p>
              <div className="mt-3 border-t border-white/8 pt-3">
                <p className="font-display text-sm font-bold text-text-primary">BSc Electrical &amp; Computer Eng.</p>
                <p className="mt-0.5 text-xs text-text-muted">Hawassa University · 2018–2022</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-emerald/15">
                  <MapPin className="h-4 w-4 text-accent-emerald" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Location</p>
              </div>
              <p className="text-sm font-semibold text-text-secondary">Addis Ababa, Ethiopia</p>
              <p className="mt-1 text-xs text-text-muted">On-site · Open to social development opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
