import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { card } from '@/lib/styles'

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const ICONS: Record<string, string> = {
  'rest-api-platform': '⚡',
  'ai-code-reviewer': '🧠',
  'realtime-chat': '💬',
  'analytics-dashboard': '📊',
  'auth-system': '🔐',
  'task-queue': '⚙',
  'db-design': '🗄',
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const isFeatured = project.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ...card,
        border: isFeatured ? '1px solid rgba(34,211,238,0.2)' : '1px solid rgba(255,255,255,0.07)',
        background: isFeatured ? 'rgba(34,211,238,0.03)' : 'rgba(255,255,255,0.025)',
        borderRadius: '16px', overflow: 'hidden', position: 'relative',
      }}
    >
      {isFeatured && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)' }} />
      )}
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
              {ICONS[project.id] ?? '◻'}
            </div>
            <div>
              {isFeatured && <div style={{ fontSize: '9px', fontFamily: 'monospace', color: '#22D3EE', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '4px' }}>★ Featured</div>}
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{project.title}</div>
              <div style={{ fontSize: '12px', color: 'rgba(100,116,139,1)', marginTop: '2px' }}>{project.tagline}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(100,116,139,1)', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#22D3EE'; el.style.borderColor = 'rgba(34,211,238,0.3)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(100,116,139,1)'; el.style.borderColor = 'rgba(255,255,255,0.08)' }}>
                <GithubIcon />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(100,116,139,1)', textDecoration: 'none', transition: 'all 0.2s' }}>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontSize: '11px', color: 'rgba(100,116,139,1)', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', padding: '3px 10px', borderRadius: '6px', fontFamily: 'monospace' }}>{t}</span>
          ))}
        </div>

        {/* Expand */}
        <button onClick={() => setExpanded(!expanded)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(100,116,139,1)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#22D3EE' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(100,116,139,1)' }}>
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'flex' }}>
            <ChevronDown size={13} />
          </motion.span>
          {expanded ? 'Hide details' : 'View architecture'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}
            >
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { label: 'Problem', value: project.problem },
                  { label: 'Architecture', value: project.architecture },
                  { label: 'Challenge', value: project.challenges },
                  { label: 'Outcome', value: project.outcome },
                ].map(({ label, value }) => (
                  <div key={label} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '10px', padding: '12px' }}>
                    <div style={{ fontSize: '9px', fontFamily: 'monospace', color: '#22D3EE', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>{label}</div>
                    <p style={{ fontSize: '12px', color: 'rgba(148,163,184,1)', lineHeight: 1.6 }}>{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const featured = PROJECTS.filter(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ color: '#22D3EE', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.18em', textTransform: 'uppercase' }}>03 — Projects</span>
              <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            </div>
            <div style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff' }}>
              What I've<br />
              <span style={{ background: 'linear-gradient(135deg, #22D3EE, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>shipped.</span>
            </div>
          </div>
          <a href="https://github.com/bhargavvaka" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(148,163,184,1)', border: '1px solid rgba(255,255,255,0.08)', padding: '10px 20px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#22D3EE'; el.style.borderColor = 'rgba(34,211,238,0.2)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(148,163,184,1)'; el.style.borderColor = 'rgba(255,255,255,0.08)' }}>
            <GithubIcon size={13} /> All repos →
          </a>
        </div>

        {/* Featured row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {/* Rest row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {rest.map((p, i) => <ProjectCard key={p.id} project={p} index={i + featured.length} />)}
        </div>
      </div>
    </section>
  )
}
