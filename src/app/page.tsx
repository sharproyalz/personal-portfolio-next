import { AboutSection } from "~/app/_components/about";
import { BlogSection } from "~/app/_components/blog";
import { ContactSection } from "~/app/_components/contact";
import { HeroSection } from "~/app/_components/hero";
import { ProjectSection } from "./_components/project";
import Navigation from "~/components/navigation";
import { Footer } from "~/components/footer";

export default function HomePage() {
  return (
    <>
      <body>
        <HeroSection />
        {/* <AboutSection />
        <BlogSection />
        <ProjectSection />
        <ContactSection />

        <Footer /> */}
      </body>
    </>
  );
}
