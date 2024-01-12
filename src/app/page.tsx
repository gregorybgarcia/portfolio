import Image from 'next/image'
import Header from './Components/Header'
import Presentation from './Components/Presentation'
import Footer from './Components/Footer'
import ParticlesBackground from './Components/ParticlesBackground'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <Presentation/>
      <ParticlesBackground/>
      <About/>
      <Experience />
      <Projects />
      <Contact/>
      <Footer/>
    </main>
  )
}
