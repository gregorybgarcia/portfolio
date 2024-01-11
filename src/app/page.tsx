import Image from 'next/image'
import Header from './Components/Header'
import Presentation from './Components/Presentation'
import Footer from './Components/Footer'
import ParticlesBackground from './Components/ParticlesBackground'
import About from './Components/About'
import Timeline from './Components/Timeline'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <Presentation/>
      <ParticlesBackground/>
      <About/>
      <Timeline/>
      {/* <Footer/> */}
    </main>
  )
}
