'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock } from 'lucide-react';
import { certifications } from '../data/certifications';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export function CertificationsSection() {
  return (
    <div className="mt-16">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/15">
          <Award className="h-5 w-5 text-accent-violet" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-violet">Certifications</p>
          <h3 className="font-display text-xl font-bold text-text-primary">Professional Credentials</h3>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {certifications.map((item, idx) => {
          const isInProgress = item.status === 'In Progress';
          return (
            <motion.div
              key={item.title}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`glass-card group rounded-xl border p-5 hover:-translate-y-0.5 transition-all duration-300 ${
                isInProgress
                  ? 'border-brand/20 hover:border-brand/40'
                  : 'border-white/8 hover:border-accent-violet/30 hover:bg-accent-violet/4'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${
                  isInProgress ? 'bg-brand/12' : 'bg-accent-violet/12'
                }`}>
                  {isInProgress
                    ? <Clock className="h-4 w-4 text-brand" />
                    : <CheckCircle2 className="h-4 w-4 text-accent-violet" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-text-primary leading-snug">{item.title}</p>
                  <p className="mt-1.5 text-xs text-text-secondary">{item.institution}</p>
                  <div className="mt-2">
                    <span className={`inline-flex rounded-lg border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${
                      isInProgress
                        ? 'border-brand/20 bg-brand/8 text-brand'
                        : 'border-accent-violet/20 bg-accent-violet/10 text-accent-violet'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
