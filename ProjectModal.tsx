import React from 'react';
import { ProjectData } from '../types';
import {
  X,
  Github,
  ExternalLink,
  Code2,
  Database,
  CheckCircle2,
  Lightbulb,
  Briefcase,
  FileCode,
  ArrowUpRight,
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const githubUrl = project.githubUrlPlaceholder || 'https://github.com/danishwani121-ui';

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-3xl bg-[#0d121d] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#0e1422]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              PROJECT {project.number}
            </span>
            <div>
              <h2 className="text-xl font-bold text-white font-display tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {project.tagline}
              </p>
            </div>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-7 space-y-6 text-slate-300 text-sm leading-relaxed">
          {/* GitHub & Code Links Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">GitHub Repository & Code</div>
                <div className="text-xs text-slate-400 font-mono">
                  Explore full Jupyter notebooks, scripts & dataset analysis
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                id="modal-github-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="modal-notebook-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
              >
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>Notebook</span>
              </a>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <Database className="w-3.5 h-3.5" />
              <span>Project Summary & Objectives</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              {project.fullDescription}
            </p>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
              <span className="text-slate-400 font-semibold">Objective: </span>
              {project.objective}
            </div>
          </div>

          {/* Key Insights & Findings */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Key Analytical Insights</span>
            </h3>
            <div className="space-y-2.5">
              {project.keyInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 text-slate-200 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Takeaways */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Business Value & Commercial Takeaways</span>
            </h3>
            <div className="space-y-2">
              {project.businessTakeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300 leading-relaxed"
                >
                  {takeaway}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technologies & Tools</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 text-cyan-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0e1422] border-t border-slate-800 flex items-center justify-between">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>github.com/danishwani121-ui</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
