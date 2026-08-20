import { motion } from "framer-motion";
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen w-full bg-[#070B14] text-white overflow-x-hidden">
      <div className="min-h-screen w-full flex flex-col lg:flex-row">

        {/* LEFT SECTION */}
        <div className="hidden lg:flex lg:w-1/2 min-w-0 relative items-center justify-center px-16">

          {/* Background Glow */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-full max-w-lg"
          >

            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Sparkles size={22} />
              </div>

              <span className="text-2xl font-bold tracking-tight">
                Mentora
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
              Learn together.

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Grow together.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              A smarter way for students to connect, discuss,
              learn and find the right mentors within their academic community.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <p className="text-2xl font-semibold">
                  50+
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  Academic Topics
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <p className="text-2xl font-semibold">
                  24/7
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  Knowledge Sharing
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 min-w-0 flex items-center justify-center px-6 py-12">

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md"
          >

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center gap-3 mb-10">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Sparkles size={20} />
              </div>

              <span className="text-xl font-bold">
                Mentora
              </span>
            </div>

            {/* Header */}
            <div className="mb-8">
              <p className="text-indigo-400 text-sm font-medium mb-2">
                Welcome back
              </p>

              <h2 className="text-3xl font-bold">
                Sign in to Mentora
              </h2>

              <p className="text-slate-400 mt-2">
                Continue your learning journey.
              </p>
            </div>

            {/* LOGIN FORM */}
            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >

              {/* Email */}
              <div>
                <label className="text-sm text-slate-300">
                  College Email
                </label>

                <div className="relative mt-2">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                  />

                  <input
                    type="email"
                    required
                    placeholder="you@college.edu"
                    className="w-full box-border rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center">

                  <label className="text-sm text-slate-300">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-indigo-400 hover:text-indigo-300"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative mt-2">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                  />

                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="w-full box-border rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 py-3.5 font-medium shadow-lg shadow-indigo-500/20 transition hover:scale-[1.01] hover:shadow-indigo-500/30"
              >
                Sign In

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </form>

            {/* Register */}
            <p className="text-center text-sm text-slate-500 mt-8">
              Don't have an account?{" "}

              <button
                type="button"
                onClick={handleRegister}
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Create account
              </button>
            </p>

            {/* Footer */}
            <p className="text-center text-xs text-slate-600 mt-10">
              College-verified community • Built for students
            </p>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Login;