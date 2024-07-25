"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SideBar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <aside className="hidden p-[2rem] shadow-md md:block md:w-72">
        <ul className="sticky top-[2rem]">
          <li className="mb-4 flex items-center justify-between">
            <Link href={`/`} className="rounded-full">
              <Image
                src={`/sharp-royalz-logo.png`}
                alt="Sharp Royalz Logo"
                width={40}
                height={40}
              />
            </Link>
            <button
              type="button"
              className="rounded-full bg-gray p-2 hover:bg-black/20 active:scale-95 dark:bg-card dark:text-white dark:hover:bg-white/20"
              onClick={() => {
                setIsDark(!isDark);
                const htmlElement = document.querySelector("html");
                htmlElement?.classList.toggle("dark");
              }}
            >
              {isDark ? <Moon /> : <Sun />}
            </button>
          </li>
          <li className="">
            <Link className={``} href={`/admin/blogs`}>
              <div
                className={`${
                  pathname === "/admin/blogs" ? "bg-card text-white" : ""
                } w-full rounded-lg p-4 hover:bg-card hover:text-white dark:hover:bg-card dark:hover:text-gray`}
              >
                Blogs
              </div>
            </Link>
          </li>

          <li className="">
            <Link href={`/admin/projects`}>
              <div
                className={`${
                  pathname === "/admin/projects" ? "bg-card text-white" : ""
                } w-full rounded-lg p-4 hover:bg-card hover:text-white dark:hover:bg-card dark:hover:text-gray`}
              >
                Projects
              </div>
            </Link>
          </li>

          <li className="">
            <Link href={`/admin/contacts`}>
              <div
                className={`${
                  pathname === "/admin/contacts" ? "bg-card text-white" : ""
                } w-full rounded-lg p-4 hover:bg-card hover:text-white dark:hover:bg-card dark:hover:text-gray`}
              >
                Contacts
              </div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
