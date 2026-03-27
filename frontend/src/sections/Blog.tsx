import { motion } from 'framer-motion'
import { BLOG_POSTS } from '@/lib/data'
import SectionHeader from '@/components/SectionHeader'
import { card } from '@/lib/styles'

export default function Blog() {
  return (
    <section id="blog" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader
          num="06"
          label="Writing"
          title={<>Engineering<br /><span style={{ background: 'linear-gradient(135deg, #22D3EE, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>notes.</span></>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ ...card, padding: '28px', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(34,211,238,0.2)'
                el.style.background = 'rgba(34,211,238,0.03)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.background = 'rgba(255,255,255,0.025)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '11px', color: 'rgba(71,85,105,1)', fontFamily: 'monospace' }}>{post.date}</span>
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(71,85,105,1)', display: 'inline-block' }} />
                <span style={{ fontSize: '11px', color: 'rgba(71,85,105,1)', fontFamily: 'monospace' }}>{post.readTime}</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: '12px' }}>{post.title}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(100,116,139,1)', lineHeight: 1.7, marginBottom: '20px' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(100,116,139,1)' }}>
                Read article <span>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
