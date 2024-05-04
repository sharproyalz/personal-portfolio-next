export function ContactSection() {
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
              ></textarea>
            </div>

            <div className="flex w-full justify-center">
              <button
                type="button"
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
