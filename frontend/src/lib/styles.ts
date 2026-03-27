export const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.025)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '16px',
  backdropFilter: 'blur(12px)',
}

export const cardHover = {
  onMouseEnter: (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement
    el.style.borderColor = 'rgba(34,211,238,0.2)'
    el.style.background = 'rgba(34,211,238,0.03)'
  },
  onMouseLeave: (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement
    el.style.borderColor = 'rgba(255,255,255,0.07)'
    el.style.background = 'rgba(255,255,255,0.025)'
  },
}

export const sectionLabel = (n: string, label: string) => (
  { num: n, text: label }
)
