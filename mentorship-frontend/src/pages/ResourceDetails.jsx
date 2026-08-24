import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  ExternalLink,
  PlayCircle,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const resourceData = {
  fundamentals: {
    title: "Java Fundamentals",
    category: "Core Java",
    level: "Beginner",
    duration: "6 hours",
    description:
      "Learn the fundamentals of Java programming including variables, data types, control statements, methods, classes and objects.",
    topics: [
      "Java Syntax",
      "Variables & Data Types",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Methods",
      "Classes & Objects",
    ],
  },

  collections: {
    title: "Java Collections",
    category: "Java",
    level: "Intermediate",
    duration: "5 hours",
    description:
      "Understand Java Collections Framework and learn how to work with List, Set, Map and commonly used collection classes.",
    topics: [
      "ArrayList",
      "LinkedList",
      "HashSet",
      "HashMap",
      "TreeMap",
      "Iterators",
      "Comparable & Comparator",
    ],
  },

  interview: {
    title: "Java Interview Preparation",
    category: "Placement",
    level: "Intermediate",
    duration: "8 hours",
    description:
      "Prepare for Java technical interviews with important concepts, commonly asked questions and coding problems.",
    topics: [
      "OOP Concepts",
      "Exception Handling",
      "Multithreading",
      "Collections",
      "Java 8",
      "Coding Questions",
      "Interview Questions",
    ],
  },
};

function ResourceDetails() {
  const navigate = useNavigate();
  const { resourceId } = useParams();

  const resource =
    resourceData[resourceId] || resourceData.fundamentals;

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

        {/* RESOURCE HEADER */}

        <section className="border-b border-white/10 px-6 lg:px-10 py-10">

          <div className="max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-row gap-6">

              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                <BookOpen size={30} />
              </div>

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-3">

                  <h1 className="text-3xl font-bold">
                    {resource.title}
                  </h1>

                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400">
                    {resource.category}
                  </span>

                </div>

                <p className="text-slate-500 mt-3 max-w-3xl leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex flex-wrap items-center gap-5 mt-5 text-sm text-slate-500">

                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    {resource.level}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {resource.duration}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CONTENT */}

        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-8">

          <div className="grid lg:grid-cols-3 gap-6">

            {/* MAIN */}

            <div className="lg:col-span-2 space-y-6">

              {/* ABOUT */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="text-lg font-semibold">
                  About This Resource
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed mt-4">
                  {resource.description}
                </p>

              </div>

              {/* TOPICS */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="text-lg font-semibold">
                  What You Will Learn
                </h2>

                <div className="grid sm:grid-cols-2 gap-3 mt-5">

                  {resource.topics.map((topic) => (

                    <div
                      key={topic}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
                    >

                      <CheckCircle2
                        size={17}
                        className="text-emerald-400 shrink-0"
                      />

                      <span className="text-sm text-slate-400">
                        {topic}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* LEARNING MATERIAL */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-3">

                  <PlayCircle
                    size={19}
                    className="text-indigo-400"
                  />

                  <h2 className="text-lg font-semibold">
                    Learning Material
                  </h2>

                </div>

                <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                  Start learning this topic using the recommended
                  material. You can later connect this section to
                  your backend resources, PDFs, videos or external
                  learning platforms.
                </p>

                <button
                  onClick={() =>
                    alert(
                      "Learning material will be available here."
                    )
                  }
                  className="mt-5 flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-sm font-medium"
                >
                  <PlayCircle size={17} />
                  Start Learning
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              {/* RESOURCE INFO */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="font-semibold">
                  Resource Information
                </h2>

                <div className="space-y-5 mt-5">

                  <Info
                    label="Category"
                    value={resource.category}
                  />

                  <Info
                    label="Level"
                    value={resource.level}
                  />

                  <Info
                    label="Duration"
                    value={resource.duration}
                  />

                  <Info
                    label="Topics"
                    value={`${resource.topics.length} topics`}
                  />

                </div>

              </div>

              {/* RECOMMENDED */}

              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-6">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">

                    <GraduationCap size={19} />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Need Help?
                    </h3>

                    <p className="text-xs text-slate-600 mt-1">
                      Ask a mentor
                    </p>

                  </div>

                </div>

                <p className="text-sm text-slate-500 leading-relaxed mt-4">
                  If you have questions while learning, ask the
                  community or connect with a mentor.
                </p>

                <button
                  onClick={() => navigate("/mentors")}
                  className="w-full mt-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-sm font-medium"
                >
                  Find a Mentor
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>

      <p className="text-xs text-slate-600">
        {label}
      </p>

      <p className="text-sm text-slate-400 mt-1">
        {value}
      </p>

    </div>
  );
}

export default ResourceDetails;