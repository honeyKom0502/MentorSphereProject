import {
  ArrowLeft,
  UserRound,
  Mail,
  GraduationCap,
  MapPin,
  Pencil,
  Code2,
  Award,
  MessageSquare,
  Users,
  Bookmark,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      <main className="lg:ml-64 min-h-screen">

        {/* Top Bar */}

        <header className="h-16 border-b border-white/10 flex items-center px-6 lg:px-10">

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </button>

        </header>

        {/* Profile Header */}

        <section className="border-b border-white/10 px-6 lg:px-10 py-8">

          <div className="max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-row md:items-center gap-6">

              {/* Avatar */}

              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-3xl font-bold shadow-lg shadow-indigo-500/20">

                A

              </div>

              {/* User Information */}

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-3">

                  <h1 className="text-3xl font-bold">
                    Apoorva
                  </h1>

                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px]">

                    <CheckCircle2 size={13} />

                    Verified Student

                  </span>

                </div>

                <p className="text-slate-500 mt-2">
                  Information Science & Engineering Student
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-600">

                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    Acharya Institute of Technology
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    Bengaluru
                  </span>

                </div>

              </div>

              {/* Edit */}

              <button
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition"
              >

                <Pencil size={16} />

                Edit Profile

              </button>

            </div>

          </div>

        </section>

        {/* Main Content */}

        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-8">

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Left */}

            <div className="lg:col-span-2 space-y-6">

              {/* About */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="font-semibold">
                  About Me
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed mt-3">

                  Information Science and Engineering student
                  interested in software development, Java,
                  problem solving and placement preparation.
                  I enjoy learning new technologies and
                  helping others in academic discussions.

                </p>

              </div>

              {/* Skills */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-2">

                  <Code2
                    size={18}
                    className="text-indigo-400"
                  />

                  <h2 className="font-semibold">
                    Skills & Interests
                  </h2>

                </div>

                <div className="flex flex-wrap gap-2 mt-5">

                  {[
                    "Java",
                    "DSA",
                    "React",
                    "JavaScript",
                    "SQL",
                    "DBMS",
                    "Web Development",
                    "Problem Solving",
                    "Placement Preparation",
                  ].map((skill) => (

                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/10 text-xs text-indigo-300"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

              {/* Activity */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={18}
                    className="text-indigo-400"
                  />

                  <h2 className="font-semibold">
                    My Activity
                  </h2>

                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-5">

                  <Activity
                    icon={<MessageSquare size={18} />}
                    value="24"
                    label="Questions Asked"
                  />

                  <Activity
                    icon={<MessageSquare size={18} />}
                    value="41"
                    label="Answers Given"
                  />

                  <Activity
                    icon={<Users size={18} />}
                    value="8"
                    label="Mentorship Sessions"
                  />

                  <Activity
                    icon={<Bookmark size={18} />}
                    value="16"
                    label="Saved Resources"
                  />

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-6">

              {/* AI Profile */}

              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-6">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">

                    <Sparkles size={19} />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      AI Learning Profile
                    </h3>

                    <p className="text-xs text-slate-600 mt-1">
                      Personalized insights
                    </p>

                  </div>

                </div>

                <p className="text-sm text-slate-500 leading-relaxed mt-5">

                  Based on your interests, AI can recommend
                  mentors, resources and discussions that match
                  your learning goals.

                </p>

                <button className="w-full mt-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-sm font-medium">

                  Analyze My Profile

                </button>

              </div>

              {/* Achievements */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-2">

                  <Award
                    size={18}
                    className="text-yellow-400"
                  />

                  <h2 className="font-semibold">
                    Achievements
                  </h2>

                </div>

                <div className="space-y-4 mt-5">

                  <Achievement
                    title="Active Contributor"
                    description="Answered 25+ questions"
                  />

                  <Achievement
                    title="Java Explorer"
                    description="Active in Java channel"
                  />

                  <Achievement
                    title="Helpful Member"
                    description="Received 50+ likes"
                  />

                </div>

              </div>

              {/* Account */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="font-semibold">
                  Account Information
                </h2>

                <div className="space-y-4 mt-5">

                  <Info
                    icon={<Mail size={16} />}
                    label="Email"
                    value="apoorva@example.com"
                  />

                  <Info
                    icon={<GraduationCap size={16} />}
                    label="Department"
                    value="Information Science"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

/* Activity */

function Activity({ icon, value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">

      <div className="flex items-center gap-3">

        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">

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

/* Achievement */

function Achievement({ title, description }) {
  return (
    <div className="flex items-start gap-3">

      <div className="w-9 h-9 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center shrink-0">

        <Award size={17} />

      </div>

      <div>

        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="text-xs text-slate-600 mt-1">
          {description}
        </p>

      </div>

    </div>
  );
}

/* Info */

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">

      <div className="text-slate-600">
        {icon}
      </div>

      <div>

        <p className="text-[11px] text-slate-600">
          {label}
        </p>

        <p className="text-sm text-slate-400 mt-0.5">
          {value}
        </p>

      </div>

    </div>
  );
}

export default Profile;