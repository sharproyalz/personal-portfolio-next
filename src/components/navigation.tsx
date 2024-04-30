import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className="px-12 py-[1rem]">
        <div className="flex items-center justify-between">
          <Link href={`/`} className="h-[3rem] w-[3rem] rounded-full">
            <Image
              src={`/sharp-royalz-logo.png`}
              alt="Sharp Royalz Logo"
              width={100}
              height={100}
            />
          </Link>
          <ul className="flex gap-[2rem]">
            <li className="text-2xl ">
              <Link href={`/#about`}> About</Link>
            </li>
            <li className="text-2xl ">
              <Link href={`/#project`}>Project</Link>
            </li>
            <li className="text-2xl ">
              <Link href={`/#blog`}>Blog</Link>
            </li>
            <li className="text-2xl ">
              <Link href={`/#contact`}>Contact</Link>
            </li>
          </ul>
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
