import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Copy, Plus, Video, CalendarDays, Clock3, Users, ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import { createMeeting } from '../services/api.js'

export default function Dashboard() {
  const [meetingCode,setMeetingCode] = useState('')
  const [busy,setBusy] = useState(false)
  const [message,setMessage] = useState('')
  const navigate = useNavigate()
  async function startMeeting() {
    setBusy(true); setMessage('')
    try {
      const result = await createMeeting({})
      const id = result.meetingId || result.id || result.meeting?._id || result._id
      if (!id) throw new Error('Meeting created, but no meeting ID was returned. Check the createMeeting API response.')
      navigate(`/meeting/${id}`)
    } catch (err) { setMessage(err.response?.data?.message || err.message || 'Could not create meeting.') }
    finally { setBusy(false) }
  }
  function joinMeeting(e) { e.preventDefault(); if (meetingCode.trim()) navigate(`/meeting/${meetingCode.trim()}`) }
  return <div className="min-h-screen bg-[#f7f8fc]"><Navbar dashboard/><main className="page-shell py-10 sm:py-14">
    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-violet-700">YOUR WORKSPACE</p><h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">Meeting dashboard</h1><p className="mt-2 text-slate-500">Start a new conversation or join an existing room.</p></div><div className="text-sm text-slate-500"><CalendarDays className="mr-2 inline" size={17}/>{new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</div></div>
    <div className="mt-9 grid gap-5 lg:grid-cols-2">
      <section className="rounded-3xl bg-gradient-to-br from-violet-700 to-indigo-600 p-7 text-white sm:p-9"><div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Video/></div><h2 className="text-2xl font-extrabold">Start an instant meeting</h2><p className="mt-2 max-w-sm text-sm leading-6 text-violet-100">Create a room and invite your teammates to join the conversation.</p><button disabled={busy} onClick={startMeeting} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-violet-700 hover:bg-violet-50 disabled:opacity-60"><Plus size={18}/>{busy?'Creating...':'New meeting'}</button></section>
      <section className="rounded-3xl border border-slate-100 bg-white p-7 soft-shadow sm:p-9"><div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700"><Users/></div><h2 className="text-2xl font-extrabold text-slate-900">Join with a code</h2><p className="mt-2 text-sm leading-6 text-slate-500">Enter the meeting ID or room code shared by your host.</p><form onSubmit={joinMeeting} className="mt-7 flex flex-col gap-3 min-[440px]:flex-row"><input value={meetingCode} onChange={e=>setMeetingCode(e.target.value)} placeholder="Enter meeting code" className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"/><button className="rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:bg-slate-800">Join room</button></form></section>
    </div>
    {message && <p className="mt-4 rounded-xl bg-rose-50 p-4 text-sm text-rose-700">{message}</p>}
    <section className="mt-10"><h2 className="text-xl font-extrabold text-slate-900">Quick tips</h2><div className="mt-4 grid gap-4 sm:grid-cols-3">{[['Share your invite','Copy your meeting link and send it to participants.',Copy],['Check your setup','Allow camera and microphone permissions before joining.',Video],['Stay on schedule','Keep your meeting code handy for quick access.',Clock3]].map(([title,desc,Icon])=><div key={title} className="rounded-2xl border border-slate-100 bg-white p-5"><Icon className="text-violet-600"/><h3 className="mt-4 font-bold text-slate-900">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{desc}</p></div>)}</div></section>
  </main></div>
}