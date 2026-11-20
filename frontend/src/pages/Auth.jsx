import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Video, Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Auth({ mode = "login" }) {
  const isSignup = mode === "signup";
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = isSignup
        ? await signup({
            name: form.name,
            username: form.email,
            password: form.password,
          })
        : await login({
            username: form.email,
            password: form.password,
          });

      if (isSignup && !(data.token || data.accessToken)) {
        setError("Account created. Please log in using your credentials.");
        return;
      }

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to continue. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <Navbar />
      <main className="page-shell grid min-h-[calc(100vh-72px)] place-items-center py-12">
        <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-7 soft-shadow sm:p-9">
          <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-600 text-white">
            <Video />
          </div>
          <h1 className="text-center text-2xl font-extrabold text-slate-950">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-center text-sm text-slate-500">
            {isSignup
              ? "Start connecting with your team."
              : "Log in to continue to your meetings."}
          </p>
          <form onSubmit={submit} className="mt-8 space-y-4">
            {isSignup && (
              <label className="block text-sm font-semibold text-slate-700">
                Full name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </label>
            )}
            <label className="block text-sm font-semibold text-slate-700">
              Email address
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Password
              <div className="relative mt-2">
                <input
                  required
                  minLength={6}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={update}
                  placeholder="At least 6 characters"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>
            {error && (
              <p className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">
                {error}
              </p>
            )}
            <button
              disabled={loading}
              className="w-full rounded-xl bg-violet-600 py-3.5 font-bold text-white hover:bg-violet-700 disabled:opacity-60"
            >
              {loading
                ? "Please wait..."
                : isSignup
                  ? "Create account"
                  : "Log in"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            {isSignup ? "Already have an account?" : "New to Meetly?"}{" "}
            <Link
              className="font-bold text-violet-700 hover:underline"
              to={isSignup ? "/login" : "/signup"}
            >
              {isSignup ? "Log in" : "Create an account"}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
