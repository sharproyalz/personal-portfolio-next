export default function Navigation() {
  return (
    <>
      <nav className="px-12 py-[1rem]">
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
    </>
  );
}
