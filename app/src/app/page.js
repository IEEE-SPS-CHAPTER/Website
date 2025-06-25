import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import BlogSection from "../components/BlogClient";
import EventsSection from "../components/EventsClient";
import TeamSection from "../components/TeamClient";
import ContactSection from "../components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BlogSection />
      <EventsSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
