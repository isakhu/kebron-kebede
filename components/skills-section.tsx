'use client';

import { motion } from 'framer-motion';
import { BarChart2, FileText, Building2 } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { skills } from '../data/skills';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const categoryMeta = [
  {
    icon: BarChart2,
    color: {
      icon: 'text-brand',
      bg: 'bg-brand/10',
      border: 'border-brand/20 hover:border-brand/45',
      tag: 'border-brand/15 bg-brand/8 text-brand hover:bg-brand/15',
      heading: 'text-brand',
    },
  },
  {
    icon: FileText,
    color: {
      icon: 'text-accent-violet',
      bg: 'bg-accent-violet/10',
      border: 'border-accent-violet/20 hover:border-accent-violet/45',
      tag: 'border-accent-violet/15 bg-accent-violet/8 text-accent-violet hover:bg-accent-violet/15',
      heading: 'text-accent-violet',
    },
  },
  {
    icon: Building2,
    color: {
      icon: 'text-accent-emerald',
      bg: 'bg-accent-emerald/10',
      border: 'border-accent-emerald/20 hover:border-accent-emerald/45',
      tag: 'border-accent-emerald/15 bg-accent-emerald/8 text-accent-emerald hover:bg-accent-emerald/15',
      heading: 'text-accent-emerald',
    },
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-28">
      <div className="section-container">
        <SectionTitle
          title="Skills"
          accent="Capabilities"
          subtitle="Core competencies in data analysis, monitoring & evaluation, and banking operations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {skills.map((group, idx) => {
            const meta = categoryMeta[idx % categoryMeta.length];
            const Icon = meta.icon;
            return (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className={`glass-card rounded-2xl border ${meta.color.border} p-7 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${meta.color.bg}`}>
                    <Icon className={`h-5 w-5 ${meta.color.icon}`} />
                  </div>
                  <h3 className={`font-display text-lg font-bold ${meta.color.heading}`}>{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${meta.color.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
