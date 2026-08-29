import React from 'react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';
import {
  Briefcase,
  Database,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

export const About: React.FC = () => {
  const pillarCards = [
    {
      title: 'Business Thinking',
      description: 'Connecting analysis with real business questions and decisions.',
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      colorClass: 'border-cyan-500/30 group-hover:border-cyan-500/50',
    },
    {
      title: 'Data Analysis',
      description: 'Cleaning, exploring, analyzing, and interpreting data.',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      colorClass: 'border-blue-500/30 group-hover:border-blue-500/50',
    },
    {
      title: 'Data Visualization',
      description: 'Communicating insights through clear dashboards and visual storytelling.',
      icon: <BarChart3 className="w-5 h-5 text-teal-400" />,
      colorClass: 'border-teal-500/30 group-hover:border-teal-500/50',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#0a0d14]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>BACKGROUND & MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            ABOUT ME
          </h2>
        </div>

        {/* Narrative */}
        <div className="max-w-4xl space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-sans mb-10">
          <p>{PORTFOLIO_OWNER.aboutBioP1}</p>
          <p>{PORTFOLIO_OWNER.aboutBioP2}</p>
        </div>

        {/* 3 Clean Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillarCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl bg-[#0c101a] border ${card.colorClass} transition-all duration-200 shadow-md group hover:-translate-y-0.5`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </SectionReveal>
    </section>
  );
};
