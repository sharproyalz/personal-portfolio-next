import { Article } from "~/components/blog/article";
import { LeftAside } from "~/components/blog/left-aside";
import { RightAside } from "~/components/blog/right-aside";
import { Footer } from "~/components/footer";
import Navigation from "~/components/navigation";

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <div className="mx-auto my-[4rem] grid max-w-screen-xl grid-cols-5 text-justify leading-8">
        <LeftAside />

        <Article />

        <RightAside />
      </div>

      <Footer />
    </>
  );
}
