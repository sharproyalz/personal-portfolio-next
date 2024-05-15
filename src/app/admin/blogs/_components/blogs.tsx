import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { truncateWord } from "~/utils/truncateWords";

export function BlogsView() {
  return (
    <section className="flex py-[1rem]">
      <div className="w-full px-12">
        <div className="mb-[1rem] text-center text-[3rem] dark:text-gray">
          Blogs
        </div>

        <div className="mt-[5rem] flex w-full flex-wrap justify-evenly gap-8 ">
          <button
            type="button"
            className="flex w-[20rem] items-center justify-center gap-4 rounded-2xl border border-card bg-gray p-4 dark:bg-transparent dark:hover:bg-card dark:hover:text-gray"
          >
            Add
            <div>
              <Plus />
            </div>
          </button>
          {Array.from({ length: 3 }).map((arr, arrIdx) => (
            <div
              key={arrIdx}
              className="w-[20rem] rounded-2xl bg-gray p-4 dark:bg-card"
            >
              <div className="w-[18rem]">
                <Image
                  src={`/article-banner/react-banner.png`}
                  alt="React Banner"
                  width={288}
                  height={256}
                  className=""
                />
              </div>

              <div className="mt-4 text-[2rem] dark:text-gray">
                {truncateWord(
                  "JavaScript Fundamentals You Need Before Starting Your React Project",
                )}
              </div>

              <div className="my-[1rem]">January 2024</div>

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
