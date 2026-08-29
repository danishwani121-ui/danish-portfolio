import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import {
  FileText,
  ArrowRight,
  Database,
  TrendingUp,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const prefersReducedMotion = useReducedMotion();
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // Check if hero animation already played in this browser session
    const animatedBefore = sessionStorage.getItem('hero_animated_session');
    if (animatedBefore) {
      setHasLoadedOnce(true);
    } else {
      sessionStorage.setItem('hero_animated_session', 'true');
    }
  }, []);

  // Smooth easing curve
  const smoothEase = [0.22, 1, 0.36, 1];

  // Helper for staggered animations: immediate if already played or reduced motion
  const getAnimationProps = (delaySec: number) => {
    if (prefersReducedMotion || hasLoadedOnce) {
      return {
        initial: { opacity: 1, y: 0, filter: 'blur(0px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: 18, filter: 'blur(4px)' },
      animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
      transition: { duration: 0.6, delay: delaySec, ease: smoothEase },
    };
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] lg:min-h-[84vh] flex items-center pt-24 pb-14 lg:pt-28 lg:pb-18 overflow-hidden bg-[#07090e]"
    >
      {/* Subtle Matrix Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Subtle Atmospheric Light */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="space-y-6 text-left">
          
          {/* Top Meta: Availability & Location */}
          <motion.div
            {...getAnimationProps(0.05)}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-semibold">Available for Data Analyst Roles</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PORTFOLIO_OWNER.location}</span>
            </div>
          </motion.div>

          {/* 1. Name Heading (Reveals First) */}
          <motion.div {...getAnimationProps(0.15)}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
              {PORTFOLIO_OWNER.name}
            </h1>
          </motion.div>

          {/* 2. Professional Title (Reveals Next) */}
          <motion.div
            {...getAnimationProps(0.35)}
            className="flex flex-wrap items-center gap-2 pt-0.5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              <span>DATA ANALYST</span>
            </div>

            <span className="text-slate-600 font-mono hidden sm:inline">•</span>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span>BUSINESS ANALYST</span>
            </div>
          </motion.div>

          {/* 3. Main Tagline & Honest Professional Positioning */}
          <motion.div {...getAnimationProps(0.55)} className="space-y-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-200 font-display">
              "{PORTFOLIO_OWNER.tagline}"
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-sans">
              {PORTFOLIO_OWNER.heroBio}
            </p>
          </motion.div>

          {/* 4. Action Buttons */}
          <motion.div
            {...getAnimationProps(0.75)}
            className="pt-2 flex flex-wrap items-center gap-3"
          >
            {/* Primary CTA: Explore My Work */}
            <a
              id="hero-explore-work-btn"
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Primary Resume CTA: Download Resume */}
            <button
              id="hero-download-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/90 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>

            {/* Smaller secondary contact links */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800 ml-1">
              <a
                id="hero-github-link"
                href={PORTFOLIO_OWNER.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                id="hero-linkedin-link"
                href={PORTFOLIO_OWNER.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-link"
                href="#contact"
                className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
                title="Contact Danish"
                aria-label="Contact Section"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Core Tech Stack Summary Strip */}
          <motion.div
            {...getAnimationProps(0.95)}
            className="pt-4 border-t border-slate-800/80 max-w-3xl"
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PRIMARY TOOLSET</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {['Python', 'SQL', 'Power BI', 'Excel', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
