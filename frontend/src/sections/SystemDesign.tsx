import { motion } from 'framer-motion'

const FLOW = [
  { label: 'Client', sub: 'React / Browser' },
  { label: 'API Gateway', sub: 'Auth · Rate Limit · CORS', accent: true },
  { label: 'Service Layer', sub: 'Business Logic' },
  { label: 'Database', sub: 'MongoDB · MySQL' },
]

const PRINCIPLES = [
  { title: 'Separation of Concerns', desc: 'Controllers handle HTTP. Services own business logic. No cross-contamination.' },
  { title: 'Fail Fast', desc: 'Validate at the edge. Reject bad input before it reaches business logic.' },
  { title: 'Stateless Auth', desc: 'JWT access tokens expire fast. Refresh tokens rotate on use.' },
  { title: 'Centralized Errors', desc: 'One error handler. Consistent response shape. No scattered try-catch.' },
]

export default function SystemDesign() {
  return (
    <section id="system-design" style={{ padding: '160px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '80px', textAlign: 'center' }}>
          System Design
        </motion.p>

        {/* Flow */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '120px', flexWrap: 'wrap' }}>
          {FLOW.map((node, i) => (
            <div key={node.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', padding: '24px 32px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: node.accent ? '#FF3B30' : '#fff', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                  {node.label}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em' }}>{node.sub}</div>
                {node.accent && <div style={{ width: '24px', height: '2px', background: '#FF3B30', margin: '10px auto 0' }} />}
              </div>
              {i < FLOW.length - 1 && (
                <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '18px', padding: '0 4px' }}>→</div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Principles */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '40px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '12px' }}>{p.title}</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, letterSpacing: '-0.01em' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
