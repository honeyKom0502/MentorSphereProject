import {
  Bell,
  Search,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Users,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">

        {/* Navbar */}
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-6 lg:px-10">

          <div>
            <p className="text-sm text-slate-500">
              Student Dashboard
            </p>

            <h1 className="text-xl font-semibold">
              Overview
            </h1>
          </div>

          <div className="flex items-center gap-5">

            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 w-64">

              <Search
                size={17}
                className="text-slate-500"
              />

              <input
                placeholder="Search MentorSphere..."
                className="bg-transparent outline-none text-sm w-full placeholder:text-slate-600"
              />

            </div>

            {/* Notification */}
            <button
              onClick={() => navigate("/notifications")}
              className="relative text-slate-400 hover:text-white transition"
            >

              <Bell size={20} />

              <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full" />

            </button>

            {/* Profile */}
            <button
              onClick={() => navigate("/profile")}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm font-semibold hover:scale-105 transition"
            >
              A
            </button>

          </div>

        </header>

        {/* Content */}
        <section className="p-6 lg:p-10 max-w-7xl mx-auto">

          {/* Welcome */}
          <div className="mb-10">

            <p className="text-indigo-400 text-sm mb-2">
              Welcome back 👋
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold">
              Good morning, Apoorva.
            </h2>

            <p className="text-slate-500 mt-2">
              Continue learning and connect with your academic community.
            </p>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">

            <StatCard
              icon={<MessageCircle size={20} />}
              label="Questions Asked"
              value="12"
            />

            <StatCard
              icon={<CheckCircle2 size={20} />}
              label="Questions Solved"
              value="8"
            />

            <StatCard
              icon={<Users size={20} />}
              label="Mentors Connected"
              value="5"
            />

          </div>

          {/* Channels Header */}
          <div className="flex items-center justify-between mb-5">

            <div>
              <h3 className="text-xl font-semibold">
                Your Channels
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Continue discussions in your communities.
              </p>
            </div>

            {/* Explore All */}
            <button
              onClick={() => navigate("/channels")}
              className="text-sm text-indigo-400 flex items-center gap-1 hover:text-indigo-300 transition"
            >
              Explore all
              <ArrowUpRight size={16} />
            </button>

          </div>

          {/* Channels */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <ChannelCard
              emoji="☕"
              name="Java"
              description="Java, OOP, Collections & Interviews"
              members="1.2k"
              onClick={() => navigate("/channel/java")}
            />

            <ChannelCard
              emoji="🧠"
              name="DSA"
              description="Algorithms, Data Structures & Problems"
              members="980"
              onClick={() => navigate("/channel/dsa")}
            />

            <ChannelCard
              emoji="🚀"
              name="Placement"
              description="Jobs, Interviews, OA & Career Guidance"
              members="1.8k"
              onClick={() => navigate("/channel/placement")}
            />

          </div>

        </section>

      </main>

    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-5">

      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
        {icon}
      </div>

      <p className="text-2xl font-bold">
        {value}
      </p>

      <p className="text-sm text-slate-500 mt-1">
        {label}
      </p>

    </div>
  );
}

function ChannelCard({
  emoji,
  name,
  description,
  members,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full border border-white/10 bg-white/[0.03] rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.05]"
    >

      <div className="flex items-start justify-between">

        <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-2xl">
          {emoji}
        </div>

        <ArrowUpRight
          size={18}
          className="text-slate-600 group-hover:text-indigo-400 transition"
        />

      </div>

      <h4 className="text-lg font-semibold mt-5">
        {name}
      </h4>

      <p className="text-sm text-slate-500 mt-2 leading-relaxed">
        {description}
      </p>

      <p className="text-xs text-slate-600 mt-5">
        {members} members
      </p>

    </button>
  );
}

export default Dashboard;