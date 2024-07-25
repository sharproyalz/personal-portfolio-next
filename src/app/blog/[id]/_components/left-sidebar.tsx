"use client";

import { Blog, BlogTag } from "@prisma/client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { api } from "~/trpc/react";

type Props = {
  initialData: (Blog & {
    blogTags: BlogTag[];
  })[];
};

export function LeftAside({ initialData }: Props) {
  const params = useParams();
  const getBlogsQuery = api.blog.getAll.useQuery(undefined, { initialData });
  const blogs = getBlogsQuery.data;

  return (
    <aside
      className={`fixed top-0 hidden h-[100vh] w-[80%] border-r-[1px] bg-card p-4 text-[1.5rem] md:static md:col-span-1 md:block md:h-fit md:border-r-2 md:border-gray md:bg-transparent md:pe-4`}
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-sm active:border active:border-dusty_gray md:hidden"
      >
        <X />
      </button>

      <Link href={`/`} className="h-[3rem] w-[3rem] rounded-full md:hidden">
        <Image
          src={`/sharp-royalz-logo.png`}
          alt="Sharp Royalz Logo"
          width={48}
          height={48}
        />
      </Link>

      <ul className="mt-4 flex flex-col gap-4 text-gray md:hidden">
        <li className="text-2xl hover:text-primary ">
          <Link href={`/#about`}> About</Link>
        </li>
        <li className="text-2xl hover:text-primary ">
          <Link href={`/#project`}>Project</Link>
        </li>
        <li className="text-2xl hover:text-primary ">
          <Link href={`/#blog`}>Blog</Link>
        </li>
        <li className="text-2xl hover:text-primary ">
          <Link href={`/#contact`}>Contact</Link>
        </li>
      </ul>

      <div className="mb-4 mt-[2rem] font-bold dark:text-gray md:mt-0">
        All of my post
      </div>
      <div className="flex flex-col gap-4">
        {blogs.map((blog) =>
          params.id === blog.id ? (
            <div key={blog.id} className="font-bold text-primary md:text-base">
              {blog.title}
            </div>
          ) : (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="hover:text-primary md:text-base"
            >
              {blog.title}
            </Link>
          ),
        )}
      </div>
    </aside>
  );
}
