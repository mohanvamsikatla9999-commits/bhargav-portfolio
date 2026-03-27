import { motion } from 'framer-motion'

const STATS = [
  { value: '200+', label: 'Problems Solved' },
  { value: '8+', label: 'Projects Built' },
  { value: 'Backend', label: 'Focused' },
  { value: 'Systems', label: 'Thinker' },
]

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: EASE },
}

export default function About() {
  return (
    <section id="about" style={{ padding: '160px 24px', background: '#000' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

        <motion.p {...fadeUp} style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '48px' }}>
          About
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, letterSpacing: '-0.02em', marginBottom: '100px' }}>
          I'm a 2nd-year Computer Science student at Malla Reddy University, Hyderabad.
          I focus on backend engineering — designing APIs, modeling data, and building systems
          that hold up under real-world conditions. I care about code that's maintainable
          six months from now, not just code that ships today.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: '40px 24px', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '8px', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
