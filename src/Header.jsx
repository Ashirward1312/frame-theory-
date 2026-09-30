import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const ease = [0.2, 0.7, 0.2, 1]

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg viewBox="0 0 40 28" className="h-6 w-9 fill-wine" aria-hidden="true">
        <path d="M0 0h16v6H7v4h8v6H7v12H0zM17 0h23v7H32v21h-7V7h-8z" transform="skewX(-8) translate(3 0)" />
      </svg>
      <span className="text-[1.15rem] font-normal tracking-[0.14em]">SOCIALS</span>
    </Link>
  )
}

const NAV_LINKS = [
  { label: 'WORK', to: '/our-work' },
  { label: 'SERVICES', to: '/services' },
  { label: 'JOIN US', to: '/join-team' },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-[5vw] pointer-events-none">
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="flex items-center justify-between pt-[3vh] md:pt-[4vh] pointer-events-auto"
      >
        <Logo />

        <nav className="hidden rounded-full border border-wine/10 bg-white/30 px-2 py-1.5 backdrop-blur-md md:flex items-center gap-1 shadow-sm">
          {/* HOME — distinct pill button */}
          <Link
            to="/"
            className={`rounded-full px-4 py-1.5 text-[0.66rem] font-bold tracking-[0.16em] transition-all ${
              pathname === '/'
                ? 'bg-wine text-white shadow-md shadow-wine/30'
                : 'text-wine/70 hover:bg-wine/10 hover:text-wine'
            }`}
          >
            HOME
          </Link>

          {/* Divider */}
          <span className="h-4 w-px bg-wine/20 mx-1" />

          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-full px-4 py-1.5 text-[0.66rem] font-semibold tracking-[0.16em] transition-all ${
                pathname === to
                  ? 'bg-wine/10 text-wine font-bold'
                  : 'text-wine/60 hover:text-wine hover:bg-wine/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:hello@ftsocials.com"
          className="flex items-center gap-3 rounded-full bg-wine px-[1.7rem] py-[0.8rem] text-[0.66rem] font-semibold tracking-[0.1em] text-white shadow-lg shadow-wine/20 transition hover:-translate-y-0.5 hover:bg-wine-2 hover:shadow-wine/30"
        >
          LET'S TALK <Arrow />
        </a>
      </motion.header>
    </div>
  )
}
