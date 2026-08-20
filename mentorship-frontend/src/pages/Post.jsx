import {
  ArrowLeft,
  MessageSquare,
  Heart,
  Send,
  Sparkles,
  CheckCircle2,
  MoreHorizontal,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const defaultPosts = [
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
    channelId: "java",
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
    channelId: "java",
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
    channelId: "java",
  },
];

const mentorAnswer = {
  name: "Arjun Kumar",
  role: "Senior Java Developer",
  answer:
    "HashMap stores data in key-value pairs. Internally, it uses an array of buckets. When you insert a key-value pair, Java calculates the key's hash and uses it to determine the bucket location. If multiple keys map to the same bucket, Java handles the collision using a linked structure and, in suitable cases, a balanced tree.",
};

function Post() {
  const navigate = useNavigate();
  const { postId } = useParams();

  const [post, setPost] = useState(null);

  const [reply, setReply] = useState("");

  const [likes, setLikes] = useState(0);

  const [liked, setLiked] = useState(false);

  const [replies, setReplies] = useState([]);

  const [replyLikes, setReplyLikes] = useState({});

  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("questions")) || [];

    const allPosts = [
      ...savedQuestions,
      ...defaultPosts,
    ];

    const foundPost = allPosts.find(
      (item) => String(item.id) === String(postId)
    );

    if (foundPost) {
      setPost(foundPost);

      const savedLikes = JSON.parse(
        localStorage.getItem(`postLikes_${postId}`)
      );

      const savedLiked = JSON.parse(
        localStorage.getItem(`postLiked_${postId}`)
      );

      setLikes(
        savedLikes !== null
          ? savedLikes
          : foundPost.likes || 0
      );

      setLiked(savedLiked || false);
    }

    const savedReplies =
      JSON.parse(
        localStorage.getItem(`replies_${postId}`)
      ) || [];

    setReplies(savedReplies);

    const savedReplyLikes =
      JSON.parse(
        localStorage.getItem(`replyLikes_${postId}`)
      ) || {};

    setReplyLikes(savedReplyLikes);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#070B14] text-white">

        <Sidebar />

        <main className="lg:ml-64 min-h-screen flex items-center justify-center">

          <div className="text-center">

            <h1 className="text-2xl font-bold">
              Discussion not found
            </h1>

            <button
              onClick={() => navigate("/channels")}
              className="mt-5 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600"
            >
              Back to Channels
            </button>

          </div>

        </main>

      </div>
    );
  }

  const handleLike = () => {
    const newLiked = !liked;

    const newLikes = newLiked
      ? likes + 1
      : likes - 1;

    setLiked(newLiked);
    setLikes(newLikes);

    localStorage.setItem(
      `postLikes_${postId}`,
      JSON.stringify(newLikes)
    );

    localStorage.setItem(
      `postLiked_${postId}`,
      JSON.stringify(newLiked)
    );
  };

  const handleReply = () => {
    if (!reply.trim()) return;

    const newReply = {
      id: Date.now(),
      author: "You",
      text: reply.trim(),
      time: "Just now",
      likes: 0,
    };

    const updatedReplies = [
      ...replies,
      newReply,
    ];

    setReplies(updatedReplies);

    localStorage.setItem(
      `replies_${postId}`,
      JSON.stringify(updatedReplies)
    );

    setReply("");
  };

  const handleReplyLike = (replyId) => {
    const currentLikes =
      replyLikes[replyId] || 0;

    const newLikes = currentLikes + 1;

    const updatedLikes = {
      ...replyLikes,
      [replyId]: newLikes,
    };

    setReplyLikes(updatedLikes);

    localStorage.setItem(
      `replyLikes_${postId}`,
      JSON.stringify(updatedLikes)
    );
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      <main className="lg:ml-64 min-h-screen">

        {/* Top Bar */}

        <header className="h-16 border-b border-white/10 flex items-center px-6 lg:px-10">

          <button
            onClick={() =>
              navigate(`/channel/${post.channelId}`)
            }
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition"
          >

            <ArrowLeft size={17} />

            Back to Channel

          </button>

        </header>

        {/* Main */}

        <section className="max-w-5xl mx-auto px-6 lg:px-10 py-10">

          {/* QUESTION */}

          <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 lg:p-8">

            {/* Author */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-semibold">

                  {post.author.charAt(0)}

                </div>

                <div>

                  <p className="text-sm font-medium">
                    {post.author}
                  </p>

                  <p className="text-xs text-slate-600">
                    {post.time}
                  </p>

                </div>

              </div>

              <button className="text-slate-600 hover:text-white">

                <MoreHorizontal size={19} />

              </button>

            </div>

            {/* Title */}

            <h1 className="text-2xl lg:text-3xl font-bold mt-7">

              {post.title}

            </h1>

            {/* Description */}

            <p className="text-slate-400 leading-relaxed mt-5">

              {post.description}

            </p>

            {/* Tags */}

            <div className="flex flex-wrap gap-2 mt-6">

              {post.tags.map((tag) => (

                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400"
                >

                  {tag}

                </span>

              ))}

            </div>

            {/* AI SECTION */}

            <div className="mt-7 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.04] p-5">

              <div className="flex gap-4">

                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">

                  <Sparkles size={19} />

                </div>

                <div>

                  <p className="font-medium">
                    AI Discussion Assistant
                  </p>

                  <p className="text-sm text-slate-500 mt-1">

                    Similar questions, relevant resources
                    and suitable mentors can appear here.

                  </p>

                </div>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="flex flex-wrap items-center gap-6 mt-7 pt-5 border-t border-white/10">

              {/* LIKE */}

              <button
                onClick={handleLike}
                className={`flex items-center gap-2 text-sm transition ${
                  liked
                    ? "text-pink-400"
                    : "text-slate-500 hover:text-pink-400"
                }`}
              >

                <Heart
                  size={18}
                  fill={liked ? "currentColor" : "none"}
                />

                {likes}

              </button>

              {/* REPLIES */}

              <span className="flex items-center gap-2 text-sm text-slate-500">

                <MessageSquare size={18} />

                {replies.length + post.replies} replies

              </span>

              {/* SOLVED */}

              {post.solved && (

                <span className="flex items-center gap-2 text-sm text-emerald-400">

                  <CheckCircle2 size={18} />

                  Solved

                </span>

              )}

            </div>

          </article>

          {/* MENTOR ANSWER */}

          <section className="mt-8">

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                  <GraduationCap size={22} />

                </div>

                <div>

                  <h2 className="font-semibold">
                    Mentor Answer
                  </h2>

                  <p className="text-xs text-slate-600 mt-1">
                    Answer from a verified mentor
                  </p>

                </div>

              </div>

              {/* Mentor */}

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-semibold">

                  {mentorAnswer.name.charAt(0)}

                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <p className="text-sm font-medium">
                      {mentorAnswer.name}
                    </p>

                    <BadgeCheck
                      size={16}
                      className="text-emerald-400"
                    />

                  </div>

                  <p className="text-xs text-slate-600">
                    {mentorAnswer.role}
                  </p>

                </div>

              </div>

              {/* Answer */}

              <p className="text-sm text-slate-400 leading-7">

                {mentorAnswer.answer}

              </p>

              {/* Verified */}

              <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">

                <CheckCircle2 size={14} />

                Verified Mentor Answer

              </div>

            </div>

          </section>

          {/* DISCUSSION */}

          <section className="mt-10">

            <div className="mb-5">

              <h2 className="text-lg font-semibold">
                Discussion
              </h2>

              <p className="text-sm text-slate-600 mt-1">
                Share your answer or help the student.
              </p>

            </div>

            {/* EXISTING REPLIES */}

            <div className="space-y-4">

              {replies.length === 0 && (

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">

                  <MessageSquare
                    size={25}
                    className="mx-auto text-slate-700"
                  />

                  <p className="text-sm text-slate-600 mt-3">
                    No replies yet. Be the first to answer.
                  </p>

                </div>

              )}

              {replies.map((item) => (

                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-semibold">

                      Y

                    </div>

                    <div>

                      <p className="text-sm font-medium">
                        {item.author}
                      </p>

                      <p className="text-xs text-slate-600">
                        {item.time}
                      </p>

                    </div>

                  </div>

                  <p className="text-sm text-slate-400 mt-4 leading-relaxed">

                    {item.text}

                  </p>

                  {/* Reply Like */}

                  <button
                    onClick={() =>
                      handleReplyLike(item.id)
                    }
                    className="flex items-center gap-2 mt-4 text-xs text-slate-600 hover:text-pink-400 transition"
                  >

                    <Heart
                      size={14}
                    />

                    {replyLikes[item.id] || 0}

                  </button>

                </div>

              ))}

            </div>

            {/* REPLY BOX */}

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

              <textarea
                value={reply}
                onChange={(e) =>
                  setReply(e.target.value)
                }
                rows="4"
                placeholder="Write your answer..."
                className="w-full resize-none bg-transparent outline-none text-sm text-slate-300 placeholder:text-slate-700"
              />

              <div className="flex justify-end mt-4">

                <button
                  onClick={handleReply}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-sm font-medium"
                >

                  <Send size={16} />

                  Reply

                </button>

              </div>

            </div>

          </section>

        </section>

      </main>

    </div>
  );
}

export default Post;