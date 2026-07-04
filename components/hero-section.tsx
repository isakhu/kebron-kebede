'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight, Download, Heart } from 'lucide-react';
import { profile } from '../data/profile';

const badges = [
  { label: 'MSc Project Management', color: 'border-brand/25 bg-brand/8 text-brand' },
  { label: 'Google PM Certified', color: 'border-accent-violet/25 bg-accent-violet/8 text-accent-violet' },
  { label: 'Data & M&E Analysis', color: 'border-accent-emerald/25 bg-accent-emerald/8 text-accent-emerald' },
  { label: 'Card Banking', color: 'border-white/15 bg-white/5 text-text-secondary' },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-surface-darker py-24 md:py-36"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb absolute -top-40 right-0 h-[600px] w-[600px] bg-brand/15" />
        <div className="orb absolute bottom-0 left-0 h-[500px] w-[500px] bg-accent-violet/10" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,217,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,217,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="section-container relative">
        <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/8 px-4 py-1.5">
              <Heart className="h-3.5 w-3.5 text-brand" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                Passionate About Social Development
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-hero font-bold leading-[1.04] tracking-[-0.03em]">
              <span className="gradient-text-subtle">Kebron</span>
              <br />
              <span className="gradient-text-subtle">Kebede</span>{' '}
              <span className="gradient-text">Olana</span>
            </h1>

            {/* Role */}
            <p className="mt-5 text-lg font-semibold text-text-secondary md:text-xl">
              Payment Platform Performance Analyst
              <span className="mx-2 text-text-muted">·</span>
              <span className="text-text-muted font-normal">Cooperative Bank of Oromia</span>
            </p>

            {/* Intro */}
            <p className="mt-5 max-w-xl text-base leading-[1.85] text-text-secondary">
              {profile.intro}
            </p>

            {/* Credential badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-bold ${b.color}`}
                >
                  {b.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
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
                href="#story"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-brand/25 bg-brand/5 px-7 py-3.5 text-sm font-bold text-brand hover:border-brand/60 hover:bg-brand/12 transition-all duration-300"
              >
                My Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact row */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-text-muted hover:text-brand transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-text-muted hover:text-brand transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Right: circular photo card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-xs flex-col items-center gap-6"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-brand/15 blur-3xl scale-75 opacity-60" />

            {/* Circular image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-brand/30 shadow-glow ring-4 ring-brand/10">
              <Image
                src="/kebron-profile.jpg"
                alt="Kebron Kebede Olana — Payment Platform Performance Analyst"
                fill
                className="object-cover object-top grayscale"
                priority
              />
            </div>

            {/* Name card below image */}
            <div className="glass-card rounded-2xl p-5 text-center w-full">
              <p className="font-display text-base font-bold text-text-primary">Kebron Kebede Olana</p>
              <p className="mt-1 text-xs text-brand font-semibold">Payment Platform Performance Analyst</p>
              <p className="mt-1 text-xs text-text-muted">Cooperative Bank of Oromia · Addis Ababa</p>
              <div className="mt-4 glow-line" />
              <p className="mt-4 text-xs leading-relaxed text-text-secondary italic">
                "Driven by a childhood dream to be part of projects that genuinely change how communities live."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-darker to-transparent" />
    </section>
  );
}
