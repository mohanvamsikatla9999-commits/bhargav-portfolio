import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { card, cardHover } from '@/lib/styles'

const STATS = [
  { value: '200+', label: 'DSA Problems', sub: 'Arrays, Trees, Graphs, DP' },
  { value: '8+', label: 'Projects Built', sub: 'Production-level patterns' },
  { value: '3+', label: 'Languages', sub: 'TypeScript, Java, Python' },
  { value: '2+', label: 'Years Coding', sub: 'Self-driven learning' },
]

const CERTS = [
  { name: 'Java Programming', issuer: 'NPTEL', year: '2024', color: '#ED8B00' },
  { name: 'Web Development', issuer: 'Coursera', year: '2024', color: '#22D3EE' },
  { name: 'Python Basics', issuer: 'NPTEL', year: '2023', color: '#3776AB' },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader
          num="05"
          label="Experience"
          title={<>Track record<br /><span style={{ background: 'linear-gradient(135deg, #22D3EE, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>in numbers.</span></>}
        />

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ ...card, padding: '28px', textAlign: 'center' }}
              {...cardHover}
            >
              <div style={{ fontSize: '40px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#22D3EE', margin: '6px 0 4px' }}>{s.label}</div>
              <div style={{ fontSize: '11px', color: 'rgba(100,116,139,1)' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ ...card, padding: '32px' }}
          >
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '28px' }}>Timeline</div>
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              <div style={{ position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '1px', background: 'linear-gradient(to bottom, rgba(34,211,238,0.4), rgba(34,211,238,0.1), transparent)' }} />

              <div style={{ position: 'relative', marginBottom: '32px' }}>
                <div style={{ position: 'absolute', left: '-25px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#22D3EE', border: '2px solid #060D1A', boxShadow: '0 0 8px rgba(34,211,238,0.6)' }} />
                <div style={{ fontSize: '11px', color: 'rgba(100,116,139,1)', fontFamily: 'monospace', marginBottom: '4px' }}>2023 — Present</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Personal Projects Developer</div>
                <p style={{ fontSize: '13px', color: 'rgba(148,163,184,1)', lineHeight: 1.7, marginBottom: '12px' }}>
                  Built scalable backend systems and full-stack applications independently. Focused on production-like code quality, clean architecture, and real-world engineering patterns.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Node.js', 'TypeScript', 'React', 'MongoDB'].map(t => (
                    <span key={t} style={{ fontSize: '11px', color: 'rgba(100,116,139,1)', border: '1px solid rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '6px', fontFamily: 'monospace' }}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-25px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(71,85,105,1)', border: '2px solid #060D1A' }} />
                <div style={{ fontSize: '11px', color: 'rgba(100,116,139,1)', fontFamily: 'monospace', marginBottom: '4px' }}>2022 — 2023</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Started CS Journey</div>
                <p style={{ fontSize: '13px', color: 'rgba(148,163,184,1)', lineHeight: 1.7 }}>
                  Began B.Tech at Malla Reddy University. Started with fundamentals — DSA, OOP, and web basics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ ...card, padding: '32px' }}
          >
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '28px' }}>Certifications</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {CERTS.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s' }}
                  {...cardHover}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '3px', height: '36px', borderRadius: '999px', background: cert.color, boxShadow: `0 0 8px ${cert.color}60` }} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{cert.name}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(100,116,139,1)', marginTop: '2px' }}>{cert.issuer}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(71,85,105,1)' }}>{cert.year}</span>
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.1)' }}>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#22D3EE', marginBottom: '4px' }}>Currently Pursuing</div>
              <div style={{ fontSize: '13px', color: 'rgba(203,213,225,1)' }}>System Design & Cloud Fundamentals</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
