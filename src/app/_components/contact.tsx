"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { OnSuccessUpload } from "~/components/upload-button";
import { api } from "~/trpc/react";
import { schemas } from "~/zod-schemas";

type Inputs = z.infer<typeof schemas.contact.send>;

export function ContactSection() {
  const router = useRouter();
  const sendMessageForm = useForm<Inputs>();

  const sendMessage = api.contact.send.useMutation({
    onSuccess: async ({ id }) => {
      toast.success("✔️ Message has been sent.");
      console.log("✔️ Message has been sent.");
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    sendMessage.mutate(values);
    console.log(values);
  };

  return (
    <>
      <section id="contact" className="flex px-4 py-[1rem] md:px-12 ">
        <div className="mx-auto my-0 max-w-screen-xl px-4 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="my-[1rem] text-[3rem] dark:text-gray">Contact</div>
            <div className="text-[1rem] md:text-[1.5rem]">
              Want to connect or make a project with me? Contact me below.
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <form
            className="mt-[4rem] flex flex-col gap-[1rem]"
            onSubmit={sendMessageForm.handleSubmit(onSubmit, (err) =>
              console.log(err),
            )}
          >
            <div className="flex flex-col gap-[0.5rem]">
              <label htmlFor="name" className="text-xs font-bold md:text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="rounded-md border border-primary p-[0.5rem] text-[1rem] dark:bg-card dark:text-gray dark:outline-none dark:focus:outline-gray md:text-[1.5rem]"
                {...sendMessageForm.register("name")}
              />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <label htmlFor="email" className="text-xs font-bold md:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="rounded-md border border-primary p-[0.5rem] text-[1rem] dark:bg-card dark:text-gray
                dark:outline-none dark:focus:outline-gray md:text-[1.5rem]"
                {...sendMessageForm.register("email")}
              />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <label
                htmlFor="message"
                className="text-xs font-bold md:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message here"
                rows={3}
                className="rounded-md border border-primary p-[0.5rem] text-[1rem] dark:bg-card dark:text-gray
                dark:outline-none dark:focus:outline-gray md:text-[1.5rem]"
                {...sendMessageForm.register("message")}
              ></textarea>
            </div>

            <div className="flex w-full justify-center">
              <button
                type="submit"
                className="mt-[1rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white hover:bg-primary/90 active:scale-95"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
