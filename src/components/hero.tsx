export function HeroSection() {
  return (
    <>
      <div className="bg-white px-12">
        <nav className="py-[1rem]">
          <div className="flex items-center justify-between">
            <div className="h-[3rem] w-[3rem] rounded-full bg-gray"></div>
            <div className="flex gap-[2rem]">
              <div className="text-2xl ">About</div>
              <div className="text-2xl ">Project</div>
              <div className="text-2xl ">Blog</div>
              <div className="text-2xl ">Contact</div>
            </div>
            <button
              type="button"
              className="rounded-lg bg-primary px-[1.5rem] py-[0.5rem] font-bold text-white"
            >
              Hire me
            </button>
          </div>
        </nav>

        <section className="flex h-[90vh] items-center px-12">
          <div className="mx-auto my-0 flex max-w-screen-xl items-center justify-between px-12">
            <div className="w-[50%]">
              <div className="text-[4rem] tracking-tighter">Hi, I am Vonn</div>
              <div className="text-[4rem] tracking-tighter">
                I’m a Web Developer
              </div>
              <div className="mt-[1rem] text-[1.5rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </div>
              <button
                type="button"
                className="mt-[1.5rem] rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white"
              >
                Learn more
              </button>
              <div className="mt-[3rem] flex gap-[1rem]">
                <div className="h-[2rem] w-[2rem] bg-gray"></div>
                <div className="h-[2rem] w-[2rem] bg-gray"></div>
                <div className="h-[2rem] w-[2rem] bg-gray"></div>
                <div className="h-[2rem] w-[2rem] bg-gray"></div>
              </div>
            </div>

            <div className="h-[32rem] w-[24rem] bg-gray"></div>
          </div>
        </section>
      </div>
    </>
  );
}
