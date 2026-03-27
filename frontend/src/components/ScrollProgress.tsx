import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  return (
    <motion.div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      height: '2px', originX: 0, scaleX, background: '#FF3B30',
    }} />
  )
}
