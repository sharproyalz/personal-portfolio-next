"use client";

import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  OnSuccessUpload,
  ResourceType,
  UploadButton,
} from "~/components/upload-button";
import { api } from "~/trpc/react";
import { schemas } from "~/zod-schemas";

type Inputs = z.infer<typeof schemas.blog.create>;

export default function UploadButtonPage() {
  const router = useRouter();
  const blogForm = useForm<Inputs>();

  const addBlog = api.blog.create.useMutation({
    onSuccess: async ({ id }) => {
      toast.success("✔️ Banner has been added.");
      console.log("✔️ Banner has been added.");
      await router.push(`/admin/carousel-images`);
    },
  });

  const onSuccessUpload: OnSuccessUpload = (result) => {
    blogForm.setValue("image", result.info?.secure_url ?? "");
    blogForm.setValue("imageId", result.info?.public_id ?? "");
  };
  return (
    <>
      {blogForm.watch("imageId") ? (
        <div className="object-fit mx-auto mt-8 flex h-[32rem] w-[32rem]">
          <CldImage
            width="512"
            height="512"
            src={blogForm.watch("imageId") ?? ""}
            alt="Avatar logo"
            className=""
          />
        </div>
      ) : (
        <div className="mx-auto mt-8 h-[32rem] w-[32rem] bg-[#d9d9d9]"></div>
      )}
      <UploadButton
        className="w-full rounded-lg border border-secondary p-4 hover:bg-secondary hover:text-white"
        folder="carousel-images"
        resourceType={ResourceType.IMAGE}
        onSuccess={onSuccessUpload}
      >
        Upload
      </UploadButton>
    </>
  );
}
