"use client";

import { Blog, BlogTag } from "@prisma/client";
import { CldImage } from "next-cloudinary";
import { MDXRemoteProps } from "next-mdx-remote-client/rsc";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactElement } from "react";
import MDXContent from "~/app/blog/[id]/_components/mdx-content";
import { api } from "~/trpc/react";

type Props = {
  content: ReactElement;
  initialData:
    | (Blog & {
        blogTags: BlogTag[];
      })
    | null;
};

export function Content({ initialData, content }: Props) {
  const params = useParams();
  const getBlogQuery = api.blog.get.useQuery(
    { id: params.id as string },
    { initialData },
  );
  const blog = getBlogQuery.data;

  // Get the word length of content and title
  const contentTitleWordCount =
    blog?.content.split(" ").length! + blog?.title.split(" ").length!;

  const readingTime = () => {
    const time = contentTitleWordCount / 200;
    const minutes = Math.floor(time); // Get the whole number part
    const remainder = time % 1;

    if (minutes === 0) return "Less than a minute";
    if (remainder === 0) {
      return `${minutes} min`;
    }

    // Convert remainder to seconds
    const seconds = Math.round(remainder * 60);

    if (seconds <= 15) {
      return `${minutes} min`;
    } else if (seconds <= 45) {
      return `${minutes} min and 30 sec`;
    } else {
      return `${minutes + 1} min`;
    }
  };

  return (
    <article className="prose col-span-5 max-w-none px-[1rem] text-current md:col-span-3">
      <div className="object-fit mx-auto flex h-[24rem] w-[64rem]">
        <CldImage
          width="800"
          height="800"
          src={blog?.imageId as string}
          alt={`${blog?.title} Banner`}
        />
      </div>
      <div className="mt-[1.5rem] text-[2.5rem] font-bold leading-10 dark:text-gray">
        {blog?.title}
      </div>

      <div className="mt-[1.5rem]">
        {blog?.date} · {readingTime()} read
      </div>

      <div className="mt-[1rem] flex items-center gap-[1rem]">
        <Image
          src={`/hero.png`}
          alt="Hero"
          width={`96`}
          height={"96"}
          className="h-[4rem] w-[4rem] rounded-full border border-gray object-cover"
        />
        <div className="flex flex-col justify-center leading-[1.5rem]">
          <div className="font-bold text-primary">Vonn Pactol</div>
          <div className="">Aspiring Full-Stack Developer</div>
        </div>
      </div>

      <div className="my-[1.5rem] dark:prose-invert prose-headings:font-bold prose-a:text-primary  hover:prose-a:text-primary/80 prose-li:marker:text-black dark:hover:prose-a:text-primary/80 dark:prose-li:marker:text-gray ">
        {content}
      </div>
    </article>
  );
}
