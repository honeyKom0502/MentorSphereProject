import {
  ArrowLeft,
  Search,
  Users,
  MessageSquare,
  Plus,
  Pin,
  CheckCircle2,
  Clock3,
  MoreHorizontal,
  Sparkles,
  GraduationCap,
  BookOpen,
  Megaphone,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const channelData = {
  java: {
    name: "Java",
    emoji: "☕",
    category: "Programming",
    description:
      "Discuss Java, OOP, Collections, interview questions and programming concepts.",
    members: "1.2k",
    discussions: "486",
  },

  dsa: {
    name: "DSA",
    emoji: "🧠",
    category: "Programming",
    description:
      "Algorithms, data structures and problem solving.",
    members: "980",
    discussions: "392",
  },

  placement: {
    name: "Placement",
    emoji: "🚀",
    category: "Career",
    description:
      "Jobs, interviews, online assessments and career guidance.",
    members: "1.8k",
    discussions: "624",
  },

  "web-development": {
    name: "Web Development",
    emoji: "🌐",
    category: "Development",
    description:
      "React, JavaScript, Node.js and modern web development.",
    members: "875",
    discussions: "341",
  },

  "dbms--sql": {
    name: "DBMS & SQL",
    emoji: "🗄️",
    category: "Core CS",
    description:
      "Database concepts, SQL queries and interview questions.",
    members: "760",
    discussions: "285",
  },

  "ai---ml": {
    name: "AI / ML",
    emoji: "🤖",
    category: "Technology",
    description:
      "Artificial intelligence, machine learning and projects.",
    members: "690",
    discussions: "214",
  },
};

const discussions = [
  {
    id: 1,
    title: "How does HashMap work internally in Java?",
    description:
      "Can someone explain the internal working of HashMap with a simple example?",
    author: "Rahul Kumar",
    time: "2 hours ago",
    replies: 12,
    likes: 24,
    solved: true,
    tags: ["HashMap", "Collections"],
  },

  {
    id: 2,
    title:
      "ArrayList vs LinkedList — which one should I use?",
    description:
      "I understand the basic difference but I'm confused about which one to use in real projects.",
    author: "Ananya S",
    time: "5 hours ago",
    replies: 8,
    likes: 17,
    solved: false,
    tags: ["Collections", "Interview"],
  },

  {
    id: 3,
    title: "Best way to prepare Java for placements?",
    description:
      "Looking for a structured roadmap covering Java concepts commonly asked in interviews.",
    author: "Kiran M",
    time: "Yesterday",
    replies: 18,
    likes: 42,
    solved: true,
    tags: ["Placement", "Roadmap"],
  },
];

const mentors = [
  {
    name: "Rahul Sharma",
    role: "Senior Software Engineer",
    skills: "Java • DSA • Spring Boot",
  },
  {
    name: "Priya Nair",
    role: "Frontend Developer",
    skills: "React • JavaScript • Web",
  },
  {
    name: "Arjun Kumar",
    role: "Backend Developer",
    skills: "Java • SQL • Node.js",
  },
];

const resources = [
  {
    title: "Java Fundamentals",
    description:
      "Learn Core Java, OOP, classes, objects, inheritance and interfaces.",
    icon: BookOpen,
  },
  {
    title: "Java Collections",
    description:
      "Understand ArrayList, LinkedList, HashMap, HashSet and other collections.",
    icon: BookOpen,
  },
  {
    title: "Java Interview Preparation",
    description:
      "Practice commonly asked Java interview questions and coding problems.",
    icon: GraduationCap,
  },
];

function Channel() {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const channel =
    channelData[channelId] || channelData.java;

  const handleAskQuestion = () => {
    navigate(`/ask-question?channel=${channelId}`);
  };

  const handleBack = () => {
    navigate("/channels");
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      <main className="lg:ml-64 min-h-screen">

        {/* TOP BAR */}

        <header className="h-16 border-b border-white/10 flex items-center px-6 lg:px-10">

          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition"
          >
            <ArrowLeft size={17} />

            Back to channels
          </button>

        </header>

        {/* CHANNEL HEADER */}

        <section className="border-b border-white/10 px-6 lg:px-10 py-8">

          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

              {/* LEFT */}

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-3xl shrink-0">

                  {channel.emoji}

                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-2">

                    <h1 className="text-3xl font-bold">
                      {channel.name}
                    </h1>

                    <span className="px-2 py-1 text-[10px] rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {channel.category}
                    </span>

                  </div>

                  <p className="text-slate-500 mt-2 max-w-xl">
                    {channel.description}
                  </p>

                  <div className="flex items-center gap-5 mt-4 text-sm text-slate-500">

                    <span className="flex items-center gap-2">
                      <Users size={16} />
                      {channel.members} members
                    </span>

                    <span className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      {channel.discussions} discussions
                    </span>

                  </div>

                </div>

              </div>

              {/* JOIN */}

              <button className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-sm font-medium">
                Joined
              </button>

            </div>

            {/* TABS */}

            <div className="flex gap-6 mt-8 overflow-x-auto">

              <Tab
                active
                label="Discussions"
                icon={<MessageSquare size={15} />}
                onClick={() => {}}
              />

              <Tab
                label="Mentors"
                icon={<GraduationCap size={15} />}
                onClick={() => navigate("/mentors")}
              />

              <Tab
                label="Resources"
                icon={<BookOpen size={15} />}
                onClick={() => navigate("/resources")}
              />

              <Tab
                label="Announcements"
                icon={<Megaphone size={15} />}
                onClick={() =>
                  navigate(
                    `/channel/${channelId}?tab=announcements`
                  )
                }
              />

            </div>

          </div>

        </section>

        {/* CONTENT */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8">

          {/* ACTIONS */}

          <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

            {/* SEARCH */}

            <div className="flex items-center gap-3 border border-white/10 bg-white/[0.03] rounded-xl px-4 py-3 w-full md:max-w-md">

              <Search
                size={18}
                className="text-slate-600"
              />

              <input
                placeholder="Search discussions..."
                className="bg-transparent outline-none text-sm w-full placeholder:text-slate-600"
              />

            </div>

            {/* ASK QUESTION */}

            <button
              onClick={handleAskQuestion}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 font-medium text-sm shadow-lg shadow-indigo-500/10 hover:scale-[1.01] transition"
            >

              <Plus size={18} />

              Ask Question

            </button>

          </div>

          {/* AI BANNER */}

          <div className="mb-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-5 flex flex-col md:flex-row md:items-center gap-4">

            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">

              <Sparkles size={19} />

            </div>

            <div>

              <p className="font-medium">
                AI-powered discussions
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Similar questions and mentor recommendations
                will appear here.
              </p>

            </div>

          </div>

          {/* QUICK LINKS */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

            {/* Mentors */}

            <button
              onClick={() => navigate("/mentors")}
              className="text-left border border-white/10 bg-white/[0.025] rounded-2xl p-5 hover:bg-white/[0.05] hover:border-indigo-500/30 transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <GraduationCap size={21} />
                </div>

                <div>

                  <h3 className="font-semibold">
                    Find a Mentor
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Connect with seniors and alumni.
                  </p>

                </div>

              </div>

            </button>

            {/* Resources */}

            <button
              onClick={() => navigate("/resources")}
              className="text-left border border-white/10 bg-white/[0.025] rounded-2xl p-5 hover:bg-white/[0.05] hover:border-indigo-500/30 transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <BookOpen size={21} />
                </div>

                <div>

                  <h3 className="font-semibold">
                    Explore Resources
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Find useful learning materials.
                  </p>

                </div>

              </div>

            </button>

          </div>

          {/* DISCUSSION HEADER */}

          <div className="flex items-center justify-between mb-4">

            <div>

              <h2 className="font-semibold">
                Recent Discussions
              </h2>

              <p className="text-sm text-slate-600 mt-1">
                Ask questions and learn from the community.
              </p>

            </div>

            <button className="hidden sm:flex items-center gap-2 text-sm text-slate-500 hover:text-white">

              <Clock3 size={16} />

              Recent

            </button>

          </div>

          {/* DISCUSSIONS */}

          <div className="space-y-4">

            {discussions.map((discussion) => (

              <DiscussionCard
                key={discussion.id}
                discussion={discussion}
                onClick={() =>
                  navigate(`/post/${discussion.id}`)
                }
              />

            ))}

          </div>

          {/* MENTOR PREVIEW */}

          <div className="mt-10">

            <div className="flex items-center justify-between mb-4">

              <div>

                <h2 className="font-semibold">
                  Recommended Mentors
                </h2>

                <p className="text-sm text-slate-600 mt-1">
                  Seniors who can help you learn.
                </p>

              </div>

              <button
                onClick={() => navigate("/mentors")}
                className="text-sm text-indigo-400 hover:text-indigo-300"
              >
                View all
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {mentors.map((mentor) => (

                <div
                  key={mentor.name}
                  className="border border-white/10 bg-white/[0.025] rounded-2xl p-5"
                >

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-semibold">
                      {mentor.name.charAt(0)}
                    </div>

                    <div>

                      <p className="font-medium">
                        {mentor.name}
                      </p>

                      <p className="text-xs text-slate-600">
                        {mentor.role}
                      </p>

                    </div>

                  </div>

                  <p className="text-xs text-slate-500 mt-4">
                    {mentor.skills}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RESOURCES PREVIEW */}

          <div className="mt-10">

            <div className="flex items-center justify-between mb-4">

              <div>

                <h2 className="font-semibold">
                  Learning Resources
                </h2>

                <p className="text-sm text-slate-600 mt-1">
                  Resources related to {channel.name}.
                </p>

              </div>

              <button
                onClick={() => navigate("/resources")}
                className="text-sm text-indigo-400 hover:text-indigo-300"
              >
                View all
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {resources.map((resource) => {

                const Icon = resource.icon;

                return (
                  <div
                    key={resource.title}
                    className="border border-white/10 bg-white/[0.025] rounded-2xl p-5"
                  >

                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">

                      <Icon size={19} />

                    </div>

                    <h3 className="font-medium">
                      {resource.title}
                    </h3>

                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {resource.description}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

function Tab({
  label,
  active,
  icon,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 pb-3 text-sm border-b-2 transition whitespace-nowrap ${
        active
          ? "text-white border-indigo-500"
          : "text-slate-500 border-transparent hover:text-white"
      }`}
    >

      {icon}

      {label}

    </button>
  );
}

function DiscussionCard({
  discussion,
  onClick,
}) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.025] p-5 hover:bg-white/[0.04] hover:border-indigo-500/20 transition"
    >

      <div className="flex gap-4">

        {/* AVATAR */}

        <div className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 items-center justify-center text-sm font-semibold shrink-0">

          {discussion.author.charAt(0)}

        </div>

        <div className="flex-1 min-w-0">

          {/* TOP */}

          <div className="flex items-start justify-between gap-4">

            <div>

              <h3 className="font-semibold text-base group-hover:text-indigo-400 transition">

                {discussion.title}

              </h3>

              <p className="text-sm text-slate-500 mt-2 leading-relaxed">

                {discussion.description}

              </p>

            </div>

            <button
              onClick={(event) =>
                event.stopPropagation()
              }
              className="text-slate-600 hover:text-white shrink-0"
            >

              <MoreHorizontal size={18} />

            </button>

          </div>

          {/* TAGS */}

          <div className="flex flex-wrap gap-2 mt-4">

            {discussion.tags.map((tag) => (

              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-slate-500"
              >
                {tag}
              </span>

            ))}

          </div>

          {/* BOTTOM */}

          <div className="flex flex-wrap items-center gap-5 mt-5 pt-4 border-t border-white/5 text-xs text-slate-600">

            <span>
              {discussion.author}
            </span>

            <span>
              {discussion.time}
            </span>

            <span className="flex items-center gap-1.5">

              <MessageSquare size={14} />

              {discussion.replies} replies

            </span>

            <span>
              👍 {discussion.likes}
            </span>

            {discussion.solved && (

              <span className="flex items-center gap-1.5 text-emerald-400">

                <CheckCircle2 size={14} />

                Solved

              </span>

            )}

            <Pin
              size={14}
              className="ml-auto text-slate-700"
            />

          </div>

        </div>

      </div>

    </article>
  );
}

export default Channel;