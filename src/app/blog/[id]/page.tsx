import { Article } from "~/app/blog/[id]/_components/article";
import { Footer } from "~/components/footer";
import Navigation from "~/components/navigation";
import { LeftAside } from "./_components/left-sidebar";
import { NavBarAndSideBar } from "./_components/navbar-and-sidebar";
import { api } from "~/trpc/server";
import { Content } from "~/app/blog/[id]/_components/content";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await api.blog.get.query({ id: params.id });
  const blogs = await api.blog.getAll.query();

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
          <LeftAside initialData={blogs} />
        </div>

        <Content
          initialData={blog}
          content={<MDXRemote source={blog?.content as string} />}
        />

        {/* <RightAside /> */}
      </div>
    </>
  );
}
