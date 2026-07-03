'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Clock, Tag, Target, Lightbulb, TrendingUp, Wrench } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { projects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 },
  }),
};

const categoryColors: Record<string, string> = {
  'Operational Excellence': 'border-brand/20 bg-brand/8 text-brand',
  'Requirements Management': 'border-accent-violet/20 bg-accent-violet/8 text-accent-violet',
  'Solution Design': 'border-accent-emerald/20 bg-accent-emerald/8 text-accent-emerald',
  'Change Management': 'border-brand/20 bg-brand/8 text-brand',
  'Capability Building': 'border-accent-violet/20 bg-accent-violet/8 text-accent-violet',
};

const detailCards = [
  { key: 'overview' as const, icon: Target, label: 'Overview' },
  { key: 'challenge' as const, icon: Lightbulb, label: 'Challenge' },
  { key: 'solution' as const, icon: TrendingUp, label: 'Solution' },
  { key: 'value' as const, icon: TrendingUp, label: 'Business Value' },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28">
      <div className="section-container">
        <SectionTitle
          title="Projects"
          accent="Portfolio"
          subtitle="Banking project delivery across requirement documentation, performance analysis, and operational improvement."
        />

        <div className="space-y-8">
          {projects.map((project, idx) => {
            const catColor = categoryColors[project.category] ?? 'border-brand/20 bg-brand/8 text-brand';
            return (
              <motion.article
                key={project.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
                className="glass-card glass-card-hover group overflow-hidden rounded-2xl"
              >
                {/* Card header bar */}
                <div className="border-b border-white/8 p-7 pb-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-bold uppercase tracking-widest ${catColor}`}>
                          <Tag className="h-3 w-3" />
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-brand transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2 whitespace-nowrap self-start">
                      <Clock className="h-3.5 w-3.5 text-text-muted" />
                      <span className="text-sm font-semibold text-text-secondary">{project.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-6">
                  {/* 4 detail cards */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {detailCards.map(({ key, icon: Icon, label }) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-brand/20 transition-colors duration-200"
                      >
                        <div className="mb-2.5 flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5 text-brand" />
                          <p className="text-xs font-bold uppercase tracking-widest text-text-muted">{label}</p>
                        </div>
                        <p className="text-sm leading-relaxed text-text-secondary">{project[key]}</p>
                      </div>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.03] p-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">My PM Responsibilities</p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <ChevronRight className="mt-0.5 h-4 w-4 text-brand flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools + Lessons */}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Wrench className="h-3.5 w-3.5 text-brand" />
                        <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Tools Used</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg border border-brand/15 bg-brand/6 px-2.5 py-1 text-xs font-semibold text-brand"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">Lessons Learned</p>
                      <ul className="space-y-1.5">
                        {project.lessons.map((lesson) => (
                          <li key={lesson} className="flex gap-2 text-sm text-text-secondary">
                            <span className="text-brand mt-0.5 flex-shrink-0">·</span>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
