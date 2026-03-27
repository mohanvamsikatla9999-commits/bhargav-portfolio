import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { card } from '@/lib/styles'

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

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#fff',
  outline: 'none', transition: 'all 0.2s', fontFamily: 'inherit',
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

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(34,211,238,0.4)'
    e.target.style.background = 'rgba(34,211,238,0.02)'
  }
  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.08)'
    e.target.style.background = 'rgba(255,255,255,0.03)'
  }

  return (
    <section id="contact" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader
          num="07"
          label="Contact"
          title={<>Let's build<br /><span style={{ background: 'linear-gradient(135deg, #22D3EE, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>something.</span></>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: '15px', color: 'rgba(148,163,184,1)', lineHeight: 1.8, marginBottom: '32px' }}>
              Open to internships, collaborations, and interesting engineering conversations.
              If you're building something ambitious, I'd love to hear about it.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, label: 'Email', value: 'bhargav@example.com', href: 'mailto:bhargav@example.com' },
                { icon: <GithubIcon />, label: 'GitHub', value: 'github.com/bhargavvaka', href: 'https://github.com/bhargavvaka' },
                { icon: <LinkedinIcon />, label: 'LinkedIn', value: 'linkedin.com/in/bhargavvaka', href: 'https://linkedin.com/in/bhargavvaka' },
              ].map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', ...card, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.2)'; el.style.background = 'rgba(34,211,238,0.03)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = 'rgba(255,255,255,0.025)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(148,163,184,1)', flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(71,85,105,1)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
                    <div style={{ fontSize: '13px', color: '#fff', marginTop: '2px' }}>{value}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'rgba(71,85,105,1)', fontSize: '14px' }}>→</span>
                </a>
              ))}

              <div style={{ padding: '16px 20px', ...card, border: '1px solid rgba(34,211,238,0.1)', background: 'rgba(34,211,238,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#22D3EE' }}>Available</span>
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(148,163,184,1)' }}>Hyderabad, India · Open to remote</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ ...card, padding: '36px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Name</label>
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Email</label>
                <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(100,116,139,1)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Message</label>
              <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or opportunity..."
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={focusInput as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                onBlur={blurInput as unknown as React.FocusEventHandler<HTMLTextAreaElement>} />
            </div>
            <button type="submit" disabled={status !== 'idle'}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#22D3EE', color: '#060D1A', fontWeight: 700, padding: '16px', borderRadius: '12px', fontSize: '14px', border: 'none', cursor: status !== 'idle' ? 'not-allowed' : 'pointer', opacity: status !== 'idle' ? 0.7 : 1, transition: 'all 0.2s', fontFamily: 'inherit' }}
              onMouseEnter={e => { if (status === 'idle') (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(34,211,238,0.4)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
              {status === 'sending' ? (
                <><div style={{ width: '16px', height: '16px', border: '2px solid rgba(6,13,26,0.3)', borderTopColor: '#060D1A', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />Sending...</>
              ) : status === 'sent' ? '✓ Message sent!' : (
                <><Send size={14} />Send Message</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
