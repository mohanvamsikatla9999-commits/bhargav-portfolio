interface Props {
  label: string
}

export default function SectionLabel({ label }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[#22D3EE] text-xs font-mono tracking-widest uppercase">{label}</span>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  )
}
