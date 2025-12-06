import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import ParticlesBackground from "./Components/ParticlesBackground";
import CurrentWork from "./Components/CurrentWork";
import About from "./Components/About";
import Stats from "./Components/Stats";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import BackToTop from "./Components/BackToTop";
import ScrollProgress from "./Components/ScrollProgress";
import PageLoader from "./Components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <Presentation />
        <ParticlesBackground />
        <About />
        <CurrentWork />
        <Projects />
        <Skills />
        <Experience />
        <Stats />
        <Contact />
        <BackToTop />
      </main>
    </>
  );
}
