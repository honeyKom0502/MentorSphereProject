import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  Sparkles, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useNotifications } from '../../context/NotificationContext';
import { AnimeAvatar } from '../../data/animeAvatars';
import { RoleBadge } from '../common/Badge';
import { NotificationsDrawer } from './NotificationsDrawer';

export const TopBar = ({ activeTab, setIsMobileOpen, searchQuery, setSearchQuery }) => {
  const { user, switchDemoRole } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { unreadCount } = useNotifications();
  const [isNotifsOpen, setIsNotifsOpen] = useState(false);

  const getTabTitle = (tab) => {
    switch (tab) {
      case 'dashboard': return 'Command Hub';
      case 'channels': return 'Topic Channels';
      case 'discussions': return 'Discussions & Knowledge';
      case 'mentors': return 'Senior & Alumni Mentors';
      case 'placements': return 'Placement Command Center';
      case 'profile': return 'Student Cyber Identity';
      case 'notifications': return 'Notifications';
      default: return 'MentorSphere';
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full px-4 md:px-8 py-3.5 backdrop-blur-xl bg-slate-950/60 light:bg-slate-50/80 border-b border-slate-800/60 light:border-slate-200">
      <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left: Mobile Menu + View Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 light:hover:bg-slate-200 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="font-display font-black text-lg md:text-xl tracking-tight text-slate-100 light:text-slate-900 flex items-center gap-2">
              <span>{getTabTitle(activeTab)}</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            </h1>
            <p className="text-xs text-slate-400 hidden sm:block">
              {activeTab === 'dashboard' ? 'Real-time college network stream' : 'Peer-to-peer student ecosystem'}
            </p>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery || ''}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search channels, mentors, DSA topics, companies..."
              className="w-full pl-9 pr-4 py-2 rounded-2xl text-xs font-medium bg-slate-900/60 border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-200 placeholder-slate-500 light:bg-white light:border-slate-300 light:text-slate-900 shadow-inner"
            />
          </div>
        </div>

        {/* Right: Quick Role Switcher + Notifications + Theme */}
        <div className="flex items-center gap-2.5">
          {/* Quick Demo Switcher on Header */}
          <div className="hidden sm:flex items-center bg-slate-900/80 border border-slate-800 rounded-2xl p-1 light:bg-white light:border-slate-200 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase px-2 flex items-center gap-1">
              <Zap className="w-3 h-3 text-orange-400" />
              Role:
            </span>
            {['junior', 'senior', 'alumni'].map((r) => (
              <button
                key={r}
                onClick={() => switchDemoRole(r)}
                className={`px-2.5 py-1 text-xs rounded-xl font-semibold capitalize transition-all ${
                  user?.role?.toLowerCase() === r
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 light:hover:text-slate-800'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-slate-100 hover:bg-slate-800 light:bg-white light:border-slate-200 light:text-slate-700 light:hover:bg-slate-100 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
          </button>

          {/* Notification Bell */}
          <button
            onClick={() => setIsNotifsOpen(true)}
            className="relative p-2 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-slate-100 hover:bg-slate-800 light:bg-white light:border-slate-200 light:text-slate-700 light:hover:bg-slate-100 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Avatar Chip */}
          <div className="flex items-center gap-2 pl-1">
            <AnimeAvatar avatarId={user?.avatar || 'avatar-1'} size="sm" />
            <div className="hidden xl:block text-left">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-slate-200 light:text-slate-900">{user?.publicId}</span>
                <RoleBadge role={user?.role} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NotificationsDrawer isOpen={isNotifsOpen} onClose={() => setIsNotifsOpen(false)} />
    </header>
  );
};
