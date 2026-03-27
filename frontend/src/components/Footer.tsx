export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '40px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#22D3EE', fontWeight: 700, fontSize: '10px' }}>BV</span>
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Bhargav Vaka</div>
            <div style={{ fontSize: '11px', color: 'rgba(71,85,105,1)' }}>Software Engineer</div>
          </div>
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(71,85,105,1)', fontFamily: 'monospace' }}>
          Built with React · TypeScript · Tailwind · Framer Motion
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(71,85,105,1)' }}>
          © {new Date().getFullYear()} · All rights reserved
        </div>
      </div>
    </footer>
  )
}
