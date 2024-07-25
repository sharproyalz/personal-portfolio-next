"use client";

import { useState } from "react";
import { z } from "zod";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { schemas } from "~/zod-schemas";
import { useParams, useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { CldImage } from "next-cloudinary";
import {
  OnSuccessUpload,
  ResourceType,
  UploadButton,
} from "~/components/upload-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save, Trash2 } from "lucide-react";
import { createId } from "@paralleldrive/cuid2";

type Inputs = z.infer<typeof schemas.blog.update>;

export function EditBlogForm() {
  const params = useParams();
  const router = useRouter();
  const getBlogQuery = api.blog.get.useQuery({ id: params.id as string });
  const blog = getBlogQuery.data;

  const blogForm = useForm<Inputs>({
    resolver: zodResolver(schemas.blog.update),
    values: {
      id: params.id as string,
      title: blog?.title,
      content: blog?.content,
      date: blog?.date,
      image: blog?.image,
      imageId: blog?.imageId,
      link: blog?.link!,
      blogTags: blog?.blogTags,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: blogForm.control,
    name: "blogTags",
  });

  const updateBlog = api.blog.update.useMutation({
    onSuccess: async () => {
      toast.success("✔️ Article has been updated.");
      console.log("✔️ Article has been updated.");
      await router.push(`/admin/blogs`);
    },
  });

  const onSuccessUpload: OnSuccessUpload = (result) => {
    blogForm.setValue("image", result.info?.secure_url ?? "");
    blogForm.setValue("imageId", result.info?.public_id ?? "");
  };

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    updateBlog.mutate(values);
    console.log(values);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-lg p-12">
        <div className="derk:text-gray mb-[2rem] text-center text-[3rem]">
          Create Blog
        </div>
        <form
          className="flex flex-col gap-8"
          onSubmit={blogForm.handleSubmit(onSubmit, (err) => console.log(err))}
        >
          {/* Image */}
          <div className="flex flex-col  items-center gap-4">
            {blogForm.watch("imageId") ? (
              <div className="object-fit mx-auto flex h-80 w-[56rem]">
                <CldImage
                  width="896"
                  height="896"
                  src={blogForm.watch("imageId") ?? ""}
                  alt="Article Banner"
                  className=""
                />
              </div>
            ) : (
              <div className="flex h-80 w-[56rem] items-center justify-center rounded-md border border-black text-2xl dark:bg-card">
                Article Banner
              </div>
            )}
            <UploadButton
              className="w-full rounded-lg border border-secondary p-4 font-semibold hover:bg-secondary hover:text-white"
              folder="article-banner"
              resourceType={ResourceType.IMAGE}
              onSuccess={onSuccessUpload}
            >
              Upload
            </UploadButton>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="blog-title" className="font-bold dark:text-gray">
              Title
            </label>
            <input
              type="text"
              id="blog-title"
              // placeholder="Type your article title here"
              className="w-full rounded-md border p-2 text-lg font-bold text-black"
              {...blogForm.register("title")}
            />
          </div>

          {/* Tags */}
          <div>
            <div className="font-bold dark:text-gray">Tags</div>
            <div
              className={`justify flex flex-wrap gap-4 ${fields.length ? "mt-4" : ""}`}
            >
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                  <input
                    type="textbox"
                    id={`blogTags.${index}.name`}
                    {...blogForm?.register(`blogTags.${index}.name`, {
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
              className={`w-full rounded-lg border border-secondary p-2 font-semibold hover:bg-secondary hover:text-white ${fields.length ? "mt-4" : ""}`}
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
                {...blogForm.register("date")}
              />
            </div>
          </div>

          {/* Blog Content */}
          <div>
            <label htmlFor="blog-title" className="font-bold dark:text-gray">
              Blog Content
            </label>
            <textarea
              id=""
              rows={10}
              placeholder="Type your article here"
              className="w-full rounded-md border border-black p-2 text-xs text-black"
              {...blogForm.register("content")}
            ></textarea>
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
                placeholder="Optional"
                className="w-full rounded-md border border-black p-2 text-xs text-black"
                {...blogForm.register("link")}
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-[1rem] py-[0.5rem] text-center font-bold text-white hover:bg-primary/90 active:scale-95"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
