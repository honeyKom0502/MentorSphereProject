import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import { Toast } from './components/common/Toast';
import { FloatingSidebar } from './components/layout/FloatingSidebar';
import { TopBar } from './components/layout/TopBar';

// Landing Page Components
import { LandingNav } from './components/landing/LandingNav';
import { HeroCinematic } from './components/landing/HeroCinematic';
import { ScrollStory } from './components/landing/ScrollStory';
import { CinematicFooter } from './components/landing/CinematicFooter';

// Auth Components
import { LoginModal } from './components/auth/LoginModal';
import { SignupModal } from './components/auth/SignupModal';

// Dashboard Views
import { DynamicGreeting } from './components/dashboard/DynamicGreeting';
import { MetricCards } from './components/dashboard/MetricCards';
import { JoinedChannelsGrid } from './components/dashboard/JoinedChannelsGrid';
import { RecentDiscussionsFeed } from './components/dashboard/RecentDiscussionsFeed';
import { PlacementSnapshot } from './components/dashboard/PlacementSnapshot';

// Channels & Discussions Views
import { ChannelExplorer } from './components/channels/ChannelExplorer';
import { ChannelView } from './components/channels/ChannelView';
import { DiscussionFeed } from './components/discussions/DiscussionFeed';
import { CreateDiscussionModal } from './components/discussions/CreateDiscussionModal';
import { DiscussionDetailModal } from './components/discussions/DiscussionDetailModal';

// Mentors & Placements & Profile Views
import { MentorDirectory } from './components/mentors/MentorDirectory';
import { PlacementAnalytics } from './components/placements/PlacementAnalytics';
import { ProfileView } from './components/profile/ProfileView';

// Seed data
import { DISCUSSIONS_DATA } from './data/mockData';

const MainAppContent = () => {
  const { user, isAuthenticated } = useAuth();

  // Navigation State
  const [viewMode, setViewMode] = useState('app'); // 'landing' | 'app'
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'channels', 'discussions', 'mentors', 'placements', 'profile', 'notifications'
  const [activeChannelId, setActiveChannelId] = useState(null);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  // Modals
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isCreateDiscussionOpen, setIsCreateDiscussionOpen] = useState(false);
  const [createDiscussionChannelId, setCreateDiscussionChannelId] = useState('dsa');

  // Sidebar & Layout State
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Live discussions state
  const [discussionsList, setDiscussionsList] = useState(DISCUSSIONS_DATA);

  const handleDiscussionCreated = (newDisc) => {
    setDiscussionsList(prev => [newDisc, ...prev]);
  };

  const handleUpdateDiscussion = (updatedDisc) => {
    setDiscussionsList(prev => prev.map(d => d.id === updatedDisc.id ? updatedDisc : d));
    setSelectedDiscussion(updatedDisc);
  };

  const handleOpenCreateDiscussion = (channelId = 'dsa') => {
    setCreateDiscussionChannelId(channelId);
    setIsCreateDiscussionOpen(true);
  };

  const handleOpenChannel = (channelId) => {
    setActiveChannelId(channelId);
    setActiveTab('channel-detail');
  };

  // If user explicitly views the Landing Page or is logged out
  if (viewMode === 'landing' || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500/30 selection:text-orange-200">
        <LandingNav 
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenSignup={() => setIsSignupOpen(true)}
          onEnterDemoApp={() => setViewMode('app')}
        />
        
        <HeroCinematic 
          onOpenSignup={() => setIsSignupOpen(true)}
          onExploreApp={() => setViewMode('app')}
        />

        <ScrollStory 
          onOpenSignup={() => setIsSignupOpen(true)}
        />

        <CinematicFooter 
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenSignup={() => setIsSignupOpen(true)}
        />

        {/* Auth Modals */}
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitchToSignup={() => {
            setIsLoginOpen(false);
            setIsSignupOpen(true);
          }}
        />

        <SignupModal
          isOpen={isSignupOpen}
          onClose={() => setIsSignupOpen(false)}
          onSwitchToLogin={() => {
            setIsSignupOpen(false);
            setIsLoginOpen(true);
          }}
        />

        <Toast />
      </div>
    );
  }

  // Authenticated SaaS Dashboard Layout
  return (
    <div className="min-h-screen flex bg-slate-950 light:bg-slate-50 text-slate-100 light:text-slate-900 transition-colors duration-300">
      {/* Floating Sidebar */}
      <FloatingSidebar
        activeTab={activeTab === 'channel-detail' ? 'channels' : activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setActiveChannelId(null);
        }}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileDrawerOpen}
        setIsMobileOpen={setIsMobileDrawerOpen}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
        isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'
      }`}>
        <TopBar
          activeTab={activeTab === 'channel-detail' ? 'channels' : activeTab}
          setIsMobileOpen={setIsMobileDrawerOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto space-y-6">
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <DynamicGreeting
                onOpenCreateDiscussion={() => handleOpenCreateDiscussion()}
                onExploreChannels={() => setActiveTab('channels')}
                onFindMentors={() => setActiveTab('mentors')}
              />

              <MetricCards onSelectTab={(tab) => setActiveTab(tab)} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <JoinedChannelsGrid
                    onOpenChannel={handleOpenChannel}
                    onExploreAll={() => setActiveTab('channels')}
                  />
                  <RecentDiscussionsFeed
                    onSelectDiscussion={(disc) => setSelectedDiscussion(disc)}
                    onExploreDiscussions={() => setActiveTab('discussions')}
                  />
                </div>

                <div className="space-y-6">
                  <PlacementSnapshot
                    onExplorePlacements={() => setActiveTab('placements')}
                  />
                </div>
              </div>
            </div>
          )}

          {/* CHANNELS TAB */}
          {activeTab === 'channels' && (
            <ChannelExplorer onOpenChannel={handleOpenChannel} />
          )}

          {/* SINGLE CHANNEL DETAIL VIEW */}
          {activeTab === 'channel-detail' && activeChannelId && (
            <ChannelView
              channelId={activeChannelId}
              onBack={() => setActiveTab('channels')}
              onOpenCreateDiscussion={handleOpenCreateDiscussion}
              onSelectDiscussion={(disc) => setSelectedDiscussion(disc)}
              discussionsList={discussionsList}
            />
          )}

          {/* DISCUSSIONS TAB */}
          {activeTab === 'discussions' && (
            <DiscussionFeed
              onSelectDiscussion={(disc) => setSelectedDiscussion(disc)}
              onOpenCreateDiscussion={handleOpenCreateDiscussion}
              discussionsList={discussionsList}
            />
          )}

          {/* MENTORS DIRECTORY TAB */}
          {activeTab === 'mentors' && (
            <MentorDirectory />
          )}

          {/* PLACEMENTS TAB */}
          {activeTab === 'placements' && (
            <PlacementAnalytics />
          )}

          {/* MY PROFILE TAB */}
          {activeTab === 'profile' && (
            <ProfileView />
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
            <div className="p-6 md:p-8 rounded-3xl glass-panel-elevated bg-slate-950/80 light:bg-white/90 border border-slate-800 light:border-slate-200">
              <h2 className="font-display font-black text-2xl text-slate-100 light:text-slate-900 mb-2">
                All College Notifications
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Activity alerts from discussion replies, mentor connections, and campus placements.
              </p>
              <RecentDiscussionsFeed
                onSelectDiscussion={(disc) => setSelectedDiscussion(disc)}
                onExploreDiscussions={() => setActiveTab('discussions')}
              />
            </div>
          )}
        </main>
      </div>

      {/* Global Modals */}
      <CreateDiscussionModal
        isOpen={isCreateDiscussionOpen}
        onClose={() => setIsCreateDiscussionOpen(false)}
        defaultChannelId={createDiscussionChannelId}
        onDiscussionCreated={handleDiscussionCreated}
      />

      <DiscussionDetailModal
        discussion={selectedDiscussion}
        isOpen={!!selectedDiscussion}
        onClose={() => setSelectedDiscussion(null)}
        onUpdateDiscussion={handleUpdateDiscussion}
      />

      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <MainAppContent />
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
