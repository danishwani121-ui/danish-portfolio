import React from 'react';
import { SectionReveal } from './SectionReveal';
import { GraduationCap, BarChart3, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#090b12]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>FOUNDATION & TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            EDUCATION
          </h2>
        </div>

        {/* 2 Clean Compact Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: BBA */}
          <div className="p-6 rounded-2xl bg-[#0c101a] border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                      BBA
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 font-sans">
                      Bachelor of Business Administration
                    </div>
                    <div className="text-xs text-slate-400 font-sans mt-0.5">
                      Desh Bhagat University, Punjab
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 self-start">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2020 – 2024</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                Business foundation covering business management, finance, operations, marketing, and organizational understanding.
              </p>
            </div>

            {/* Core Competencies list */}
            <div className="pt-3 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5">
                {['Business Management', 'Finance Principles', 'Operations', 'Marketing Strategy', 'Organizational Understanding'].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Data Analytics */}
          <div className="p-6 rounded-2xl bg-[#0c101a] border border-slate-800 hover:border-blue-500/40 transition-all duration-200 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0 mt-0.5">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
                      Professional Training
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                      DATA ANALYTICS
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 font-mono">
                      Python · SQL · Excel · Power BI
                    </div>
                    <div className="text-xs text-slate-400 font-sans mt-0.5">
                      ILS Srinagar
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-blue-300 self-start">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2025 – Present</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                Hands-on practical training in data cleaning, exploratory data analysis (EDA), visualization, and extracting actionable business insights.
              </p>
            </div>

            {/* Core analytics list */}
            <div className="pt-3 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5">
                {['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Data Visualization', 'Business Insights', 'SQL Querying', 'Dashboards'].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </SectionReveal>
    </section>
  );
};
