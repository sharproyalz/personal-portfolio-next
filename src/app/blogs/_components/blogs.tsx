import Image from "next/image";
import Link from "next/link";
import { truncateWord } from "~/utils/truncateWords";

export function BlogsSection() {
  return (
    <section className="flex px-12 py-[1rem]">
      <div className="mx-auto my-0 max-w-screen-xl px-12">
        <div className="mb-[1rem] text-center text-[3rem]">Blogs</div>
        <div className="mt-[5rem] flex flex-wrap justify-between gap-8">
          <div className="w-[20rem] rounded-2xl bg-gray p-4">
            <Image
              src={`/article-banner/sharpie-banner.png`}
              alt="Sharpie Banner"
              width={256}
              height={256}
              className="w-full rounded-md"
            />

            <div className="mt-[0.5rem] text-[2rem]">
              My First Full-stack Website: Sharpie
            </div>

            <div className="my-[1rem]">March 2024</div>

            {/* Tags */}
            <div className="mb-[0.5rem] flex gap-[0.5rem]">
              <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                Improvement
              </div>
              <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                Next.js
              </div>
            </div>

            <div className="mb-[1rem] h-[2px] bg-white"></div>

            <div className="flex justify-end">
              <Link
                href={`https://www.linkedin.com/posts/vonn-pactol-718a2a283_fullstack-webdeveloper-selfimprovement-activity-7180210384782462976-U5Uw?utm_source=share&utm_medium=member_desktop`}
                className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white"
                target="_blank"
              >
                Read article
              </Link>
            </div>
          </div>

          <div className="w-[20rem] rounded-2xl bg-gray p-4">
            <Image
              src={`/article-banner/leetcode-banner.png`}
              alt="Leetcode Banner"
              width={256}
              height={256}
              className="w-full rounded-md"
            />

            <div className="mt-[0.5rem] text-[2rem]">
              {truncateWord(
                "Enhancing My Coding Skills: My Journey Through 28 Days of LeetCode Problem Solving",
              )}
            </div>

            <div className="my-[1rem]">February 2024</div>

            {/* Tags */}
            <div className="mb-[0.5rem] flex gap-[0.5rem]">
              <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                Improvement
              </div>
              <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                JavaScript
              </div>
            </div>

            <div className="mb-[1rem] h-[2px] bg-white"></div>

            <div className="flex justify-end">
              <Link
                href={`https://www.linkedin.com/feed/update/urn:li:linkedInArticle:7168522598362832896/`}
                className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white"
                target="_blank"
              >
                Read article
              </Link>
            </div>
          </div>

          <div className="w-[20rem] rounded-2xl bg-gray p-4">
            <Image
              src={`/article-banner/react-banner.png`}
              alt="React Banner"
              width={256}
              height={256}
              className="w-full rounded-md"
            />

            <div className="mt-[0.5rem] text-[2rem]">
              {truncateWord(
                "JavaScript Fundamentals You Need Before Starting Your React Project",
              )}
            </div>

            <div className="my-[1rem]">January 2024</div>

            {/* Tags */}
            <div className="mb-[0.5rem] flex gap-[0.5rem]">
              <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                Tutorial
              </div>
              <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
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

          <div className="w-[20rem] rounded-2xl bg-gray p-4">
            <Image
              src={`/article-banner/react-banner.png`}
              alt="React Banner"
              width={256}
              height={256}
              className="w-full rounded-md"
            />

            <div className="mt-[0.5rem] text-[2rem]">
              {truncateWord(
                "JavaScript Fundamentals You Need Before Starting Your React Project",
              )}
            </div>

            <div className="my-[1rem]">January 2024</div>

            {/* Tags */}
            <div className="mb-[0.5rem] flex gap-[0.5rem]">
              <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                Tutorial
              </div>
              <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
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
        </div>
      </div>
    </section>
  );
}
