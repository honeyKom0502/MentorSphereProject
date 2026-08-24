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
  Calendar,
} from "lucide-react";

import { useState } from "react";
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
    title: "ArrayList vs LinkedList — which one should I use?",
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
    id: "fundamentals",
    title: "Java Fundamentals",
    description:
      "Learn Core Java, OOP, classes, objects, inheritance and interfaces.",
    category: "Core Java",
    icon: BookOpen,
  },

  {
    id: "collections",
    title: "Java Collections",
    description:
      "Understand ArrayList, LinkedList, HashMap, HashSet and other collections.",
    category: "Java",
    icon: BookOpen,
  },

  {
    id: "interview",
    title: "Java Interview Preparation",
    description:
      "Practice commonly asked Java interview questions and coding problems.",
    category: "Placement",
    icon: BookOpen,
  },
];

const announcements = [
  {
    id: 1,
    title: "Placement Drive Announcement",
    description:
      "A new placement drive has been announced. Check the placement channel for eligibility and registration details.",
    date: "August 24, 2026",
    category: "Placement",
  },

  {
    id: 2,
    title: "New Mentors Available",
    description:
      "Verified mentors are now available to help students with Java, DSA, Web Development and placement preparation.",
    date: "August 22, 2026",
    category: "Mentorship",
  },

  {
    id: 3,
    title: "New Learning Resources Added",
    description:
      "New study materials, interview preparation resources and useful learning guides have been added.",
    date: "August 20, 2026",
    category: "Resources",
  },
];

function Channel() {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const [activeTab, setActiveTab] = useState("Discussions");

  // Discussion search
  const [discussionSearch, setDiscussionSearch] = useState("");

  // Resource search
  const [resourceSearch, setResourceSearch] = useState("");

  const channel =
    channelData[channelId] || channelData.java;

  const handleAskQuestion = () => {
    navigate(`/ask-question?channel=${channelId}`);
  };

  const handleBack = () => {
    navigate("/channels");
  };

  // Filter discussions
  const filteredDiscussions = discussions.filter(
    (discussion) => {
      const search = discussionSearch
        .toLowerCase()
        .trim();

      if (!search) {
        return true;
      }

      return (
        discussion.title
          .toLowerCase()
          .includes(search) ||
        discussion.description
          .toLowerCase()
          .includes(search) ||
        discussion.author
          .toLowerCase()
          .includes(search) ||
        discussion.tags.some((tag) =>
          tag.toLowerCase().includes(search)
        )
      );
    }
  );

  // Filter resources
  const filteredResources = resources.filter(
    (resource) => {
      const search = resourceSearch
        .toLowerCase()
        .trim();

      if (!search) {
        return true;
      }

      return (
        resource.title
          .toLowerCase()
          .includes(search) ||
        resource.description
          .toLowerCase()
          .includes(search) ||
        resource.category
          .toLowerCase()
          .includes(search)
      );
    }
  );

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

              {/* CHANNEL INFORMATION */}

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
                active={activeTab === "Discussions"}
                label="Discussions"
                icon={<MessageSquare size={15} />}
                onClick={() =>
                  setActiveTab("Discussions")
                }
              />

              <Tab
                active={activeTab === "Mentors"}
                label="Mentors"
                icon={<GraduationCap size={15} />}
                onClick={() =>
                  setActiveTab("Mentors")
                }
              />

              <Tab
                active={activeTab === "Resources"}
                label="Resources"
                icon={<BookOpen size={15} />}
                onClick={() =>
                  setActiveTab("Resources")
                }
              />

              <Tab
                active={activeTab === "Announcements"}
                label="Announcements"
                icon={<Megaphone size={15} />}
                onClick={() =>
                  setActiveTab("Announcements")
                }
              />

            </div>

          </div>

        </section>

        {/* CONTENT */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8">

          {/* ================= DISCUSSIONS ================= */}

          {activeTab === "Discussions" && (
            <>

              {/* SEARCH + ASK QUESTION */}

              <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

                <div className="flex items-center gap-3 border border-white/10 bg-white/[0.03] rounded-xl px-4 py-3 w-full md:max-w-md">

                  <Search
                    size={18}
                    className="text-slate-600 shrink-0"
                  />

                  <input
                    value={discussionSearch}
                    onChange={(event) =>
                      setDiscussionSearch(
                        event.target.value
                      )
                    }
                    placeholder="Search discussions..."
                    className="bg-transparent outline-none text-sm w-full placeholder:text-slate-600"
                  />

                  {discussionSearch && (
                    <button
                      onClick={() =>
                        setDiscussionSearch("")
                      }
                      className="text-xs text-slate-600 hover:text-white"
                    >
                      Clear
                    </button>
                  )}

                </div>

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

                <button
                  onClick={() =>
                    setActiveTab("Mentors")
                  }
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

                <button
                  onClick={() =>
                    setActiveTab("Resources")
                  }
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
                    {discussionSearch
                      ? `Showing ${filteredDiscussions.length} result${
                          filteredDiscussions.length !== 1
                            ? "s"
                            : ""
                        }`
                      : "Ask questions and learn from the community."}
                  </p>

                </div>

                <button className="hidden sm:flex items-center gap-2 text-sm text-slate-500 hover:text-white">
                  <Clock3 size={16} />
                  Recent
                </button>

              </div>

              {/* DISCUSSIONS */}

              <div className="space-y-4">

                {filteredDiscussions.length > 0 ? (

                  filteredDiscussions.map(
                    (discussion) => (

                      <DiscussionCard
                        key={discussion.id}
                        discussion={discussion}
                        onClick={() =>
                          navigate(
                            `/post/${discussion.id}`
                          )
                        }
                      />

                    )
                  )

                ) : (

                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-10 text-center">

                    <Search
                      size={30}
                      className="mx-auto text-slate-600"
                    />

                    <h3 className="font-semibold mt-4">
                      No discussions found
                    </h3>

                    <p className="text-sm text-slate-600 mt-2">
                      Try searching with another keyword.
                    </p>

                    <button
                      onClick={() =>
                        setDiscussionSearch("")
                      }
                      className="mt-5 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-sm"
                    >
                      Clear Search
                    </button>

                  </div>

                )}

              </div>

            </>
          )}

          {/* ================= MENTORS ================= */}

          {activeTab === "Mentors" && (
            <div>

              <div className="mb-8">

                <h2 className="text-2xl font-semibold">
                  Recommended Mentors
                </h2>

                <p className="text-slate-500 mt-2">
                  Connect with seniors and alumni who can help you learn.
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {mentors.map((mentor) => (

                  <div
                    key={mentor.name}
                    className="border border-white/10 bg-white/[0.025] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-indigo-500/30 transition"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-semibold text-lg">
                        {mentor.name.charAt(0)}
                      </div>

                      <div>

                        <p className="font-semibold">
                          {mentor.name}
                        </p>

                        <p className="text-sm text-slate-500 mt-1">
                          {mentor.role}
                        </p>

                      </div>

                    </div>

                    <div className="mt-5">

                      <p className="text-xs text-slate-600 uppercase tracking-wide">
                        Expertise
                      </p>

                      <p className="text-sm text-slate-400 mt-2">
                        {mentor.skills}
                      </p>

                    </div>

                    <button
                      onClick={() => {

                        const mentorId =
                          mentor.name
                            .toLowerCase()
                            .split(" ")[0];

                        navigate(
                          `/mentor/${mentorId}`
                        );

                      }}
                      className="w-full mt-5 px-4 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 hover:bg-indigo-500 hover:text-white transition text-sm font-medium"
                    >
                      View Profile
                    </button>

                  </div>

                ))}

              </div>

            </div>
          )}

          {/* ================= RESOURCES ================= */}

          {activeTab === "Resources" && (
            <div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">

                <div>

                  <h2 className="text-2xl font-semibold">
                    Learning Resources
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Useful learning materials related to{" "}
                    {channel.name}.
                  </p>

                </div>

                {/* RESOURCE SEARCH */}

                <div className="flex items-center gap-3 border border-white/10 bg-white/[0.03] rounded-xl px-4 py-3 w-full md:w-80">

                  <Search
                    size={18}
                    className="text-slate-600 shrink-0"
                  />

                  <input
                    value={resourceSearch}
                    onChange={(event) =>
                      setResourceSearch(
                        event.target.value
                      )
                    }
                    placeholder="Search resources..."
                    className="bg-transparent outline-none text-sm w-full placeholder:text-slate-600"
                  />

                  {resourceSearch && (
                    <button
                      onClick={() =>
                        setResourceSearch("")
                      }
                      className="text-xs text-slate-600 hover:text-white"
                    >
                      Clear
                    </button>
                  )}

                </div>

              </div>

              {/* RESULT COUNT */}

              {resourceSearch && (
                <p className="text-sm text-slate-600 mb-5">
                  Showing {filteredResources.length} resource
                  {filteredResources.length !== 1
                    ? "s"
                    : ""}
                </p>
              )}

              {/* RESOURCES */}

              {filteredResources.length > 0 ? (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                  {filteredResources.map(
                    (resource) => {

                      const Icon = resource.icon;

                      return (

                        <div
                          key={resource.id}
                          className="border border-white/10 bg-white/[0.025] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-indigo-500/30 transition"
                        >

                          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5">

                            <Icon size={22} />

                          </div>

                          <span className="text-xs text-indigo-400">
                            {resource.category}
                          </span>

                          <h3 className="font-semibold text-lg mt-2">
                            {resource.title}
                          </h3>

                          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                            {resource.description}
                          </p>

                          <button
                            onClick={() =>
                              navigate(
                                `/resource/${resource.id}`
                              )
                            }
                            className="mt-5 text-sm text-indigo-400 hover:text-indigo-300 font-medium"
                          >
                            View Resource →
                          </button>

                        </div>

                      );

                    }
                  )}

                </div>

              ) : (

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-10 text-center">

                  <BookOpen
                    size={30}
                    className="mx-auto text-slate-600"
                  />

                  <h3 className="font-semibold mt-4">
                    No resources found
                  </h3>

                  <p className="text-sm text-slate-600 mt-2">
                    Try searching for another resource.
                  </p>

                  <button
                    onClick={() =>
                      setResourceSearch("")
                    }
                    className="mt-5 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-sm"
                  >
                    Clear Search
                  </button>

                </div>

              )}

            </div>
          )}

          {/* ================= ANNOUNCEMENTS ================= */}

          {activeTab === "Announcements" && (
            <div>

              <div className="mb-8">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">

                    <Megaphone size={21} />

                  </div>

                  <div>

                    <h2 className="text-2xl font-semibold">
                      Announcements
                    </h2>

                    <p className="text-slate-500 mt-1">
                      Latest announcements for the{" "}
                      {channel.name} community.
                    </p>

                  </div>

                </div>

              </div>

              <div className="space-y-5">

                {announcements.map(
                  (announcement) => (

                    <div
                      key={announcement.id}
                      className="border border-white/10 bg-white/[0.025] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-indigo-500/30 transition"
                    >

                      <div className="flex gap-4">

                        <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">

                          <Megaphone size={20} />

                        </div>

                        <div className="flex-1">

                          <div className="flex flex-wrap items-center gap-3">

                            <h3 className="text-lg font-semibold">
                              {announcement.title}
                            </h3>

                            <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400">
                              {announcement.category}
                            </span>

                          </div>

                          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                            {announcement.description}
                          </p>

                          <div className="flex items-center gap-2 mt-4 text-xs text-slate-600">

                            <Calendar size={14} />

                            {announcement.date}

                          </div>

                        </div>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>
          )}

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