import {
  ArrowLeft,
  Search,
  BookOpen,
  FileText,
  Video,
  ExternalLink,
  Bookmark,
  Sparkles,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const resources = [
  {
    id: 1,
    title: "Java OOP Complete Notes",
    description:
      "Classes, objects, inheritance, polymorphism, abstraction and encapsulation.",
    type: "Notes",
    category: "Java",
    author: "Academic Resources",
  },
  {
    id: 2,
    title: "Java Collections Interview Guide",
    description:
      "Important ArrayList, LinkedList, HashMap, HashSet and Queue concepts.",
    type: "Interview",
    category: "Java",
    author: "Placement Team",
  },
  {
    id: 3,
    title: "Java DSA Practice Problems",
    description:
      "Curated coding problems for improving problem-solving and interview preparation.",
    type: "Practice",
    category: "DSA",
    author: "Mentor Community",
  },
  {
    id: 4,
    title: "Java Backend Development Roadmap",
    description:
      "A structured roadmap covering Java, Spring Boot, REST APIs and databases.",
    type: "Roadmap",
    category: "Development",
    author: "Alumni Mentors",
  },
  {
    id: 5,
    title: "Java Interview Preparation",
    description:
      "Frequently asked Java interview questions with explanations.",
    type: "Interview",
    category: "Placement",
    author: "Placement Community",
  },
  {
    id: 6,
    title: "Java Programming Masterclass",
    description:
      "Video-based learning resources for beginners and intermediate developers.",
    type: "Video",
    category: "Java",
    author: "Learning Resources",
  },
];

function Resources() {
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

                  Knowledge Hub

                </div>

                <h1 className="text-3xl lg:text-4xl font-bold">
                  Resources
                </h1>

                <p className="text-slate-500 mt-2 max-w-2xl">
                  Find notes, roadmaps, interview guides and
                  learning materials shared by the community.
                </p>

              </div>

              {/* Search */}

              <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] rounded-xl px-4 py-3 w-full lg:w-80">

                <Search
                  size={18}
                  className="text-slate-500"
                />

                <input
                  placeholder="Search resources..."
                  className="bg-transparent outline-none w-full text-sm placeholder:text-slate-600"
                />

              </div>

            </div>

          </div>

        </section>

        {/* AI Banner */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-8">

          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-5 flex flex-col md:flex-row md:items-center gap-4">

            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">

              <Sparkles size={19} />

            </div>

            <div>

              <p className="font-medium">
                AI Resource Recommendations
              </p>

              <p className="text-sm text-slate-500 mt-1">
                AI can later recommend resources based on
                your questions and learning goals.
              </p>

            </div>

          </div>

        </section>

        {/* Filters */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-8">

          <div className="flex gap-2 overflow-x-auto">

            <FilterButton active label="All" />

            <FilterButton label="Notes" />

            <FilterButton label="Practice" />

            <FilterButton label="Interview" />

            <FilterButton label="Roadmap" />

            <FilterButton label="Video" />

          </div>

        </section>

        {/* Resources */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8">

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="font-semibold">
                Recommended Resources
              </h2>

              <p className="text-sm text-slate-600 mt-1">
                {resources.length} resources available
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

            {resources.map((resource) => (

              <ResourceCard
                key={resource.id}
                resource={resource}
              />

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

/* Filter Button */

function FilterButton({ label, active }) {
  return (
    <button
      className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition ${
        active
          ? "bg-indigo-500 text-white"
          : "border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.04]"
      }`}
    >
      {label}
    </button>
  );
}

/* Resource Card */

function ResourceCard({ resource }) {

  const getIcon = () => {

    if (resource.type === "Video") {
      return <Video size={20} />;
    }

    if (resource.type === "Notes") {
      return <FileText size={20} />;
    }

    return <BookOpen size={20} />;
  };

  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 hover:border-indigo-500/30 hover:bg-white/[0.04] transition">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">

          {getIcon()}

        </div>

        <button className="text-slate-600 hover:text-indigo-400 transition">

          <Bookmark size={19} />

        </button>

      </div>

      {/* Type */}

      <div className="mt-5">

        <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] text-slate-500">

          {resource.type}

        </span>

      </div>

      {/* Title */}

      <h3 className="text-lg font-semibold mt-4 group-hover:text-indigo-400 transition">

        {resource.title}

      </h3>

      {/* Description */}

      <p className="text-sm text-slate-500 leading-relaxed mt-2 min-h-[48px]">

        {resource.description}

      </p>

      {/* Category */}

      <div className="flex items-center gap-2 mt-5">

        <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-[11px]">

          {resource.category}

        </span>

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">

        <span className="text-xs text-slate-600">

          {resource.author}

        </span>

        <button className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition">

          Open

          <ExternalLink size={14} />

        </button>

      </div>

    </article>
  );
}

export default Resources;