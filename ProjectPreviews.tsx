import React, { useState } from 'react';
import { Layers, Sparkles, Filter, Info, Eye, BarChart2, TrendingDown, Film } from 'lucide-react';

interface ProjectPreviewProps {
  projectId: string;
  accentColor: string;
}

export const ProjectPreviews: React.FC<ProjectPreviewProps> = ({ projectId, accentColor }) => {
  const [activeTab, setActiveTab] = useState<'chart1' | 'chart2'>('chart1');

  if (projectId === 'makeup-analysis') {
    // Project 1: Makeup Dataset Analysis
    return (
      <div className="w-full bg-[#0d1117] rounded-xl border border-slate-800/80 p-4 relative overflow-hidden font-sans">
        {/* Subtle top indicator */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800/60">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 font-medium">sns.boxplot & sns.scatterplot (Python)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab('chart1'); }}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                activeTab === 'chart1'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
              }`}
            >
              Price by Category
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab('chart2'); }}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                activeTab === 'chart2'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
              }`}
            >
              Price vs. Rating
            </button>
          </div>
        </div>

        {activeTab === 'chart1' ? (
          <div className="relative h-44 w-full flex flex-col justify-between pt-1">
            {/* Boxplot Representation */}
            <div className="grid grid-cols-5 gap-2 h-36 items-end px-2">
              {/* Category 1 */}
              <div className="flex flex-col items-center h-full justify-end group">
                <div className="relative w-full flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-cyan-500/40" />
                  <div className="w-8 h-16 bg-cyan-500/20 border border-cyan-400/60 rounded-sm relative flex items-center justify-center">
                    <div className="w-full h-0.5 bg-cyan-300" />
                  </div>
                  <div className="w-0.5 h-4 bg-cyan-500/40" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400/80 -mt-1" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-2 truncate w-full text-center">Lipstick</span>
              </div>
              {/* Category 2 */}
              <div className="flex flex-col items-center h-full justify-end group">
                <div className="relative w-full flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-cyan-500/40" />
                  <div className="w-8 h-20 bg-cyan-500/30 border border-cyan-400/80 rounded-sm relative flex items-center justify-center">
                    <div className="w-full h-0.5 bg-cyan-300" />
                  </div>
                  <div className="w-0.5 h-5 bg-cyan-500/40" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-2 truncate w-full text-center">Foundation</span>
              </div>
              {/* Category 3 */}
              <div className="flex flex-col items-center h-full justify-end group">
                <div className="relative w-full flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-cyan-500/40" />
                  <div className="w-8 h-12 bg-cyan-500/20 border border-cyan-400/60 rounded-sm relative flex items-center justify-center">
                    <div className="w-full h-0.5 bg-cyan-300" />
                  </div>
                  <div className="w-0.5 h-3 bg-cyan-500/40" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-2 truncate w-full text-center">Mascara</span>
              </div>
              {/* Category 4 */}
              <div className="flex flex-col items-center h-full justify-end group">
                <div className="relative w-full flex flex-col items-center">
                  <div className="w-0.5 h-10 bg-cyan-500/40" />
                  <div className="w-8 h-24 bg-cyan-500/35 border border-cyan-400 rounded-sm relative flex items-center justify-center">
                    <div className="w-full h-0.5 bg-cyan-300" />
                  </div>
                  <div className="w-0.5 h-6 bg-cyan-500/40" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400/80 -mt-2" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-2 truncate w-full text-center">Skincare</span>
              </div>
              {/* Category 5 */}
              <div className="flex flex-col items-center h-full justify-end group">
                <div className="relative w-full flex flex-col items-center">
                  <div className="w-0.5 h-5 bg-cyan-500/40" />
                  <div className="w-8 h-14 bg-cyan-500/20 border border-cyan-400/60 rounded-sm relative flex items-center justify-center">
                    <div className="w-full h-0.5 bg-cyan-300" />
                  </div>
                  <div className="w-0.5 h-4 bg-cyan-500/40" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-2 truncate w-full text-center">Eyeshadow</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative h-44 w-full flex flex-col justify-between pt-1">
            {/* Scatter Plot */}
            <svg className="w-full h-36 overflow-visible" viewBox="0 0 300 120">
              <line x1="20" y1="105" x2="290" y2="105" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="20" y1="60" x2="290" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="20" y1="15" x2="290" y2="15" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Data points */}
              {[
                { x: 40, y: 85, r: 3.5, op: 0.6 },
                { x: 65, y: 75, r: 4, op: 0.8 },
                { x: 90, y: 70, r: 3.5, op: 0.7 },
                { x: 110, y: 55, r: 4.5, op: 0.9 },
                { x: 130, y: 50, r: 3.5, op: 0.6 },
                { x: 155, y: 45, r: 5, op: 0.9 },
                { x: 180, y: 40, r: 4, op: 0.75 },
                { x: 210, y: 35, r: 4.5, op: 0.85 },
                { x: 240, y: 30, r: 3.5, op: 0.7 },
                { x: 270, y: 22, r: 4, op: 0.8 },
                { x: 80, y: 95, r: 3, op: 0.5 },
                { x: 140, y: 65, r: 3.5, op: 0.6 },
                { x: 195, y: 55, r: 4, op: 0.7 },
                { x: 225, y: 48, r: 3.5, op: 0.65 },
                { x: 260, y: 38, r: 4.5, op: 0.75 },
              ].map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r={pt.r}
                  fill="#38bdf8"
                  fillOpacity={pt.op}
                  className="transition-all hover:r-6 hover:fill-white cursor-pointer"
                />
              ))}
              {/* Trend line */}
              <path
                d="M 35 90 Q 150 55 275 25"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-slate-500 px-2">
              <span>Price Range ($) →</span>
              <span>Customer Rating (1 - 5★) ↑</span>
            </div>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/90 rounded-md px-2.5 py-1.5 border border-slate-800">
          <span className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-slate-300">Observation:</span> Category price dispersion analyzed
          </span>
          <span className="text-cyan-400/80 font-mono text-[10px]">Python • Seaborn</span>
        </div>
      </div>
    );
  }

  if (projectId === 'toyota-pricing') {
    // Project 2: Toyota Vehicle Pricing Analysis
    return (
      <div className="w-full bg-[#0d1117] rounded-xl border border-slate-800/80 p-4 relative overflow-hidden font-sans">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800/60">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono text-blue-300 font-medium">sns.regplot & sns.heatmap (Python)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab('chart1'); }}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                activeTab === 'chart1'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-medium'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
              }`}
            >
              Mileage vs Price
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab('chart2'); }}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                activeTab === 'chart2'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-medium'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
              }`}
            >
              Fuel Type Spread
            </button>
          </div>
        </div>

        {activeTab === 'chart1' ? (
          <div className="relative h-44 w-full flex flex-col justify-between pt-1">
            {/* Mileage vs Price Scatter & Depreciation Curve */}
            <svg className="w-full h-36 overflow-visible" viewBox="0 0 300 120">
              <line x1="20" y1="105" x2="290" y2="105" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="20" y1="60" x2="290" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="20" y1="15" x2="290" y2="15" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Scatter Points showing inverse correlation */}
              {[
                { x: 30, y: 22, r: 4, color: '#60a5fa' },
                { x: 45, y: 28, r: 3.5, color: '#60a5fa' },
                { x: 60, y: 35, r: 4, color: '#60a5fa' },
                { x: 80, y: 42, r: 4.5, color: '#60a5fa' },
                { x: 100, y: 52, r: 3.5, color: '#60a5fa' },
                { x: 125, y: 58, r: 4, color: '#60a5fa' },
                { x: 145, y: 68, r: 3.5, color: '#60a5fa' },
                { x: 170, y: 74, r: 4.5, color: '#60a5fa' },
                { x: 200, y: 82, r: 4, color: '#60a5fa' },
                { x: 230, y: 88, r: 3.5, color: '#60a5fa' },
                { x: 265, y: 96, r: 4, color: '#60a5fa' },
                // Outlier
                { x: 180, y: 30, r: 5, color: '#38bdf8' }, // High mileage but high price outlier
              ].map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r={pt.r}
                  fill={pt.color}
                  fillOpacity="0.8"
                />
              ))}

              {/* Depreciation regression curve */}
              <path
                d="M 25 20 Q 130 55 275 100"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />
              {/* Outlier label */}
              <text x="190" y="28" fill="#93c5fd" fontSize="8" fontFamily="monospace">Outlier Listing</text>
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-slate-500 px-2">
              <span>Mileage (Miles) →</span>
              <span>Resale Price ($) ↑</span>
            </div>
          </div>
        ) : (
          <div className="relative h-44 w-full flex flex-col justify-between pt-1">
            {/* Violin / bar comparison across Hybrid, Petrol, Diesel */}
            <div className="grid grid-cols-3 gap-3 h-36 items-end px-4">
              <div className="flex flex-col items-center h-full justify-end">
                <div className="w-12 h-28 bg-blue-500/30 border border-blue-400 rounded-t-md relative flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-blue-200">Hybrid</span>
                  <div className="w-full h-0.5 bg-blue-300 my-1" />
                  <span className="text-[9px] font-mono text-blue-300/80">Higher Avg</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-2">Hybrid</span>
              </div>
              <div className="flex flex-col items-center h-full justify-end">
                <div className="w-12 h-20 bg-blue-500/20 border border-blue-400/60 rounded-t-md relative flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-blue-200">Petrol</span>
                  <div className="w-full h-0.5 bg-blue-300 my-1" />
                  <span className="text-[9px] font-mono text-blue-300/80">Standard</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-2">Petrol</span>
              </div>
              <div className="flex flex-col items-center h-full justify-end">
                <div className="w-12 h-16 bg-blue-500/15 border border-blue-400/40 rounded-t-md relative flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-blue-200">Diesel</span>
                  <div className="w-full h-0.5 bg-blue-300 my-1" />
                  <span className="text-[9px] font-mono text-blue-300/80">High-km</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-2">Diesel</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/90 rounded-md px-2.5 py-1.5 border border-slate-800">
          <span className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-mono text-slate-300">Method:</span> Exploratory correlation & IQR outlier detection
          </span>
          <span className="text-blue-400/80 font-mono text-[10px]">Python • Matplotlib</span>
        </div>
      </div>
    );
  }

  // Project 3: Netflix Content Analysis
  return (
    <div className="w-full bg-[#0d1117] rounded-xl border border-slate-800/80 p-4 relative overflow-hidden font-sans">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs font-mono text-rose-300 font-medium">plt.plot & sns.barplot (Python)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => { e.stopPropagation(); setActiveTab('chart1'); }}
            className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
              activeTab === 'chart1'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-medium'
                : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
            }`}
          >
            Movies vs TV Shows
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActiveTab('chart2'); }}
            className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
              activeTab === 'chart2'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-medium'
                : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
            }`}
          >
            Top Genres
          </button>
        </div>
      </div>

      {activeTab === 'chart1' ? (
        <div className="relative h-44 w-full flex flex-col justify-between pt-1">
          {/* Trend over time */}
          <svg className="w-full h-36 overflow-visible" viewBox="0 0 300 120">
            <line x1="20" y1="105" x2="290" y2="105" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="60" x2="290" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="15" x2="290" y2="15" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

            {/* Movies Trend Line (Red/Rose) */}
            <path
              d="M 25 95 Q 100 85 160 55 T 280 20"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="2.5"
            />
            {/* TV Shows Trend Line (Cyan/Slate) */}
            <path
              d="M 25 102 Q 120 95 180 65 T 280 40"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            
            <circle cx="280" cy="20" r="4" fill="#f43f5e" />
            <circle cx="280" cy="40" r="4" fill="#38bdf8" />
          </svg>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 px-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-rose-400"><span className="w-2 h-2 rounded-full bg-rose-500" /> Movies</span>
              <span className="flex items-center gap-1 text-cyan-400"><span className="w-2 h-2 rounded-full bg-cyan-400" /> TV Shows</span>
            </div>
            <span>Release Timeline →</span>
          </div>
        </div>
      ) : (
        <div className="relative h-44 w-full flex flex-col justify-between pt-1">
          {/* Top Genres Horizontal Bars */}
          <div className="space-y-2 py-1 px-1">
            {[
              { genre: 'Dramas & Comedies', width: '85%', color: 'bg-rose-500' },
              { genre: 'International Movies', width: '72%', color: 'bg-rose-500/80' },
              { genre: 'Action & Adventure', width: '58%', color: 'bg-rose-500/70' },
              { genre: 'Documentaries', width: '45%', color: 'bg-rose-500/60' },
              { genre: 'TV Mysteries / Crime', width: '38%', color: 'bg-rose-500/50' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] font-mono">
                <span className="w-32 text-right text-slate-400 truncate text-[10px]">{item.genre}</span>
                <div className="flex-1 bg-slate-800/80 rounded-full h-3.5 overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/90 rounded-md px-2.5 py-1.5 border border-slate-800">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-rose-400" />
          <span className="font-mono text-slate-300">Insight:</span> Content restructuring & catalog volume trends
        </span>
        <span className="text-rose-400/80 font-mono text-[10px]">Python • Pandas</span>
      </div>
    </div>
  );
};
