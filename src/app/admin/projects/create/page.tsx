"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { schemas } from "~/zod-schemas";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { CldImage } from "next-cloudinary";
import {
  OnSuccessUpload,
  ResourceType,
  UploadButton,
} from "~/components/upload-button";
import { ToggleButton } from "~/app/admin/projects/create/_components/toggle-button";
import { monthName } from "~/utils/month-name";

type Inputs = z.infer<typeof schemas.project.create>;

export default function CreateProjectPage() {
  const router = useRouter();
  const date = new Date();

  const projectForm = useForm<Inputs>({
    defaultValues: {
      monthStart: date.getMonth() + 1,
      yearStart: date.getFullYear() + 1,
      yearEnd: 0,
      monthEnd: 0,
    },
  });

  const addProject = api.project.create.useMutation({
    onSuccess: async ({ id }) => {
      toast.success("✔️ Project has been created.");
      console.log("✔️ Project has been created.");
      await router.push(`/admin/projects`);
    },
  });

  const onSuccessUpload: OnSuccessUpload = (result) => {
    projectForm.setValue("image", result.info?.secure_url ?? "");
    projectForm.setValue("imageId", result.info?.public_id ?? "");
  };

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    addProject.mutate({
      ...values,
      monthStart: +values.monthStart,
      yearStart: +values.yearStart,
    });
    console.log({
      ...values,
      monthStart: +values.monthStart,
      yearStart: +values.yearStart,
    });
  };

  return (
    <>
      <div className="mx-auto max-w-screen-lg p-12">
        <div className="mb-[2rem] text-center text-[3rem] text-gray">
          Create Project
        </div>
        <form
          className="flex flex-col gap-8"
          onSubmit={projectForm.handleSubmit(onSubmit, (err) =>
            console.log(err),
          )}
        >
          {/* Image */}
          <div className="flex flex-col  items-center gap-4">
            {projectForm.watch("imageId") ? (
              <div className="object-fit mx-auto flex h-80 w-[56rem]">
                <CldImage
                  width="896"
                  height="896"
                  src={projectForm.watch("imageId") ?? ""}
                  alt="Project Image"
                  className=""
                />
              </div>
            ) : (
              <div className="flex h-80 w-[56rem] items-center justify-center text-2xl dark:bg-card">
                Your project image
              </div>
            )}
            <UploadButton
              className="w-full rounded-lg border border-secondary p-4 hover:bg-secondary hover:text-white"
              folder="project-image"
              resourceType={ResourceType.IMAGE}
              onSuccess={onSuccessUpload}
            >
              Upload
            </UploadButton>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="project-title" className="font-bold text-gray">
              Title
            </label>
            <input
              type="text"
              id="project-title"
              placeholder="Type your project title here"
              className="w-full p-4 text-2xl font-bold text-black"
              {...projectForm.register("title")}
            />
          </div>

          {/* Tags */}
          {/* <div>
            <div className="font-bold text-gray">Tags</div>
            <div className="flex gap-8">
              {Array.from({ length: 3 }).map((arr, arrIdx) => (
                <div key={arrIdx} className="flex gap-2">
                  <input
                    type="checkbox"
                    id="project-tag"
                    {...projectForm.register("projectTag.name")}
                    value="Improvement"
                  />
                  <label htmlFor="project-tag" className="">
                    Improvement
                  </label>
                </div>
              ))}
            </div>
          </div> */}

          <div>
            <label htmlFor="project-start-date" className="font-bold text-gray">
              Start Date
            </label>
            <div className="flex gap-4 text-black">
              <select
                id="project-start-date"
                className="w-full p-2 "
                {...projectForm.register("monthStart")}
              >
                {monthName.map((month, monthIdx) => (
                  <option key={monthIdx} value={monthIdx + 1}>
                    {month}
                  </option>
                ))}
              </select>

              <input
                type="text"
                id="project-start-year"
                className="p-2"
                {...projectForm.register("yearStart")}
              />
            </div>
          </div>

          <div>
            <label htmlFor="project-end-date" className="font-bold text-gray">
              End Date <span className="font-normal">(Optional)</span>
            </label>
            <div className="flex gap-4 text-black">
              <select
                id="project-end-date"
                className="w-full p-2 "
                {...projectForm.register("monthEnd")}
              >
                <option value="">Optional</option>
                {monthName.map((month, monthIdx) => (
                  <option key={monthIdx} value={monthIdx + 1}>
                    {month}
                  </option>
                ))}
              </select>

              <input
                type="text"
                id="project-end-year"
                className="p-2"
                {...projectForm.register("yearEnd")}
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-[1rem] py-[0.5rem] text-center font-bold text-white hover:bg-primary/90 active:scale-95"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}
