"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function ContactSection() {
  const host = "/api/blog";
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const router = useRouter()
  const sendmessage = async () => {
    try {
      const messageResponse = await fetch(`${host}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          image: "",
          imageId: "",
          month: 1,
          year: 2024,
          title: "Sample Project",
        }),
      });

      const messageData = await messageResponse.json();
      console.log("New message:", messageData);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
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

          <div className="mt-[4rem] flex flex-col gap-[1rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <label htmlFor="name" className="text-xs font-bold md:text-base">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="rounded-md border border-primary p-[0.5rem] text-[1rem] md:text-[1.5rem] dark:bg-card dark:text-gray dark:outline-none dark:focus:outline-gray"
                onChange={(e)=> setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <label htmlFor="email" className="text-xs font-bold md:text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your.email@example.com"
                className="rounded-md border border-primary p-[0.5rem] text-[1rem] md:text-[1.5rem] dark:bg-card
                dark:text-gray dark:outline-none dark:focus:outline-gray"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
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
                name="message"
                id="message"
                placeholder="Your message here"
                rows={3}
                className="rounded-md border border-primary p-[0.5rem] text-[1rem] md:text-[1.5rem] dark:bg-card
                dark:text-gray dark:outline-none dark:focus:outline-gray"
                onChange={(e)=> setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>

            <div className="flex w-full justify-center">
              <button
                type="button"
                onClick={() => {
                  if(name === "Vonn" &&email === "Sharp"){
                    router.push('/blog')
                  }
                }}
                className="mt-[1rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white hover:bg-primary/90 active:scale-95"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
