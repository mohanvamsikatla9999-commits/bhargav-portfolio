import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { card, cardHover } from '@/lib/styles'

const FLOW = [
  { label: 'Client', sub: 'React / Browser', icon: '◻', accent: false },
  { label: 'API Gateway', sub: 'Rate Limit · Auth · CORS', icon: '⚡', accent: true },
  { label: 'Service Layer', sub: 'Business Logic · Validation', icon: '⚙', accent: false },
  { label: 'Database', sub: 'MongoDB · MySQL', icon: '⬡', accent: false },
]

const PATTERNS = [
  { title: 'Layered Architecture', code: 'Controller → Service → Repository', desc: 'No business logic in controllers. Services own the domain. Clean separation of concerns.' },
  { title: 'Middleware Chain', code: 'Auth → RateLimit → Validate → Handler', desc: 'Every request passes through a composable middleware pipeline before reaching business logic.' },
  { title: 'Error Propagation', code: 'throw AppError → errorHandler middleware', desc: 'Custom error classes carry HTTP status codes. One central handler formats all responses.' },
  { title: 'JWT Auth Flow', code: 'Login → AccessToken + RefreshToken', desc: 'Short-lived access tokens. Refresh token rotation on use. Stateless, scalable auth.' },
]

export default function SystemDesign() {
  return (
    <section id="system-design" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader
          num="04"
          label="System Design"
          title={<>How I think<br /><span style={{ background: 'linear-gradient(135deg, #22D3EE, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>about systems.</span></>}
        />

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ ...card, padding: '40px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '400px', height: '200px', background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '32px' }}>Request Flow Architecture</div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            {FLOW.map((node, i) => (
              <div key={node.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  style={{
                    flex: 1, padding: '20px 16px', borderRadius: '14px', textAlign: 'center',
                    border: node.accent ? '1px solid rgba(34,211,238,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    background: node.accent ? 'rgba(34,211,238,0.06)' : 'rgba(255,255,255,0.02)',
                    boxShadow: node.accent ? '0 0 20px rgba(34,211,238,0.08)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '20px', marginBottom: '8px', color: node.accent ? '#22D3EE' : 'rgba(148,163,184,1)' }}>{node.icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: node.accent ? '#22D3EE' : '#fff', marginBottom: '4px' }}>{node.label}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(100,116,139,1)' }}>{node.sub}</div>
                </motion.div>
                {i < FLOW.length - 1 && (
                  <div style={{ color: 'rgba(71,85,105,1)', fontSize: '18px', flexShrink: 0 }}>→</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(34,211,238,0.15), transparent)' }} />
            <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(71,85,105,1)' }}>Response flows back ←</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(34,211,238,0.15), transparent)' }} />
          </div>
        </motion.div>

        {/* Patterns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {PATTERNS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ ...card, padding: '24px' }}
              {...cardHover}
            >
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{p.title}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#22D3EE', background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)', borderRadius: '8px', padding: '8px 12px', marginBottom: '12px' }}>{p.code}</div>
              <p style={{ fontSize: '13px', color: 'rgba(100,116,139,1)', lineHeight: 1.7 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
