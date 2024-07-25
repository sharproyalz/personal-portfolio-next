"use client";

import { Blog, BlogTag } from "@prisma/client";
import { Plus } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/trpc/react";
import { getMonthName } from "~/utils/get-month-name";
import { truncateWord } from "~/utils/truncate-word";

type Props = {
  initialData: (Blog & { blogTags: BlogTag[] })[];
};
export function BlogsView({ initialData }: Props) {
  const getBlogsQuery = api.blog.getAll.useQuery(undefined, { initialData });
  const blogs = getBlogsQuery.data;

  return (
    <section className="flex py-[1rem]">
      <div className="w-full px-12">
        <div className="mb-[1rem] text-center text-[3rem] dark:text-gray">
          Blogs
        </div>

        <div className="mt-[5rem] flex w-full flex-wrap gap-8 ">
          <Link
            href={`/admin/blogs/create`}
            className="flex h-[24rem] w-[24rem] items-center justify-center gap-4 rounded-2xl  bg-gray p-4 dark:bg-card dark:hover:text-gray"
          >
            Add
            <div>
              <Plus />
            </div>
          </Link>
          {blogs?.map((blog) => (
            <Link
              key={blog.id}
              href={`/admin/blogs/edit/${blog.id}`}
              className="w-[24rem] rounded-2xl bg-gray p-4 dark:bg-card"
            >
              <div className="object-fit mx-auto flex h-[12rem] w-[18rem]">
                <CldImage
                  width="288"
                  height="192"
                  src={blog.imageId}
                  alt="Article Banner"
                  className=""
                />
              </div>

              <div className="mt-4 text-[2rem] dark:text-gray">
                {truncateWord(blog.title)}
              </div>

              <div className="mt-2 text-sm">{blog.date}</div>

              {/* Tags */}
              <div className="mt-2 flex gap-[0.5rem]">
                {blog.blogTags.length
                  ? blog.blogTags.map((tag) => tag.name).join(",")
                  : "No tags"}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
