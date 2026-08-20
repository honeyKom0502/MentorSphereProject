import {
  Bell,
  CheckCircle2,
  MessageCircle,
  UserPlus,
  Sparkles,
  Megaphone,
  MoreHorizontal,
  Check,
  Trash2,
} from "lucide-react";

import { useState } from "react";

import Sidebar from "../components/Sidebar";

const initialNotifications = [
  {
    id: 1,
    type: "reply",
    title: "New reply to your question",
    message:
      "Arjun Rao replied to your question about HashMap internal working.",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "mentor",
    title: "Mentor recommendation",
    message:
      "AI found 3 mentors who match your Java and DSA interests.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "solved",
    title: "Question marked as solved",
    message:
      "Your question 'ArrayList vs LinkedList' has been marked as solved.",
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 4,
    type: "mention",
    title: "You were mentioned",
    message:
      "Sneha mentioned you in a discussion about Java Collections.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 5,
    type: "announcement",
    title: "Java channel announcement",
    message:
      "A new Java interview preparation resource has been added.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 6,
    type: "ai",
    title: "AI learning recommendation",
    message:
      "Based on your recent questions, we recommend studying Java Multithreading.",
    time: "2 days ago",
    unread: false,
  },
];

function Notifications() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const markAllRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Sidebar />

      <main className="lg:ml-64 min-h-screen">

        {/* Header */}

        <header className="border-b border-white/10 px-6 lg:px-10 py-8">

          <div className="max-w-5xl mx-auto">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

              <div>

                <div className="flex items-center gap-2 text-indigo-400 text-sm mb-3">

                  <Bell size={16} />

                  Notifications

                </div>

                <h1 className="text-3xl lg:text-4xl font-bold">
                  Stay Updated
                </h1>

                <p className="text-slate-500 mt-2">
                  Keep track of replies, mentors, discussions and
                  important updates.
                </p>

              </div>

              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition"
                >
                  <Check size={16} />

                  Mark all as read
                </button>
              )}

            </div>

          </div>

        </header>

        {/* Content */}

        <section className="max-w-5xl mx-auto px-6 lg:px-10 py-8">

          {/* Notification Summary */}

          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

              <p className="text-xs text-slate-600">
                Total notifications
              </p>

              <p className="text-2xl font-bold mt-2">
                {notifications.length}
              </p>

            </div>

            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-5">

              <p className="text-xs text-indigo-400">
                Unread
              </p>

              <p className="text-2xl font-bold mt-2">
                {unreadCount}
              </p>

            </div>

          </div>

          {/* AI Banner */}

          <div className="mb-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/[0.08] to-violet-500/[0.04] p-5">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">

                <Sparkles size={19} />

              </div>

              <div>

                <p className="font-medium">
                  Smart Notifications
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Important AI recommendations and mentorship
                  updates will appear here.
                </p>

              </div>

            </div>

          </div>

          {/* Notification List */}

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="font-semibold">
                Recent Activity
              </h2>

              <p className="text-sm text-slate-600 mt-1">
                Your latest platform activity.
              </p>

            </div>

          </div>

          <div className="space-y-3">

            {notifications.length === 0 ? (

              <EmptyState />

            ) : (

              notifications.map((notification) => (

                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onDelete={deleteNotification}
                />

              ))

            )}

          </div>

        </section>

      </main>

    </div>
  );
}

/* Notification Card */

function NotificationCard({
  notification,
  onDelete,
}) {

  const getIcon = () => {

    switch (notification.type) {

      case "reply":
        return <MessageCircle size={19} />;

      case "mentor":
        return <UserPlus size={19} />;

      case "solved":
        return <CheckCircle2 size={19} />;

      case "announcement":
        return <Megaphone size={19} />;

      case "ai":
        return <Sparkles size={19} />;

      default:
        return <Bell size={19} />;

    }
  };

  return (
    <article
      className={`group relative rounded-2xl border p-5 transition ${
        notification.unread
          ? "border-indigo-500/20 bg-indigo-500/[0.035]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >

      <div className="flex gap-4">

        {/* Icon */}

        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
            notification.unread
              ? "bg-indigo-500/10 text-indigo-400"
              : "bg-white/[0.04] text-slate-500"
          }`}
        >
          {getIcon()}
        </div>

        {/* Content */}

        <div className="flex-1 min-w-0">

          <div className="flex items-start justify-between gap-4">

            <div>

              <div className="flex items-center gap-2">

                <h3 className="font-medium">
                  {notification.title}
                </h3>

                {notification.unread && (
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                )}

              </div>

              <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                {notification.message}
              </p>

            </div>

            <button
              onClick={() =>
                onDelete(notification.id)
              }
              className="opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-400 transition shrink-0"
            >
              <Trash2 size={17} />
            </button>

          </div>

          <div className="flex items-center justify-between mt-4">

            <span className="text-xs text-slate-600">
              {notification.time}
            </span>

            {notification.unread && (
              <span className="text-[10px] px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-400">
                New
              </span>
            )}

          </div>

        </div>

      </div>

    </article>
  );
}

/* Empty State */

function EmptyState() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">

      <div className="w-14 h-14 mx-auto rounded-2xl bg-white/[0.04] flex items-center justify-center text-slate-600">

        <Bell size={24} />

      </div>

      <h3 className="font-semibold mt-5">
        You're all caught up
      </h3>

      <p className="text-sm text-slate-600 mt-2">
        New notifications will appear here.
      </p>

    </div>
  );
}

export default Notifications;