"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({
  setIsOpen = (isOpen: boolean) => {},
}: {
  setIsOpen?: (isOpen: boolean) => void;
}) {
  return (
    <>
      <nav className={`px-4 py-[1rem] md:px-12`}>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden"
          >
            <Menu />
          </button>

          {/* Logo */}
          <Link
            href={`/`}
            className="hidden h-[3rem] w-[3rem] rounded-full md:block"
          >
            <Image
              src={`/sharp-royalz-logo.png`}
              alt="Sharp Royalz Logo"
              width={100}
              height={100}
            />
          </Link>

          {/* List */}
          <ul className="hidden gap-[2rem] md:flex">
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

          {/* Hire Me Button */}
          <Link
            href="https://www.linkedin.com/in/vonn-pactol-718a2a283/"
            target="_blank"
            className="rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white hover:bg-primary/90 active:scale-95 md:px-[1.5rem]"
          >
            Hire me
          </Link>
        </div>
      </nav>
    </>
  );
}
