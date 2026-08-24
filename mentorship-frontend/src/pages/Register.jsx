import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    // Temporary frontend-only registration
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-md">

        {/* LOGO */}

        <div className="text-center mb-8">

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            <Sparkles size={22} />
          </div>

          <h1 className="text-3xl font-bold">
            MentorSphere
          </h1>

          <p className="text-slate-500 mt-2">
            Join your academic mentorship community
          </p>

        </div>

        {/* CARD */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 shadow-2xl">

          <div className="mb-7">

            <h2 className="text-2xl font-semibold">
              Create an account
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Create your account and start learning with mentors.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* NAME */}

            <div>

              <label className="block text-sm text-slate-400 mb-2">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm outline-none placeholder:text-slate-700 focus:border-indigo-500/50"
                />

              </div>

            </div>

            {/* EMAIL */}

            <div>

              <label className="block text-sm text-slate-400 mb-2">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm outline-none placeholder:text-slate-700 focus:border-indigo-500/50"
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-sm text-slate-400 mb-2">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-12 text-sm outline-none placeholder:text-slate-700 focus:border-indigo-500/50"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div>

              <label className="block text-sm text-slate-400 mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-12 text-sm outline-none placeholder:text-slate-700 focus:border-indigo-500/50"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 py-3.5 text-sm font-semibold transition"
            >
              Create Account
              <ArrowRight size={17} />
            </button>

          </form>

          {/* LOGIN */}

          <div className="text-center mt-7 pt-6 border-t border-white/10">

            <p className="text-sm text-slate-500">

              Already have an account?{" "}

              <button
                onClick={() => navigate("/login")}
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Sign in
              </button>

            </p>

          </div>

        </div>

        {/* FOOTER */}

        <p className="text-center text-xs text-slate-700 mt-6">
          MentorSphere • Learn • Connect • Grow
        </p>

      </div>

    </div>
  );
}

export default Register;