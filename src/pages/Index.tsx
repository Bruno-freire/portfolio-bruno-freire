import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui/reveal";
import BackendProjects from "@/components/backend-projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <BackendProjects/>
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </div>
  );
};

export default Index;
