import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  text: string;
  subtext?: string;
  className?: string;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export const GlitchHeader: React.FC<HeaderProps> = ({ 
  text, 
  subtext, 
  className = '', 
  isDarkMode = false,
  toggleTheme 
}) => {
  return (
    <header className={`pt-12 pb-8 px-6 md:px-8 border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-10 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium tracking-tight text-slate-900 dark:text-slate-100 transition-colors duration-300">
            {text}
          </h1>
          {subtext && (
            <p className="text-sm text-slate-500 dark:text-slate-400 font-normal tracking-wide transition-colors duration-300">
              {subtext}
            </p>
          )}
        </div>
        {toggleTheme && (
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </header>
  );
};