import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LeftAside() {
  return (
    <aside
      className={`fixed top-0 hidden h-[100vh] w-[80%] border-r-[1px] bg-card p-4 text-[1.5rem] md:static md:col-span-1 md:block md:h-fit md:border-r-2 md:border-gray md:bg-transparent md:pe-[1rem]`}
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-sm active:border active:border-dusty_gray md:hidden"
      >
        <X />
      </button>

      <Link href={`/`} className="h-[3rem] w-[3rem] rounded-full md:hidden">
        <Image
          src={`/sharp-royalz-logo.png`}
          alt="Sharp Royalz Logo"
          width={48}
          height={48}
        />
      </Link>

      <ul className="mt-4 flex flex-col gap-4 text-gray md:hidden">
        <li className="text-2xl hover:text-primary ">
          <Link href={`/#about`}> About</Link>
        </li>
        <li className="text-2xl hover:text-primary ">
          <Link href={`/#project`}>Project</Link>
        </li>
        <li className="text-2xl hover:text-primary ">
          <Link href={`/#blog`}>Blog</Link>
        </li>
        <li className="text-2xl hover:text-primary ">
          <Link href={`/#contact`}>Contact</Link>
        </li>
      </ul>

      <div className="mb-[1rem] mt-[2rem] font-bold md:mt-0 dark:text-gray">
        All of my post
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-primary md:text-base">
          Summary of My Digital Career: A Personal Portfolio Website
        </div>
      </div>
    </aside>
  );
}
