import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { card, cardHover } from '@/lib/styles'

const EASE = [0.16, 1, 0.3, 1] as const

const TRAITS = [
  { icon: '{ }', label: 'Clean Code', desc: 'Readable, maintainable, well-structured' },
  { icon: '⬆', label: 'Scalability First', desc: 'Systems designed to grow' },
  { icon: '⚡', label: 'Deep Debugger', desc: 'Root cause, not surface fixes' },
  { icon: '⚙', label: 'Backend Focused', desc: 'APIs, data, server architecture' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader
          num="01"
          label="About"
          title={<>The engineer<br /><span style={{ background: 'linear-gradient(135deg, #22D3EE, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>behind the code.</span></>}
        />

        {/* Two-column: photo left, content right */}
        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '64px', alignItems: 'start', marginBottom: '48px' }}>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ position: 'relative' }}
          >
            {/* Glow */}
            <div style={{ position: 'absolute', inset: '-16px', background: 'radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)', borderRadius: '24px', filter: 'blur(20px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(34,211,238,0.15)', boxShadow: '0 0 40px rgba(34,211,238,0.06), 0 24px 48px rgba(0,0,0,0.4)' }}>
              <img
                src="/bhargav.jpeg"
                alt="Bhargav Vaka"
                style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              {/* Bottom fade */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, #060D1A 0%, rgba(6,13,26,0.6) 60%, transparent 100%)' }} />
              {/* Location badge */}
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: 'rgba(6,13,26,0.85)', border: '1px solid rgba(34,211,238,0.2)', backdropFilter: 'blur(8px)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22D3EE', display: 'block', boxShadow: '0 0 6px #22D3EE' }} />
                <span style={{ fontSize: '11px', color: '#22D3EE', fontFamily: 'monospace' }}>Hyderabad, India</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <p style={{ fontSize: '16px', color: 'rgba(148,163,184,1)', lineHeight: 1.8, marginBottom: '32px', letterSpacing: '-0.01em' }}>
              I'm a 2nd-year Computer Science student at Malla Reddy University, Hyderabad.
              My focus is backend engineering — designing APIs, modeling data, and building systems
              that hold up under real-world conditions.
            </p>
            <p style={{ fontSize: '16px', color: 'rgba(148,163,184,1)', lineHeight: 1.8, marginBottom: '32px', letterSpacing: '-0.01em' }}>
              I'm drawn to the parts of software most people don't see: architecture decisions,
              error handling strategies, performance trade-offs. I care about code that's
              maintainable six months from now, not just code that ships today.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {['Backend Architecture', 'API Design', 'System Thinking', 'AI Applications'].map(t => (
                <span key={t} style={{ fontSize: '11px', fontFamily: 'monospace', color: '#22D3EE', border: '1px solid rgba(34,211,238,0.2)', background: 'rgba(34,211,238,0.05)', padding: '6px 12px', borderRadius: '999px' }}>{t}</span>
              ))}
            </div>

            {/* Education */}
            <div style={{ ...card, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>B.Tech — Computer Science & Engineering</div>
                <div style={{ fontSize: '12px', color: 'rgba(100,116,139,1)', marginTop: '3px' }}>Malla Reddy University · 2nd Year</div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>7.41</div>
                <div style={{ fontSize: '10px', color: '#22D3EE', fontFamily: 'monospace', marginTop: '2px' }}>CGPA</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* How I work — 4 traits */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {TRAITS.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
              style={{ ...card, padding: '20px' }}
              {...cardHover}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22D3EE', fontSize: '12px', fontFamily: 'monospace', marginBottom: '12px' }}>
                {t.icon}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{t.label}</div>
              <div style={{ fontSize: '12px', color: 'rgba(100,116,139,1)' }}>{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
