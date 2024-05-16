import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { truncateWord } from "~/utils/truncateWords";

export function ProjectsView() {
  return (
    <section className="flex py-[1rem]">
      <div className="w-full px-12">
        <div className="mb-[1rem] text-center text-[3rem] dark:text-gray">
          Projects
        </div>

        <div className="mt-[5rem] flex w-full flex-wrap justify-evenly gap-8 ">
          <Link
            href={`/admin/projects/create`}
            className="flex w-[24rem] items-center justify-center gap-4 rounded-2xl border border-card bg-gray p-4 dark:bg-transparent dark:hover:bg-card dark:hover:text-gray"
          >
            Add
            <div>
              <Plus />
            </div>
          </Link>
          {Array.from({ length: 3 }).map((arr, arrIdx) => (
            <Link
              href={`https://sds-ss.vercel.app/`}
              target="_blank"
              className="group col-span-1 flex w-[24rem] flex-col gap-[1rem] rounded-2xl bg-gray p-4 hover:bg-gray/80 dark:bg-card dark:hover:bg-card/80"
            >
              <div className="self-end text-xs">
                October 2023 - January 2024
              </div>
              <Image
                src={`/capstone-project-banner.png`}
                alt={`Sharpie Banner`}
                height={256}
                width={384}
                className=""
              />
              <div className="text-[2rem] group-hover:text-primary group-hover:underline dark:text-gray">
                Capstone Project
              </div>

              <div className="">
                Next.js, TypeScript, Tailwind, tRPC, Postgres
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
