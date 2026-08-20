
import {
  Search,
  Users,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const channels = [
  {
    name: "Java",
    emoji: "☕",
    description:
      "Java, OOP, Collections and interview preparation.",
    members: "1.2k",
    discussions: "486",
    category: "Programming",
  },
  {
    name: "DSA",
    emoji: "🧠",
    description:
      "Algorithms, data structures and problem solving.",
    members: "980",
    discussions: "392",
    category: "Programming",
  },
  {
    name: "Placement",
    emoji: "🚀",
    description:
      "Jobs, interviews, online assessments and career guidance.",
    members: "1.8k",
    discussions: "624",
    category: "Career",
  },
  {
    name: "Web Development",
    emoji: "🌐",
    description:
      "React, JavaScript, Node.js and modern web development.",
    members: "875",
    discussions: "341",
    category: "Development",
  },
  {
    name: "DBMS & SQL",
    emoji: "🗄️",
    description:
      "Database concepts, SQL queries and interview questions.",
    members: "760",
    discussions: "285",
    category: "Core CS",
  },
  {
    name: "AI / ML",
    emoji: "🤖",
    description:
      "Artificial intelligence, machine learning and projects.",
    members: "690",
    discussions: "214",
    category: "Technology",
  },
];

const categories = [
  "All Channels",
  "Programming",
  "Career",
  "Development",
  "Core CS",
  "Technology",
];

function Channels() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All Channels");

  const [joinedChannels, setJoinedChannels] =
    useState([]);

  const getChannelId = (name) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/&/g, "")
      .replace(/\//g, "-");
  };

  const filteredChannels = channels.filter((channel) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      channel.name.toLowerCase().includes(searchValue) ||
      channel.description
        .toLowerCase()
        .includes(searchValue);

    const matchesCategory =
      activeCategory === "All Channels" ||
      channel.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleJoin = (channelName) => {
    const channelId = getChannelId(channelName);

    setJoinedChannels((previous) => {
      if (previous.includes(channelId)) {
        return previous;
      }

      return [...previous, channelId];
    });
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      <main className="lg:ml-64 min-h-screen">

        {/* HEADER */}

        <header className="border-b border-white/10 px-6 lg:px-10 py-6">

          <div className="max-w-7xl mx-auto">

            <div className="flex items-center gap-2 text-indigo-400 text-sm mb-3">

              <Sparkles size={16} />

              <span>
                Academic Communities
              </span>

            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

              <div>

                <h1 className="text-3xl lg:text-4xl font-bold">
                  Explore Channels
                </h1>

                <p className="text-slate-500 mt-2 max-w-2xl">
                  Find communities, ask questions, share
                  knowledge and connect with students and
                  mentors.
                </p>

              </div>

              {/* SEARCH */}

              <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] rounded-xl px-4 py-3 w-full lg:w-80">

                <Search
                  size={18}
                  className="text-slate-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search channels..."
                  className="bg-transparent outline-none w-full text-sm placeholder:text-slate-600"
                />

              </div>

            </div>

          </div>

        </header>

        {/* CONTENT */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8">

          {/* CATEGORY BUTTONS */}

          <div className="flex gap-2 overflow-x-auto pb-2 mb-8">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition ${
                  activeCategory === category
                    ? "bg-indigo-500 text-white"
                    : "border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* TITLE */}

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="text-lg font-semibold">
                Popular Communities
              </h2>

              <p className="text-sm text-slate-600 mt-1">
                {filteredChannels.length} active channels
              </p>

            </div>

          </div>

          {/* NO RESULTS */}

          {filteredChannels.length === 0 && (

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-12 text-center">

              <Search
                size={32}
                className="mx-auto text-slate-600"
              />

              <h3 className="mt-4 font-semibold">
                No channels found
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                Try another search or category.
              </p>

            </div>

          )}

          {/* CHANNEL CARDS */}

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">

            {filteredChannels.map((channel) => {

              const channelId =
                getChannelId(channel.name);

              const joined =
                joinedChannels.includes(channelId);

              return (

                <div
                  key={channel.name}
                  onClick={() =>
                    navigate(`/channel/${channelId}`)
                  }
                  className="group relative overflow-hidden cursor-pointer rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-indigo-500/30 hover:bg-white/[0.04] hover:-translate-y-1"
                >

                  {/* GLOW */}

                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition" />

                  <div className="relative">

                    {/* ICON */}

                    <div className="flex items-start justify-between">

                      <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-3xl">

                        {channel.emoji}

                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-slate-600 group-hover:text-indigo-400 transition"
                      />

                    </div>

                    {/* CATEGORY */}

                    <div className="mt-5">

                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/10 text-[10px] text-indigo-400">

                        {channel.category}

                      </span>

                    </div>

                    {/* NAME */}

                    <h3 className="text-xl font-semibold mt-4">

                      {channel.name}

                    </h3>

                    {/* DESCRIPTION */}

                    <p className="text-sm text-slate-500 leading-relaxed mt-2 min-h-[42px]">

                      {channel.description}

                    </p>

                    {/* STATS */}

                    <div className="flex items-center gap-5 mt-6 pt-5 border-t border-white/10">

                      <div className="flex items-center gap-2 text-xs text-slate-500">

                        <Users size={15} />

                        {channel.members}

                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500">

                        <MessageSquare size={15} />

                        {channel.discussions}

                      </div>

                    </div>

                    {/* JOIN BUTTON */}

                    <button
                      onClick={(e) => {

                        e.stopPropagation();

                        handleJoin(channel.name);

                      }}
                      className={`w-full mt-5 py-2.5 rounded-xl border text-sm font-medium transition ${
                        joined
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                          : "bg-white/[0.05] border-white/10 text-slate-300 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white"
                      }`}
                    >

                      {joined ? (

                        <span className="flex items-center justify-center gap-2">

                          <Check size={16} />

                          Joined

                        </span>

                      ) : (

                        "Join Channel"

                      )}

                    </button>

                  </div>

                </div>

              );

            })}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Channels;
