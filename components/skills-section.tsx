'use client';

import { motion } from 'framer-motion';
import { FolderKanban, FileText, Building2, BarChart2, Users } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { skills } from '../data/skills';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const categoryMeta = [
  {
    icon: FolderKanban,
    color: { icon: 'text-brand', bg: 'bg-brand/10', border: 'border-brand/20 hover:border-brand/45', dot: 'bg-brand', tag: 'hover:border-brand/30 hover:text-brand hover:bg-brand/8' },
    featured: true,
  },
  {
    icon: FileText,
    color: { icon: 'text-accent-violet', bg: 'bg-accent-violet/10', border: 'border-accent-violet/20 hover:border-accent-violet/45', dot: 'bg-accent-violet', tag: 'hover:border-accent-violet/30 hover:text-accent-violet hover:bg-accent-violet/8' },
    featured: false,
  },
  {
    icon: Building2,
    color: { icon: 'text-accent-emerald', bg: 'bg-accent-emerald/10', border: 'border-accent-emerald/20 hover:border-accent-emerald/45', dot: 'bg-accent-emerald', tag: 'hover:border-accent-emerald/30 hover:text-accent-emerald hover:bg-accent-emerald/8' },
    featured: false,
  },
  {
    icon: BarChart2,
    color: { icon: 'text-brand', bg: 'bg-brand/10', border: 'border-brand/20 hover:border-brand/45', dot: 'bg-brand', tag: 'hover:border-brand/30 hover:text-brand hover:bg-brand/8' },
    featured: false,
  },
  {
    icon: Users,
    color: { icon: 'text-accent-violet', bg: 'bg-accent-violet/10', border: 'border-accent-violet/20 hover:border-accent-violet/45', dot: 'bg-accent-violet', tag: 'hover:border-accent-violet/30 hover:text-accent-violet hover:bg-accent-violet/8' },
    featured: false,
  },
];

export function SkillsSection() {
  const [pmSkills, ...otherSkills] = skills;
  const pmMeta = categoryMeta[0];
  const PmIcon = pmMeta.icon;

  return (
    <section id="skills" className="py-28">
      <div className="section-container">
        <SectionTitle
          title="Skills"
          accent="Capabilities"
          subtitle="Core competencies across project management, banking analysis, and technical operations."
        />

        {/* Featured PM skills card — full width */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`mb-6 glass-card rounded-2xl border ${pmMeta.color.border} p-8 transition-all duration-300 hover:-translate-y-1`}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${pmMeta.color.bg}`}>
              <PmIcon className={`h-5 w-5 ${pmMeta.color.icon}`} />
            </div>
            <div>
              <h3 className={`font-display text-xl font-bold ${pmMeta.color.icon}`}>{pmSkills.title}</h3>
              <p className="text-xs text-text-muted">Primary domain — MSc certified · 5 Google PM certifications</p>
            </div>
            <span className="ml-auto rounded-lg border border-brand/20 bg-brand/8 px-3 py-1 text-xs font-bold text-brand">
              Core Expertise
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {pmSkills.items.map((skill) => (
              <span
                key={skill}
                className={`inline-flex items-center rounded-lg border border-brand/15 bg-brand/8 px-3.5 py-2 text-sm font-semibold text-brand ${pmMeta.color.tag} transition-all duration-200`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Other skill categories — 2x2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {otherSkills.map((group, idx) => {
            const meta = categoryMeta[idx + 1];
            const Icon = meta.icon;
            return (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className={`glass-card rounded-2xl border ${meta.color.border} p-6 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${meta.color.bg}`}>
                    <Icon className={`h-4 w-4 ${meta.color.icon}`} />
                  </div>
                  <h3 className={`font-display text-base font-bold ${meta.color.icon}`}>{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-lg border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-text-secondary ${meta.color.tag} transition-all duration-200`}
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
