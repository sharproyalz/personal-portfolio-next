"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
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
import { Trash2 } from "lucide-react";

type Inputs = z.infer<typeof schemas.project.create>;

export default function CreateProjectView() {
  const router = useRouter();
  const date = new Date();

  const projectForm = useForm<Inputs>({
    resolver: zodResolver(schemas.project.create),
  });

  const { fields, append, remove } = useFieldArray({
    control: projectForm.control,
    name: "projectTags",
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
    addProject.mutate(values);
    console.log(values);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-lg p-12">
        <div className="mb-[2rem] text-center text-[3rem] dark:text-gray">
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
              <div className="flex h-80 w-[56rem] items-center justify-center rounded-md border border-black text-2xl dark:bg-card">
                Project Image
              </div>
            )}

            <UploadButton
              className="w-full rounded-lg border border-secondary p-4 font-semibold hover:bg-secondary hover:text-white"
              folder="project-image"
              resourceType={ResourceType.IMAGE}
              onSuccess={onSuccessUpload}
            >
              Upload
            </UploadButton>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="project-title" className="font-bold dark:text-gray">
              Title
            </label>
            <input
              type="text"
              id="project-title"
              // placeholder="Type your project title here"
              className="w-full rounded-md border p-2 text-lg font-bold text-black"
              {...projectForm.register("title")}
            />
          </div>

          {/* Tags */}
          <div>
            <div className="font-bold dark:text-gray">Tags</div>
            <div
              className={`justify   flex flex-wrap gap-4 ${fields.length ? "mt-4" : ""}`}
            >
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                  <input
                    type="textbox"
                    id={`projectTags.${index}.name`}
                    {...projectForm?.register(`projectTags.${index}.name`, {
                      required: true,
                    })}
                    className="rounded-md border border-black p-2 text-xs text-black"
                  />
                  <button
                    type="button"
                    className="text-red-600"
                    onClick={() => remove(index)}
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-lg border border-secondary p-2 font-semibold hover:bg-secondary hover:text-white"
              onClick={() => {
                append({ name: "" });
              }}
            >
              Add Tags
            </button>
          </div>

          <div>
            <label
              htmlFor="project-start-date"
              className="font-bold dark:text-gray"
            >
              Date
            </label>
            <div className="flex gap-4 text-black">
              <input
                type="text"
                id="project-date"
                className="w-full rounded-md border border-black p-2 text-xs text-black"
                placeholder="e.g August 2018"
                {...projectForm.register("date")}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="project-start-date"
              className="font-bold dark:text-gray"
            >
              Link
            </label>
            <div className="flex gap-4 text-black">
              <input
                type="text"
                id="project-link"
                className="w-full rounded-md border border-black p-2 text-xs text-black"
                {...projectForm.register("link")}
              />
            </div>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2 text-center font-bold text-white hover:bg-primary/90 active:scale-95"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}
