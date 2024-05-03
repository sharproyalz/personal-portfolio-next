"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function Navigation() {
  return (
    <>
      <nav className="px-12 py-[1rem]">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link href={`/`} className="h-[3rem] w-[3rem] rounded-full">
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
          <button
            type="button"
            className="rounded-lg bg-primary px-[1rem] py-[0.5rem] font-bold text-white hover:bg-primary/90 active:scale-95 md:px-[1.5rem]"
          >
            Hire me
          </button>
        </div>
      </nav>
    </>
  );
}
