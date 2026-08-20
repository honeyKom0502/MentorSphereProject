import {
  ArrowLeft,
  Search,
  Star,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Users,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const mentors = [
  {
    id: 1,
    name: "Arjun Rao",
    role: "Senior Software Engineer",
    company: "Software Engineer",
    experience: "4+ years",
    expertise: ["Java", "DSA", "Spring Boot"],
    rating: "4.9",
    students: 128,
    availability: "Available",
    verified: true,
  },
  {
    id: 2,
    name: "Sneha R",
    role: "Java Developer",
    company: "Backend Developer",
    experience: "3+ years",
    expertise: ["Java", "OOP", "Collections"],
    rating: "4.8",
    students: 94,
    availability: "Available",
    verified: true,
  },
  {
    id: 3,
    name: "Vikram S",
    role: "Software Engineer",
    company: "Full Stack Developer",
    experience: "5+ years",
    expertise: ["Java", "React", "System Design"],
    rating: "4.9",
    students: 176,
    availability: "Busy",
    verified: true,
  },
  {
    id: 4,
    name: "Priya M",
    role: "Placement Mentor",
    company: "Interview Mentor",
    experience: "4+ years",
    expertise: ["Java", "Interview", "Placement"],
    rating: "4.7",
    students: 82,
    availability: "Available",
    verified: true,
  },
];

function Mentors() {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const channelName =
    channelId === "java"
      ? "☕ Java"
      : channelId === "dsa"
      ? "🧠 DSA"
      : channelId === "placement"
      ? "🚀 Placement"
      : "Academic Channel";

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      <main className="lg:ml-64 min-h-screen">

        {/* Top Bar */}

        <header className="h-16 border-b border-white/10 flex items-center px-6 lg:px-10">

          <button
            onClick={() =>
              navigate(`/channel/${channelId}`)
            }
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition"
          >
            <ArrowLeft size={17} />

            Back to {channelName}
          </button>

        </header>

        {/* Header */}

        <section className="border-b border-white/10 px-6 lg:px-10 py-8">

          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

              <div>

                <div className="flex items-center gap-2 text-indigo-400 text-sm mb-3">

                  <Sparkles size={16} />

                  Mentor Network

                </div>

                <h1 className="text-3xl lg:text-4xl font-bold">
                  Find a Mentor
                </h1>

                <p className="text-slate-500 mt-2 max-w-2xl">

                  Connect with verified seniors and alumni
                  who can help you with {channelName}.

                </p>

              </div>

              {/* Search */}

              <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] rounded-xl px-4 py-3 w-full lg:w-80">

                <Search
                  size={18}
                  className="text-slate-500"
                />

                <input
                  placeholder="Search mentors..."
                  className="bg-transparent outline-none w-full text-sm placeholder:text-slate-600"
                />

              </div>

            </div>

          </div>

        </section>

        {/* AI Matching Banner */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-8">

          <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/[0.08] to-violet-500/[0.04] p-6">

            <div className="flex flex-col md:flex-row md:items-center gap-5">

              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">

                <Sparkles size={22} />

              </div>

              <div className="flex-1">

                <h2 className="font-semibold">
                  AI Mentor Matching
                </h2>

                <p className="text-sm text-slate-500 mt-1">

                  Soon, AI will analyze your question,
                  skills and learning goals to recommend
                  the most suitable mentor.

                </p>

              </div>

              <button className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-sm font-medium">

                Find My Mentor

              </button>

            </div>

          </div>

        </section>

        {/* Stats */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            <Stat
              icon={<Users size={18} />}
              value="480+"
              label="Verified Mentors"
            />

            <Stat
              icon={<CheckCircle2 size={18} />}
              value="100%"
              label="College Verified"
            />

            <Stat
              icon={<Star size={18} />}
              value="4.8"
              label="Average Rating"
            />

            <Stat
              icon={<MessageCircle size={18} />}
              value="2.4k+"
              label="Mentorship Sessions"
            />

          </div>

        </section>

        {/* Mentor List */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8">

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="font-semibold">
                Recommended Mentors
              </h2>

              <p className="text-sm text-slate-600 mt-1">
                Verified mentors matching this channel.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

            {mentors.map((mentor) => (

              <MentorCard
                key={mentor.id}
                mentor={mentor}
              />

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

/* -------------------------------- */
/* Stat */
/* -------------------------------- */

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">

      <div className="flex items-center gap-3">

        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">

          {icon}

        </div>

        <div>

          <p className="text-xl font-bold">
            {value}
          </p>

          <p className="text-xs text-slate-600">
            {label}
          </p>

        </div>

      </div>

    </div>
  );
}

/* -------------------------------- */
/* Mentor Card */
/* -------------------------------- */

function MentorCard({ mentor }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 hover:border-indigo-500/30 hover:bg-white/[0.04] transition">

      {/* Profile */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-semibold text-lg">

            {mentor.name.charAt(0)}

          </div>

          <div>

            <div className="flex items-center gap-1.5">

              <h3 className="font-semibold">
                {mentor.name}
              </h3>

              {mentor.verified && (

                <CheckCircle2
                  size={15}
                  className="text-emerald-400"
                />

              )}

            </div>

            <p className="text-xs text-slate-500 mt-1">
              {mentor.role}
            </p>

          </div>

        </div>

        <span
          className={`text-[10px] px-2 py-1 rounded-md ${
            mentor.availability === "Available"
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-white/5 text-slate-600"
          }`}
        >
          {mentor.availability}
        </span>

      </div>

      {/* Experience */}

      <div className="mt-5">

        <p className="text-xs text-slate-600">
          Experience
        </p>

        <p className="text-sm text-slate-300 mt-1">
          {mentor.experience}
        </p>

      </div>

      {/* Expertise */}

      <div className="flex flex-wrap gap-2 mt-5">

        {mentor.expertise.map((skill) => (

          <span
            key={skill}
            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-slate-500"
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Rating */}

      <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">

        <div className="flex items-center gap-1.5">

          <Star
            size={15}
            className="text-yellow-400 fill-yellow-400"
          />

          <span className="text-sm font-medium">
            {mentor.rating}
          </span>

        </div>

        <span className="text-xs text-slate-600">
          {mentor.students} students mentored
        </span>

      </div>

      {/* Button */}

      <button className="w-full mt-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-sm font-medium text-slate-300 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition">

        View Mentor

      </button>

    </article>
  );
}

export default Mentors;