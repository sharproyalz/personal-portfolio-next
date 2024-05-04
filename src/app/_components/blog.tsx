import Image from "next/image";
import Link from "next/link";
import { truncateWord } from "~/utils/truncateWords";

export function BlogSection() {
  return (
    <>
      <section id="blog" className="mt-[4rem] flex px-4 md:px-12 ">
        <div className="mx-auto my-0 w-full max-w-screen-xl px-4 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="my-[1rem] text-[2rem] md:text-[3rem] dark:text-gray">
              Blog
            </div>
            <div className="text-[1rem] md:text-[1.5rem]">
              A list of published articles documenting my learning journey,
              including tutorials, improvements, and more.
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <div className="mt-[5rem] flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-stretch">
            <div className="w-full rounded-2xl bg-gray p-4 lg:w-[24rem] dark:bg-card ">
              <Image
                src={`/article-banner/summary-portfolio.png`}
                alt="Summary Portfolio Banner"
                width={800}
                height={800}
                className="w-full rounded-md"
              />

              {/* Title for Medium Screen */}
              <div className="mt-[0.5rem] hidden text-[2rem] md:block dark:text-gray">
                {truncateWord(
                  "Summary of My Digital Career: A Personal Portfolio Website",
                )}
              </div>

              {/* Title for Mobile Screen */}
              <div className="mt-[0.5rem] block text-[1rem] md:hidden dark:text-gray">
                Summary of My Digital Career: A Personal Portfolio Website
              </div>

              <div className="my-[1rem]">April 2024</div>

              {/* Tags */}
              <div className="mb-[0.5rem] flex gap-[0.5rem]">
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] text-xs md:text-base dark:text-black">
                  Improvement
                </div>
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] text-xs md:text-base dark:text-black">
                  Next.js
                </div>
              </div>

              <div className="mb-[1rem] h-[2px] bg-white"></div>

              <div className="flex justify-end">
                <Link
                  href={`/blog`}
                  className=" w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white hover:bg-secondary/90 active:scale-95"
                >
                  Read article
                </Link>
              </div>
            </div>

            <div className="w-full rounded-2xl bg-gray p-4 lg:w-[24rem] dark:bg-card">
              <Image
                src={`/article-banner/sharpie-banner.png`}
                alt="Sharpie Banner"
                width={800}
                height={800}
                className="w-full rounded-md"
              />

              {/* Title for Medium Screen */}
              <div className="mt-[0.5rem] hidden text-[2rem] md:block dark:text-gray">
                {truncateWord("My First Full-stack Website: Sharpie")}
              </div>

              {/* Title for Mobile Screen */}
              <div className="mt-[0.5rem] text-[1rem] md:hidden dark:text-gray">
                My First Full-stack Website: Sharpie
              </div>

              <div className="my-[1rem]">March 2024</div>

              {/* Tags */}
              <div className="mb-[0.5rem] flex gap-[0.5rem]">
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] text-xs md:text-base dark:text-black">
                  Improvement
                </div>
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] text-xs md:text-base dark:text-black">
                  Next.js
                </div>
              </div>

              <div className="mb-[1rem] h-[2px] bg-white"></div>

              <div className="flex justify-end">
                <Link
                  href={`https://www.linkedin.com/posts/vonn-pactol-718a2a283_fullstack-webdeveloper-selfimprovement-activity-7180210384782462976-U5Uw?utm_source=share&utm_medium=member_desktop`}
                  className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white hover:bg-secondary/90 active:scale-95"
                  target="_blank"
                >
                  Read article
                </Link>
              </div>
            </div>

            <div className="w-full rounded-2xl bg-gray p-4 lg:w-[24rem] dark:bg-card">
              <Image
                src={`/article-banner/leetcode-banner.png`}
                alt="Leetcode Banner"
                width={800}
                height={800}
                className="w-full rounded-md"
              />

              {/* Title for Medium Screen */}
              <div className="mt-[0.5rem] hidden text-[1.5rem] md:block md:text-[2rem] dark:text-gray">
                {truncateWord(
                  "Enhancing My Coding Skills: My Journey Through 28 Days of LeetCode Problem Solving",
                )}
              </div>

              {/* Title for Mobile Screen */}
              <div className="mt-[0.5rem] block text-[1rem] md:hidden dark:text-gray">
                Enhancing My Coding Skills: My Journey Through 28 Days of
                LeetCode Problem Solving
              </div>
              <div className="my-[1rem]">February 2024</div>

              {/* Tags */}
              <div className="mb-[0.5rem] flex gap-[0.5rem]">
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] text-xs md:text-base dark:text-black">
                  Improvement
                </div>
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem] text-xs md:text-base dark:text-black">
                  JavaScript
                </div>
              </div>

              <div className="mb-[1rem] h-[2px] bg-white"></div>

              <div className="flex justify-end">
                <Link
                  href={`https://www.linkedin.com/feed/update/urn:li:linkedInArticle:7168522598362832896/`}
                  className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white hover:bg-secondary/90 active:scale-95"
                  target="_blank"
                >
                  Read article
                </Link>
              </div>
            </div>
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
