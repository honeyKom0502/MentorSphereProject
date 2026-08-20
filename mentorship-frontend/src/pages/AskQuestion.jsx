import {
  ArrowLeft,
  Send,
  Sparkles,
  EyeOff,
  Tag,
  FileText,
} from "lucide-react";

import { useState } from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import Sidebar from "../components/Sidebar";

const channelNames = {
  java: "☕ Java",
  dsa: "🧠 DSA",
  placement: "🚀 Placement",
  "web-development": "🌐 Web Development",
  "dbms-&-sql": "🗄️ DBMS & SQL",
  "ai-/-ml": "🤖 AI / ML",
};

function AskQuestion() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const channelId = searchParams.get("channel") || "java";

  const selectedChannel =
    channelNames[channelId] || "☕ Java";

  // -----------------------------
  // Form State
  // -----------------------------

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  // -----------------------------
  // Submit Question
  // -----------------------------

  const handleSubmit = () => {
    // Validation
    if (!title.trim()) {
      alert("Please enter a question title.");
      return;
    }

    if (!description.trim()) {
      alert("Please explain your question.");
      return;
    }

    // Create question object
    const newQuestion = {
      id: Date.now(),

      title: title.trim(),

      description: description.trim(),

      author: anonymous
        ? "Anonymous Student"
        : "You",

      time: "Just now",

      replies: 0,

      likes: 0,

      solved: false,

      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),

      channelId: channelId,
    };

    // Get existing questions
    const existingQuestions =
      JSON.parse(
        localStorage.getItem("questions")
      ) || [];

    // Add new question
    const updatedQuestions = [
      newQuestion,
      ...existingQuestions,
    ];

    // Save questions
    localStorage.setItem(
      "questions",
      JSON.stringify(updatedQuestions)
    );

    // Go back to channel
    navigate(`/channel/${channelId}`);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      <main className="lg:ml-64 min-h-screen">

        {/* -------------------------------- */}
        {/* Top Bar */}
        {/* -------------------------------- */}

        <header className="h-16 border-b border-white/10 flex items-center px-6 lg:px-10">

          <button
            onClick={() =>
              navigate(`/channel/${channelId}`)
            }
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition"
          >
            <ArrowLeft size={17} />

            Back to {selectedChannel}
          </button>

        </header>

        {/* -------------------------------- */}
        {/* Main Section */}
        {/* -------------------------------- */}

        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-10">

          {/* Heading */}

          <div className="mb-8">

            <div className="flex items-center gap-2 text-indigo-400 text-sm mb-3">

              <Sparkles size={16} />

              Ask the community

            </div>

            <h1 className="text-3xl lg:text-4xl font-bold">
              Ask a Question
            </h1>

            <p className="text-slate-500 mt-2">
              Share your doubt and get help from students and mentors.
            </p>

          </div>

          {/* -------------------------------- */}
          {/* AI Tip */}
          {/* -------------------------------- */}

          <div className="mb-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-5">

            <div className="flex gap-4">

              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">

                <Sparkles size={19} />

              </div>

              <div>

                <p className="font-medium">
                  Make your question clear
                </p>

                <p className="text-sm text-slate-500 mt-1 leading-relaxed">

                  AI will analyze your question, identify
                  the topic, suggest tags and recommend
                  similar discussions.

                </p>

              </div>

            </div>

          </div>

          {/* -------------------------------- */}
          {/* Form */}
          {/* -------------------------------- */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 lg:p-8">

            {/* Question Title */}

            <div>

              <label className="text-sm font-medium">
                Question Title
              </label>

              <p className="text-xs text-slate-600 mt-1 mb-3">
                Write a short and specific title.
              </p>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Example: How does HashMap work internally?"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none placeholder:text-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
              />

            </div>

            {/* -------------------------------- */}
            {/* Description */}
            {/* -------------------------------- */}

            <div className="mt-6">

              <label className="flex items-center gap-2 text-sm font-medium">

                <FileText
                  size={16}
                  className="text-slate-500"
                />

                Explain your question

              </label>

              <p className="text-xs text-slate-600 mt-1 mb-3">

                Add details, examples or code if necessary.

              </p>

              <textarea
                rows="8"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Explain what you are trying to understand..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none placeholder:text-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
              />

            </div>

            {/* -------------------------------- */}
            {/* AI Analysis */}
            {/* -------------------------------- */}

            <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.04] p-5">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">

                  <Sparkles size={19} />

                </div>

                <div>

                  <p className="font-medium">
                    AI Question Analysis
                  </p>

                  <p className="text-xs text-slate-500 mt-1">

                    AI will analyze your question before publishing.

                  </p>

                </div>

              </div>

              <div className="grid sm:grid-cols-3 gap-3 mt-5">

                {/* Category */}

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                  <p className="text-xs text-slate-600">
                    Category
                  </p>

                  <p className="text-sm font-medium mt-2">
                    {selectedChannel}
                  </p>

                </div>

                {/* Difficulty */}

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                  <p className="text-xs text-slate-600">
                    Difficulty
                  </p>

                  <p className="text-sm font-medium mt-2">
                    AI Detecting...
                  </p>

                </div>

                {/* Topic */}

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                  <p className="text-xs text-slate-600">
                    Topic
                  </p>

                  <p className="text-sm font-medium mt-2">
                    AI Detecting...
                  </p>

                </div>

              </div>

            </div>

            {/* -------------------------------- */}
            {/* Channel */}
            {/* -------------------------------- */}

            <div className="mt-6">

              <label className="text-sm font-medium">
                Channel
              </label>

              <select
                value={channelId}
                disabled
                className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-slate-300 outline-none opacity-80"
              >

                <option value={channelId}>
                  {selectedChannel}
                </option>

              </select>

            </div>

            {/* -------------------------------- */}
            {/* Tags */}
            {/* -------------------------------- */}

            <div className="mt-6">

              <label className="flex items-center gap-2 text-sm font-medium">

                <Tag
                  size={16}
                  className="text-slate-500"
                />

                Tags

              </label>

              <p className="text-xs text-slate-600 mt-1 mb-3">

                Add tags to help others find your question.

              </p>

              <input
                type="text"
                value={tags}
                onChange={(e) =>
                  setTags(e.target.value)
                }
                placeholder="Java, Collections, HashMap"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none placeholder:text-slate-700 focus:border-indigo-500"
              />

            </div>

            {/* -------------------------------- */}
            {/* Anonymous */}
            {/* -------------------------------- */}

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">

              <label className="flex items-start gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) =>
                    setAnonymous(e.target.checked)
                  }
                  className="mt-1 accent-indigo-500"
                />

                <div className="flex-1">

                  <div className="flex items-center gap-2">

                    <EyeOff
                      size={16}
                      className="text-indigo-400"
                    />

                    <span className="text-sm font-medium">

                      Post anonymously

                    </span>

                  </div>

                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">

                    Your name will not be shown to other students.
                    College administrators may still access the post
                    for moderation purposes.

                  </p>

                </div>

              </label>

            </div>

            {/* -------------------------------- */}
            {/* Actions */}
            {/* -------------------------------- */}

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-8">

              {/* Save Draft */}

              <button
                onClick={() =>
                  navigate(`/channel/${channelId}`)
                }
                className="px-5 py-3 rounded-xl border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition"
              >

                Save Draft

              </button>

              {/* Post Question */}

              <button
                onClick={handleSubmit}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-sm font-medium shadow-lg shadow-indigo-500/20 hover:scale-[1.01] transition"
              >

                <Send size={17} />

                Post Question

              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AskQuestion;