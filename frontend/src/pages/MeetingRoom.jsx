import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  MonitorUp,
  MessageSquare,
  Users,
  Copy,
} from "lucide-react";
import { getSocket } from "../services/socket.js";

export default function MeetingRoom() {
  const { meetingId } = useParams();
  const navigate = useNavigate();
  const [mic, setMic] = useState(true);
  const [camera, setCamera] = useState(true);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    const socket = getSocket();
    socket.connect();
    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.disconnect();
    };
  }, []);
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* clipboard permission may be blocked */
    }
  }
  return (
    <main className="flex min-h-screen flex-col bg-[#0b1020] text-white">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-7">
        <div>
          <p className="font-extrabold tracking-tight">
            meetly<span className="text-violet-400">.</span>
          </p>
          <p className="mt-1 text-xs text-slate-400">Room: {meetingId}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span
            className={`h-2 w-2 rounded-full ${connected ? "bg-emerald-400" : "bg-amber-400"}`}
          />
          {connected ? "Socket connected" : "Connecting to server..."}
        </div>
        <button
          onClick={copyLink}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm hover:bg-white/10"
        >
          <Copy size={15} /> Copy invite
        </button>
      </header>
      <section className="mx-auto grid w-full max-w-6xl flex-1 content-center gap-3 p-4 sm:p-7 lg:grid-cols-[1fr_260px]">
        <div className="grid min-h-[360px] gap-3 sm:min-h-[500px] sm:grid-cols-2">
          <div className="relative grid min-h-[220px] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-700 to-violet-900">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-white/15 text-3xl font-bold">
              Y
            </div>
            <span className="absolute bottom-4 left-4 rounded-lg bg-black/30 px-3 py-2 text-sm">
              You {mic ? "" : "· Muted"}
            </span>
            {!camera && (
              <span className="absolute right-4 top-4 rounded-lg bg-black/40 p-2">
                <VideoOff size={17} />
              </span>
            )}
          </div>
          <div className="relative grid min-h-[220px] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky-800 to-slate-800">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-white/15 text-3xl font-bold">
              G
            </div>
            <span className="absolute bottom-4 left-4 rounded-lg bg-black/30 px-3 py-2 text-sm">
              Guest participant
            </span>
          </div>
        </div>
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 font-bold">
            <Users size={18} /> Participants
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Participant list will appear here when your socket events are
            connected.
          </p>
          <div className="mt-5 rounded-xl bg-white/5 p-3 text-sm">
            You · Host
          </div>
        </aside>
      </section>
      <footer className="flex flex-wrap items-center justify-center gap-3 border-t border-white/10 px-4 py-5">
        <button
          onClick={() => setMic(!mic)}
          aria-label="Toggle microphone"
          className={`rounded-xl p-4 ${mic ? "bg-white/10 hover:bg-white/20" : "bg-rose-600"}`}
        >
          {mic ? <Mic /> : <MicOff />}
        </button>
        <button
          onClick={() => setCamera(!camera)}
          aria-label="Toggle camera"
          className={`rounded-xl p-4 ${camera ? "bg-white/10 hover:bg-white/20" : "bg-rose-600"}`}
        >
          {camera ? <Video /> : <VideoOff />}
        </button>
        <button
          title="Screen sharing needs WebRTC implementation"
          className="rounded-xl bg-white/10 p-4 hover:bg-white/20"
        >
          <MonitorUp />
        </button>
        <button
          title="Chat UI integration pending"
          className="rounded-xl bg-white/10 p-4 hover:bg-white/20"
        >
          <MessageSquare />
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-4 font-bold hover:bg-rose-700"
        >
          <PhoneOff size={19} /> Leave
        </button>
      </footer>
    </main>
  );
}
