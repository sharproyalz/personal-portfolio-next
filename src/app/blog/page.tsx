import { Article } from "~/app/blog/_components/article";
import { Footer } from "~/components/footer";
import Navigation from "~/components/navigation";
import { LeftAside } from "./_components/left-sidebar";
import { NavBarAndSideBar } from "./_components/navbar-and-sidebar";

export default function BlogPage() {
  return (
    <>
      <div className="md:hidden">
        <NavBarAndSideBar />
      </div>
      <div className="hidden md:block">
        <Navigation />
      </div>
      <div className="mx-auto my-[4rem] max-w-screen-xl text-justify leading-8 md:grid md:grid-cols-5">
        <div className="hidden md:block">
          <LeftAside />
        </div>

        <Article />

        {/* <RightAside /> */}
      </div>
    </>
  );
}
