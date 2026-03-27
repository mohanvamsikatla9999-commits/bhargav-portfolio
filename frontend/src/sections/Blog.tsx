import { motion } from 'framer-motion'
import { BLOG_POSTS } from '@/lib/data'

export default function Blog() {
  return (
    <section id="blog" style={{ padding: '160px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '80px', textAlign: 'center' }}>
          Writing
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = '12px' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = '0' }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: '10px', lineHeight: 1.2 }}>{post.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, letterSpacing: '-0.01em' }}>{post.excerpt}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>{post.date}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', marginTop: '4px' }}>{post.readTime}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
