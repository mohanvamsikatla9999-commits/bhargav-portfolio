import { useState } from 'react'
import { motion } from 'framer-motion'

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'transparent', border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.15)', padding: '16px 0',
  fontSize: '15px', color: '#fff', outline: 'none', letterSpacing: '-0.01em',
  fontFamily: 'inherit', transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderBottomColor = '#FF3B30'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'
  }

  return (
    <section id="contact" style={{ padding: '160px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '48px' }}>
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '24px' }}>
          Let's build<br />something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '64px', letterSpacing: '-0.01em' }}>
          Open to internships, collaborations, and interesting engineering conversations.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
            <div>
              <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Name</label>
              <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Your name" style={{ ...inputStyle, '::placeholder': { color: 'rgba(255,255,255,0.2)' } } as React.CSSProperties}
                onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email</label>
              <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Message</label>
            <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
              style={{ ...inputStyle, resize: 'none', display: 'block' }}
              onFocus={onFocus as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
              onBlur={onBlur as unknown as React.FocusEventHandler<HTMLTextAreaElement>} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" disabled={status !== 'idle'}
              style={{ fontSize: '14px', fontWeight: 600, background: status === 'sent' ? '#fff' : '#FF3B30', color: status === 'sent' ? '#000' : '#fff', padding: '16px 48px', borderRadius: '6px', border: 'none', cursor: status !== 'idle' ? 'default' : 'pointer', letterSpacing: '-0.01em', transition: 'opacity 0.2s', opacity: status === 'sending' ? 0.7 : 1, fontFamily: 'inherit' }}
              onMouseEnter={e => { if (status === 'idle') (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}>
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent' : 'Send Message'}
            </button>
          </div>
        </motion.form>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/bhargavvaka' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/bhargavvaka' },
            { label: 'Email', href: 'mailto:bhargav@example.com' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'}>
              {l.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
