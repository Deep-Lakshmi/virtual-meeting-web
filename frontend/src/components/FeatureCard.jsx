import { Video, ShieldCheck, Users, MessageCircle } from 'lucide-react'
const icons = [Video, Users, ShieldCheck, MessageCircle]
export default function FeatureCard({ title, description, index = 0 }) {
  const Icon = icons[index % icons.length]
  return <article className="rounded-2xl border border-slate-100 bg-white p-6 soft-shadow">
    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-violet-700"><Icon size={23}/></div>
    <h3 className="font-bold text-lg text-slate-900">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
  </article>
}