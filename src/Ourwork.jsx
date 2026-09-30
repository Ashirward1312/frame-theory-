import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const ease = [0.2, 0.7, 0.2, 1]

/* ─── Projects ─── */
const PROJECTS = [
  { id: 1, title: 'VELORA', cat: 'Campaigns', tag: 'Fashion', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80', desc: 'Reframing modern fashion through editorial storytelling.' },
  { id: 2, title: 'NOIRÉ', cat: 'Branding', tag: 'Beauty', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80', desc: 'Luxury skincare identity and content system.' },
  { id: 3, title: 'CASA FORM', cat: 'Websites', tag: 'Real Estate', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', desc: 'Architectural storytelling for a modern home brand.' },
  { id: 4, title: 'ORA JEWELS', cat: 'Campaigns', tag: 'Jewellery', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80', desc: 'A high-gloss product narrative built for the feed.' },
  { id: 5, title: 'BREW THEORY', cat: 'Content', tag: 'Food', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80', desc: 'Coffee culture framed as an editorial series.' },
  { id: 6, title: 'URBAN MOTORS', cat: 'Video', tag: 'Automotive', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80', desc: 'Launch film and short-form cutdowns.' },
  { id: 7, title: 'MEDORA', cat: 'Branding', tag: 'Healthcare', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', desc: 'Clean wellness branding with a soft digital voice.' },
  { id: 8, title: 'HAVEN', cat: 'Social Media', tag: 'Real Estate', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80', desc: 'Luxury property storytelling and reels templates.' },
  { id: 9, title: 'VOLTIX', cat: 'Websites', tag: 'Technology', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', desc: 'Product-first visuals with premium UI rhythm.' },
  { id: 10, title: 'LUMI', cat: 'Social Media', tag: 'FMCG', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80', desc: 'Lifestyle content with confident typography.' },
  { id: 11, title: 'AURA', cat: 'Content', tag: 'Beauty', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80', desc: 'Product worlds designed for thumb-stopping frames.' },
  { id: 12, title: 'NORTH HOUSE', cat: 'Photography', tag: 'Hospitality', img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80', desc: 'Luxury stay visuals and warm editorial direction.' },
]

const CATS = ['ALL', 'Branding', 'Campaigns', 'Content', 'Social Media', 'Photography', 'Video', 'Websites']

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

export default function OurWork() {
  const [active, setActive] = useState('ALL')

  const filtered = useMemo(
    () => (active === 'ALL' ? PROJECTS : PROJECTS.filter((p) => p.cat === active)),
    [active]
  )

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
            OUR PORTFOLIO
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
          OUR
          <br />
          <motion.span
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            className="bg-[200%] text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.burgundy}, ${colors.ice}, ${colors.burgundy})`,
            }}
          >
            WORK
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-600 md:text-xl"
        >
          Campaigns, brands, content and experiences built for{' '}
          <span className="font-semibold" style={{ color: colors.burgundy }}>
            legendary
          </span>{' '}
          brands that want to be seen, remembered and shared.
        </motion.p>

        {/* Premium Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-14 grid grid-cols-3 gap-4 rounded-2xl border bg-white/45 p-8 backdrop-blur-lg md:gap-6 md:p-10 shadow-lg"
          style={{
            borderColor: 'rgba(90,11,34,0.12)',
            boxShadow: '0 18px 50px rgba(15,23,42,0.08)',
          }}
        >
          {[
            { number: '500+', label: 'Brands' },
            { number: '12K+', label: 'Campaigns' },
            { number: '8+', label: 'Industries' },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="text-center">
              <div
                className="text-3xl font-black text-transparent md:text-4xl bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.burgundy}, ${colors.ice})`,
                }}
              >
                {stat.number}
              </div>
              <p className="mt-2 text-xs font-bold tracking-[0.16em] uppercase text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Premium Filter ── */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="no-scrollbar flex gap-3 overflow-x-auto pb-2"
        >
          {CATS.map((c, i) => (
            <motion.button
              key={c}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              onClick={() => setActive(c)}
              className={`group relative whitespace-nowrap rounded-full px-6 py-3 text-[11px] font-bold tracking-[0.16em] transition-all ${
                active === c
                  ? 'text-white shadow-lg'
                  : 'border text-slate-700 hover:text-[#5a0b22] bg-white/55'
              }`}
              style={
                active === c
                  ? {
                      background: `linear-gradient(90deg, ${colors.burgundy}, ${colors.ice})`,
                      boxShadow: '0 14px 30px rgba(90,11,34,0.16)',
                    }
                  : {
                      borderColor: 'rgba(90,11,34,0.14)',
                    }
              }
            >
              {c}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* ── Premium Grid ── */}
      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-white/60 backdrop-blur-md transition-all duration-300 shadow-lg"
                style={{
                  borderColor: 'rgba(90,11,34,0.12)',
                  boxShadow: '0 18px 45px rgba(15,23,42,0.08)',
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(90,11,34,0.14)',
                }}
              >
                {/* Image Container */}
                <div
                  className="relative overflow-hidden h-72"
                  style={{
                    background: `linear-gradient(135deg, rgba(141,180,211,0.35), rgba(90,11,34,0.14))`,
                  }}
                >
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  {/* Tags */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.18em] border"
                      style={{
                        color: colors.burgundy,
                        background: 'rgba(141,180,211,0.20)',
                        borderColor: 'rgba(90,11,34,0.14)',
                      }}
                    >
                      {p.cat.toUpperCase()}
                    </motion.span>
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-slate-400">
                      {p.tag.toUpperCase()}
                    </span>
                  </div>

                  {/* Title */}
                  <motion.h3 className="mt-3 text-2xl font-black tracking-[-0.02em] text-slate-900 md:text-3xl">
                    {p.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors">
                    {p.desc}
                  </p>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.18em]"
                    style={{ color: colors.burgundy }}
                  >
                    <span>VIEW PROJECT</span>
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Hover Border Glow */}
                <div
                  className="absolute inset-0 rounded-2xl border transition-colors duration-300"
                  style={{
                    borderColor: 'rgba(141,180,211,0)',
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(141,180,211,0.30)',
                  }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Premium CTA Section ── */}
      <section
        className="relative overflow-hidden border-t py-32"
        style={{
          borderColor: 'rgba(90,11,34,0.12)',
          background:
            'linear-gradient(135deg, rgba(141,180,211,0.22) 0%, rgba(255,255,255,0.75) 40%, rgba(90,11,34,0.10) 100%)',
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-1/3 -top-1/3 h-96 w-96 rounded-full blur-[150px]"
          style={{
            background: `linear-gradient(135deg, rgba(141,180,211,0.55), rgba(90,11,34,0.25))`,
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.4em]"
            style={{ color: colors.burgundy }}
          >
            READY TO START?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-[clamp(2.2rem,5vw,4rem)] font-black leading-tight tracking-[-0.03em] text-slate-900"
          >
            YOUR BRAND DESERVES
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${colors.burgundy}, ${colors.ice})`,
              }}
            >
              A BETTER FRAME.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600"
          >
            Let&apos;s create something people remember.
          </motion.p>

          <motion.a
            href="mailto:hello@ftsocials.com"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full px-10 py-5 text-[11px] font-bold tracking-[0.18em] text-white shadow-2xl transition-all hover:shadow-2xl"
            style={{
              background: `linear-gradient(90deg, ${colors.burgundy}, ${colors.ice})`,
              boxShadow: '0 22px 55px rgba(90,11,34,0.18)',
            }}
          >
            START A PROJECT
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </motion.svg>
          </motion.a>
        </div>
      </section>
    </div>
  )
}