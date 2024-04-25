import { AboutSection } from "~/app/_components/about";
import { BlogSection } from "~/app/_components/blog";
import { ContactSection } from "~/app/_components/contact";
import { Footer } from "~/components/footer";
import { HeroSection } from "~/app/_components/hero";
import Navigation from "~/app/_components/navigation";
import { ProjectSection } from "~/components/project";

export default function HomePage() {
  return (
    <>
      <body>
        <Navigation />

        <HeroSection />
        <AboutSection />
        <BlogSection />
        <ProjectSection />
        <ContactSection />

        <Footer />
      </body>
    </>
  );
}
