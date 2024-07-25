import Image from "next/image";
import Link from "next/link";

export function BlogsSection() {
  return (
    <section className="flex px-12 py-4">
      <div className="mx-auto my-0 max-w-screen-xl px-12">
        <div className="mb-4 text-center text-[3rem] dark:text-gray">Blogs</div>
        <div className="mt-[5rem] flex flex-wrap justify-between gap-8">
          <div className="w-[20rem] rounded-2xl bg-gray p-4 dark:bg-card">
            <Image
              src={`/article-banner/sharpie-banner.png`}
              alt="Sharpie Banner"
              width={256}
              height={256}
              className="w-full rounded-md"
            />

            <div className="mt-2 text-[2rem] dark:text-gray">
              My First Full-stack Website: Sharpie
            </div>

            <div className="my-4">March 2024</div>

            {/* Tags */}
            <div className="mb-2 flex gap-2">
              <div className="w-fit rounded-2xl bg-white px-4 py-[0.25rem] dark:text-black">
                Improvement
              </div>
              <div className="w-fit rounded-2xl bg-white px-4 py-[0.25rem] dark:text-black">
                Next.js
              </div>
            </div>

            <div className="mb-4 h-[2px] bg-white"></div>

            <div className="flex justify-end">
              <Link
                href={`https://www.linkedin.com/posts/vonn-pactol-718a2a283_fullstack-webdeveloper-selfimprovement-activity-7180210384782462976-U5Uw?utm_source=share&utm_medium=member_desktop`}
                className="w-fit rounded-2xl bg-secondary px-4 py-[0.25rem] font-bold text-white"
                target="_blank"
              >
                Read article
              </Link>
            </div>
          </div>

          <div className="w-[20rem] rounded-2xl bg-gray p-4 dark:bg-card">
            <Image
              src={`/article-banner/leetcode-banner.png`}
              alt="Leetcode Banner"
              width={256}
              height={256}
              className="w-full rounded-md"
            />

            <div className="mt-2 text-[2rem] dark:text-gray">
              Enhancing My Coding Skills: My Journey Through 28 Days of LeetCode
              Problem Solving
            </div>

            <div className="my-4">February 2024</div>

            {/* Tags */}
            <div className="mb-2 flex gap-2">
              <div className="w-fit rounded-2xl bg-white px-4 py-[0.25rem] dark:text-black">
                Improvement
              </div>
              <div className="w-fit rounded-2xl bg-white px-4 py-[0.25rem] dark:text-black">
                JavaScript
              </div>
            </div>

            <div className="mb-4 h-[2px] bg-white"></div>

            <div className="flex justify-end">
              <Link
                href={`https://www.linkedin.com/feed/update/urn:li:linkedInArticle:7168522598362832896/`}
                className="w-fit rounded-2xl bg-secondary px-4 py-[0.25rem] font-bold text-white"
                target="_blank"
              >
                Read article
              </Link>
            </div>
          </div>

          <div className="w-[20rem] rounded-2xl bg-gray p-4 dark:bg-card">
            <Image
              src={`/article-banner/react-banner.png`}
              alt="React Banner"
              width={256}
              height={256}
              className="w-full rounded-md"
            />

            <div className="mt-2 text-[2rem] dark:text-gray">
              JavaScript Fundamentals You Need Before Starting Your React
              Project
            </div>

            <div className="my-4">January 2024</div>

            {/* Tags */}
            <div className="mb-2 flex gap-2">
              <div className="w-fit rounded-2xl bg-white px-4 py-[0.25rem] dark:text-black">
                Tutorial
              </div>
              <div className="w-fit rounded-2xl bg-white px-4 py-[0.25rem] dark:text-black">
                JavaScript
              </div>
            </div>

            <div className="mb-4 h-[2px] bg-white"></div>

            <div className="flex justify-end">
              <Link
                href={`https://www.linkedin.com/feed/update/urn:li:linkedInArticle:7158059322348826624/`}
                className="w-fit rounded-2xl bg-secondary px-4 py-[0.25rem] font-bold text-white"
                target="_blank"
              >
                Read article
              </Link>
            </div>
          </div>

          <div className="w-[20rem] rounded-2xl bg-gray p-4 dark:bg-card">
            <Image
              src={`/article-banner/react-banner.png`}
              alt="React Banner"
              width={256}
              height={256}
              className="w-full rounded-md"
            />

            <div className="mt-2 text-[2rem] dark:text-gray">
              JavaScript Fundamentals You Need Before Starting Your React
              Project
            </div>

            <div className="my-4">January 2024</div>

            {/* Tags */}
            <div className="mb-2 flex gap-2">
              <div className="w-fit rounded-2xl bg-white px-4 py-[0.25rem] dark:text-black">
                Tutorial
              </div>
              <div className="w-fit rounded-2xl bg-white px-4 py-[0.25rem] dark:text-black">
                JavaScript
              </div>
            </div>

            <div className="mb-4 h-[2px] bg-white"></div>

            <div className="flex justify-end">
              <Link
                href={`https://www.linkedin.com/feed/update/urn:li:linkedInArticle:7158059322348826624/`}
                className="w-fit rounded-2xl bg-secondary px-4 py-[0.25rem] font-bold text-white"
                target="_blank"
              >
                Read article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
