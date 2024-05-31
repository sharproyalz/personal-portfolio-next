"use client";

import { Plus } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/trpc/react";
import { getMonthName } from "~/utils/get-month-name";
import { truncateWord } from "~/utils/truncate-word";

export function BlogsView() {
  const getBlogsQuery = api.blog.getAll.useQuery();
  const blogs = getBlogsQuery.data;

  return (
    <section className="flex py-[1rem]">
      <div className="w-full px-12">
        <div className="mb-[1rem] text-center text-[3rem] dark:text-gray">
          Blogs
        </div>

        <div className="mt-[5rem] flex w-full flex-wrap justify-evenly gap-8 ">
          <Link
            href={`/admin/blogs/create`}
            className="flex w-[20rem] items-center justify-center gap-4 rounded-2xl border border-card bg-gray p-4 dark:bg-transparent dark:hover:bg-card dark:hover:text-gray"
          >
            Add
            <div>
              <Plus />
            </div>
          </Link>
          {blogs?.map((blog) => (
            <div
              key={blog.id}
              className="w-[20rem] rounded-2xl bg-gray p-4 dark:bg-card"
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

              <div className="my-[1rem]">
                {getMonthName(blog.month)} {blog.year}
              </div>

              {/* Tags */}
              <div className="mb-[0.5rem] flex gap-[0.5rem]">
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] dark:text-black">
                  Tutorial
                </div>
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] dark:text-black">
                  JavaScript
                </div>
              </div>

              <div className="mb-[1rem] h-[2px] bg-white"></div>

              <div className="flex justify-end">
                <Link
                  href={`https://www.linkedin.com/feed/update/urn:li:linkedInArticle:7158059322348826624/`}
                  className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white"
                  target="_blank"
                >
                  Read article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
