import React, { useState, useEffect } from 'react';
import { GlitchHeader } from './components/GlitchHeader';
import { TerminalWindow } from './components/TerminalWindow';
import { AnalysisCard } from './components/AnalysisCard';
import { StatsPanel } from './components/StatsPanel';
import { INITIAL_LOGS, ANALYSIS_STEPS } from './constants';
import { Activity, GitMerge, FileText, CheckCircle, BrainCircuit } from 'lucide-react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Simulate a gentle load
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans selection:bg-slate-200 dark:selection:bg-slate-800 selection:text-slate-900 dark:selection:text-slate-100 transition-colors duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <GlitchHeader 
        text="Elyira – Agentic Intelligence Layer" 
        subtext="Latent Work Detection & Autonomous Proposal"
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main className="max-w-7xl mx-auto p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Data */}
        <div className="h-[600px] lg:h-auto flex flex-col gap-4 fade-in" style={{ animationDelay: '100ms' }}>
           <TerminalWindow data={INITIAL_LOGS} title="Observed Activity Stream" />
        </div>

        {/* Right Column: Reasoning */}
        <div className="space-y-6 fade-in" style={{ animationDelay: '200ms' }}>
          
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
             <BrainCircuit size={16} className="text-slate-400 dark:text-slate-500" />
             <span className="text-xs font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider">Reasoning Layer</span>
          </div>

          <AnalysisCard title="Detected Latent Task" icon={<Activity size={16} />}>
            <p className="font-medium text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300">Bi-weekly Status Reporting</p>
            <p>
              A recurring bi-weekly consolidation of development progress, risk signals, and completion metrics is present.
            </p>
          </AnalysisCard>

          <AnalysisCard title="Agent Blueprint Summary" icon={<GitMerge size={16} />}>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs font-mono mt-1">
               <div>
                  <span className="block text-slate-400 dark:text-slate-500 mb-1">AGENT DEFINITION</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium transition-colors duration-300">Atlas_Liaison_v1</span>
               </div>
               <div>
                  <span className="block text-slate-400 dark:text-slate-500 mb-1">CONFIDENCE</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium transition-colors duration-300">0.89</span>
               </div>
               <div className="col-span-2">
                  <span className="block text-slate-400 dark:text-slate-500 mb-1">TRIGGER CONDITION</span>
                  <span className="text-slate-700 dark:text-slate-300 transition-colors duration-300">Bi-weekly Cycle && Telemetry.Available</span>
               </div>
               <div className="col-span-2">
                  <span className="block text-slate-400 dark:text-slate-500 mb-1">PURPOSE</span>
                  <span className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Synthesize development signals into bi-weekly status narratives.</span>
               </div>
            </div>
          </AnalysisCard>

          <AnalysisCard title="Simulated Execution" icon={<FileText size={16} />}>
             <div className="p-4 bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded mb-4 font-mono text-xs text-slate-600 dark:text-slate-400 italic transition-colors duration-300">
                "Atlas status update. Post-release refinement continues with three frontend tickets closed. One medium-severity bug was identified but remains non-critical. Build stability is maintained."
             </div>
             
             <div className="space-y-2">
                {ANALYSIS_STEPS.map((step, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full ${idx === 2 ? 'bg-slate-400 dark:bg-slate-400' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                      <span>{step}</span>
                   </div>
                ))}
             </div>
          </AnalysisCard>

          <AnalysisCard title="Confidence & Safety Assessment" icon={<CheckCircle size={16} />}>
             <div className="flex items-start gap-4">
                <div className="flex-1">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium border border-emerald-200/60 dark:border-emerald-800/50 mb-3 transition-colors duration-300">
                      Autonomous execution appropriate
                   </div>
                   <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                      Pattern consistency is high. The inferred logic (summarising non-critical metrics) presents minimal operational risk. Confidence score (0.89) supports autonomous delegation.
                   </p>
                </div>
             </div>
          </AnalysisCard>

        </div>
      </main>
    </div>
  );
}