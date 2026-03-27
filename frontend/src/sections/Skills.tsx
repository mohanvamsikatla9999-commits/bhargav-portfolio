import { motion } from 'framer-motion'

const ROWS = [
  'TypeScript · JavaScript · Java · Python',
  'Node.js · Express · REST APIs · JWT · Rate Limiting',
  'React · Tailwind CSS · Responsive Design',
  'MongoDB · MySQL · Schema Design · Indexing',
  'System Design · MVC · Error Handling · Caching',
  'Git · GitHub · Postman · Linux · Docker',
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '160px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '80px', textAlign: 'center' }}>
          Skills & Stack
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {ROWS.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}
            >
              <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 500, color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.02em', lineHeight: 1.4 }}>
                {row}
              </span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontWeight: 500, flexShrink: 0 }}>
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '80px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF3B30' }}>
            Currently Learning
          </span>
          <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', letterSpacing: '-0.01em' }}>
            System Design · Microservices · Docker · Redis
          </span>
        </motion.div>
      </div>
    </section>
  )
}
