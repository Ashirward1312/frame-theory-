import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#5a0b22] via-[#5a0b22] to-[#0f172a]">
      {/* Top highlight line (ice blue) */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8db4d3]/55 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-[#8db4d3]/35">
                <span className="text-[0.7rem] font-black tracking-wider text-[#8db4d3]">
                  FT
                </span>
              </div>
              <span className="text-base font-black tracking-[0.18em] text-white">
                SOCIALS
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Creative strategy, social storytelling and digital experiences for brands that want to be remembered.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: 'IG', href: '#' },
                { label: 'LI', href: '#' },
                { label: 'BE', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[10px] font-black tracking-widest text-[#8db4d3] transition hover:bg-white/15 hover:-translate-y-0.5"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Pages */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="md:col-span-2"
          >
            <h4 className="text-[10px] font-black tracking-[0.22em] text-[#8db4d3] uppercase mb-5">
              Pages
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Our Work', to: '/our-work' },
                { label: 'Services', to: '/services' },
                { label: 'Join Us', to: '/join-team' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="md:col-span-3"
          >
            <h4 className="text-[10px] font-black tracking-[0.22em] text-[#8db4d3] uppercase mb-5">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                'Website Design',
                'Branding & Identity',
                'Content Creation',
                'Social Media',
                'Photography',
                'Video Production',
              ].map((s) => (
                <Link
                  key={s}
                  to="/services"
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  {s}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="md:col-span-3"
          >
            <h4 className="text-[10px] font-black tracking-[0.22em] text-[#8db4d3] uppercase mb-5">
              Get in Touch
            </h4>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@ftsocials.com"
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                hello@ftsocials.com
              </a>
              <a
                href="tel:+919876543210"
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                +91 98765 43210
              </a>
              <p className="text-sm text-white/40">India</p>
            </div>

            <a
              href="mailto:hello@ftsocials.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#8db4d3]/40 bg-[#8db4d3]/15 px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] text-white transition hover:bg-[#8db4d3]/25 hover:-translate-y-0.5"
            >
              LET&apos;S TALK →
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45">
            © 2026 Frame Theory Socials. All rights reserved.
          </p>
          <p className="text-xs text-white/35 tracking-[0.12em]">
            CRAFTED WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  )
}