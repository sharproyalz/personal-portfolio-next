import { AboutSection } from "~/components/about";
import { BlogSection } from "~/components/blog";
import { ContactSection } from "~/components/contact";
import { Footer } from "~/components/footer";
import { HeroSection } from "~/components/hero";
import { ProjectSection } from "~/components/project";

export default function HomePage() {
  return (
    <>
      <body>
        {/* <HeroSection />
        <AboutSection />
        <BlogSection />

        <ProjectSection /> */}
        <ContactSection />
        <Footer />
      </body>
    </>
  );
}
