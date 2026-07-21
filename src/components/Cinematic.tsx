import Cursor from "./Cursor";
import Nav from "./Nav";
import ScrollProgress from "./ScrollProgress";
import Spotlight from "./Spotlight";
import Sidebars from "./Sidebars";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Stats from "./Stats";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Background from "./Background";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function Cinematic() {
  return (
    <div id="top">
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
  );
}
