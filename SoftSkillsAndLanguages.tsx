import React from 'react';
import { SOFT_SKILLS, LANGUAGES } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';
import {
  Brain,
  Wrench,
  MessageSquare,
  Users,
  Smile,
  Clock,
  Shuffle,
  Zap,
} from 'lucide-react';

export const SoftSkillsAndLanguages: React.FC = () => {
  const getSoftSkillIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Wrench className="w-4 h-4 text-blue-400" />;
      case 2:
        return <MessageSquare className="w-4 h-4 text-sky-400" />;
      case 3:
        return <Users className="w-4 h-4 text-teal-400" />;
      case 4:
        return <Smile className="w-4 h-4 text-indigo-400" />;
      case 5:
        return <Clock className="w-4 h-4 text-emerald-400" />;
      case 6:
        return <Shuffle className="w-4 h-4 text-amber-400" />;
      case 7:
        return <Zap className="w-4 h-4 text-cyan-300" />;
      default:
        return <Brain className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills-soft" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#090b11]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Soft Skills */}
          <div className="lg:col-span-8 space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>COLLABORATION & COMMUNICATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                SOFT SKILLS
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Collaborative, communication, and problem-structuring traits supporting effective analytics delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOFT_SKILLS.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0c101a] border border-slate-800 hover:border-cyan-500/30 transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
                    {getSoftSkillIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Languages */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>MULTILINGUAL FLUENCY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                LANGUAGES
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fluency facilitating clear teamwork across diverse regional and international stakeholders.
              </p>
            </div>

            <div className="space-y-2.5">
              {LANGUAGES.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0c101a] border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center justify-center font-mono font-bold text-xs">
                      {lang.flag}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">
                        {lang.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        {lang.level}
                      </p>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </SectionReveal>
    </section>
  );
};
