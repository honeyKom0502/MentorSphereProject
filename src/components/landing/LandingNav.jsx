import React from 'react';
import { Sparkles, Sun, Moon, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const LandingNav = ({ onOpenLogin, onOpenSignup, onEnterDemoApp }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-4 inset-x-4 md:inset-x-8 z-50 max-w-7xl mx-auto">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-3xl glass-nav bg-slate-950/70 light:bg-white/80 border border-slate-800/80 light:border-slate-200 shadow-xl backdrop-blur-2xl">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-orange-500 flex items-center justify-center shadow-md shadow-blue-500/30">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-display font-black text-lg tracking-tight text-slate-100 light:text-slate-900">
              Mentor<span className="text-orange-500">Sphere</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[9px] font-bold text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full uppercase">
              College Network
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300 light:text-slate-700">
          <a href="#the-gap" className="hover:text-orange-400 transition-colors">The Problem</a>
          <a href="#the-network" className="hover:text-orange-400 transition-colors">The Network</a>
          <a href="#channels" className="hover:text-orange-400 transition-colors">Channels</a>
          <a href="#mentors" className="hover:text-orange-400 transition-colors">Mentorship</a>
          <a href="#placements" className="hover:text-orange-400 transition-colors">Placements</a>
          <a href="#privacy" className="hover:text-orange-400 transition-colors">Privacy Shield</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-2xl text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 light:text-slate-600 light:hover:bg-slate-100 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
          </button>

          <button
            onClick={onOpenLogin}
            className="px-3.5 py-2 text-xs font-bold rounded-xl text-slate-200 light:text-slate-800 hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
          >
            Sign In
          </button>

          <button
            onClick={onOpenSignup}
            className="px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
