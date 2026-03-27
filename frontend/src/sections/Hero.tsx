import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px', textAlign: 'center', background: '#000', position: 'relative' }}>

      {/* Eyebrow */}
      <motion.p {...fade(0.3)} style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>
        Software Engineer · Hyderabad, India
      </motion.p>

      {/* Name */}
      <motion.h1 {...fade(0.45)} style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.92, color: '#fff', marginBottom: '8px' }}>
        Bhargav
      </motion.h1>
      <motion.h1 {...fade(0.55)} style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.92, color: '#fff', marginBottom: '40px' }}>
        Vaka
      </motion.h1>

      {/* Red accent line */}
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '48px', height: '3px', background: '#FF3B30', marginBottom: '40px', transformOrigin: 'left' }}
      />

      {/* Tagline */}
      <motion.p {...fade(0.75)} style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 400, color: 'rgba(255,255,255,0.55)', maxWidth: '520px', lineHeight: 1.6, marginBottom: '56px', letterSpacing: '-0.01em' }}>
        Building scalable backend systems<br />and modern web applications.
      </motion.p>

      {/* CTAs */}
      <motion.div {...fade(0.9)} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects"
          style={{ fontSize: '14px', fontWeight: 600, background: '#FF3B30', color: '#fff', padding: '14px 32px', borderRadius: '6px', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}>
          View Work
        </a>
        <a href="/resume.pdf" download
          style={{ fontSize: '14px', fontWeight: 600, background: 'transparent', color: '#fff', padding: '14px 32px', borderRadius: '6px', textDecoration: 'none', letterSpacing: '-0.01em', border: '1px solid rgba(255,255,255,0.2)', transition: 'border-color 0.2s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'}>
          Resume ↓
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
      </motion.div>
    </section>
  )
}
