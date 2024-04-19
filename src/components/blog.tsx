export function BlogSection() {
  return (
    <>
      <section className="flex px-12 py-[1rem]">
        <div className="mx-auto my-0 max-w-screen-xl px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-[1rem] text-[3rem]">Blog</div>
            <div className="text-[1.5rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur totam beatae
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <div className="mt-[5rem] flex gap-8">
            <div className="w-[24rem] rounded-2xl bg-gray p-4">
              <div className="h-[12rem] w-full rounded-[4px] bg-white"></div>

              <div className="mt-[0.5rem] text-[2rem]">
                Lorem ipsum dolor sit amet consectetur...
              </div>

              <div className="my-[1rem]">April 2024</div>

              {/* Tags */}
              <div className="mb-[0.5rem] flex gap-[0.5rem]">
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                  Tutorial
                </div>
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                  JavaScript
                </div>
              </div>

              <div className="mb-[1rem] h-[2px] bg-white"></div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white"
                >
                  Read article
                </button>
              </div>
            </div>

            <div className="w-[24rem] rounded-2xl bg-gray p-4">
              <div className="h-[12rem] w-full rounded-[4px] bg-white"></div>

              <div className="mt-[0.5rem] text-[2rem]">
                Lorem ipsum dolor sit amet consectetur...
              </div>

              <div className="my-[1rem]">April 2024</div>

              {/* Tags */}
              <div className="mb-[0.5rem] flex gap-[0.5rem]">
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                  Tutorial
                </div>
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                  JavaScript
                </div>
              </div>

              <div className="mb-[1rem] h-[2px] bg-white"></div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white"
                >
                  Read article
                </button>
              </div>
            </div>

            <div className="w-[24rem] rounded-2xl bg-gray p-4">
              <div className="h-[12rem] w-full rounded-[4px] bg-white"></div>

              <div className="mt-[0.5rem] text-[2rem]">
                Lorem ipsum dolor sit amet consectetur...
              </div>

              <div className="my-[1rem]">April 2024</div>

              {/* Tags */}
              <div className="mb-[0.5rem] flex gap-[0.5rem]">
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                  Tutorial
                </div>
                <div className="w-fit rounded-2xl bg-white px-[1rem] py-[0.25rem]">
                  JavaScript
                </div>
              </div>

              <div className="mb-[1rem] h-[2px] bg-white"></div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-fit rounded-2xl bg-secondary px-[1rem] py-[0.25rem] font-bold text-white"
                >
                  Read article
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="mt-[3rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white"
            >
              View all
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
