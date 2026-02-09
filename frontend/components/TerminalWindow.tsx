import React from 'react';

interface DataViewerProps {
  data: string;
  title?: string;
}

export const TerminalWindow: React.FC<DataViewerProps> = ({ data, title = "Observed Activity" }) => {
  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between transition-colors duration-300">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest transition-colors duration-300">{title}</span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300"></div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-5 bg-slate-50/30 dark:bg-slate-900/50 transition-colors duration-300">
        <pre className="font-mono text-xs leading-loose text-slate-600 dark:text-slate-400 whitespace-pre-wrap transition-colors duration-300">
          {data}
        </pre>
      </div>
    </div>
  );
};