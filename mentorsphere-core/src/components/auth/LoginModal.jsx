import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, ArrowRight, Sparkles, Shield, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';

export const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const { login, switchDemoRole } = useAuth();
  const { showToast } = useNotifications();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please enter both email and password', 'warning');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      login(email, password);
      setIsLoading(false);
      showToast('Welcome back to MentorSphere!', 'success');
      onClose();
    }, 400);
  };

  const handleDemoLogin = (role) => {
    switchDemoRole(role);
    showToast(`Logged in as ${role.toUpperCase()} demo user`, 'success');
    onClose();
  };

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md rounded-3xl glass-panel-elevated bg-slate-950/95 light:bg-white/95 border border-slate-800 light:border-slate-200 p-6 md:p-8 shadow-2xl overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-orange-500 text-white shadow-lg shadow-blue-500/30 mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-display font-black text-2xl text-slate-100 light:text-slate-900 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Enter your college credentials to access your peer network.
            </p>
          </div>

          {/* Quick Demo Access Buttons */}
          <div className="mb-5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 light:bg-slate-50 light:border-slate-200">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">
              ⚡ Instant 1-Click Demo Login:
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('junior')}
                className="px-2.5 py-2 text-xs font-semibold rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 hover:bg-blue-500/25 transition-all text-center"
              >
                👶 Junior
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('senior')}
                className="px-2.5 py-2 text-xs font-semibold rounded-xl bg-orange-500/15 text-orange-400 border border-orange-500/30 hover:bg-orange-500/25 transition-all text-center"
              >
                🎓 Senior
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('alumni')}
                className="px-2.5 py-2 text-xs font-semibold rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30 hover:bg-purple-500/25 transition-all text-center"
              >
                💼 Alumni
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-800 light:border-slate-200 w-full" />
            <span className="bg-slate-950 light:bg-white px-3 text-[11px] font-semibold text-slate-500 absolute">
              OR LOGIN WITH EMAIL
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                College Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@college.edu"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 light:bg-white light:border-slate-300 light:text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 light:bg-white light:border-slate-300 light:text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              {isLoading ? (
                <span>Entering Guild...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Signup */}
          <div className="mt-6 text-center text-xs text-slate-400">
            <span>New student joining MentorSphere? </span>
            <button
              onClick={() => {
                onClose();
                onSwitchToSignup();
              }}
              className="font-bold text-orange-400 hover:text-orange-300 underline underline-offset-4"
            >
              Create Account
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
