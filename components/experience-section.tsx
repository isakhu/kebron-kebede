'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Building2 } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { experience } from '../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

const roleColors = [
  { border: 'border-brand/15', badge: 'border-brand/20 bg-brand/8 text-brand', icon: 'bg-brand/10 text-brand' },
  { border: '', badge: 'border-accent-violet/20 bg-accent-violet/8 text-accent-violet', icon: 'bg-accent-violet/10 text-accent-violet' },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-elevated/20 to-transparent" />

      <div className="section-container relative">
        <SectionTitle
          title="Experience"
          accent="Work History"
          subtitle="Hands-on analytics, documentation, and training work in banking operations."
        />

        <div className="space-y-5">
          {experience.map((item, idx) => {
            const color = roleColors[idx % roleColors.length];
            return (
              <motion.article
                key={item.role}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className={`glass-card glass-card-hover group overflow-hidden rounded-2xl p-8 ${idx === 0 ? `border ${color.border}` : ''}`}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className={`mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${color.icon}`}>
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-brand transition-colors duration-300 leading-snug">
                        {item.role}
                      </h3>
                      <p className="mt-1.5 text-sm text-text-secondary">
                        {item.organization}
                        <span className="text-text-muted"> · {item.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className={`flex flex-shrink-0 items-center gap-2 self-start rounded-xl border px-4 py-2 ${color.badge}`}>
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="text-sm font-bold whitespace-nowrap">{item.period}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-text-muted">Responsibilities</p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand group-hover:translate-x-0.5 transition-transform" />
                        <span className="text-sm leading-relaxed text-text-secondary">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
