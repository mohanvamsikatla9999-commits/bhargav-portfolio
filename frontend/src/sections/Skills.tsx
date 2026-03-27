import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/lib/data'
import SectionHeader from '@/components/SectionHeader'
import { card, cardHover } from '@/lib/styles'

const TICKER = ['TypeScript', 'Node.js', 'React', 'MongoDB', 'Express', 'Python', 'MySQL', 'Git', 'Java', 'JWT', 'REST API', 'Linux', 'Docker', 'Redis']

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader
          num="02"
          label="Skills"
          title={<>Built through<br /><span style={{ background: 'linear-gradient(135deg, #22D3EE, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>real projects.</span></>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.07, duration: 0.6 }}
              style={{ ...card, padding: '24px' }}
              {...cardHover}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22D3EE', fontSize: '13px', fontFamily: 'monospace' }}>
                  {cat.icon}
                </div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{cat.label}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(148,163,184,1)' }}>{skill.name}</span>
                      <span style={{ fontSize: '11px', color: 'rgba(71,85,105,1)', fontFamily: 'monospace' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.07 + si * 0.06 + 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, #22D3EE, #0891b2)', borderRadius: '999px', boxShadow: '0 0 6px rgba(34,211,238,0.5)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning */}
        <div style={{ ...card, padding: '24px', border: '1px solid rgba(34,211,238,0.12)', background: 'rgba(34,211,238,0.03)', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
            </span>
            <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#22D3EE', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Currently Learning</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['System Design', 'Microservices', 'Docker', 'Redis', 'Kubernetes basics'].map(item => (
              <span key={item} style={{ fontSize: '13px', color: 'rgba(203,213,225,1)', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', padding: '8px 16px', borderRadius: '10px' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', marginBottom: '0' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #060D1A, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #060D1A, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div className="ticker" style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
          {[...TICKER, ...TICKER, ...TICKER].map((tech, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', whiteSpace: 'nowrap' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22D3EE', opacity: 0.7 }} />
              <span style={{ fontSize: '13px', color: 'rgba(148,163,184,1)', fontFamily: 'monospace' }}>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
