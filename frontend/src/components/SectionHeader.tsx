import { motion } from 'framer-motion'

interface Props {
  num: string
  label: string
  title: React.ReactNode
}

export default function SectionHeader({ num, label, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: '64px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span style={{ color: '#22D3EE', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          {num} — {label}
        </span>
        <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.06)' }} />
      </div>
      <div style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#ffffff' }}>
        {title}
      </div>
    </motion.div>
  )
}
