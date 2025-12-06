import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import ParticlesBackground from "./Components/ParticlesBackground";
import CurrentWork from "./Components/CurrentWork";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import BackToTop from "./Components/BackToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Presentation />
      <ParticlesBackground />
      <About />
      <CurrentWork />
      <Projects />
      <Experience />
      <Contact />
      <BackToTop />
    </main>
  );
}
