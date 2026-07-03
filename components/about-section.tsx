'use client';

import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, MapPin, BookOpen, Layers } from 'lucide-react';
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

const pmApproach = [
  {
    icon: Layers,
    title: 'Initiate & Plan',
    desc: 'Define scope, stakeholders, and project charter. Build BRD/FRD documentation from ground up.',
  },
  {
    icon: Target,
    title: 'Execute & Monitor',
    desc: 'Track KPIs and KRIs in real time. Manage risks, changes, and cross-functional coordination.',
  },
  {
    icon: TrendingUp,
    title: 'Deliver & Improve',
    desc: 'Close projects with operational handoff, training, and documented lessons learned.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-elevated/20 to-transparent" />

      <div className="section-container relative">
        <SectionTitle
          title="About"
          accent="Who I Am"
          subtitle="Project Manager with an engineering backbone, banking domain depth, and a drive for operational excellence."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main career story — 2 cols */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card glass-card-hover rounded-2xl p-8 lg:col-span-2"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                <Target className="h-5 w-5 text-brand" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">Career Objective</h3>
            </div>
            <p className="text-base leading-[1.85] text-text-secondary">
              To secure a Project Manager role where I can leverage my MSc in Project Management, Google PM certifications, and hands-on banking project delivery experience to lead successful initiatives in financial services or related industries. I bring structured thinking, stakeholder empathy, and a track record of translating complex requirements into executable plans.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">Mission</p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Drive banking transformation and operational excellence through disciplined project execution, evidence-based planning, and stakeholder-focused delivery.
                </p>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">Leadership Style</p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Clarity, accountability, and continuous improvement — building trust across business and technical teams to ensure projects land on time and on scope.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick facts column */}
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
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Education</p>
              </div>
              <p className="font-display text-sm font-bold text-text-primary">MSc Project Management</p>
              <p className="mt-0.5 text-xs text-brand font-semibold">Maryland Intl. College · 2026</p>
              <div className="mt-3 border-t border-white/8 pt-3">
                <p className="font-display text-sm font-bold text-text-primary">BSc Electrical &amp; Computer Eng.</p>
                <p className="mt-0.5 text-xs text-text-muted">Hawassa University · 2022</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-violet/15">
                  <Users className="h-4 w-4 text-accent-violet" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Current Role</p>
              </div>
              <p className="font-display text-sm font-bold text-text-primary">Card Banking Officer</p>
              <p className="mt-0.5 text-xs text-accent-violet font-semibold">Cooperative Bank of Oromia</p>
              <p className="mt-0.5 text-xs text-text-muted">Feb 2023 – Present</p>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-emerald/15">
                  <MapPin className="h-4 w-4 text-accent-emerald" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Location</p>
              </div>
              <p className="text-sm font-semibold text-text-secondary">Addis Ababa, Ethiopia</p>
              <p className="mt-1 text-xs text-text-muted">Open to remote &amp; on-site roles</p>
            </div>
          </motion.div>
        </div>

        {/* PM Approach row */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-6"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-px w-5 bg-brand inline-block mr-2 align-middle" />
            PM Approach
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {pmApproach.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="glass-card glass-card-hover rounded-2xl p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <span className="text-xs font-bold text-text-muted">Step {i + 1}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-text-primary">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Professional profile summary */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-6 glass-card glass-card-hover rounded-2xl p-8"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-brand">Professional Profile</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.summary.map((line, i) => (
              <p key={i} className="text-sm leading-relaxed text-text-secondary border-l-2 border-brand/20 pl-4">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
