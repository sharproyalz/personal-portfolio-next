"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function ProjectSection() {
  const projects = [
    {
      title: "Capstone Project",
      tags: "Next.js, TypeScript, Tailwind, tRPC, Postgres",
      date: "October 2023 - January 2024",
      projectLink: "https://sds-ss.vercel.app/",
      imageLink: "/capstone-project-banner.png",
    },
    {
      title: "Sharpie E-commerce",
      tags: "Next.js, TypeScript, Tailwind, Postgres",
      date: "March 2024",
      projectLink: "https://sharpie-store.vercel.app/",
      imageLink: "/sharpie-banner.png",
    },
    {
      title: "Background Changer",
      tags: "JavaScript",
      date: "December 2023",
      projectLink: "https://background-changer-one.vercel.app/",
      imageLink: "/background-changer-banner.png",
    },
  ];
  const reveal = useRef<Array<HTMLAnchorElement | null>>([]);

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
            }
          }
        }
      },
      false,
    );
  }

  return (
    <>
      <section id="project" className="flex px-4 py-[1rem] md:px-12 ">
        <div className="mx-auto my-0 w-full max-w-screen-xl px-4 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="my-[1rem] text-[2rem] dark:text-gray md:text-[3rem]">
              Project
            </div>
            <div className="text-[1rem] md:text-[1.5rem]">
              A list of websites that I have developed.
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <div className="mt-[5rem] flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-stretch">
            {projects.map((project, projectIdx) => (
              <Link
                key={projectIdx}
                ref={(el) => {
                  if (el && reveal.current) {
                    reveal.current[projectIdx] = el;
                  }
                }}
                href={project.projectLink}
                target="_blank"
                className="reveal group flex w-[22rem] flex-col gap-[1rem] rounded-2xl bg-gray p-4 hover:bg-gray/80 dark:bg-card dark:hover:bg-card/80 lg:w-[24rem]"
              >
                <div className="self-end text-xs">{project.date}</div>
                <Image
                  src={project.imageLink}
                  alt={project.title}
                  height={800}
                  width={800}
                  className="w-full"
                />
                <div className="text-[1rem] group-hover:text-primary group-hover:underline dark:text-gray md:text-[2rem]">
                  {project.title}
                </div>

                <div className="">{project.tags}</div>
              </Link>
            ))}
          </div>

          <div className="flex w-full justify-end">
            <Link
              href={`/projects`}
              className="mt-[3rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white hover:bg-primary/90 active:scale-95"
            >
              View all
            </Link>
          </div>

          <div className="mt-[2rem] w-full justify-start">
            <div className="text-[1rem] md:text-[1.5rem]">Technical skills</div>

            <div className="mt-[0.5rem] flex flex-wrap justify-around gap-[2rem] md:flex-nowrap md:justify-start">
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/next.png`}
                  alt={`Next JS Icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/tailwind.png`}
                  alt={`Tailwind CSS Icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/prisma.png`}
                  alt={`Prisma Icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/zod.png`}
                  alt={`Zod Icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/postgreSQL.png`}
                  alt={`PostgreSQL Icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/mySQL.png`}
                  alt={`mySQL Icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/javascript.png`}
                  alt={`JavaScript Icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/figma.png`}
                  alt={`Figma Icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex h-[4rem] w-[4rem] items-center justify-center">
                <Image
                  src={`/tech-icons/java.png`}
                  alt={`Java Icon`}
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
