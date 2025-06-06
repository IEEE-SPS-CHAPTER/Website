import Hero from "../components/Hero/Hero";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";
import ThreeDCarousel from "../components/ThreeDCarousel/ThreeDCarousel";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Blog />
      <ThreeDCarousel />
      <Contact />
    </main>
  );
}
