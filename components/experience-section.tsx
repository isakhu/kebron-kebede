'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Building2, Award } from 'lucide-react';
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

// PM-relevant tags to highlight in responsibilities
const pmKeywords = ['BRD', 'FRD', 'KPI', 'KRI', 'requirement', 'project', 'stakeholder', 'training', 'documentation', 'analysis', 'performance'];

function highlightText(text: string) {
  const lower = text.toLowerCase();
  const hasPMKeyword = pmKeywords.some((kw) => lower.includes(kw.toLowerCase()));
  return hasPMKeyword;
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-elevated/20 to-transparent" />

      <div className="section-container relative">
        <SectionTitle
          title="Experience"
          accent="Work History"
          subtitle="Driving project delivery, requirement documentation, and operational improvement at Cooperative Bank of Oromia."
        />

        <div className="space-y-5">
          {experience.map((item, idx) => (
            <motion.article
              key={item.role}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="glass-card glass-card-hover group overflow-hidden rounded-2xl p-8"
            >
              {/* Header */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 group-hover:bg-brand/18 transition-colors duration-300">
                    <Building2 className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-brand transition-colors duration-300">
                      {item.role}
                    </h3>
                    <p className="mt-1.5 text-sm text-text-secondary">
                      {item.organization}{' '}
                      <span className="text-text-muted">· {item.location}</span>
                    </p>
                    {/* PM badge */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand/20 bg-brand/8 px-2.5 py-1 text-xs font-bold text-brand">
                        <Award className="h-3 w-3" />
                        Project Delivery
                      </span>
                      <span className="inline-flex items-center rounded-lg border border-accent-violet/20 bg-accent-violet/8 px-2.5 py-1 text-xs font-bold text-accent-violet">
                        Business Analysis
                      </span>
                      <span className="inline-flex items-center rounded-lg border border-accent-emerald/20 bg-accent-emerald/8 px-2.5 py-1 text-xs font-bold text-accent-emerald">
                        Stakeholder Management
                      </span>
                    </div>
                  </div>
                </div>

                {/* Period */}
                <div className="flex flex-shrink-0 items-center gap-2 self-start rounded-xl border border-brand/20 bg-brand/8 px-4 py-2">
                  <Calendar className="h-3.5 w-3.5 text-brand" />
                  <span className="text-sm font-bold text-brand whitespace-nowrap">{item.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-text-muted">Key Responsibilities &amp; Achievements</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {item.responsibilities.map((responsibility) => {
                    const isPM = highlightText(responsibility);
                    return (
                      <li
                        key={responsibility}
                        className={`flex gap-3 rounded-xl p-3 transition-colors duration-200 ${
                          isPM ? 'border border-brand/10 bg-brand/4' : 'border border-transparent'
                        }`}
                      >
                        <ChevronRight
                          className={`mt-0.5 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${
                            isPM ? 'text-brand' : 'text-text-muted'
                          }`}
                        />
                        <span className="text-sm leading-relaxed text-text-secondary">{responsibility}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
