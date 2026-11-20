import { Link } from "react-router-dom";
import { ArrowRight, Check, Play, Video, Users, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import FeatureCard from "../components/FeatureCard.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="hero-grid overflow-hidden bg-[#f8f8ff]">
          <div className="page-shell grid min-h-[610px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-xs font-bold text-violet-700">
                <Sparkles size={15} /> Meetings made refreshingly simple
              </div>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Bring your team <span className="gradient-text">closer,</span>{" "}
                wherever you are.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Clear conversations, focused collaboration, and effortless video
                meetings — all in one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-violet-200 hover:bg-violet-700"
                >
                  Start for free <ArrowRight size={18} />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 hover:border-violet-300"
                >
                  <Play size={17} /> Join a meeting
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                {["Easy to use", "Works across devices", "Secure sign-in"].map(
                  (x) => (
                    <span key={x} className="flex items-center gap-2">
                      <Check size={16} className="text-emerald-500" />
                      {x}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-violet-200/70 to-sky-100/70 blur-2xl" />
              <div className="relative rounded-[28px] border border-white bg-slate-950 p-3 shadow-2xl">
                <div className="flex items-center justify-between px-3 py-3 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
                    Product sync
                  </div>
                  <span className="text-xs text-slate-400">00:24:18</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-700 p-5 sm:p-8">
                    <img
                      src="/images/meeting-hero.jpeg"
                      alt="Team meeting preview"
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="relative flex h-40 items-end sm:h-52">
                      <span className="rounded-lg bg-black/35 px-3 py-2 text-sm font-semibold text-white">
                        Alex Morgan · Host
                      </span>
                    </div>
                  </div>
                  {["Jordan Lee", "Taylor Kim"].map((name, i) => (
                    <div
                      key={name}
                      className={`flex h-24 items-end rounded-xl p-3 text-xs font-semibold text-white sm:h-28 ${i === 0 ? "bg-sky-700" : "bg-fuchsia-800"}`}
                    >
                      {name}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 py-4 text-slate-300">
                  <span className="rounded-full bg-slate-800 p-3">
                    <Video size={17} />
                  </span>
                  <span className="rounded-full bg-slate-800 p-3">
                    <Users size={17} />
                  </span>
                  <span className="rounded-full bg-rose-600 px-5 py-3 text-xs font-bold text-white">
                    Leave
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-shell py-20">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-violet-600">
              Why meetly
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Everything you need to connect
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              A simple workspace for productive conversations and better
              teamwork.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              index={0}
              title="One-click meetings"
              description="Create a meeting room and invite people with a shareable link."
            />
            <FeatureCard
              index={1}
              title="Team collaboration"
              description="Bring your team together from any location or device."
            />
            <FeatureCard
              index={2}
              title="Privacy focused"
              description="Keep account access and meeting experiences protected."
            />
            <FeatureCard
              index={3}
              title="Live conversations"
              description="Stay connected with real-time communication tools."
            />
          </div>
        </section>
        <section className="page-shell pb-20">
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-3xl font-extrabold">
              Your next great conversation starts here.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Create an account and bring everyone into the same room.
            </p>
            <Link
              to="/signup"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-bold hover:bg-violet-400"
            >
              Create your free account <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-100 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Meetly. Built for better conversations.
      </footer>
    </div>
  );
}
