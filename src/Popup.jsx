import { motion, AnimatePresence } from 'framer-motion'

export default function Popup({ showPopup, setShowPopup }) {
  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/20 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative max-w-sm rounded-3xl border border-white/50 bg-white/80 p-8 text-center shadow-[0_32px_64px_-12px_rgba(90,11,34,0.15)] backdrop-blur-md"
          >
            <button onClick={() => setShowPopup(false)} className="absolute right-5 top-5 text-wine/50 transition hover:text-wine">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-wine/10 text-wine">
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="mb-2 text-lg font-bold tracking-wide text-wine">WELCOME TO FRAME THEORY</h3>
            <p className="mb-6 text-sm leading-relaxed text-wine/70">
              Experience our premium digital strategies designed to turn your attention into impact.
            </p>
            <button onClick={() => setShowPopup(false)} className="w-full rounded-full bg-wine py-3 text-[0.7rem] font-bold tracking-widest text-white shadow-lg shadow-wine/20 transition hover:-translate-y-0.5 hover:bg-wine-2 hover:shadow-wine/30">
              EXPLORE NOW
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
