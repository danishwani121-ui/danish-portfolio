import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorFollower } from './components/CursorFollower';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Workflow } from './components/Workflow';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { SoftSkillsAndLanguages } from './components/SoftSkillsAndLanguages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b10] text-[#e2e8f0] font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Subtle Trailing Cursor Follower */}
      <CursorFollower />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Experience />
        <Education />
        <Certifications />
        <SoftSkillsAndLanguages />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
