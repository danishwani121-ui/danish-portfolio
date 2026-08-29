import React, { useState } from 'react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { SectionReveal } from './SectionReveal';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileText,
  Copy,
  Check,
  Send,
  ExternalLink,
} from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_OWNER.email}?subject=${encodeURIComponent(
      formSubject || 'Data Analyst Role Inquiry for Danish Ahmad Wani'
    )}&body=${encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 relative border-t border-slate-800/80 bg-[#0a0d14]">
      <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Block */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            CONTACT
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            "I'm currently looking for opportunities to start my career as a Data Analyst or Business Analyst and apply my analytical and business skills in a real-world environment."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0c101a] border border-slate-800 shadow-lg space-y-5">
              <h3 className="text-lg font-bold text-white font-display">
                Contact Information
              </h3>

              <div className="space-y-3 text-sm font-sans">
                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Location</div>
                    <div className="text-white font-medium mt-0.5 text-xs sm:text-sm">{PORTFOLIO_OWNER.location}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400">Email</div>
                      <a
                        href={`mailto:${PORTFOLIO_OWNER.email}`}
                        className="text-white hover:text-cyan-300 font-medium mt-0.5 block break-all text-xs sm:text-sm"
                      >
                        {PORTFOLIO_OWNER.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PORTFOLIO_OWNER.email, 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400">Phone</div>
                      <a
                        href={`tel:${PORTFOLIO_OWNER.phone.replace(/\s+/g, '')}`}
                        className="text-white hover:text-cyan-300 font-medium mt-0.5 block text-xs sm:text-sm"
                      >
                        {PORTFOLIO_OWNER.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PORTFOLIO_OWNER.phone, 'phone')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 shrink-0 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400">LinkedIn</div>
                      <a
                        href={PORTFOLIO_OWNER.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-cyan-300 font-medium mt-0.5 block break-all text-xs"
                      >
                        {PORTFOLIO_OWNER.linkedinDisplay}
                      </a>
                    </div>
                  </div>
                  <a
                    href={PORTFOLIO_OWNER.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400">GitHub</div>
                      <a
                        href={PORTFOLIO_OWNER.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-cyan-300 font-medium mt-0.5 block text-xs"
                      >
                        {PORTFOLIO_OWNER.githubDisplay}
                      </a>
                    </div>
                  </div>
                  <a
                    href={PORTFOLIO_OWNER.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct Action Grid */}
              <div className="pt-2 grid grid-cols-2 gap-2.5">
                <a
                  href={`mailto:${PORTFOLIO_OWNER.email}`}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>

                <a
                  href={PORTFOLIO_OWNER.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PORTFOLIO_OWNER.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c101a] border border-slate-800 shadow-lg space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Have an entry-level role, project inquiry, or interview invitation? Send a message directly to Danish.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Your Name / Recruiter Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Data Analyst Opportunity"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Danish, we reviewed your analytics portfolio..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {submitted && (
                  <p className="text-xs font-mono text-center text-cyan-300 pt-1">
                    Email client launched! You can also reach Danish directly at {PORTFOLIO_OWNER.email}
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </SectionReveal>
    </section>
  );
};
