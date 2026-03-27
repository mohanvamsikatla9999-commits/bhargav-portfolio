import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import SystemDesign from '@/sections/SystemDesign'
import Experience from '@/sections/Experience'
import Blog from '@/sections/Blog'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'

function Divider() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }} />
    </div>
  )
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#060D1A' }}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <SystemDesign />
        <Divider />
        <Experience />
        <Divider />
        <Blog />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
