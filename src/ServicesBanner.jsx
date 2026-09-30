import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ease = [0.2, 0.7, 0.2, 1]

const CARDS = [
  {
    no: '01',
    slug: '/services/social-media-management',
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 26c3 3 7 4 10 4s7-1 10-4" />
        <path d="M12 20c2-3 5-4 8-4s6 1 8 4" />
        <path d="M14 14c2-2 4-3 6-3s4 1 6 3" />
        <circle cx="20" cy="28" r="1.5" />
      </svg>
    ),
    title: 'Social Media Strategy',
    desc: 'Strategy frameworks that define your voice, content pillars and platform rhythm.',
  },
  {
    no: '02',
    slug: '/services/content-creation',
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="9" y="10" width="22" height="20" rx="4" />
        <path d="M14 20h12" />
        <path d="M14 16h8" />
        <path d="M14 24h10" />
      </svg>
    ),
    title: 'Content Creation',
    desc: 'Scroll-stopping content systems for reels, carousels, stories and paid creatives.',
  },
  {
    no: '03',
    slug: '/services/branding-packaging',
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4V14z" />
        <path d="M16 14h8" />
        <path d="M16 26h8" />
      </svg>
    ),
    title: 'Brand Development',
    desc: 'Identity + messaging that feels premium, consistent and unmistakably you.',
  },
  {
    no: '04',
    slug: '/services/performance-marketing',
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 28l7-7 5 5 8-10" />
        <path d="M10 30h20" />
        <circle cx="30" cy="16" r="2" />
      </svg>
    ),
    title: 'Growth & Campaigns',
    desc: 'Creative testing + performance campaigns built to scale what actually works.',
  },
]

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

export default function ServicesBanner() {
  const reduced = useReducedMotion()

  return (
    <section className="relative w-full overflow-hidden bg-[#f0f7fc]">
      {/* Light Background system */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* base wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f3f7fb] to-[#e6f0f7]" />

        {/* ice glow */}
        <div className="absolute right-[-18%] top-[-22%] size-[52rem] rounded-full bg-[#8db4d3]/22 blur-[130px]" />
        <div className="absolute right-[18%] top-[30%] size-[36rem] rounded-full bg-[#8db4d3]/18 blur-[140px]" />

        {/* burgundy atmos */}
        <div className="absolute left-[-16%] bottom-[-28%] size-[52rem] rounded-full bg-[#5a0b22]/10 blur-[140px]" />

        {/* editorial lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5a0b22]/12 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5a0b22]/10 to-transparent" />

        {/* subtle noise (optional) */}
        <div className="grain absolute inset-0 opacity-[0.06]" />
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-12">
        {/* Left: Editorial block */}
        <motion.div
          variants={fadeUp}
          initial={reduced ? 'show' : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative md:col-span-4 flex flex-col justify-center px-8 py-14 md:px-12 md:py-16 border-b border-[#5a0b22]/10 md:border-b-0 md:border-r md:border-[#5a0b22]/10"
        >
          <p className="flex items-center gap-3 text-[10px] font-bold tracking-[0.34em] text-[#5a0b22]/70">
            OUR SERVICES
            <span className="h-px w-10 bg-[#8db4d3]/70 inline-block" />
          </p>

          <h2 className="mt-7 font-display text-[clamp(2.1rem,3.2vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#5a0b22]">
            Strategy.
            <br />
            Content.
            <br />
            Growth.
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#5a0b22]/60">
            End-to-end social systems designed for modern brands — premium craft, consistent output, measurable impact.
          </p>

          <div className="mt-9 flex items-center gap-3">
            <Link
              to="/services"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#8db4d3]/40 bg-white/70 px-6 py-3 text-[11px] font-bold tracking-[0.14em] text-[#5a0b22] backdrop-blur-md transition hover:bg-white hover:-translate-y-0.5"
            >
              Explore Our Services
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#5a0b22]/45">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#8db4d3]" />
            <span>FRAME THEORY SYSTEM</span>
          </div>
        </motion.div>

        {/* Right: Cards */}
        <motion.div
          variants={parent}
          initial={reduced ? 'show' : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:p-8"
        >
          {CARDS.map((c) => (
            <motion.div key={c.no} variants={fadeUp} className="h-full">
              <Link
                to={c.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#8db4d3]/28 bg-white/70 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#5a0b22]/18 hover:bg-white"
              >
                {/* spotlight hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(70% 70% at 30% 20%, rgba(141,180,211,0.38) 0%, rgba(141,180,211,0.16) 35%, rgba(255,255,255,0) 70%)',
                  }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#5a0b22]/40">{c.no}</span>
                  <span className="text-[11px] font-bold tracking-[0.18em] text-[#5a0b22]/35">FT</span>
                </div>

                <div className="relative z-10 mt-5 text-[#5a0b22]/55 transition-colors duration-300 group-hover:text-[#5a0b22]">
                  {c.icon}
                </div>

                <h3 className="relative z-10 mt-5 text-[1rem] font-extrabold leading-tight tracking-[-0.01em] text-[#5a0b22]">
                  {c.title}
                </h3>

                <p className="relative z-10 mt-3 text-[0.86rem] leading-relaxed text-[#5a0b22]/60">
                  {c.desc}
                </p>

                <div className="relative z-10 mt-auto pt-7">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-[#8db4d3] transition-colors duration-300 group-hover:text-[#5a0b22]">
                    VIEW SERVICE <span className="text-base">→</span>
                  </div>
                </div>

                {/* subtle bottom line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5a0b22]/12 to-transparent opacity-60" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}