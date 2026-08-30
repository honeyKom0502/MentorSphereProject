import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  ShieldCheck, 
  Hash, 
  Users, 
  TrendingUp,
  ChevronDown,
  Layers,
  Film,
  Zap,
  Maximize2
} from 'lucide-react';
import { ParticleCanvas } from '../common/ParticleCanvas';
import { AnimeAvatar } from '../../data/animeAvatars';
import { RoleBadge } from '../common/Badge';

export const HeroCinematic = ({ onOpenSignup, onExploreApp }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideoMode, setShowVideoMode] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  const chapters = [
    { title: '01. The Search', time: 0, desc: 'The solitary junior searching in the cyber library' },
    { title: '02. Synapse Grid', time: 2, desc: 'Juniors connected directly to seniors & alumni' },
    { title: '03. Channel Hubs', time: 4, desc: 'Topic-oriented networking (DSA, AI, Placements)' },
    { title: '04. Mentorship', time: 6, desc: '1-on-1 advice with verified campus mentors' },
    { title: '05. Career Horizon', time: 8, desc: '48.5 LPA trends, interview experiences, real data' }
  ];

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const jumpToChapter = (idx) => {
    setActiveChapter(idx);
    if (videoRef.current && videoRef.current.duration) {
      const targetTime = (idx / chapters.length) * videoRef.current.duration;
      videoRef.current.currentTime = targetTime;
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Layer: Cinematic Video Film + Procedural Particle Canvas */}
      {showVideoMode ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            src="/media/hero_library.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover opacity-35 dark:opacity-25 transition-opacity duration-1000 scale-105"
          />
          {/* Subtle gradient vignette to blend video seamlessly into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
        </div>
      ) : null}

      {/* Background Neural Particles */}
      <ParticleCanvas className="absolute inset-0 pointer-events-none z-1" />

      {/* Cyber Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 via-orange-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center my-auto">
        {/* Top Controls & Film Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel bg-slate-900/80 light:bg-white/90 border border-blue-500/30 text-xs font-bold text-blue-300 light:text-blue-700 shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
            <span>The Next-Gen College Mentorship Guild</span>
            <span className="text-slate-500">•</span>
            <span className="text-orange-400 font-mono">Anime Cyber Aesthetic</span>
          </div>

          <button
            onClick={() => setShowVideoMode(!showVideoMode)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel bg-slate-900/80 border border-orange-500/40 text-xs font-bold text-orange-400 hover:bg-orange-500/20 transition-all"
            title="Toggle background cinematic video"
          >
            <Film className="w-3.5 h-3.5" />
            <span>{showVideoMode ? 'Cinematic Film: Active' : 'Particles Only'}</span>
          </button>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-slate-100 light:text-slate-900 leading-[1.02] mb-4"
        >
          Mentor<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-500 to-amber-400">Sphere</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-orange-400 tracking-wide mb-4"
        >
          "Connect. Learn. Grow Together."
        </motion.p>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-medium"
        >
          A student-powered mentorship and networking ecosystem connecting <strong className="text-blue-400 font-bold">Juniors</strong>, <strong className="text-orange-400 font-bold">Seniors</strong>, and <strong className="text-purple-400 font-bold">Alumni</strong> in engineering colleges.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={onOpenSignup}
            className="px-8 py-4 rounded-2xl font-display font-bold text-sm md:text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 hover:from-blue-500 hover:to-orange-400 shadow-xl shadow-blue-500/25 flex items-center gap-3 transition-all hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onExploreApp}
            className="px-8 py-4 rounded-2xl font-display font-bold text-sm md:text-base text-slate-200 light:text-slate-800 bg-slate-900/90 hover:bg-slate-800 light:bg-white light:border light:border-slate-300 shadow-lg flex items-center gap-2.5 transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span>Explore MentorSphere</span>
          </button>
        </motion.div>

        {/* Cinematic Video Player Mini-Dock */}
        {showVideoMode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl glass-panel bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-8 shadow-xl"
          >
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-400 transition-colors"
              title={isPlaying ? "Pause film" : "Play film"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <div className="w-32 sm:w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-150"
                style={{ width: `${videoProgress}%` }}
              />
            </div>

            <span className="text-[10px] font-mono text-slate-400">Chapter {activeChapter + 1}/5</span>

            <button
              onClick={toggleMute}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-orange-400" />}
            </button>
          </motion.div>
        )}

        {/* Floating Interactive Anime Identity Card Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative max-w-3xl mx-auto rounded-3xl glass-panel-elevated bg-slate-950/85 light:bg-white/90 border border-slate-800 light:border-slate-200 p-5 sm:p-7 shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <AnimeAvatar avatarId="avatar-1" size="lg" />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-lg text-slate-100 light:text-slate-900">
                    KnightRider
                  </span>
                  <RoleBadge role="Senior" size="sm" />
                </div>
                <p className="text-xs text-orange-400 font-semibold">Placed @ Google & Atlassian (48.5 LPA)</p>
                <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                  {['DSA', 'System Design', 'Java'].map(s => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/20 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2 text-right">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                ⚡ 142 Juniors Guided
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Real Name: Protected 🔒
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Cinematic Storyboard Indicator */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 mt-8 w-full">
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 overflow-x-auto py-2">
          {chapters.map((ch, idx) => (
            <button
              key={ch.title}
              onClick={() => jumpToChapter(idx)}
              className={`px-3 py-1.5 rounded-xl text-left text-xs transition-all whitespace-nowrap ${
                activeChapter === idx
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/25 ring-1 ring-blue-400'
                  : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 light:bg-slate-100 light:text-slate-600'
              }`}
            >
              <span>{ch.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
