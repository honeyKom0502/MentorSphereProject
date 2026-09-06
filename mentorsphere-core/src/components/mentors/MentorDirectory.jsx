import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Filter, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { MENTORS_DATA, PRESET_SKILLS } from '../../data/mockData';
import { MentorCard } from './MentorCard';
import { AskMentorModal } from './AskMentorModal';

export const MentorDirectory = () => {
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [activeMentorToAsk, setActiveMentorToAsk] = useState(null);

  const filtered = MENTORS_DATA.filter(mentor => {
    const matchesRole = selectedRole === 'all' || mentor.role.toLowerCase() === selectedRole.toLowerCase();
    const matchesSkill = selectedSkill === 'all' || mentor.skills?.includes(selectedSkill);
    const matchesSearch = mentor.publicId.toLowerCase().includes(search.toLowerCase()) ||
      mentor.companyOrTrack.toLowerCase().includes(search.toLowerCase()) ||
      mentor.department.toLowerCase().includes(search.toLowerCase()) ||
      mentor.skills?.some(s => s.toLowerCase().includes(search.toLowerCase()));
    return matchesRole && matchesSkill && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 md:p-8 rounded-3xl glass-panel-elevated bg-slate-950/80 light:bg-white/90 border border-slate-800 light:border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>Verified Student & Alumni Mentors</span>
            </div>
            <h2 className="font-display font-black text-2xl md:text-3xl text-slate-100 light:text-slate-900 tracking-tight">
              Find Senior Mentors & Alumni
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-xl">
              Connect with 3rd/4th year seniors who cracked top tier-1 placements and graduated alumni working in industry.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-slate-900/80 border border-slate-800 text-center light:bg-white light:border-slate-300">
              <span className="font-display font-black text-xl text-orange-400 block">
                {MENTORS_DATA.length}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Available</span>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-slate-900/80 border border-slate-800 text-center light:bg-white light:border-slate-300">
              <span className="font-display font-black text-xl text-emerald-400 block">
                850+
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Sessions Done</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 w-full max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by skill (DSA, React), company (Google), or mentor..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs font-medium bg-slate-900/80 border border-slate-800 focus:outline-none focus:border-blue-500 text-slate-200 light:bg-white light:border-slate-300 light:text-slate-900"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1">
          {/* Role Filter */}
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500 light:bg-white light:border-slate-300 light:text-slate-900"
          >
            <option value="all">All Roles</option>
            <option value="senior">Seniors (3rd/4th Year)</option>
            <option value="alumni">Alumni Mentors</option>
          </select>

          {/* Skill Filter */}
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500 light:bg-white light:border-slate-300 light:text-slate-900"
          >
            <option value="all">All Tech Skills</option>
            {PRESET_SKILLS.slice(0, 10).map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Mentors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(mentor => (
          <MentorCard
            key={mentor.id}
            mentor={mentor}
            onAskQuestion={(m) => setActiveMentorToAsk(m)}
          />
        ))}
      </div>

      {/* Ask Question Modal */}
      <AskMentorModal
        mentor={activeMentorToAsk}
        isOpen={!!activeMentorToAsk}
        onClose={() => setActiveMentorToAsk(null)}
      />
    </div>
  );
};
