import React from 'react';
import { PORTFOLIO_OWNER, EDUCATION_LIST, CERTIFICATIONS_LIST, FEATURED_PROJECTS, SKILL_CATEGORIES, BUSINESS_EXPERIENCE } from '../data/portfolioData';
import { generateResumePdf } from '../utils/generateResumePdf';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800 sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>RESUME PREVIEW & EXPORT</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={generateResumePdf}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-200 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 rounded-lg transition-colors shadow-sm cursor-pointer"
              title="Download PDF document"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-950 text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          <div className="max-w-3xl mx-auto space-y-6 bg-[#0c1017] p-6 sm:p-8 rounded-xl border border-slate-800/80 print:border-none print:bg-white print:p-0 print:text-black">
            {/* Header */}
            <div className="border-b border-slate-800 print:border-black/20 pb-5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-black font-display">
                {PORTFOLIO_OWNER.name}
              </h1>
              <p className="text-sm font-semibold text-cyan-400 print:text-slate-800 mt-1 uppercase tracking-wide">
                {PORTFOLIO_OWNER.title}
              </p>
              <div className="flex flex-wrap gap-y-1.5 gap-x-4 text-xs text-slate-400 print:text-slate-700 mt-3 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {PORTFOLIO_OWNER.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="hover:underline">{PORTFOLIO_OWNER.email}</a>
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {PORTFOLIO_OWNER.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                  {PORTFOLIO_OWNER.linkedinDisplay}
                </span>
                <span className="flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  {PORTFOLIO_OWNER.githubDisplay}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
                Professional Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                Entry-level Data Analyst with a Bachelor of Business Administration (BBA) background and hands-on experience in Python-based data analysis. Proficient in transforming messy datasets into structured, interpretable tables and utilizing exploratory data analysis (EDA) and visualizations to extract actionable business insights.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs">
                <div>
                  <span className="font-semibold text-white print:text-black">Programming & Data Analysis:</span>{' '}
                  <span className="text-slate-300 print:text-slate-800">Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook</span>
                </div>
                <div>
                  <span className="font-semibold text-white print:text-black">Databases & Querying:</span>{' '}
                  <span className="text-slate-300 print:text-slate-800">SQL, MySQL (Querying, Aggregations, Filtering, Joins, Window Functions)</span>
                </div>
                <div>
                  <span className="font-semibold text-white print:text-black">BI & Reporting:</span>{' '}
                  <span className="text-slate-300 print:text-slate-800">Power BI, Microsoft Excel (Dashboards, KPI Analysis, Pivot Tables)</span>
                </div>
                <div>
                  <span className="font-semibold text-white print:text-black">Analytics & Methodology:</span>{' '}
                  <span className="text-slate-300 print:text-slate-800">Data Cleaning, Data Preprocessing, Exploratory Data Analysis (EDA), Statistical Analysis, Trend & Pattern Analysis, Business Insights</span>
                </div>
                <div>
                  <span className="font-semibold text-white print:text-black">Tools & Environments:</span>{' '}
                  <span className="text-slate-300 print:text-slate-800">Git, GitHub, VS Code, Google Colab</span>
                </div>
              </div>
            </div>

            {/* Featured Python Data Analysis Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-3">
                Featured Python Data Analysis Projects
              </h2>
              <div className="space-y-4">
                {FEATURED_PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1 text-xs">
                    <div className="flex flex-wrap items-baseline justify-between">
                      <span className="font-bold text-white print:text-black text-sm">{proj.title}</span>
                      <span className="font-mono text-cyan-400 print:text-slate-700 text-[11px]">
                        Python • Pandas • NumPy • Matplotlib • Seaborn
                      </span>
                    </div>
                    <p className="text-slate-300 print:text-slate-800 leading-relaxed">{proj.fullDescription}</p>
                    <p className="text-slate-400 print:text-slate-700 italic">
                      <strong className="text-slate-300 print:text-black not-italic font-semibold">Business Takeaway:</strong> {proj.businessPerspective}
                    </p>
                    <div className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                      Workflow: {proj.workflow.join(' → ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Digital Product Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
                AI & Digital Product Experience
              </h2>
              <div className="text-xs space-y-1">
                <div className="flex justify-between font-bold text-white print:text-black text-sm">
                  <span>{BUSINESS_EXPERIENCE.projectTitle}</span>
                  <a
                    href={BUSINESS_EXPERIENCE.appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-cyan-400 hover:underline print:text-black font-normal text-xs"
                  >
                    {BUSINESS_EXPERIENCE.appUrlDisplay}
                  </a>
                </div>
                <p className="text-slate-300 print:text-slate-800 leading-relaxed">
                  {BUSINESS_EXPERIENCE.description}
                </p>
                <div className="text-[11px] text-slate-400 print:text-slate-700">
                  <strong className="text-slate-300 print:text-black font-semibold">Core Competencies:</strong> AI & Product Thinking, Agriculture Data Advisory, Regional Customer Understanding, Digital Experience Design, Applied Problem Solving.
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-3 text-xs">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between font-semibold text-white print:text-black">
                      <span>{edu.degree}</span>
                      <span className="font-mono text-slate-400">{edu.period}</span>
                    </div>
                    <div className="text-slate-400 print:text-slate-700">{edu.institution}</div>
                    {edu.coursework && (
                      <div className="text-[11px] text-slate-400 print:text-slate-700 mt-1">
                        <span className="font-semibold text-slate-300 print:text-black">Key Coursework:</span> {edu.coursework.join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {CERTIFICATIONS_LIST.map((cert, idx) => (
                  <div key={idx} className="p-2 rounded bg-slate-900 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                    <div className="font-semibold text-white print:text-black">{cert.title}</div>
                    <div className="text-[11px] text-slate-400 print:text-slate-700">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
