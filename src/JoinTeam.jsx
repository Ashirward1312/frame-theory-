import { useState } from 'react'
import { motion } from 'framer-motion'


const ease = [0.2, 0.7, 0.2, 1]
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay: d, ease },
})

const ROLES = [
  { title: 'Social Media Manager', type: 'Full-Time', desc: 'Plan, execute and manage social media strategies for our clients. You understand platforms, trends and what it takes to grow an engaged audience.', req: ['2+ years social media experience', 'Strong copywriting skills', 'Analytics mindset', 'Knowledge of Meta & Instagram'], img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80' },
  { title: 'Graphic Designer', type: 'Full-Time / Freelance', desc: 'Create stunning visual content for brands across social, print and digital. Eye for detail, love of typography, portfolio that speaks for itself.', req: ['Adobe Creative Suite', 'Strong portfolio', 'Social media design', 'Brand identity skills'], img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=80' },
  { title: 'Video Editor & Reels Creator', type: 'Full-Time / Freelance', desc: 'Edit and produce high-quality videos and reels. From raw footage to polished final cuts — you make brands look extraordinary in motion.', req: ['Premiere Pro / DaVinci Resolve', 'Reels & TikTok editing', 'Motion graphics basics', 'Storytelling instinct'], img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80' },
  { title: 'Content Photographer', type: 'Freelance / Project', desc: 'Capture product, lifestyle and editorial content for our brand clients. Creative vision and technical precision on every shoot.', req: ['Professional camera equipment', 'Product & lifestyle photography', 'Lightroom / Photoshop', 'Creative vision'], img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Brand Strategist', type: 'Full-Time', desc: 'Work with brands to define identity, positioning and communication strategy. You think in frameworks and translate strategy into creative direction.', req: ['3+ years brand strategy', 'Strong presentations', 'Market research', 'Creative industry background'], img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80' },
]

const PERKS = [
  { icon: '🎨', title: 'Creative Freedom', desc: 'Work with ambitious brands on projects you\'ll be proud of.' },
  { icon: '🌍', title: 'Remote Friendly', desc: 'Work from wherever you do your best thinking.' },
  { icon: '📈', title: 'Grow With Us', desc: 'We\'re scaling fast — grow your career as we grow.' },
  { icon: '💡', title: 'Team Culture', desc: 'A small, tight-knit team that values every voice.' },
]

// Updated Color Theme (White/Grey + Burgundy + Ice Blue mix)
const colors = {
  burgundy: '#5a0b22',
  ice: '#8db4d3',
  ink: '#0f172a',
  text: '#334155',
  muted: '#64748b',
  white: '#ffffff',
  border: 'rgba(255,255,255,0.14)',
}

export default function JoinTeam() {
  const [applied, setApplied] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', role: '', msg: '' })

  function submit(e) {
    e.preventDefault()
    setApplied(form.role || 'Open Application')
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(135deg, #ffffff 0%, #f3f4f6 30%, #f0f7ff 60%, #fff7fa 100%)',
      }}
    >
      {/* ── Animated Background Orbs ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full blur-[120px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(141,180,211,0.55), rgba(90,11,34,0.22), rgba(255,255,255,0))',
          }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -left-1/4 -bottom-1/4 h-80 w-80 rounded-full blur-[110px]"
          style={{
            background:
              'linear-gradient(45deg, rgba(90,11,34,0.20), rgba(141,180,211,0.35), rgba(255,255,255,0))',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full blur-[100px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(90,11,34,0.16), rgba(141,180,211,0.12), rgba(255,255,255,0))',
          }}
        />
      </div>

      {/* ── Premium Hero ── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-12 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <div
            className="h-[1px] w-8"
            style={{ background: `linear-gradient(90deg, transparent, ${colors.ice})` }}
          />
          <p className="text-[10px] font-bold tracking-[0.4em]" style={{ color: colors.burgundy }}>
            JOIN OUR TEAM
          </p>
          <div
            className="h-[1px] w-8"
            style={{ background: `linear-gradient(270deg, transparent, ${colors.ice})` }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="text-center text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.04em]"
          style={{
            background: `linear-gradient(135deg, ${colors.ink} 0%, ${colors.burgundy} 55%, ${colors.ice} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          BUILD BRANDS
          <br />
          WITH{' '}
          <motion.span
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            className="bg-[200%] text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.burgundy}, ${colors.ice}, ${colors.burgundy})`,
            }}
          >
            US
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-600 md:text-xl"
        >
          We&apos;re a growing creative agency looking for passionate people. If you want to work on exciting projects with ambitious brands — this is your place.
        </motion.p>
      </section>

      {/* ── Perks ── */}
      <section className="border-t border-[#8db4d3]/20 py-16" style={{ background: '#e6f0f7' }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.p {...fadeUp()} className="text-[10px] font-bold tracking-[0.34em] text-[#8db4d3]">WHY FT SOCIALS</motion.p>
          <motion.h2 {...fadeUp(0.1)} className="mt-4 text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#5a0b22]">
            MORE THAN A JOB.
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.07)}
                className="rounded-2xl bg-white border border-[#8db4d3]/20 p-7 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-base font-extrabold text-[#5a0b22]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a0b22]/55">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <motion.p {...fadeUp()} className="text-[10px] font-bold tracking-[0.34em] text-[#8db4d3]">OPEN POSITIONS</motion.p>
        <motion.h2 {...fadeUp(0.1)} className="mt-4 text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#5a0b22] mb-10">
          WE'RE HIRING.
        </motion.h2>
        <div className="space-y-5">
          {ROLES.map((r, i) => (
            <motion.div key={r.title} {...fadeUp(i * 0.05)}
              className="group grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-2xl bg-white border border-[#8db4d3]/20 shadow-sm hover:shadow-lg hover:shadow-[#5a0b22]/8 transition-all duration-500">
              <div className="md:col-span-3 overflow-hidden">
                <img src={r.img} alt={r.title} loading="lazy"
                  className="h-48 w-full object-cover md:h-full transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="md:col-span-9 p-7 md:p-9 flex flex-col justify-between">
                <div>
                  <span className="rounded-full bg-[#8db4d3]/15 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#8db4d3]">{r.type.toUpperCase()}</span>
                  <h3 className="mt-3 text-xl font-extrabold text-[#5a0b22]">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5a0b22]/60">{r.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.req.map(req => (
                      <li key={req} className="rounded-full border border-[#8db4d3]/30 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#5a0b22]/60">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#apply" onClick={() => setForm(f => ({ ...f, role: r.title }))}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#5a0b22] px-6 py-2.5 text-[11px] font-bold tracking-[0.14em] text-white shadow-md shadow-[#5a0b22]/20 transition hover:-translate-y-0.5 hover:bg-[#7d1230]">
                  APPLY NOW →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Apply Form ── */}
      <section id="apply" className="border-t border-[#8db4d3]/20 py-20" style={{ background: '#e6f0f7' }}>
        <div className="mx-auto max-w-2xl px-6 md:px-12">
          <motion.p {...fadeUp()} className="text-[10px] font-bold tracking-[0.34em] text-[#8db4d3]">GET IN TOUCH</motion.p>
          <motion.h2 {...fadeUp(0.1)} className="mt-4 text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#5a0b22] mb-8">
            APPLY NOW.
          </motion.h2>

          {applied ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease }}
              className="rounded-2xl bg-white border border-[#8db4d3]/20 p-10 text-center shadow-sm">
              <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-[#5a0b22] text-white">
                <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-extrabold text-[#5a0b22]">Application Received!</h3>
              <p className="mt-3 text-sm text-[#5a0b22]/60">Thanks for applying for <strong>{applied}</strong>. We'll get back to you within 3–5 working days.</p>
            </motion.div>
          ) : (
            <motion.form {...fadeUp(0.2)} onSubmit={submit}
              className="rounded-2xl bg-white border border-[#8db4d3]/20 p-8 shadow-sm space-y-5">
              {[
                { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'you@example.com' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-[11px] font-bold tracking-[0.16em] text-[#5a0b22]/70 mb-2">{f.label.toUpperCase()}</label>
                  <input type={f.type} required placeholder={f.placeholder} value={form[f.key]}
                    onChange={e => setForm(x => ({ ...x, [f.key]: e.target.value }))}
                    className="w-full rounded-xl border border-[#8db4d3]/30 bg-[#f0f7fc] px-4 py-3 text-sm text-[#5a0b22] placeholder:text-[#5a0b22]/30 outline-none focus:border-[#5a0b22]/40 transition" />
                </div>
              ))}
              <div>
                <label className="block text-[11px] font-bold tracking-[0.16em] text-[#5a0b22]/70 mb-2">ROLE YOU'RE APPLYING FOR</label>
                <select value={form.role} onChange={e => setForm(x => ({ ...x, role: e.target.value }))}
                  className="w-full rounded-xl border border-[#8db4d3]/30 bg-[#f0f7fc] px-4 py-3 text-sm text-[#5a0b22] outline-none focus:border-[#5a0b22]/40 transition">
                  <option value="">Select a role...</option>
                  {ROLES.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                  <option value="Open Application">Open Application</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-[0.16em] text-[#5a0b22]/70 mb-2">TELL US ABOUT YOURSELF</label>
                <textarea required rows={4} placeholder="Why do you want to join FT Socials? Share links to your work..."
                  value={form.msg} onChange={e => setForm(x => ({ ...x, msg: e.target.value }))}
                  className="w-full rounded-xl border border-[#8db4d3]/30 bg-[#f0f7fc] px-4 py-3 text-sm text-[#5a0b22] placeholder:text-[#5a0b22]/30 outline-none focus:border-[#5a0b22]/40 transition resize-none" />
              </div>
              <button type="submit"
                className="w-full rounded-full bg-[#5a0b22] py-4 text-[11px] font-bold tracking-[0.16em] text-white shadow-lg shadow-[#5a0b22]/20 transition hover:-translate-y-0.5 hover:bg-[#7d1230]">
                SUBMIT APPLICATION →
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  )
}
