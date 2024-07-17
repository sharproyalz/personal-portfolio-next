"use client";

import Image from "next/image";
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
      <section id="contact" className="flex px-4 pb-8 pt-4 md:px-12 ">
        <div className="mx-auto my-0 w-full max-w-screen-xl px-4 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="my-[1rem] text-[3rem] dark:text-gray">Contact</div>
            <div className="text-base md:text-[1.5rem]">
              Want to connect or make a project with me? Contact me below.
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <div className="mt-[4rem] flex flex-col-reverse items-center gap-8 lg:flex-row lg:justify-between">
            <form
              className="flex w-full max-w-[400px] flex-col gap-[1rem] rounded-md bg-gray p-4 dark:bg-card"
              onSubmit={sendMessageForm.handleSubmit(onSubmit, (err) =>
                console.log(err),
              )}
            >
              <div className="group flex flex-col gap-2 ">
                <label
                  htmlFor="name"
                  className="text-xs font-bold dark:group-focus-within:text-gray md:text-base"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full rounded-md border-2  border-primary p-2 text-sm dark:border-dusty_gray dark:bg-card dark:text-gray dark:outline-none dark:focus:border-gray  md:text-base"
                  {...sendMessageForm.register("name")}
                />
              </div>

              <div className="group flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-bold dark:group-focus-within:text-gray md:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="rounded-md border-2 border-primary p-2 text-sm dark:border-dusty_gray dark:bg-card
                dark:text-gray dark:outline-none dark:focus:border-gray md:text-base"
                  {...sendMessageForm.register("email")}
                />
              </div>

              <div className="group flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs  font-bold dark:group-focus-within:text-gray md:text-base"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here"
                  rows={3}
                  className="rounded-md border-2 border-primary p-2 text-sm dark:border-dusty_gray dark:bg-card
                dark:text-gray dark:outline-none dark:focus:border-gray md:text-base"
                  {...sendMessageForm.register("message")}
                ></textarea>
              </div>

              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  className="mt-[1rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-semibold text-white hover:bg-primary/90 active:scale-95"
                >
                  Send message
                </button>
              </div>
            </form>

            <Image
              src="/contact.svg"
              alt="Contact Illustration"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
}
