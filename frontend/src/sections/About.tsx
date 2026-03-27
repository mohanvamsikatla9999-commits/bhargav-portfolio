import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { card, cardHover } from '@/lib/styles'

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

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>

          {/* Big card — mindset */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ ...card, gridColumn: 'span 2', padding: '32px', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            {...cardHover}
          >
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#22D3EE', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>Engineering Mindset</div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '12px' }}>
                I focus on building systems,<br />not just interfaces.
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(148,163,184,1)', lineHeight: 1.7 }}>
                I'm drawn to the parts of software most people don't see — architecture decisions, error handling strategies, performance trade-offs.
                I care about code that's maintainable six months from now, not just code that ships today.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              {['Backend Architecture', 'API Design', 'System Thinking'].map(t => (
                <span key={t} style={{ fontSize: '11px', fontFamily: 'monospace', color: '#22D3EE', border: '1px solid rgba(34,211,238,0.2)', background: 'rgba(34,211,238,0.05)', padding: '6px 12px', borderRadius: '999px' }}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ ...card, padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            {...cardHover}
          >
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>Education</div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>7.41</div>
              <div style={{ color: '#22D3EE', fontSize: '11px', fontFamily: 'monospace', marginBottom: '12px', marginTop: '4px' }}>CGPA</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>B.Tech — CSE</div>
              <div style={{ fontSize: '12px', color: 'rgba(100,116,139,1)', marginTop: '4px' }}>Malla Reddy University</div>
              <div style={{ fontSize: '11px', color: 'rgba(71,85,105,1)', marginTop: '2px' }}>Hyderabad · 2nd Year</div>
            </div>
            <div style={{ marginTop: '16px' }}>
              <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: '50%' }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4 }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, #22D3EE, #0891b2)', borderRadius: '999px' }} />
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(71,85,105,1)', marginTop: '6px' }}>Year 2 of 4</div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ ...card, padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            {...cardHover}
          >
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>Location</div>
            <div>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📍</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>Hyderabad</div>
              <div style={{ fontSize: '13px', color: 'rgba(100,116,139,1)' }}>India</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span style={{ fontSize: '12px', color: 'rgba(100,116,139,1)' }}>Available remotely</span>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ ...card, padding: '28px' }}
            {...cardHover}
          >
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>Interests</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Distributed Systems', 'AI Applications', 'Open Source'].map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(148,163,184,1)' }}>
                  <span style={{ color: '#22D3EE', fontSize: '12px' }}>›</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How I work */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ ...card, gridColumn: 'span 2', padding: '28px' }}
            {...cardHover}
          >
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>How I Work</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {TRAITS.map(t => (
                <div key={t.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22D3EE', fontSize: '12px', fontFamily: 'monospace', flexShrink: 0 }}>
                    {t.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{t.label}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(100,116,139,1)', marginTop: '2px' }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
