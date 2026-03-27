export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
      <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '-0.01em' }}>Bhargav Vaka</span>
      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>© {new Date().getFullYear()}</span>
    </footer>
  )
}
