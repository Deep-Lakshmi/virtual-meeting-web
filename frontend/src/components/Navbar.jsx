import { Link, useNavigate } from "react-router-dom";
import { Video, LogOut, LayoutDashboard } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar({ dashboard = false }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="bg-white/90 border-b border-slate-100 sticky top-0 z-30 backdrop-blur">
      <nav className="page-shell h-[72px] flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-slate-900"
        >
          <span className="w-9 h-9 rounded-xl bg-violet-600 text-white grid place-items-center">
            <Video size={20} />
          </span>
          meetly<span className="text-violet-600">.</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6 text-sm font-semibold">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-violet-700"
              >
                <LayoutDashboard size={17} /> Dashboard
              </Link>
              <span className="hidden md:block text-slate-500">
                Hi, {user.name || user.username || "there"}
              </span>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50"
              >
                <LogOut size={16} />{" "}
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                className="text-slate-600 hover:text-violet-700"
                to="/login"
              >
                Log in
              </Link>
              <Link
                className="rounded-xl bg-violet-600 px-4 py-2.5 text-white hover:bg-violet-700"
                to="/signup"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
