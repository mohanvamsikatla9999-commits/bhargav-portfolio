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

export default function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SystemDesign />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
