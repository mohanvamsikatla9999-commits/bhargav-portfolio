import { motion } from 'framer-motion'

const CERTS = [
  { name: 'Java Programming', issuer: 'NPTEL', year: '2024' },
  { name: 'Web Development', issuer: 'Coursera', year: '2024' },
  { name: 'Python Basics', issuer: 'NPTEL', year: '2023' },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '160px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '80px', textAlign: 'center' }}>
          Experience & Education
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ marginBottom: '64px' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: '16px' }}>2023 — Present</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: '12px' }}>Personal Projects Developer</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, letterSpacing: '-0.01em' }}>
                Built scalable backend systems and full-stack applications independently.
                Focused on production-like code quality, clean architecture, and real-world engineering patterns.
              </p>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: '16px' }}>2022 — Present</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: '12px' }}>B.Tech — Computer Science</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, letterSpacing: '-0.01em' }}>
                Malla Reddy University, Hyderabad<br />
                2nd Year · CGPA 7.41
              </p>
            </div>
          </motion.div>

          {/* Right — Certs */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: '32px' }}>Certifications</div>
            {CERTS.map((c, i) => (
              <div key={c.name} style={{ padding: '24px 0', borderBottom: i < CERTS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>{c.name}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>{c.issuer}</div>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>{c.year}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
