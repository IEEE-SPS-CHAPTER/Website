import Hero from "../components/Hero/Hero";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";
import Events from "../components/Events/Events";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Blog />
      <Events />
      <Team />
      <Contact />
    </main>
  );
}
