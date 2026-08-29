import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';
import {
  Search,
  Sparkles,
  Compass,
  PieChart,
  Brain,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const Workflow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-4 h-4 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-blue-400" />;
      case 'PieChart':
        return <PieChart className="w-4 h-4 text-teal-400" />;
      case 'Brain':
        return <Brain className="w-4 h-4 text-indigo-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-4 h-4 text-cyan-300" />;
      default:
        return <Search className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="workflow" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#090b11]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ANALYTICAL METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            HOW I ANALYZE DATA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            A structured, reproducible six-stage analytical workflow that bridges raw dataset ambiguity to clear business decision-making.
          </p>
        </div>

        {/* Desktop Horizontal Workflow Cards */}
        <div className="hidden lg:block relative mb-6">
          <div className="grid grid-cols-6 gap-3.5 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0e1626] border-cyan-500/80 shadow-md shadow-cyan-500/10'
                      : 'bg-[#0c101a] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                        {step.step}
                      </span>
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                        {getStepIcon(step.icon)}
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-white font-display mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.summary}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Phase {idx + 1}</span>
                    <span className={isSelected ? 'text-cyan-400 font-bold' : ''}>
                      {isSelected ? 'Active' : 'Inspect'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Box (Desktop) */}
        <div className="hidden lg:block p-5 rounded-2xl bg-[#0c101a] border border-cyan-500/30 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              {getStepIcon(WORKFLOW_STEPS[activeStepIndex].icon)}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400">
                  STEP {WORKFLOW_STEPS[activeStepIndex].step}:
                </span>
                <h4 className="text-base font-bold text-white font-display">
                  {WORKFLOW_STEPS[activeStepIndex].title} — {WORKFLOW_STEPS[activeStepIndex].summary}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {WORKFLOW_STEPS[activeStepIndex].detail}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Workflow List */}
        <div className="lg:hidden space-y-3">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-xl bg-[#0c101a] border border-slate-800 flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs text-cyan-300 shrink-0 mt-0.5">
                {step.step}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-cyan-400 font-mono">
                  {step.summary}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-0.5">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </SectionReveal>
    </section>
  );
};
