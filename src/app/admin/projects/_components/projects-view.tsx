"use client";

import { Project, ProjectTag } from "@prisma/client";
import { Plus } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/trpc/react";
import { truncateWord } from "~/utils/truncate-word";

type Props = {
  initialData: (Project & {
    projectTags: ProjectTag[];
  })[];
};

export function ProjectsView({ initialData }: Props) {
  const getProjectsQuery = api.project.getAll.useQuery(undefined, {
    initialData,
  });
  const projects = getProjectsQuery.data;

  return (
    <div className="flex py-[1rem]">
      <div className="w-full px-12">
        <div className="mb-[1rem] text-center text-[3rem] dark:text-gray">
          Projects
        </div>

        <div className="mt-[5rem] flex w-full flex-wrap gap-8 ">
          <Link
            href={`/admin/projects/create`}
            className="flex h-[24rem] w-[24rem] items-center justify-center gap-4 rounded-2xl  bg-gray p-4 dark:bg-transparent dark:hover:bg-card dark:hover:text-gray"
          >
            Add
            <div>
              <Plus />
            </div>
          </Link>
          {projects?.map((project) => (
            <Link
              href={`https://sds-ss.vercel.app/`}
              key={project.id}
              target="_blank"
              className="group col-span-1 flex w-[24rem] flex-col gap-[1rem] rounded-2xl bg-gray p-4 hover:bg-gray/80 dark:bg-card dark:hover:bg-card/80"
            >
              <div className="self-end text-xs">{project.date}</div>
              <div className="object-fit mx-auto flex h-[12rem] w-[18rem]">
                <CldImage
                  width="288"
                  height="192"
                  src={project.imageId}
                  alt={`${project.title} Banner`}
                  className=""
                />
              </div>

              <div className="text-[2rem] group-hover:text-primary group-hover:underline dark:text-gray">
                {project.title}
              </div>

              <div className="">
                {project.projectTags.map((tag) => tag.name).join(",")}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
