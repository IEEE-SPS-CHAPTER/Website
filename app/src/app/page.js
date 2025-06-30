import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutClient";
import BlogSection from "../components/BlogClient";
import EventsSection from "../components/EventsClient";
import TeamSection from "../components/TeamClient";
import ContactSection from "../components/ContactClient";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <BlogSection />
      <EventsSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
