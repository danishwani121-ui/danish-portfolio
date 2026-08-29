import React from 'react';
import { SectionReveal } from './SectionReveal';
import {
  Terminal,
  Database,
  BarChart3,
  Cpu,
  LineChart,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillGroups = [
    {
      category: 'DATA ANALYSIS',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      primaryTools: ['Python', 'Pandas', 'NumPy'],
      description: 'Data wrangling, statistical operations, and structured data manipulation.',
    },
    {
      category: 'DATABASE & SQL',
      icon: <Database className="w-4 h-4 text-blue-400" />,
      primaryTools: ['SQL'],
      supportingTools: ['MySQL', 'Joins', 'Aggregations', 'Filtering'],
      description: 'Querying relational databases, schema navigation, and aggregation pipelines.',
    },
    {
      category: 'BI & VISUALIZATION',
      icon: <BarChart3 className="w-4 h-4 text-teal-400" />,
      primaryTools: ['Power BI', 'Excel', 'Matplotlib', 'Seaborn'],
      description: 'Exploratory charting, business metric dashboards, and visual storytelling.',
    },
    {
      category: 'METHODOLOGY & TOOLS',
      icon: <LineChart className="w-4 h-4 text-indigo-400" />,
      primaryTools: ['Data Cleaning', 'EDA', 'Business Insights', 'Git & GitHub', 'Jupyter Notebook'],
      description: 'End-to-end data preparation, exploratory data analysis, and reproducible notebooks.',
    },
  ];

  return (
    <section id="skills" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#090c12]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            SKILLS
          </h2>
        </div>

        {/* Priority Focus Strip: Top 4 Essential Job Skills */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900/90 to-blue-950/60 border border-cyan-500/30 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                CORE TECHNICAL FOCUS
              </div>
              <div className="text-xs text-slate-300 font-sans mt-0.5">
                Primary day-to-day analytics stack for data extraction, analysis, and visualization.
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {['Python', 'SQL', 'Power BI', 'Excel'].map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 text-xs sm:text-sm font-mono font-bold shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#0c101a] border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {group.icon}
                  </div>
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed font-sans">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.primaryTools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-900 text-slate-200 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                  {group.supportingTools && group.supportingTools.map((tool, sIdx) => (
                    <span
                      key={`s-${sIdx}`}
                      className="px-2.5 py-1.5 text-xs font-mono text-slate-400 rounded-lg bg-slate-900/60 border border-slate-800/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </SectionReveal>
    </section>
  );
};
