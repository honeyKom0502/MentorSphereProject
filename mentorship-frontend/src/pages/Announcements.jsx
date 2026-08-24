import { Bell, Calendar, Megaphone } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Welcome to MentorSphere",
    description:
      "Welcome to MentorSphere, your channel-based mentorship platform for learning, discussions, and connecting with mentors.",
    date: "August 24, 2026",
    category: "General",
  },
  {
    id: 2,
    title: "New Mentors Available",
    description:
      "Verified mentors are now available in Java, DSA, Web Development, Database, Placement and other channels.",
    date: "August 22, 2026",
    category: "Mentorship",
  },
  {
    id: 3,
    title: "New Learning Resources Added",
    description:
      "New learning materials, interview preparation resources and useful study guides have been added to MentorSphere.",
    date: "August 20, 2026",
    category: "Resources",
  },
];

export default function Announcements() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-indigo-100 p-3">
              <Bell className="h-7 w-7 text-indigo-600" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Announcements
              </h1>

              <p className="mt-1 text-slate-500">
                Stay updated with the latest MentorSphere announcements.
              </p>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="space-y-5">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                  <Megaphone className="h-6 w-6 text-indigo-600" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-slate-900">
                      {announcement.title}
                    </h2>

                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                      {announcement.category}
                    </span>
                  </div>

                  <p className="mt-3 leading-7 text-slate-600">
                    {announcement.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {announcement.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}