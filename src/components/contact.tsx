export function ContactSection() {
  return (
    <>
      <section className="flex px-12 py-[1rem]">
        <div className="mx-auto my-0 max-w-screen-xl px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-[1rem] text-[3rem]">Contact</div>
            <div className="text-[1.5rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur totam beatae
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <div className="mt-[4rem] flex flex-col gap-[1rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <label htmlFor="name" className="font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="rounded-md border border-primary p-[0.5rem] text-[1.5rem]"
              />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                className="rounded-md border border-primary p-[0.5rem] text-[1.5rem]"
              />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <label htmlFor="message" className="font-bold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message here"
                rows={3}
                className="rounded-md border border-primary p-[0.5rem] text-[1.5rem]"
              ></textarea>
            </div>

            <div className="flex w-full justify-center">
              <button
                type="button"
                className="mt-[1rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white"
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
