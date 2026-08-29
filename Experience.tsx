import React from 'react';
import { BUSINESS_EXPERIENCE } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';
import {
  Users,
  Layout,
  MessageSquare,
  Lightbulb,
  CheckCircle2,
  Info,
  Sparkles,
  Bot,
  ArrowUpRight,
} from 'lucide-react';

export const Experience: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Bot className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Users className="w-4 h-4 text-blue-400" />;
      case 2:
        return <Layout className="w-4 h-4 text-teal-400" />;
      case 3:
        return <MessageSquare className="w-4 h-4 text-sky-400" />;
      case 4:
        return <Lightbulb className="w-4 h-4 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#0a0d14]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>AI PRODUCT & APPLIED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            EXPERIENCE
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Applied project combining artificial intelligence, regional agriculture datasets, user workflow design, and problem-solving.
          </p>
        </div>

        {/* Orchard AI Kashmir Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0c101a] border border-slate-800 shadow-xl relative overflow-hidden group">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/80 relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  LIVE AI PROJECT
                </span>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                  Kashmir Horticulture
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {BUSINESS_EXPERIENCE.projectTitle}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                {BUSINESS_EXPERIENCE.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
              <a
                id="launch-orchard-ai-app-btn"
                href={BUSINESS_EXPERIENCE.appUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-emerald-500/20 active:scale-98"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Live App</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] font-mono text-slate-400">
                {BUSINESS_EXPERIENCE.appUrlDisplay}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="py-5 relative z-10">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              "{BUSINESS_EXPERIENCE.description}"
            </p>
          </div>

          {/* Competency Pillars Demonstrated */}
          <div className="pt-1 relative z-10">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Key Competencies Demonstrated
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {BUSINESS_EXPERIENCE.competencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-1"
                >
                  <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm font-display">
                    {getIcon(idx)}
                    <span>{comp.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Context Note */}
          <div className="mt-6 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs font-mono text-slate-400 relative z-10">
            <Info className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
            <span>
              <strong className="text-slate-200">Context:</strong> {BUSINESS_EXPERIENCE.clarification}
            </span>
          </div>

        </div>

      </SectionReveal>
    </section>
  );
};
