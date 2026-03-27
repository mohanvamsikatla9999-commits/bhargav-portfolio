import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '2px', originX: 0, scaleX,
        background: 'linear-gradient(90deg, #22D3EE, #0891b2)',
        boxShadow: '0 0 8px rgba(34,211,238,0.6)',
      }}
    />
  )
}
