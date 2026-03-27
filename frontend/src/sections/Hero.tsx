import { motion } from 'framer-motion'
import { useTypewriter } from '@/hooks/useTypewriter'

function GithubIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const ROLES = ['Backend Engineer', 'Full Stack Developer', 'Problem Solver', 'API Architect']
const METRICS = [
  { value: '8+', label: 'Projects Built' },
  { value: '200+', label: 'DSA Problems' },
  { value: '7.41', label: 'CGPA' },
]

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#060D1A',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-5%', left: '20%', width: '700px', height: '600px', background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '0', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(8,145,178,0.04) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      {/* Main content — full width container with proper padding */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '100px 48px 80px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '80px', alignItems: 'center' }}>

          {/* LEFT */}
          <div style={{ minWidth: 0 }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '999px', background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.2)' }}>
                <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                  <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22D3EE', opacity: 0.75, animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite' }} />
                  <span style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '50%', background: '#22D3EE', display: 'block' }} />
                </span>
                <span style={{ color: '#22D3EE', fontSize: '12px', fontWeight: 500, letterSpacing: '0.03em' }}>Open to opportunities</span>
              </div>
              <span style={{ color: 'rgba(71,85,105,1)', fontSize: '12px', fontFamily: 'monospace' }}>Hyderabad, India</span>
            </motion.div>

            {/* Name */}
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#ffffff', marginBottom: '4px' }}>
                Bhargav
              </div>
              <div style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '28px', background: 'linear-gradient(135deg, #22D3EE 0%, #0891b2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Vaka
              </div>
            </motion.div>

            {/* Typewriter */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '1px', background: '#22D3EE', opacity: 0.6, flexShrink: 0 }} />
              <span style={{ fontSize: '18px', color: 'rgba(203,213,225,1)', fontWeight: 300 }}>
                {role}
                <span style={{ display: 'inline-block', width: '2px', height: '18px', background: '#22D3EE', marginLeft: '3px', verticalAlign: 'middle', borderRadius: '1px', animation: 'pulse 1s ease-in-out infinite' }} />
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              style={{ fontSize: '16px', color: 'rgba(148,163,184,1)', lineHeight: 1.75, marginBottom: '36px', maxWidth: '480px' }}>
              I design and build scalable backend systems and modern web applications.
              Focused on clean architecture, performance, and engineering depth.
            </motion.p>

            {/* Metrics */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '36px' }}>
              {METRICS.map((m) => (
                <div key={m.label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '32px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{m.value}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(100,116,139,1)', marginTop: '4px' }}>{m.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
              style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px', flexWrap: 'wrap' }}>
              <a href="#projects"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#22D3EE', color: '#060D1A', fontWeight: 700, padding: '14px 28px', borderRadius: '12px', fontSize: '14px', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(34,211,238,0.45)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
                View Projects →
              </a>
              <a href="/resume.pdf" download
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(203,213,225,1)', fontWeight: 500, padding: '14px 28px', borderRadius: '12px', fontSize: '14px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.3)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(203,213,225,1)' }}>
                Resume ↓
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {[
                { icon: <GithubIcon />, href: 'https://github.com/bhargavvaka', label: 'GitHub' },
                { icon: <LinkedinIcon />, href: 'https://linkedin.com/in/bhargavvaka', label: 'LinkedIn' },
                { icon: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, href: 'mailto:bhargav@example.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(100,116,139,1)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#22D3EE'; el.style.borderColor = 'rgba(34,211,238,0.3)'; el.style.background = 'rgba(34,211,238,0.06)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(100,116,139,1)'; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.background = 'transparent' }}>
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', flexShrink: 0 }}
          >
            {/* Glow */}
            <div style={{ position: 'absolute', inset: '-24px', background: 'radial-gradient(ellipse, rgba(34,211,238,0.1) 0%, transparent 70%)', borderRadius: '28px', filter: 'blur(24px)', pointerEvents: 'none' }} />

            {/* Photo card */}
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(34,211,238,0.18)', boxShadow: '0 0 60px rgba(34,211,238,0.07), 0 32px 64px rgba(0,0,0,0.4)' }}>
              <img src="/bhargav.jpeg" alt="Bhargav Vaka"
                style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              {/* Bottom fade */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, #060D1A 0%, rgba(6,13,26,0.8) 50%, transparent 100%)' }} />
              {/* Name overlay */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 22px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Bhargav Vaka</div>
                <div style={{ fontSize: '12px', color: '#22D3EE', fontFamily: 'monospace', marginTop: '3px' }}>Software Engineer</div>
                <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                  {['Node.js', 'TypeScript', 'React'].map(t => (
                    <span key={t} style={{ fontSize: '11px', color: 'rgba(148,163,184,1)', padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating chip — top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '-16px', right: '-16px', padding: '12px 16px', borderRadius: '14px', background: 'rgba(6,13,26,0.92)', border: '1px solid rgba(34,211,238,0.2)', backdropFilter: 'blur(12px)', zIndex: 10 }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#22D3EE', lineHeight: 1 }}>200+</div>
              <div style={{ fontSize: '11px', color: 'rgba(148,163,184,1)', marginTop: '3px' }}>DSA Problems</div>
            </motion.div>

            {/* Floating chip — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ position: 'absolute', bottom: '-16px', left: '-16px', padding: '12px 16px', borderRadius: '14px', background: 'rgba(6,13,26,0.92)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', zIndex: 10 }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>8+</div>
              <div style={{ fontSize: '11px', color: 'rgba(148,163,184,1)', marginTop: '3px' }}>Projects Built</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '20px', height: '32px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '6px' }}>
          <div style={{ width: '3px', height: '8px', borderRadius: '2px', background: 'rgba(34,211,238,0.6)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
