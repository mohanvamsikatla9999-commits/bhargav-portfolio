import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 48px',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontSize: '15px', fontWeight: 700, color: '#fff', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          BV
        </a>

        {/* Desktop */}
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none' }} className="hidden md:flex">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '-0.01em' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/resume.pdf" download
          style={{ fontSize: '13px', fontWeight: 600, color: '#000', background: '#fff', padding: '8px 20px', borderRadius: '6px', textDecoration: 'none', transition: 'opacity 0.2s', letterSpacing: '-0.01em' }}
          className="hidden md:inline-flex"
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}>
          Resume
        </a>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden"
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '22px', lineHeight: 1 }}>
          {open ? '✕' : '☰'}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 48px 32px' }}>
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ display: 'block', fontSize: '24px', fontWeight: 700, color: '#fff', textDecoration: 'none', padding: '10px 0', letterSpacing: '-0.03em' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
