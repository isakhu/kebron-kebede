'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, BookOpen } from 'lucide-react';
import { certifications } from '../data/certifications';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

// Course order labels for the Google PM series
const courseNumbers = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'];

export function CertificationsSection() {
  return (
    <div className="mt-16">
      {/* Sub-section heading */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/15">
            <Award className="h-5 w-5 text-accent-violet" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-violet">Certifications</p>
            <h3 className="font-display text-xl font-bold text-text-primary">Professional Credentials</h3>
          </div>
        </div>
        {/* Google PM track banner */}
        <div className="flex items-center gap-2.5 rounded-xl border border-accent-violet/20 bg-accent-violet/8 px-4 py-2.5">
          <BookOpen className="h-4 w-4 text-accent-violet flex-shrink-0" />
          <div>
            <p className="text-xs font-bold text-accent-violet">Google Project Management Certificate</p>
            <p className="text-xs text-text-muted">6-course professional program via Coursera</p>
          </div>
        </div>
      </div>

      {/* Progress track visual */}
      <div className="mb-6 glass-card rounded-2xl border border-accent-violet/15 p-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-text-muted">Certification Track Progress</p>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {certifications.map((cert, i) => (
            <div key={cert.title} className="flex flex-shrink-0 items-center gap-2">
              <div className="flex flex-col items-center gap-2 min-w-[110px]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent-violet bg-accent-violet/15">
                  <CheckCircle2 className="h-4 w-4 text-accent-violet" />
                </div>
                <p className="text-center text-[10px] font-bold text-text-muted">{courseNumbers[i]}</p>
              </div>
              {i < certifications.length - 1 && (
                <div className="h-0.5 w-8 rounded-full bg-accent-violet/40 flex-shrink-0 mb-4" />
              )}
            </div>
          ))}
          {/* Final badge */}
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-8 rounded-full bg-brand/40 flex-shrink-0 mb-4" />
            <div className="flex flex-col items-center gap-2 min-w-[110px]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand bg-brand/15">
                <Award className="h-4 w-4 text-brand" />
              </div>
              <p className="text-center text-[10px] font-bold text-brand">Certificate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cert cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, idx) => (
          <motion.div
            key={item.title}
            custom={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="glass-card group rounded-xl border border-white/8 p-5 hover:border-accent-violet/30 hover:bg-accent-violet/4 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-violet/12 group-hover:bg-accent-violet/20 transition-colors duration-300">
                <CheckCircle2 className="h-4 w-4 text-accent-violet" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-text-primary leading-snug">{item.title}</p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="text-xs text-text-secondary">{item.institution}</p>
                  <span className="flex-shrink-0 rounded-lg border border-accent-violet/20 bg-accent-violet/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-accent-violet">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
