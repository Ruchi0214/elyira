import React from 'react';

interface AnalysisCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'cyan' | 'magenta' | 'green';
}

export const AnalysisCard: React.FC<AnalysisCardProps> = ({ 
  title, 
  children,
  icon
}) => {
  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">{icon}</span>}
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wide transition-colors duration-300">
          {title}
        </h3>
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans transition-colors duration-300">
        {children}
      </div>
    </div>
  );
};