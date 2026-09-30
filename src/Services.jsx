import { motion } from 'framer-motion'

const ease = [0.2, 0.7, 0.2, 1]
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay: d, ease },
})

const SERVICES = [
  { no: '01', title: 'Website Design & Development', desc: 'Stunning, conversion-focused websites built to represent your brand at its best. From landing pages to full e-commerce, every pixel designed with purpose.', tags: ['UI/UX Design', 'Development', 'SEO', 'CMS'], img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80' },
  { no: '02', title: 'Graphic Design & Editing', desc: 'Visual assets that tell your story — from social media graphics and reels covers to presentation decks and marketing collateral with a premium finish.', tags: ['Social Creatives', 'Reels Covers', 'Presentations', 'Brochures'], img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80' },
  { no: '03', title: 'Branding & Identity', desc: 'A brand is more than a logo. We craft complete visual identities — logos, colour palettes, typography systems and brand guidelines built to last.', tags: ['Logo Design', 'Brand Guidelines', 'Typography', 'Colour Systems'], img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80' },
  { no: '04', title: 'Packaging Design', desc: 'Stand out on shelves and in unboxing moments. We design packaging that balances aesthetics with functionality — making your product impossible to ignore.', tags: ['Box Design', 'Label Design', 'Unboxing', 'Print-Ready Files'], img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80' },
  { no: '05', title: 'Photography & Shoot Production', desc: 'Professional product, lifestyle and editorial photography. From concept to final delivery — shoots that make your brand look extraordinary.', tags: ['Product Shoot', 'Lifestyle', 'Editorial', 'Post-Production'], img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80' },
  { no: '06', title: 'Social Media Management', desc: 'End-to-end strategy, content creation and community management. We grow your audience with content that converts and communities that engage.', tags: ['Strategy', 'Content Creation', 'Community', 'Analytics'], img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80' },
  { no: '07', title: 'Video Production & Reels', desc: "From brand films to scroll-stopping reels, we handle scripting, production and post-production for video content built for today's platforms.", tags: ['Brand Films', 'Reels', 'Short-Form', 'Motion Graphics'], img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80' },
  { no: '08', title: 'Advertising Campaigns', desc: 'Data-driven, creatively led campaigns across Meta, Google, and beyond. We build campaigns that convert attention into measurable impact.', tags: ['Meta Ads', 'Google Ads', 'Strategy', 'Creative Direction'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
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

export default function Services() {
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
            WHAT WE DO
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
          SERVICES
          <br />
          <motion.span
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            className="bg-[200%] text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.burgundy}, ${colors.ice}, ${colors.burgundy})`,
            }}
          >
            FOR IMPACT
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-600 md:text-xl"
        >
          From brand identity to social content and digital experiences — everything you need to build a{' '}
          <span className="font-semibold" style={{ color: colors.burgundy }}>
            legendary
          </span>{' '}
          brand.
        </motion.p>
      </section>

      {/* FIX: cards top padding kam + section start immediately after hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-12 md:pt-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.no}
              {...fadeUp(i * 0.04)}
              className="group relative overflow-hidden rounded-2xl border border-[#8db4d3]/25 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5a0b22]/10"
            >
              {/* Top image banner */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0b22]/55 via-[#5a0b22]/10 to-transparent opacity-90" />

                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-black tracking-[0.22em] text-white backdrop-blur">
                    {s.no}
                  </span>
                  <span className="h-px w-10 bg-[#8db4d3]/70" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <h2 className="text-xl font-extrabold tracking-[-0.01em] text-[#5a0b22] md:text-2xl">
                  {s.title}
                </h2>

                <p className="mt-3 text-[0.95rem] leading-relaxed text-[#5a0b22]/60">
                  {s.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#8db4d3]/40 bg-[#8db4d3]/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#5a0b22]"
                    >
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>

                <a
                  href="mailto:hello@ftsocials.com"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#8db4d3] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  ENQUIRE NOW →
                </a>
              </div>

              {/* subtle corner accent */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8db4d3]/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="border-t border-[#8db4d3]/20 py-20" style={{ background: '#e6f0f7' }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.p {...fadeUp()} className="text-[10px] font-bold tracking-[0.34em] text-[#8db4d3]">
            HOW WE WORK
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#5a0b22]"
          >
            OUR PROCESS.
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn your brand, goals and audience in depth.' },
              { step: '02', title: 'Strategy', desc: 'A clear plan, creative direction and timeline.' },
              { step: '03', title: 'Creation', desc: 'Our team executes with craft and precision.' },
              { step: '04', title: 'Deliver', desc: 'Final assets reviewed, refined and delivered.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                {...fadeUp(i * 0.08)}
                className="group relative overflow-hidden rounded-2xl border border-[#8db4d3]/20 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#5a0b22]/10"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[2.2rem] font-extrabold text-[#8db4d3]/35 leading-none">
                    {s.step}
                  </div>
                  <div className="h-9 w-9 rounded-full border border-[#8db4d3]/35 bg-[#8db4d3]/10" />
                </div>

                <h3 className="mt-4 text-base font-extrabold text-[#5a0b22]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a0b22]/55">{s.desc}</p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#8db4d3]/0 via-[#8db4d3]/60 to-[#8db4d3]/0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}