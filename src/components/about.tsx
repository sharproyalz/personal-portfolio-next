export function AboutSection() {
  return (
    <>
      <section className="flex h-[100vh] px-12">
        <div className="mx-auto my-0 max-w-screen-xl px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="my-[1rem] text-[3rem]">About</div>
            <div className="text-[1.5rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur totam beatae
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <div className="mt-[5rem] flex items-center justify-between">
            <div className="w-[64%]">
              <div className="text-[2.5rem]">Lorem ipsum dolor sit amet.</div>
              <div className="mt-[1rem] h-[2px] w-[20%] bg-primary"></div>

              <div className="mt-[3rem] flex gap-[3rem]">
                <div className="text-[1.5rem]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore, saepe sapiente repellendus debitis at architecto,
                </div>
                <div className="text-[1.5rem]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore, saepe sapiente repellendus debitis at architecto,
                </div>
              </div>

              <button
                type="button"
                className="mt-[3rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white"
              >
                Contact me
              </button>
            </div>

            <div className="flex h-[28rem] w-[16rem] items-center rounded-2xl bg-primary">
              <div className="h-[26rem] w-[16rem] -translate-x-5 rounded-2xl bg-gray"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
