'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { CertificationsSection } from './certifications-section';
import { education } from '../data/education';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

export function EducationSection() {
  return (
    <section id="education" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-elevated/20 to-transparent" />

      <div className="section-container relative">
        <SectionTitle
          title="Education"
          accent="Academic Background"
          subtitle="Engineering foundations combined with completed advanced project management training."
        />

        <div className="space-y-5">
          {education.map((item, idx) => {
            const isFeatured = idx === 0;
            return (
              <motion.div
                key={`${item.degree}-${item.institution}`}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`glass-card glass-card-hover group rounded-2xl p-7 ${isFeatured ? 'border border-brand/20' : ''}`}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  {/* Left */}
                  <div className="flex gap-4">
                    <div className={`mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isFeatured
                        ? 'bg-brand/15 group-hover:bg-brand/25'
                        : 'bg-accent-violet/10 group-hover:bg-accent-violet/18'
                    }`}>
                      <GraduationCap className={`h-5 w-5 ${isFeatured ? 'text-brand' : 'text-accent-violet'}`} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-xl font-bold text-text-primary">{item.degree}</h3>
                        {/* Always "Completed" — MSc is finished */}
                        <span className="inline-flex items-center gap-1 rounded-lg border border-accent-emerald/20 bg-accent-emerald/8 px-2.5 py-0.5 text-xs font-bold text-accent-emerald">
                          <CheckCircle2 className="h-3 w-3" />
                          Completed
                        </span>
                      </div>
                      <p className={`mt-1 text-sm font-bold ${isFeatured ? 'text-brand' : 'text-accent-violet'}`}>
                        {item.field}
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">{item.institution}</p>
                      {isFeatured && (
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary max-w-lg">
                          Completed graduate program covering project planning, risk management, monitoring &amp; evaluation, stakeholder engagement, and agile methodologies — reflecting a serious, finished investment in project management knowledge for social development work.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right badges */}
                  <div className="flex flex-shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
                    {item.year && (
                      <span className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold whitespace-nowrap ${
                        isFeatured
                          ? 'border-brand/20 bg-brand/8 text-brand'
                          : 'border-accent-violet/20 bg-accent-violet/8 text-accent-violet'
                      }`}>
                        <Calendar className="h-3 w-3" />
                        {item.year}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-text-secondary whitespace-nowrap">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <CertificationsSection />
      </div>
    </section>
  );
}
