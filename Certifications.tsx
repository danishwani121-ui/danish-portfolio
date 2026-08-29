import React from 'react';
import { CERTIFICATIONS_LIST } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';
import { Award, BarChart2, Code, Database, CheckCircle, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  const getCertIcon = (name: string) => {
    switch (name) {
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#0a0d14]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            CERTIFICATIONS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Official accredited credentials from IBM & Cognitive Class in Python data visualization, data science foundations, and relational SQL databases.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#0c101a] border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {getCertIcon(cert.iconName)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span>{cert.badgeCode}</span>
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-base sm:text-lg font-bold text-white font-display mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 font-mono mb-2">
                  {cert.issuer}
                </p>

                {/* Issue Date */}
                {cert.issueDate && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-3">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.issueDate}</span>
                  </div>
                )}

                {/* Skills Covered */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Verified Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-400">IBM Network</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </SectionReveal>
    </section>
  );
};
