import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav";
import Spotlight from "./components/Spotlight";
import Sidebars from "./components/Sidebars";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top">
        <Spotlight />
        <Nav />
        <Sidebars />
        <main className="mx-auto max-w-5xl px-6 sm:px-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Background />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
