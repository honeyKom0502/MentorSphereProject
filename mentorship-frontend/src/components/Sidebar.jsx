import {
  LayoutDashboard,
  Compass,
  Bell,
  UserRound,
  Settings,
  LogOut,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const navigation = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Channels",
      path: "/channels",
      icon: Compass,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: UserRound,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 hidden lg:flex h-screen w-64 flex-col border-r border-white/10 bg-[#070B14]">

      {/* Logo */}

      <div className="flex h-20 items-center px-6 border-b border-white/10">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">

            <MessageSquare
              size={20}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="font-bold text-white">
              MentorSphere
            </h1>

            <p className="text-[10px] text-slate-600">
              Academic Community
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">

        <p className="px-3 mb-3 text-[10px] uppercase tracking-wider text-slate-600 font-semibold">
          Workspace
        </p>

        <div className="space-y-1">

          {navigation.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition ${
                    isActive
                      ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/10"
                      : "text-slate-500 hover:text-white hover:bg-white/[0.04]"
                  }`
                }
              >

                <Icon size={18} />

                <span>
                  {item.name}
                </span>

                {item.name === "Notifications" && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-indigo-500" />
                )}

              </NavLink>
            );

          })}

        </div>

        {/* Ask Question */}

        <div className="mt-8">

          <p className="px-3 mb-3 text-[10px] uppercase tracking-wider text-slate-600 font-semibold">
            Community
          </p>

          <button
            onClick={() => navigate("/ask-question")}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-sm font-medium text-white shadow-lg shadow-indigo-500/10 hover:scale-[1.01] transition"
          >

            <Sparkles size={18} />

            <span>
              Ask a Question
            </span>

          </button>

        </div>

      </nav>

      {/* AI Status */}

      <div className="px-4 pb-4">

        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.05] p-4">

          <div className="flex items-center gap-2">

            <Sparkles
              size={16}
              className="text-indigo-400"
            />

            <span className="text-xs font-medium">
              AI Assistant
            </span>

          </div>

          <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
            AI-powered mentor matching and smart recommendations are coming soon.
          </p>

        </div>

      </div>

      {/* User */}

      <div className="border-t border-white/10 p-4">

        <div className="flex items-center gap-3">

          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm font-semibold">
            A
          </div>

          <div className="flex-1 min-w-0">

            <p className="text-sm font-medium truncate">
              Apoorva
            </p>

            <p className="text-[11px] text-slate-600 truncate">
              Student
            </p>

          </div>

          <button
            onClick={() => navigate("/login")}
            className="text-slate-600 hover:text-red-400 transition"
            title="Logout"
          >

            <LogOut size={17} />

          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;