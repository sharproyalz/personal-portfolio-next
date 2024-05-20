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

type Inputs = z.infer<typeof schemas.blog.create>;

export function BlogForm() {
  const router = useRouter();
  const blogForm = useForm<Inputs>();
  const date = new Date();

  const addBlog = api.blog.create.useMutation({
    onSuccess: async ({ id }) => {
      toast.success("✔️ Article has been created.");
      console.log("✔️ Article has been created.");
      await router.push(`/admin/blogs`);
    },
  });

  const onSuccessUpload: OnSuccessUpload = (result) => {
    blogForm.setValue("image", result.info?.secure_url ?? "");
    blogForm.setValue("imageId", result.info?.public_id ?? "");
  };

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    addBlog.mutate({
      ...values,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    });
    console.log({
      ...values,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    });
  };

  return (
    <>
      <div className="mx-auto max-w-screen-lg p-12">
        <div className="mb-[2rem] text-center text-[3rem] text-gray">
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
              <div className="flex h-80 w-[56rem] items-center justify-center text-2xl dark:bg-card">
                Your article banner
              </div>
            )}
            <UploadButton
              className="w-full rounded-lg border border-secondary p-4 hover:bg-secondary hover:text-white"
              folder="article-banner"
              resourceType={ResourceType.IMAGE}
              onSuccess={onSuccessUpload}
            >
              Upload
            </UploadButton>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="blog-title" className="font-bold text-gray">
              Title
            </label>
            <textarea
              id="blog-title"
              placeholder="Type your article title here"
              className="w-full p-4 text-2xl font-bold text-black"
              {...blogForm.register("title")}
            ></textarea>
          </div>

          {/* Tags */}
          {/* <div>
            <div className="font-bold text-gray">Tags</div>
            <div className="flex gap-8">
              {Array.from({ length: 3 }).map((arr, arrIdx) => (
                <div key={arrIdx} className="flex gap-2">
                  <input
                    type="checkbox"
                    id="blog-tag"
                    {...blogForm.register("blogTag.name")}
                    value="Improvement"
                  />
                  <label htmlFor="blog-tag" className="">
                    Improvement
                  </label>
                </div>
              ))}
            </div>
          </div> */}

          {/* Article */}
          <div>
            <label htmlFor="blog-title" className="font-bold text-gray">
              Article
            </label>
            <textarea
              id=""
              rows={10}
              placeholder="Type your article here"
              className="w-full p-4 text-black "
              {...blogForm.register("article")}
            ></textarea>
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
