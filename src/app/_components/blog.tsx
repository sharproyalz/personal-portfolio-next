"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { truncateWord } from "~/utils/truncate-word";

export function BlogSection() {
  const blogs = [
    {
      imageLink: "/article-banner/summary-portfolio.png",
      imageAlt: "Summary Portfolio Banner",
      blogTitle: "Summary of My Digital Career: A Personal Portfolio Website",
      date: "April 2024",
      tags: ["Improvement", "Next.js"],
      blogLink: "/blog",
    },
    {
      imageLink: "/article-banner/sharpie-banner.png",
      imageAlt: "Sharpie Banner",
      blogTitle: "My First Full-stack Website: Sharpie",
      date: "March 2024",
      tags: ["Improvement", "Next.js"],
      blogLink:
        "https://www.linkedin.com/posts/vonn-pactol-718a2a283_fullstack-webdeveloper-selfimprovement-activity-7180210384782462976-U5Uw?utm_source=share&utm_medium=member_desktop",
    },
    {
      imageLink: "/article-banner/leetcode-banner.png",
      imageAlt: "Leetcode Banner",
      blogTitle:
        "Enhancing My Coding Skills: My Journey Through 28 Days of LeetCode Problem Solving",
      date: "February 2024",
      tags: ["Improvement", "Next.js"],
      blogLink:
        "https://www.linkedin.com/feed/update/urn:li:linkedInArticle:7168522598362832896/",
    },
  ];
  const reveal = useRef<Array<HTMLDivElement | null>>([]);

  if (typeof window !== "undefined") {
    window.addEventListener(
      "scroll",
      () => {
        if (reveal.current) {
          for (let i = 0; i < 3; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.current[i]?.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop! < windowHeight - revealPoint) {
              reveal.current[i]?.classList.add("active");
            } else {
              reveal.current[i]?.classList.remove("active");
            }
          }
        }
      },
      false,
    );
  }

  return (
    <>
      <section id="blog" className="mt-[4rem] flex px-4 md:px-12 ">
        <div className="mx-auto my-0 w-full max-w-screen-xl px-4 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="my-[1rem] text-[2rem] dark:text-gray md:text-[3rem]">
              Blog
            </div>
            <div className="text-[1rem] md:text-[1.5rem]">
              A list of published articles documenting my learning journey,
              including tutorials, improvements, and more.
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <div className="mt-[5rem] flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-stretch">
            {blogs.map((blog, blogIdx) => (
              <div
                key={blogIdx}
                ref={(el) => {
                  if (el && reveal.current) {
                    reveal.current[blogIdx] = el;
                  }
                }}
                className="reveal w-[22rem] rounded-2xl bg-gray p-4 dark:bg-card"
              >
                <div className="flex h-[12rem] w-full object-fill lg:w-[20rem]">
                  <Image
                    src={blog.imageLink}
                    alt={blog.imageAlt}
                    width={320}
                    height={192}
                    className="rounded-md"
                  />
                </div>

                {/* Title for Medium Screen */}
                <div
                  className={`mt-[0.5rem] hidden h-[64px] overflow-hidden overflow-ellipsis text-2xl dark:text-gray md:block`}
                >
                  {blog.blogTitle}
                </div>

                {/* Title for Mobile Screen */}
                <div className="mt-[0.5rem] block text-[1rem] dark:text-gray md:hidden">
                  {blog.blogTitle}
                </div>
                <div className="my-[1rem]">{blog.date}</div>

                {/* Tags */}
                <div className="mb-[0.5rem] flex gap-[0.5rem]">
                  {blog.tags.map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] text-xs dark:text-black md:text-base"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="mb-[1rem] h-[2px] bg-white"></div>

                <div className="flex justify-end">
                  <Link
                    href={blog.blogLink}
                    className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white hover:bg-secondary/90 active:scale-95"
                    target="_blank"
                  >
                    Read article
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Link
              href={`https://www.linkedin.com/in/vonn-pactol-718a2a283/recent-activity/articles/`}
              target="_blank"
              className="mt-[3rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white hover:bg-primary/90 active:scale-95"
            >
              View all
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
