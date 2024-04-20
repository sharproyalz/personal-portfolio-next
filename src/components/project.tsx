export function ProjectSection() {
  return (
    <>
      <section className="flex px-12 py-[1rem]">
        <div className="mx-auto my-0 max-w-screen-xl px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-[1rem] text-[3rem]">Project</div>
            <div className="text-[1.5rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur totam beatae
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>

            <div className="mt-[5rem] flex gap-8">
              <div className="flex h-[16rem] w-[24rem] flex-col justify-between rounded-2xl bg-gray p-4">
                <div className="text-[2rem]">Capstone Project</div>
                <div className="">
                  Next.js, TypeScript, Tailwind, tRPC, Postgres
                </div>
              </div>

              <div className="flex h-[16rem] w-[24rem] flex-col justify-between rounded-2xl bg-gray p-4">
                <div className="text-[2rem]">Ecommerce</div>
                <div className="">Next.js, TypeScript, Tailwind, Postgres</div>
              </div>

              <div className="flex h-[16rem] w-[24rem] flex-col justify-between rounded-2xl bg-gray p-4">
                <div className="text-[2rem]">Background Changer</div>
                <div className="">JavaScript</div>
              </div>
            </div>

            <div className="flex w-full justify-end">
              <button
                type="button"
                className="mt-[3rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white"
              >
                View all
              </button>
            </div>

            <div className="mt-[2rem] w-full justify-start">
              <div className="text-[1.5rem]">Technical skills</div>

              <div className="mt-[0.5rem] flex gap-[1.5rem]">
                <div className="h-[4rem] w-[4rem] bg-gray"></div>
                <div className="h-[4rem] w-[4rem] bg-gray"></div>
                <div className="h-[4rem] w-[4rem] bg-gray"></div>
                <div className="h-[4rem] w-[4rem] bg-gray"></div>
                <div className="h-[4rem] w-[4rem] bg-gray"></div>
                <div className="h-[4rem] w-[4rem] bg-gray"></div>
                <div className="h-[4rem] w-[4rem] bg-gray"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
