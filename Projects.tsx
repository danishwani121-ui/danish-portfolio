import React, { useState } from 'react';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';
import { ProjectData } from '../types';
import { ProjectPreviews } from './ProjectPreviews';
import { ProjectModal } from './ProjectModal';
import {
  Github,
  ExternalLink,
  ArrowRight,
  BarChart2,
  FileCode,
  FolderGit2,
  ArrowUpRight,
  HelpCircle,
  Search,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#0a0d14]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>PORTFOLIO CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            PROJECTS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Personal and portfolio data analysis projects demonstrating end-to-end data cleaning, exploratory analysis (EDA), and insight communication across real-world datasets.
          </p>
        </div>

        {/* 3 Main Featured Project Cards formatted as Mini Case Studies */}
        <div className="space-y-8 mb-12">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0c101a] border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 shadow-xl relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
                
                {/* Left Column: Mini Case Study Details */}
                <div className="lg:col-span-7 space-y-4">
                  
                  {/* Header & GitHub Link */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                        CASE STUDY {project.number}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Exploratory Data Analysis
                      </span>
                    </div>

                    <a
                      href={project.githubUrlPlaceholder}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Project Name */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cyan-400/90 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Mini Case Study Grid: Business Question, Analysis, Key Insights, Outcome */}
                  <div className="space-y-3 pt-1">
                    
                    {/* Business Question */}
                    <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Business Question</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {project.objective}
                      </p>
                    </div>

                    {/* What I Analyzed */}
                    <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-1">
                        <Search className="w-3.5 h-3.5" />
                        <span>What I Analyzed</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Key Insights & Outcome */}
                    <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-1">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Key Insights & Business Takeaway</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {project.businessPerspective}
                      </p>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-cyan-500/20 active:scale-98 cursor-pointer"
                    >
                      <FileCode className="w-4 h-4" />
                      <span>View Analysis</span>
                    </button>

                    <a
                      href={project.githubUrlPlaceholder}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

                {/* Right Column: Visual Preview & Metrics */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-3 pt-2 lg:pt-0">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Dataset Visual Preview</span>
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Interactive Plot
                    </span>
                  </div>

                  <ProjectPreviews
                    projectId={project.id}
                    accentColor={project.accentColor}
                  />

                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Source: {project.datasetInfo.source}</span>
                    <span className="text-cyan-400 font-semibold">{project.workflow.length} Analytical Steps</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Additional Analytics Projects */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="max-w-2xl mb-6">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-1">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>MORE DATA WORK</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Additional Analytics Work
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Complementary analysis projects covering business sales KPIs, e-commerce behavior, and student performance distributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ADDITIONAL_PROJECTS.map((proj, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-[#0c101a] border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                      {proj.categoryTag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white font-display mb-1.5">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-800/60 flex items-center justify-between">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </SectionReveal>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
