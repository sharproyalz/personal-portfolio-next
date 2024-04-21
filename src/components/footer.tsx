export function Footer() {
  return (
    <>
      <footer className="mt-[8rem] w-full bg-primary">
        <div className="mx-auto my-0 flex max-w-screen-xl items-center justify-between px-12 py-[2rem]">
          <div className="flex gap-[1rem] ">
            <div className="h-[2rem] w-[2rem] bg-gray"></div>
            <div className="h-[2rem] w-[2rem] bg-gray"></div>
            <div className="h-[2rem] w-[2rem] bg-gray"></div>
            <div className="h-[2rem] w-[2rem] bg-gray"></div>
          </div>

          <div className="h-[3rem] w-[3rem] rounded-full bg-gray"></div>

          <div className="text-white">pactol.vonn@gmail.com</div>
        </div>

        <div className="h-[2px] w-full bg-white"></div>

        <div className="mx-auto my-0 flex max-w-screen-xl items-center justify-center px-12 py-[2rem] text-white">
          © Developed by Vonn
        </div>
      </footer>
    </>
  );
}
