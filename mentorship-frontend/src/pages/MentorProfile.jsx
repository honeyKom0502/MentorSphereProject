import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Users,
  Star,
  Award,
  MessageSquare,
  Send,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const mentorData = {
  rahul: {
    name: "Rahul Sharma",
    role: "Senior Software Engineer",
    company: "Software Engineer",
    location: "Bengaluru",
    education: "B.E. Computer Science",
    experience: "5+ Years Experience",
    skills: [
      "Java",
      "DSA",
      "Spring Boot",
      "SQL",
      "System Design",
    ],
    students: "120+",
    rating: "4.9",
    about:
      "I am a Senior Software Engineer passionate about helping students improve their programming skills, prepare for technical interviews and understand real-world software development.",
  },

  priya: {
    name: "Priya Nair",
    role: "Frontend Developer",
    company: "Frontend Engineer",
    location: "Bengaluru",
    education: "B.E. Information Science",
    experience: "4+ Years Experience",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "UI/UX",
    ],
    students: "85+",
    rating: "4.8",
    about:
      "I help students learn modern frontend development and build practical projects using React, JavaScript and modern web technologies.",
  },

  arjun: {
    name: "Arjun Kumar",
    role: "Backend Developer",
    company: "Backend Engineer",
    location: "Bengaluru",
    education: "B.E. Computer Science",
    experience: "4+ Years Experience",
    skills: [
      "Java",
      "SQL",
      "Node.js",
      "Spring Boot",
      "REST APIs",
    ],
    students: "95+",
    rating: "4.8",
    about:
      "I enjoy mentoring students in backend development, databases, APIs and placement-oriented programming concepts.",
  },
};

function MentorProfile() {
  const navigate = useNavigate();
  const { mentorId } = useParams();

  const mentor =
    mentorData[mentorId] || mentorData.rahul;

  const handleRequestMentorship = () => {
    alert(
      `Mentorship request sent to ${mentor.name}!`
    );
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      <main className="lg:ml-64 min-h-screen">

        {/* TOP BAR */}

        <header className="h-16 border-b border-white/10 flex items-center px-6 lg:px-10">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition"
          >
            <ArrowLeft size={17} />
            Back
          </button>

        </header>

        {/* PROFILE HEADER */}

        <section className="border-b border-white/10 px-6 lg:px-10 py-10">

          <div className="max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-row gap-7">

              {/* AVATAR */}

              <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-4xl font-bold shrink-0 shadow-lg shadow-indigo-500/20">

                {mentor.name.charAt(0)}

              </div>

              {/* INFORMATION */}

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-3">

                  <h1 className="text-3xl font-bold">
                    {mentor.name}
                  </h1>

                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">

                    <CheckCircle2 size={14} />

                    Verified Mentor

                  </span>

                </div>

                <p className="text-indigo-400 mt-2">
                  {mentor.role}
                </p>

                <div className="flex flex-wrap gap-5 mt-5 text-sm text-slate-500">

                  <span className="flex items-center gap-2">
                    <Briefcase size={16} />
                    {mentor.company}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {mentor.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    {mentor.education}
                  </span>

                </div>

              </div>

              {/* REQUEST */}

              <button
                onClick={handleRequestMentorship}
                className="h-fit flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:scale-[1.02] transition font-medium text-sm shadow-lg shadow-indigo-500/10"
              >

                <Send size={17} />

                Request Mentorship

              </button>

            </div>

          </div>

        </section>

        {/* CONTENT */}

        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-8">

          <div className="grid lg:grid-cols-3 gap-6">

            {/* LEFT */}

            <div className="lg:col-span-2 space-y-6">

              {/* ABOUT */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="text-lg font-semibold">
                  About Mentor
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed mt-4">
                  {mentor.about}
                </p>

              </div>

              {/* EXPERTISE */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-3">

                  <Code2
                    size={19}
                    className="text-indigo-400"
                  />

                  <h2 className="text-lg font-semibold">
                    Areas of Expertise
                  </h2>

                </div>

                <div className="flex flex-wrap gap-2 mt-5">

                  {mentor.skills.map((skill) => (

                    <span
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

              {/* EXPERIENCE */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-3">

                  <Briefcase
                    size={19}
                    className="text-indigo-400"
                  />

                  <h2 className="text-lg font-semibold">
                    Experience
                  </h2>

                </div>

                <div className="mt-5 border-l border-indigo-500/30 pl-5">

                  <p className="font-medium">
                    {mentor.role}
                  </p>

                  <p className="text-sm text-slate-500 mt-1">
                    {mentor.experience}
                  </p>

                  <p className="text-sm text-slate-600 mt-3">
                    Software development, technical mentoring,
                    interview preparation and project guidance.
                  </p>

                </div>

              </div>

              {/* MENTORING */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-3">

                  <MessageSquare
                    size={19}
                    className="text-indigo-400"
                  />

                  <h2 className="text-lg font-semibold">
                    Mentoring Focus
                  </h2>

                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-5">

                  <FocusCard
                    title="Technical Interviews"
                    description="Interview questions and preparation"
                  />

                  <FocusCard
                    title="Problem Solving"
                    description="DSA and coding practice"
                  />

                  <FocusCard
                    title="Project Guidance"
                    description="Real-world project development"
                  />

                  <FocusCard
                    title="Career Guidance"
                    description="Placement and career preparation"
                  />

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              {/* STATS */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="font-semibold">
                  Mentor Statistics
                </h2>

                <div className="grid grid-cols-2 gap-4 mt-5">

                  <Stat
                    icon={<Users size={18} />}
                    value={mentor.students}
                    label="Students Helped"
                  />

                  <Stat
                    icon={<Star size={18} />}
                    value={mentor.rating}
                    label="Rating"
                  />

                </div>

              </div>

              {/* ACHIEVEMENTS */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-3">

                  <Award
                    size={19}
                    className="text-yellow-400"
                  />

                  <h2 className="font-semibold">
                    Achievements
                  </h2>

                </div>

                <div className="space-y-4 mt-5">

                  <Achievement
                    title="Verified Mentor"
                    description="Verified by the institution"
                  />

                  <Achievement
                    title="Top Mentor"
                    description="Highly rated by students"
                  />

                  <Achievement
                    title="Active Contributor"
                    description="Regularly helps students"
                  />

                </div>

              </div>

              {/* CTA */}

              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-6">

                <h3 className="font-semibold">
                  Need guidance?
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mt-3">
                  Request mentorship from this verified mentor
                  and get guidance related to your learning goals.
                </p>

                <button
                  onClick={handleRequestMentorship}
                  className="w-full mt-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-sm font-medium"
                >
                  Request Mentorship
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

function FocusCard({
  title,
  description,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">

      <p className="text-sm font-medium">
        {title}
      </p>

      <p className="text-xs text-slate-600 mt-2">
        {description}
      </p>

    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">

      <div className="flex items-center gap-2 text-indigo-400">
        {icon}
        <span className="text-xl font-bold text-white">
          {value}
        </span>
      </div>

      <p className="text-xs text-slate-600 mt-2">
        {label}
      </p>

    </div>
  );
}

function Achievement({
  title,
  description,
}) {
  return (
    <div className="flex gap-3">

      <div className="w-9 h-9 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center shrink-0">
        <Award size={16} />
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

export default MentorProfile;