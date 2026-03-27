import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/data'
import { useActiveSection } from '@/hooks/useActiveSection'

const SECTION_IDS = ['about', 'skills', 'projects', 'system-design', 'blog', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: scrolled ? '10px 16px 0' : '0 0 0' }}
    >
      <nav style={{
        width: '100%', maxWidth: '1200px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px', boxSizing: 'border-box',
        background: scrolled ? 'rgba(6,13,26,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        border: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        borderRadius: scrolled ? '16px' : '0',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#22D3EE', fontWeight: 700, fontSize: '11px' }}>BV</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 300 }} className="hidden sm:block">Bhargav Vaka</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '4px', listStyle: 'none' }} className="hidden md:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={item.href}>
                <a href={item.href} style={{
                  position: 'relative', display: 'block', padding: '7px 14px', fontSize: '13px', borderRadius: '10px',
                  color: isActive ? '#22D3EE' : 'rgba(148,163,184,1)',
                  background: isActive ? 'rgba(34,211,238,0.08)' : 'transparent',
                  textDecoration: 'none', transition: 'all 0.2s ease',
                }}>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="/resume.pdf" download
            className="hidden md:inline-flex"
            style={{ alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, background: '#22D3EE', color: '#060D1A', padding: '8px 16px', borderRadius: '10px', textDecoration: 'none', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(34,211,238,0.4)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
            Resume ↗
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu"
            style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(148,163,184,1)', cursor: 'pointer' }}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute', top: '72px', left: '16px', right: '16px', background: 'rgba(6,13,26,0.97)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '8px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '12px 16px', fontSize: '14px', color: 'rgba(203,213,225,1)', textDecoration: 'none', borderRadius: '10px', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#22D3EE'; (e.currentTarget as HTMLElement).style.background = 'rgba(34,211,238,0.05)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(203,213,225,1)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                {item.label}
              </a>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '8px', paddingTop: '8px', padding: '8px' }}>
              <a href="/resume.pdf" download style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#22D3EE', color: '#060D1A', fontWeight: 600, padding: '12px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px' }}>
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
