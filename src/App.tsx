import { MotionConfig } from "framer-motion";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import Spotlight from "./components/Spotlight";
import Sidebars from "./components/Sidebars";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top">
        <Preloader />
        <Cursor />
        <ScrollProgress />
        <Spotlight />
        <Nav />
        <Sidebars />
        <main className="mx-auto max-w-5xl px-6 sm:px-10">
          <Hero />
          <About />
          <Marquee />
          <Stats />
          <Experience />
          <Projects />
          <Background />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}
