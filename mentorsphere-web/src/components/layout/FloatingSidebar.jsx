import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Hash, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  UserCheck, 
  Bell, 
  LogOut, 
  Sun, 
  Moon,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useNotifications } from '../../context/NotificationContext';
import { AnimeAvatar } from '../../data/animeAvatars';
import { RoleBadge } from '../common/Badge';

export const FloatingSidebar = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const { user, logout, switchDemoRole } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { unreadCount } = useNotifications();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'channels', label: 'Channels', icon: Hash, badge: user?.joinedChannels?.length },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
    { id: 'mentors', label: 'Find Mentors', icon: Users },
    { id: 'placements', label: 'Placements', icon: TrendingUp },
    { id: 'profile', label: 'My Profile', icon: UserCheck },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadCount > 0 ? unreadCount : null }
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between p-3 select-none">
      {/* Brand Header */}
      <div>
        <div className="flex items-center justify-between px-2 py-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-orange-500 flex items-center justify-center shadow-lg shadow-blue-500/25 shrink-0">
              <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <span className="font-display font-black text-lg tracking-tight text-slate-100 light:text-slate-900">
                  Mentor<span className="text-orange-500">Sphere</span>
                </span>
                <p className="text-[10px] font-semibold text-blue-400 tracking-wider uppercase">Anime Tech Guild</p>
              </motion.div>
            )}
          </div>
          
          {/* Collapse toggle button for desktop */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (setIsMobileOpen) setIsMobileOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all relative ${
                  isActive
                    ? 'text-white bg-blue-600/90 shadow-md shadow-blue-600/25 font-semibold light:bg-blue-600 light:text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                {!isCollapsed && <span className="truncate">{item.label}</span>}
                
                {item.badge != null && (
                  <span className={`ml-auto text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-blue-500/20 text-blue-400 light:bg-blue-100 light:text-blue-700'
                  }`}>
                    {item.badge}
                  </span>
                )}

                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute left-0 w-1 h-5 bg-orange-400 rounded-r-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer / User Profile & Role Switcher */}
      <div className="space-y-3 pt-3 border-t border-slate-800/80 light:border-slate-200">
        {/* Quick Demo Role Switcher */}
        {!isCollapsed && (
          <div className="px-2 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60 light:bg-slate-100 light:border-slate-200">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1.5">
              <span>DEMO PERSPECTIVE:</span>
              <RoleBadge role={user?.role} size="sm" />
            </div>
            <div className="grid grid-cols-3 gap-1">
              {['junior', 'senior', 'alumni'].map((role) => (
                <button
                  key={role}
                  onClick={() => switchDemoRole(role)}
                  className={`py-1 text-[11px] rounded font-medium capitalize transition-colors ${
                    user?.role?.toLowerCase() === role
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white light:bg-white light:text-slate-600'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* User Card */}
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-slate-800/30 border border-slate-700/30 light:bg-slate-50 light:border-slate-200">
          <AnimeAvatar avatarId={user?.avatar || 'avatar-1'} size="sm" />
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-200 light:text-slate-900 truncate">
                  {user?.publicId || 'Student'}
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" title="Verified College ID" />
              </div>
              <p className="text-[10px] text-slate-400 truncate">{user?.fullName}</p>
            </div>
          )}
        </div>

        {/* Utility Actions */}
        <div className="flex items-center justify-between gap-1 pt-1">
          <button
            onClick={toggleTheme}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 light:text-slate-600 light:hover:bg-slate-100 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            {!isCollapsed && <span>{isDark ? 'Light' : 'Dark'}</span>}
          </button>

          <button
            onClick={logout}
            className="flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Floating Sidebar */}
      <motion.aside
        animate={{ width: isCollapsed ? 80 : 256 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden md:block fixed top-4 left-4 bottom-4 z-40 rounded-3xl glass-panel-elevated bg-slate-950/80 light:bg-white/90 border border-slate-800/80 light:border-slate-200 overflow-hidden shadow-2xl backdrop-blur-2xl"
      >
        {sidebarContent}
      </motion.aside>

      {/* Mobile Drawer Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 bg-slate-950/95 light:bg-white/95 border-r border-slate-800 light:border-slate-200 transition-transform duration-300 transform ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {sidebarContent}
      </div>
    </>
  );
};
