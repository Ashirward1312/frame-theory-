import { motion, useReducedMotion } from 'framer-motion'
import Scene from './Scene'
import Header from './Header'
import ServicesBanner from './ServicesBanner'

const ease = [0.2, 0.7, 0.2, 1]
const up = (d = 0) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.9, ease } })

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <>
      <main className="relative h-[100svh] min-h-[700px] overflow-hidden"
        style={{ background: 'radial-gradient(1100px 700px at 62% 38%, #f6fafd 0%, #e4eff7 55%, #d8e7f1 100%)' }}>

        {/* 3D scene */}
        <motion.div className="absolute inset-0 z-[1]" aria-hidden="true"
          initial={reduced ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease }}>
          <Scene reduced={!!reduced} />
        </motion.div>

        {/* floor haze: fades the reflection, adds soft streaks */}
        <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
          <div className="absolute inset-x-0 bottom-0 h-[34%]" style={{ background: 'linear-gradient(to bottom, rgba(228,239,247,0) 0%, rgba(230,240,247,.85) 55%, #e8f1f8 100%)' }} />
          <div className="absolute inset-x-0 top-[70%] h-px bg-white/60 blur-[1px]" />
          <div className="absolute left-[44%] top-[76%] h-[18%] w-10 bg-white/50 blur-2xl" />
          <div className="absolute left-[58%] top-[78%] h-[16%] w-24 bg-ice-blue/30 blur-3xl" />
          <div className="absolute left-[76%] top-[39%] hidden h-[20%] w-px bg-wine/20 md:block" />
          {[['83%', '26%'], ['81%', '58%']].map(([l, t], i) => (
            <span key={i} className="drift absolute size-1 rounded-full bg-wine-2" style={{ left: l, top: t, animationDelay: `${i * 2}s` }} />
          ))}
        </div>

        {/* content */}
        <div className="relative z-10 flex h-full flex-col px-[5vw]">
          <section className="flex flex-1 flex-col justify-center pb-[8vh] pt-[15vh]">
            <motion.div {...up(0.4)} className="mb-[3vh] flex items-center gap-4 text-[0.68rem] tracking-[0.3em] text-wine/85">
              FRAME THEORY SOCIALS <span className="h-px w-10 bg-wine/60" />
            </motion.div>

            <h1 className="headline uppercase leading-[0.86] tracking-[-0.015em]" style={{ fontSize: 'clamp(3.4rem, min(6.1vw, 11vh), 7.5rem)' }}>
              {['WE TURN', 'ATTENTION', 'INTO'].map((l, i) => (
                <span key={l} className="block overflow-hidden pb-[0.04em]">
                  <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, ease, delay: 0.5 + i * 0.1 }}>
                    {l}{l === 'INTO' && <> <span className="text-ice-blue">IMPACT.</span></>}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p {...up(1)} className="mt-[5vh] max-w-[23rem] text-[clamp(0.9rem,1.05vw,1.05rem)] leading-[1.65] text-wine/85">
              Creative strategy, social storytelling and digital experiences designed for brands that want to be remembered.
            </motion.p>

            <motion.div {...up(1.1)} id="contact" className="mt-[4vh] flex flex-wrap gap-3">
              <a href="#" className="group flex items-center gap-3 rounded-full bg-wine px-7 py-3.5 text-[0.68rem] font-semibold tracking-[0.1em] text-white shadow-[0_16px_30px_-14px_rgba(90,11,34,.8)] transition hover:-translate-y-0.5 hover:bg-wine-2">
                START A PROJECT <span className="transition-transform group-hover:translate-x-1"><Arrow /></span>
              </a>
              <a href="#" className="rounded-full border border-wine/70 px-7 py-3.5 text-[0.68rem] font-semibold tracking-[0.1em] transition hover:bg-wine hover:text-white">VIEW OUR WORK</a>
            </motion.div>

          </section>
        </div>
      </main>
      <ServicesBanner />
    </>
  )
}
