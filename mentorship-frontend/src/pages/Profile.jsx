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
  X,
  Save,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function Profile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Apoorva",
    role: "Information Science & Engineering Student",
    college: "Acharya Institute of Technology",
    location: "Bengaluru",
    email: "apoorva@example.com",
    department: "Information Science",
    bio:
      "Information Science and Engineering student interested in software development, Java, problem solving and placement preparation. I enjoy learning new technologies and helping others in academic discussions.",
    skills: [
      "Java",
      "DSA",
      "React",
      "JavaScript",
      "SQL",
      "DBMS",
      "Web Development",
      "Problem Solving",
      "Placement Preparation",
    ],
  });

  const [editForm, setEditForm] = useState(profile);

  const handleEdit = () => {
    setEditForm(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSkillsChange = (value) => {
    setEditForm((previous) => ({
      ...previous,
      skills: value
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0),
    }));
  };

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

                {profile.name.charAt(0).toUpperCase()}

              </div>

              {/* User Information */}

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-3">

                  <h1 className="text-3xl font-bold">
                    {profile.name}
                  </h1>

                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px]">

                    <CheckCircle2 size={13} />

                    Verified Student

                  </span>

                </div>

                <p className="text-slate-500 mt-2">
                  {profile.role}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-600">

                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    {profile.college}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {profile.location}
                  </span>

                </div>

              </div>

              {/* Edit / Save */}

              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition"
                >
                  <Pencil size={16} />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-3">

                  <button
                    onClick={handleCancel}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition"
                  >
                    <X size={16} />
                    Cancel
                  </button>

                  <button
                    onClick={handleSave}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-sm font-medium"
                  >
                    <Save size={16} />
                    Save Changes
                  </button>

                </div>
              )}

            </div>

          </div>

        </section>

        {/* Main Content */}

        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-8">

          {/* EDIT FORM */}

          {isEditing && (
            <div className="mb-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.04] p-6">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <UserRound size={19} />
                </div>

                <div>

                  <h2 className="font-semibold">
                    Edit Profile
                  </h2>

                  <p className="text-xs text-slate-600 mt-1">
                    Update your MentorSphere profile information.
                  </p>

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* Name */}

                <InputField
                  label="Full Name"
                  value={editForm.name}
                  onChange={(value) =>
                    handleChange("name", value)
                  }
                />

                {/* Email */}

                <InputField
                  label="Email"
                  value={editForm.email}
                  onChange={(value) =>
                    handleChange("email", value)
                  }
                />

                {/* Role */}

                <InputField
                  label="Role"
                  value={editForm.role}
                  onChange={(value) =>
                    handleChange("role", value)
                  }
                />

                {/* College */}

                <InputField
                  label="College"
                  value={editForm.college}
                  onChange={(value) =>
                    handleChange("college", value)
                  }
                />

                {/* Department */}

                <InputField
                  label="Department"
                  value={editForm.department}
                  onChange={(value) =>
                    handleChange("department", value)
                  }
                />

                {/* Location */}

                <InputField
                  label="Location"
                  value={editForm.location}
                  onChange={(value) =>
                    handleChange("location", value)
                  }
                />

              </div>

              {/* Bio */}

              <div className="mt-5">

                <label className="block text-xs text-slate-500 mb-2">
                  About Me
                </label>

                <textarea
                  value={editForm.bio}
                  onChange={(event) =>
                    handleChange(
                      "bio",
                      event.target.value
                    )
                  }
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none resize-none focus:border-indigo-500/50"
                />

              </div>

              {/* Skills */}

              <div className="mt-5">

                <label className="block text-xs text-slate-500 mb-2">
                  Skills
                </label>

                <input
                  value={editForm.skills.join(", ")}
                  onChange={(event) =>
                    handleSkillsChange(
                      event.target.value
                    )
                  }
                  placeholder="Java, DSA, React, SQL"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none focus:border-indigo-500/50"
                />

                <p className="text-xs text-slate-600 mt-2">
                  Separate skills using commas.
                </p>

              </div>

            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-6">

            {/* LEFT */}

            <div className="lg:col-span-2 space-y-6">

              {/* About */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="font-semibold">
                  About Me
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed mt-3">
                  {profile.bio}
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

                  {profile.skills.map((skill) => (

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

            {/* RIGHT */}

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
                    value={profile.email}
                  />

                  <Info
                    icon={<GraduationCap size={16} />}
                    label="Department"
                    value={profile.department}
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

/* Input Field */

function InputField({
  label,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-xs text-slate-500 mb-2">
        {label}
      </label>

      <input
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none focus:border-indigo-500/50"
      />

    </div>
  );
}

/* Activity */

function Activity({
  icon,
  value,
  label,
}) {
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

function Achievement({
  title,
  description,
}) {
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

function Info({
  icon,
  label,
  value,
}) {
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