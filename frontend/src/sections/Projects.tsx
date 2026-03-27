import { motion } from 'framer-motion'

const PROJECTS = [
  {
    num: '01',
    title: 'Scalable REST API Platform',
    desc: 'A production-style backend with JWT authentication, role-based access control, rate limiting, and centralized error handling. Built to simulate real-world API infrastructure.',
    tech: 'Node.js · TypeScript · Express · MongoDB · JWT',
    href: 'https://github.com/bhargavvaka',
  },
  {
    num: '02',
    title: 'Real-Time Chat Application',
    desc: 'WebSocket-powered messaging with live presence tracking, typing indicators, and room management. Focused on event-driven architecture beyond standard HTTP.',
    tech: 'Node.js · Socket.io · React · TypeScript · MongoDB',
    href: 'https://github.com/bhargavvaka',
  },
  {
    num: '03',
    title: 'AI-Powered Code Reviewer',
    desc: 'Paste code, receive structured feedback. An NLP-driven analysis engine that identifies anti-patterns, suggests improvements, and scores readability.',
    tech: 'Python · NLP · FastAPI · React · TypeScript',
    href: 'https://github.com/bhargavvaka',
  },
  {
    num: '04',
    title: 'Authentication System',
    desc: 'A standalone, reusable auth module with JWT refresh token rotation, bcrypt hashing, and protected route middleware. Security-first by design.',
    tech: 'Node.js · TypeScript · JWT · bcrypt · Express',
    href: 'https://github.com/bhargavvaka',
  },
  {
    num: '05',
    title: 'Analytics Dashboard',
    desc: 'API-driven data visualization platform. Express aggregation layer feeds real-time charts with lazy-loaded components and optimized query performance.',
    tech: 'React · TypeScript · Node.js · Chart.js · MongoDB',
    href: 'https://github.com/bhargavvaka',
  },
  {
    num: '06',
    title: 'Task Queue System',
    desc: 'Async background job processing with retry logic, failure states, and worker concurrency control. Built to understand how production systems handle async work.',
    tech: 'Node.js · TypeScript · Bull · Redis',
    href: 'https://github.com/bhargavvaka',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '160px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '80px', textAlign: 'center' }}>
          Selected Work
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'block', padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.paddingLeft = '16px'
                el.style.borderBottomColor = 'rgba(255,255,255,0.15)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.paddingLeft = '0'
                el.style.borderBottomColor = 'rgba(255,255,255,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '40px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11px', color: '#FF3B30', fontWeight: 600, letterSpacing: '0.1em', fontFamily: 'monospace' }}>{p.num}</span>
                    <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{p.title}</h3>
                  </div>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '20px', letterSpacing: '-0.01em' }}>{p.desc}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.02em', fontFamily: 'monospace' }}>{p.tech}</p>
                </div>
                <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.2)', flexShrink: 0, marginTop: '4px', transition: 'color 0.2s, transform 0.2s' }}>↗</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{ marginTop: '64px', textAlign: 'center' }}>
          <a href="https://github.com/bhargavvaka" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}>
            View all on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
