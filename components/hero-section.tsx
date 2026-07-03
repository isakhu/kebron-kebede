'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Mail, Linkedin, ArrowRight, Download, CheckCircle } from 'lucide-react';
import { profile } from '../data/profile';

const stats = [
  { value: '5+', label: 'PM Certifications', sub: 'Google / Coursera' },
  { value: 'MSc', label: 'Project Management', sub: 'Maryland Intl. College' },
  { value: '2+', label: 'Years in Banking', sub: 'CBO — Active Role' },
  { value: '5', label: 'Projects Delivered', sub: 'BRD · FRD · Analytics' },
];

const highlights = [
  'Agile & Traditional PM Methodologies',
  'BRD / FRD Documentation Expert',
  'Banking Systems & Payment Operations',
  'Cross-functional Stakeholder Leadership',
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-surface-darker py-24 md:py-36"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb absolute -top-40 right-0 h-[600px] w-[600px] bg-brand/18" />
        <div className="orb absolute bottom-0 left-0 h-[500px] w-[500px] bg-accent-violet/12" />
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] bg-brand/4" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,217,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,217,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="section-container relative">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/8 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                Open to PM Opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-hero font-bold leading-[1.04] tracking-[-0.03em]">
              <span className="gradient-text-subtle">Kebron</span>
              <br />
              <span className="gradient-text">Kebede</span>
            </h1>

            {/* Title */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-lg border border-brand/25 bg-brand/8 px-3.5 py-1.5 text-sm font-bold text-brand">
                Project Manager
              </span>
              <span className="text-text-muted text-sm">·</span>
              <span className="text-sm font-semibold text-text-secondary">
                MSc Project Management
              </span>
              <span className="text-text-muted text-sm">·</span>
              <span className="text-sm font-semibold text-text-secondary">
                Banking Operations Specialist
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-[1.85] text-text-secondary">
              Results-driven Project Manager with an MSc in Project Management, 5 Google-certified PM competencies, and hands-on delivery experience in banking operations. Specializes in requirement documentation, payment system analysis, and cross-functional project coordination at Cooperative Bank of Oromia.
            </p>

            {/* Highlights list */}
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-brand" />
                  {h}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/Kebron-CV.pdf"
                download
                className="group inline-flex items-center gap-2.5 rounded-xl bg-brand px-7 py-3.5 text-sm font-bold text-surface-darker shadow-glow hover:bg-brand-light hover:shadow-glow-lg transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                Download CV
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-brand/25 bg-brand/5 px-7 py-3.5 text-sm font-bold text-brand hover:border-brand/60 hover:bg-brand/12 hover:shadow-glow-sm transition-all duration-300"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Info cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="glass-card glass-card-hover rounded-2xl p-5">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10">
                    <Briefcase className="h-4 w-4 text-brand" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Current Role</span>
                </div>
                <p className="text-base font-bold text-text-primary">Card Banking Officer</p>
                <p className="mt-1 text-sm text-text-secondary">Cooperative Bank of Oromia</p>
              </div>
              <div className="glass-card glass-card-hover rounded-2xl p-5">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10">
                    <Mail className="h-4 w-4 text-brand" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Contact</span>
                </div>
                <p className="text-sm font-bold text-text-primary">{profile.email}</p>
                <p className="mt-1 text-sm text-text-secondary">{profile.phone}</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-brand-gradient opacity-10 blur-2xl scale-95" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-glass shadow-card hover:shadow-glow transition-all duration-500 group">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand/15 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <Image
                  src="/kebron-profile.jpg"
                  alt="Kebron Kebede — Project Manager"
                  width={520}
                  height={520}
                  className="h-auto w-full px-8 pt-8 pb-4"
                  priority
                />
              </div>

              <div className="relative border-t border-white/8 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Professional Summary</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  Certified Project Manager with banking domain expertise, driving operational excellence and stakeholder alignment.
                </p>
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex items-center gap-2.5 text-sm font-bold text-brand hover:text-brand-light transition-colors duration-200 group/link"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="group-hover/link:underline">LinkedIn Profile</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card glass-card-hover rounded-2xl p-5 text-center"
            >
              <p className="font-display text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1.5 text-sm font-bold text-text-primary">{stat.label}</p>
              <p className="mt-0.5 text-xs text-text-muted">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-darker to-transparent" />
    </section>
  );
}
